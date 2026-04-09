#!/usr/bin/env node

const { spawnSync } = require("child_process");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

function run(cmd, args, allowFailure = false) {
  const result = spawnSync(cmd, args, {
    cwd: repoRoot,
    stdio: "inherit",
  });
  if (!allowFailure && result.status !== 0) {
    process.exit(result.status || 1);
  }
  return result.status || 0;
}

function main() {
  const raw = process.argv[2];
  const releaseType = raw || "patch";
  const skipPublish = process.argv.includes("--no-publish");

  run(process.execPath, ["scripts/check-release.js"]);
  run("npm", ["version", releaseType]);
  run(process.execPath, ["scripts/pack-release.js"]);

  if (skipPublish) {
    console.log("release: skipping npm publish because --no-publish was provided");
    console.log("release: note that npm version requires a clean git working tree.");
    return;
  }

  // Always publish to the official npm registry (ignore user/global mirror registry).
  run("npm", [
    "publish",
    "--access",
    "public",
    "--registry",
    "https://registry.npmjs.org/",
  ]);
}

main();
