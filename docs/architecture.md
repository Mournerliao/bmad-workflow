# Architecture

This repository is organized as a platform-neutral BMAD core with host-specific adapters and checked-in distribution artifacts.

## Layers

### `core/`

Shared source of truth for:

- roles
- workflows
- templates
- rules
- capabilities

This layer must remain host-neutral.

### `adapters/`

Host-specific mappings that translate the core into a platform surface.

Current adapters:

- `adapters/codex/`
- `adapters/claude/`

Each adapter defines:

- capability name to host entry name
- role mapping to host agent model
- orchestration guidance for that host

### `plugins/`

Checked-in host artifacts derived from the shared core and adapter layers.

Current distributions:

- `plugins/bmad-personal-workflow-codex/` as the Codex installable package
- `plugins/bmad-personal-workflow-claude/` as the Claude installable plugin package

These should be derived from `core/` plus the appropriate adapter.

## Architectural Rules

- `core/` must not mention `.codex-plugin`, `.claude`, slash commands, or host-specific namespaces.
- `adapters/` must consume `core/` and should not depend on each other.
- `plugins/` are deliverables, not the single source of truth.
