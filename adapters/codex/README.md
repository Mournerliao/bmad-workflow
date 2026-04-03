# Codex Adapter

This adapter maps the platform-neutral BMAD core into Codex plugin surfaces.

## Host Surface

- Codex plugin package
- Codex skills
- Codex marketplace registration
- Codex plugin manifest source at `adapters/codex/plugin.json`

## Capability Mapping

- `help` -> `bmad-help`
- `quick-dev` -> `bmad-quick-dev`
- `plan` -> `bmad-plan`
- `review` -> `bmad-review`

## Source Of Truth

- `core/capabilities/`
- `core/roles/`
- `core/workflows/`
- `core/templates/`
- `core/rules/`

The installable Codex package in `plugins/bmad-personal-workflow-codex/` is a distribution artifact derived from this adapter and the shared core.
