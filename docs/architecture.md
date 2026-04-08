# Architecture

This repository is organized as an official-BMAD wrapper rather than a standalone workflow implementation.

## Layers

### `installer/`

Owns orchestration:

- run official `npx bmad-method install`
- inject personal custom content
- sync `.customize.yaml`
- regenerate Claude/Codex outputs

### `customize/`

Owns update-safe overrides copied into `_bmad/_config/agents/`.

### `custom-content/`

Owns the add-on module passed through `--custom-content`.

### `adapters/`

Owns platform packaging rules only:

- `adapters/claude/`
- `adapters/codex/`

### `plugins/`

Contains generated or example local-loadable plugin outputs:

- `plugins/mourner-bmad-workflow-claude/`
- `plugins/mourner-bmad-workflow-codex/`

## Architectural Rules

- Do not add a new repo-local BMAD core layer.
- Prefer `.customize.yaml` for behavior changes and `custom-content/` for installation and packaging integration.
- Keep Codex and Claude adapters thin and regeneration-friendly.
