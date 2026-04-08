#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");

function fail(message) {
  console.error(`release-check: ${message}`);
  process.exit(1);
}

function assertExists(relativePath) {
  const fullPath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(fullPath)) {
    fail(`missing required path: ${relativePath}`);
  }
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), "utf8"));
}

function runNode(args) {
  const result = spawnSync(process.execPath, args, {
    cwd: repoRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    fail(`command failed: node ${args.join(" ")}\n${result.stderr || result.stdout}`);
  }
  return result.stdout;
}

function ensureNoLegacyNames() {
  const result = spawnSync(
    "rg",
    [
      "-n",
      "bmad-personal-workflow|plugins/bmad-personal-workflow|bmad-personal-workflow-codex|bmad-personal-workflow-claude",
      "README.md",
      ".agents/plugins/marketplace.json",
      "adapters",
      "docs",
      "plugins",
      "custom-content",
      "installer",
      "package.json",
      "package-lock.json",
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
    },
  );

  if (result.status === 0 && result.stdout.trim()) {
    fail(`legacy package names still present:\n${result.stdout}`);
  }
  if (result.status !== 1 && result.status !== 0) {
    fail(`rg failed while checking legacy names:\n${result.stderr}`);
  }
}

function main() {
  const pkg = readJson("package.json");
  if (pkg.name !== "mourner-bmad-workflow") {
    fail(`unexpected package name: ${pkg.name}`);
  }
  if (pkg.license !== "MIT") {
    fail(`package license must be MIT, got ${pkg.license}`);
  }
  if (!pkg.bin || pkg.bin["mourner-bmad-workflow"] !== "./installer/index.js") {
    fail("package bin.mourner-bmad-workflow must point to ./installer/index.js");
  }

  [
    "README.md",
    "LICENSE",
    "installer/index.js",
    "customize/agents/core-bmad-master.customize.yaml",
    "custom-content/modules/personal-workflow/module.yaml",
    "plugins/mourner-bmad-workflow-claude/.claude-plugin/plugin.json",
    "plugins/mourner-bmad-workflow-codex/.codex-plugin/plugin.json",
    ".agents/plugins/marketplace.json",
    "docs/releasing.md",
  ].forEach(assertExists);

  const claudePlugin = readJson("plugins/mourner-bmad-workflow-claude/.claude-plugin/plugin.json");
  const codexPlugin = readJson("plugins/mourner-bmad-workflow-codex/.codex-plugin/plugin.json");
  const marketplace = readJson(".agents/plugins/marketplace.json");

  if (claudePlugin.name !== "mourner-bmad-workflow-claude") {
    fail(`unexpected Claude plugin name: ${claudePlugin.name}`);
  }
  if (codexPlugin.name !== "mourner-bmad-workflow-codex") {
    fail(`unexpected Codex plugin name: ${codexPlugin.name}`);
  }
  const marketPlugin = marketplace.plugins && marketplace.plugins[0];
  if (!marketPlugin || marketPlugin.name !== "mourner-bmad-workflow-codex") {
    fail("marketplace must expose mourner-bmad-workflow-codex");
  }
  if (marketPlugin.source.path !== "./plugins/mourner-bmad-workflow-codex") {
    fail(`unexpected marketplace path: ${marketPlugin.source.path}`);
  }

  const helpOutput = runNode(["installer/index.js", "--help"]);
  if (!helpOutput.includes("mourner-bmad-workflow install")) {
    fail("CLI help output does not include install command");
  }

  ensureNoLegacyNames();
  console.log("release-check: ok");
}

main();
