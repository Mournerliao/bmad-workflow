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
      "bmad-personal-workflow|plugins/bmad-personal-workflow|bmad-personal-workflow-codex|bmad-personal-workflow-claude|bmad-personal-",
      "README.md",
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
  if (!pkg.bin || pkg.bin["mourner-bmad-workflow"] !== "installer/index.js") {
    fail("package bin.mourner-bmad-workflow must point to installer/index.js");
  }

  [
    "README.md",
    "LICENSE",
    "installer/index.js",
    "customize/agents/core-bmad-master.customize.yaml",
    "custom-content/modules/personal-workflow/module.yaml",
    "plugins/mourner-bmad-workflow-claude/.claude-plugin/plugin.json",
    "plugins/mourner-bmad-workflow-codex/.codex-plugin/plugin.json",
    "plugins/mourner-bmad-workflow-cursor/.cursor-plugin/plugin.json",
    "plugins/mourner-bmad-workflow-cursor/commands/bmad-help.md",
    "plugins/mourner-bmad-workflow-cursor/commands/bmad-code-review.md",
    "plugins/mourner-bmad-workflow-cursor/commands/bmad-generate-project-context.md",
    "plugins/mourner-bmad-workflow-cursor/commands/bmad-quick-dev.md",
    "plugins/mourner-bmad-workflow-cursor/commands/bmad-brainstorming.md",
    "adapters/codex/marketplace.local.example.json",
    "docs/cursor-adapter.md",
    "docs/install-cursor-plugin.md",
    "docs/releasing.md",
  ].forEach(assertExists);

  const claudePlugin = readJson("plugins/mourner-bmad-workflow-claude/.claude-plugin/plugin.json");
  const codexPlugin = readJson("plugins/mourner-bmad-workflow-codex/.codex-plugin/plugin.json");
  const cursorPlugin = readJson("plugins/mourner-bmad-workflow-cursor/.cursor-plugin/plugin.json");

  if (claudePlugin.name !== "mourner-bmad-workflow-claude") {
    fail(`unexpected Claude plugin name: ${claudePlugin.name}`);
  }
  if (codexPlugin.name !== "mourner-bmad-workflow-codex") {
    fail(`unexpected Codex plugin name: ${codexPlugin.name}`);
  }
  if (cursorPlugin.name !== "mourner-bmad-workflow-cursor") {
    fail(`unexpected Cursor plugin name: ${cursorPlugin.name}`);
  }

  const marketplaceExample = readJson("adapters/codex/marketplace.local.example.json");
  const examplePlugin = marketplaceExample.plugins && marketplaceExample.plugins[0];
  if (!examplePlugin || examplePlugin.name !== "mourner-bmad-workflow-codex") {
    fail("adapters/codex/marketplace.local.example.json must list mourner-bmad-workflow-codex");
  }
  if (examplePlugin.source.path !== "./plugins/mourner-bmad-workflow-codex") {
    fail("unexpected plugin path in marketplace.local.example.json");
  }

  const helpOutput = runNode(["installer/index.js", "--help"]);
  if (!helpOutput.includes("mourner-bmad-workflow install")) {
    fail("CLI help output does not include install command");
  }
  if (!helpOutput.includes("--preset <minimal|full>")) {
    fail("CLI help output does not include preset help");
  }
  if (!helpOutput.includes("--target <claude|codex|cursor|both>")) {
    fail("CLI help output does not include cursor target help");
  }

  if (pkg.scripts["install:cursor"] !== "node installer/index.js install --target cursor --directory .") {
    fail("package script install:cursor is missing or incorrect");
  }
  if (pkg.scripts["generate:cursor"] !== "node installer/index.js generate --target cursor --directory .") {
    fail("package script generate:cursor is missing or incorrect");
  }

  const installerSource = fs.readFileSync(path.join(repoRoot, "installer", "index.js"), "utf8");
  if (!installerSource.includes('"bmad-help"')) {
    fail("installer is missing the default bmad-help preset entry");
  }
  if (!installerSource.includes('"bmad-code-review"')) {
    fail("installer is missing the default bmad-code-review preset entry");
  }
  if (!installerSource.includes('"bmad-generate-project-context"')) {
    fail("installer is missing the default bmad-generate-project-context preset entry");
  }
  if (!installerSource.includes('"bmad-quick-dev"')) {
    fail("installer is missing the default bmad-quick-dev preset entry");
  }
  if (!installerSource.includes('"bmad-brainstorming"')) {
    fail("installer is missing the default bmad-brainstorming preset entry");
  }

  ensureNoLegacyNames();
  console.log("release-check: ok");
}

main();
