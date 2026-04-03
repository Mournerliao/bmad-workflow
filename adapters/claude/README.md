# Claude Adapter

This adapter maps the platform-neutral BMAD core into Claude Code skills and subagents.

## Host Surface

- Claude Code skills
- Claude Code subagents

This adapter intentionally does not implement legacy slash-command wrappers.

## Capability Mapping

- `help` -> `bmad-help`
- `quick-dev` -> `bmad-quick-dev`
- `plan` -> `bmad-plan`
- `review` -> `bmad-review`

## Role Mapping

Claude subagents map directly to BMAD roles:

- `analyst`
- `planner`
- `architect`
- `builder`
- `reviewer`

## Source Of Truth

- `core/capabilities/`
- `core/roles/`
- `core/workflows/`
- `core/templates/`
- `core/rules/`

The Claude distribution bundle in `plugins/bmad-personal-workflow-claude/` is a deliverable derived from this adapter and the shared core.
