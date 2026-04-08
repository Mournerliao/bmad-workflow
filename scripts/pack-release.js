#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const cacheDir = path.join(repoRoot, ".npm-cache");
const packOutputDir = path.join(repoRoot, ".release-pack");

function run(cmd, args) {
  const result = spawnSync(cmd, args, {
    cwd: repoRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    console.error(result.stdout);
    console.error(result.stderr);
    process.exit(result.status || 1);
  }
  return result.stdout.trim();
}

function extractTarballName(output) {
  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const tgzLine = [...lines].reverse().find((line) => line.endsWith(".tgz"));
  if (!tgzLine) {
    console.error(output);
    process.exit(1);
  }
  return tgzLine;
}

function main() {
  for (const file of fs.readdirSync(repoRoot)) {
    if (file.startsWith("mourner-bmad-workflow-") && file.endsWith(".tgz")) {
      fs.rmSync(path.join(repoRoot, file), { force: true });
    }
  }
  fs.mkdirSync(cacheDir, { recursive: true });
  fs.rmSync(packOutputDir, { recursive: true, force: true });
  fs.mkdirSync(packOutputDir, { recursive: true });
  const output = run("npm", ["pack", "--cache", cacheDir, "--pack-destination", packOutputDir]);
  const packed = extractTarballName(output);
  console.log(`pack-release: created ${path.join(packOutputDir, packed)}`);
}

main();
