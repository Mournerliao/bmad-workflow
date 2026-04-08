#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const supportedTargets = new Set(["claude", "codex", "both"]);
const commands = new Set(["install", "generate", "verify"]);
const pluginNames = {
  claude: "mourner-bmad-workflow-claude",
  codex: "mourner-bmad-workflow-codex",
};
const presets = {
  minimal: [
    "bmad-help",
    "bmad-code-review",
    "bmad-generate-project-context",
  ],
  full: null,
};

function printHelp() {
  console.log(`mourner-bmad-workflow

Official BMAD enhancement layer for personal customize content and Claude/Codex adapters.

Usage:
  mourner-bmad-workflow install [options]
  mourner-bmad-workflow generate [options]
  mourner-bmad-workflow verify [options]

Commands:
  install   Run official BMAD install, sync customize files, and generate adapter outputs
  generate  Skip official install and regenerate local Claude/Codex wrapper outputs
  verify    Dry-run the install flow and print planned actions

Options:
  --target <claude|codex|both>
  --preset <minimal|full>
  --directory <path>
  --modules <csv>
  --output-folder <path>
  --user-name <name>
  --communication-language <lang>
  --document-output-language <lang>
  --dry-run
  --debug
`);
}

function parseArgs(argv) {
  const command = argv[0];
  if (!command || command === "--help" || command === "-h") {
    printHelp();
    process.exit(0);
  }
  if (!commands.has(command)) {
    throw new Error(`Unknown command "${command}". Use install, generate, or verify.`);
  }

  const options = {
    command,
    target: "both",
    preset: "minimal",
    directory: process.cwd(),
    modules: "bmm",
    action: "install",
    dryRun: false,
    debug: false,
    skipInstall: false,
    outputFolder: "_bmad-output",
    userName: "",
    communicationLanguage: "",
    documentOutputLanguage: "",
  };

  for (let i = 1; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--debug") {
      options.debug = true;
      continue;
    }
    if (arg === "--skip-install") {
      options.skipInstall = true;
      continue;
    }

    const next = argv[i + 1];
    if (!next) {
      throw new Error(`Missing value for ${arg}`);
    }

    if (arg === "--target") {
      options.target = next;
    } else if (arg === "--preset") {
      options.preset = next;
    } else if (arg === "--directory") {
      options.directory = path.resolve(next);
    } else if (arg === "--modules") {
      options.modules = next;
    } else if (arg === "--action") {
      options.action = next;
    } else if (arg === "--output-folder") {
      options.outputFolder = next;
    } else if (arg === "--user-name") {
      options.userName = next;
    } else if (arg === "--communication-language") {
      options.communicationLanguage = next;
    } else if (arg === "--document-output-language") {
      options.documentOutputLanguage = next;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
    i += 1;
  }

  if (!supportedTargets.has(options.target)) {
    throw new Error(`Unsupported target "${options.target}". Use claude, codex, or both.`);
  }
  if (!Object.prototype.hasOwnProperty.call(presets, options.preset)) {
    throw new Error(`Unsupported preset "${options.preset}". Use minimal or full.`);
  }

  if (options.command === "generate") {
    options.skipInstall = true;
  }
  if (options.command === "verify") {
    options.dryRun = true;
  }

  return options;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
}

function copyDir(source, destination) {
  if (!fs.existsSync(source)) {
    return;
  }
  ensureDir(path.dirname(destination));
  fs.cpSync(source, destination, { recursive: true });
}

function listDirectories(baseDir) {
  if (!fs.existsSync(baseDir)) {
    return [];
  }
  return fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function buildInstallArgs(options, action) {
  const args = [
    "bmad-method",
    "install",
    "--directory",
    options.directory,
    "--modules",
    options.modules,
    "--tools",
    "claude-code",
    "--custom-content",
    path.join(repoRoot, "custom-content", "modules", "personal-workflow"),
    "--output-folder",
    options.outputFolder,
    "--action",
    action,
    "--yes",
  ];

  if (options.userName) {
    args.push("--user-name", options.userName);
  }
  if (options.communicationLanguage) {
    args.push("--communication-language", options.communicationLanguage);
  }
  if (options.documentOutputLanguage) {
    args.push("--document-output-language", options.documentOutputLanguage);
  }
  if (options.debug) {
    args.push("--debug");
  }

  return args;
}

function runCommand(bin, args, dryRun) {
  const display = [bin, ...args].join(" ");
  if (dryRun) {
    console.log(`[dry-run] ${display}`);
    return;
  }

  const result = spawnSync(bin, args, {
    cwd: repoRoot,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    throw new Error(`Command failed (${result.status}): ${display}`);
  }
}

function syncCustomize(options) {
  const sourceDir = path.join(repoRoot, "customize", "agents");
  const targetDir = path.join(options.directory, "_bmad", "_config", "agents");
  const customizeFiles = fs
    .readdirSync(sourceDir)
    .filter((file) => file.endsWith(".customize.yaml"))
    .sort();

  console.log(`Syncing ${customizeFiles.length} customize files to ${targetDir}`);
  if (options.dryRun) {
    customizeFiles.forEach((file) => console.log(`[dry-run] copy ${file}`));
    return;
  }

  ensureDir(targetDir);
  for (const file of customizeFiles) {
    fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
  }
}

function filterSkills(officialSkills, presetName) {
  const allowList = presets[presetName];
  if (!allowList) {
    return officialSkills;
  }

  if (officialSkills.length === 0) {
    console.warn("warning: no upstream skills were found; skipping preset enforcement during dry generation");
    return allowList;
  }

  const filtered = [];
  const missing = [];

  for (const skill of allowList) {
    if (officialSkills.includes(skill)) {
      filtered.push(skill);
    } else {
      missing.push(skill);
    }
  }

  for (const skill of missing) {
    console.warn(`warning: skill "${skill}" was not generated by the upstream BMAD install`);
  }

  if (filtered.length === 0) {
    throw new Error(
      `No skills matched preset "${presetName}". Check your BMAD version or installed modules.`,
    );
  }

  return filtered;
}

function mergeSkills({ officialSkillsDir, destinationDir, dryRun, presetName }) {
  const officialSkills = listDirectories(officialSkillsDir);
  const selectedSkills = filterSkills(officialSkills, presetName);

  console.log(
    `Generating ${destinationDir} with ${selectedSkills.length} selected official skills (preset: ${presetName})`,
  );

  if (dryRun) {
    selectedSkills.forEach((skill) => console.log(`[dry-run] selected skill ${skill}`));
    return;
  }

  removeDir(destinationDir);
  ensureDir(destinationDir);

  for (const skill of selectedSkills) {
    copyDir(path.join(officialSkillsDir, skill), path.join(destinationDir, skill));
  }
}

function generateClaudePlugin(options) {
  mergeSkills({
    officialSkillsDir: path.join(options.directory, ".claude", "skills"),
    destinationDir: path.join(repoRoot, "plugins", pluginNames.claude, "skills"),
    dryRun: options.dryRun,
    presetName: options.preset,
  });
}

function generateCodexPlugin(options) {
  mergeSkills({
    officialSkillsDir: path.join(options.directory, ".claude", "skills"),
    destinationDir: path.join(repoRoot, "plugins", pluginNames.codex, "skills"),
    dryRun: options.dryRun,
    presetName: options.preset,
  });
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (!options.skipInstall) {
    runCommand("npx", buildInstallArgs(options, options.action), options.dryRun);
    syncCustomize(options);
    runCommand("npx", buildInstallArgs(options, "compile-agents"), options.dryRun);
  } else {
    console.log("Skipping official BMAD install; generating adapter outputs only.");
  }

  if (options.target === "claude" || options.target === "both") {
    generateClaudePlugin(options);
  }
  if (options.target === "codex" || options.target === "both") {
    generateCodexPlugin(options);
  }

  console.log("Done.");
}

main();
