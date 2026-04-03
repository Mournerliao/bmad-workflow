# BMAD Personal Workflow Plugin Package

This folder is the self-contained Codex plugin package for BMAD Personal Workflow.

## Included Components

- `.codex-plugin/plugin.json`: plugin manifest
- `skills/`: Codex skill entry points
- `references/core/`: workflow references used by the skills

## Install Modes

### Repo-local install

This repository includes a marketplace entry at `../../.agents/plugins/marketplace.json`.

When Codex loads that marketplace, the plugin will appear from:

- `./plugins/bmad-personal-workflow`

### Home-local install

To install outside this repo:

1. Copy this folder to `~/plugins/bmad-personal-workflow`
2. Add an entry to `~/.agents/plugins/marketplace.json`
3. Use `./plugins/bmad-personal-workflow` as the marketplace source path

## Main Skills

- `bmad-help`
- `bmad-quick-dev`
- `bmad-plan`
- `bmad-review`
