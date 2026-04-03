# Codex Adapter

The Codex adapter maps BMAD capabilities to Codex skills and the Codex plugin package.

## Current Surface

- `bmad-help`
- `bmad-quick-dev`
- `bmad-plan`
- `bmad-review`

## Source Layout

- adapter source: `adapters/codex/`
- distribution package: `plugins/bmad-personal-workflow-codex/`

## Packaging Notes

The Codex package includes:

- `.codex-plugin/plugin.json`
- `skills/`
- `references/core/`

The package keeps a copy of the shared core under `references/core/` so it remains self-contained when distributed.
