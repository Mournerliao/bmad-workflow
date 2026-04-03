# BMAD Personal Workflow Plugin Package

This folder is the self-contained Codex plugin package for BMAD Personal Workflow.

It is a distribution artifact derived from the shared `core/` layer and the Codex adapter.

## Included Components

- `.codex-plugin/plugin.json`: plugin manifest
- `skills/`: Codex skill entry points
- `references/core/`: packaged copy of the shared workflow core

## Install Modes

### Repo-local install

This repository includes a marketplace entry at `../../.agents/plugins/marketplace.json`.

When Codex loads that marketplace, the plugin will appear from:

- `./plugins/bmad-personal-workflow-codex`

### Home-local install

To install outside this repo:

1. Copy this folder to `~/plugins/bmad-personal-workflow-codex`
2. Add an entry to `~/.agents/plugins/marketplace.json`
3. Use `./plugins/bmad-personal-workflow-codex` as the marketplace source path

## Main Skills

- `bmad-help`
- `bmad-quick-dev`
- `bmad-plan`
- `bmad-review`
