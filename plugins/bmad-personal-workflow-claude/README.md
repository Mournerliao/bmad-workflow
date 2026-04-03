# BMAD Personal Workflow Claude Bundle

This folder is the Claude-oriented distribution bundle for BMAD Personal Workflow.

It is derived from the shared `core/` layer and the Claude adapter.

## Included Components

- `skills/`: Claude Code skill entry points
- `agents/`: Claude Code subagents for BMAD roles
- `references/core/`: packaged copy of the shared workflow core

## Current Surface

Skills:

- `bmad-help`
- `bmad-quick-dev`
- `bmad-plan`
- `bmad-review`

Agents:

- `analyst`
- `planner`
- `architect`
- `builder`
- `reviewer`

## Notes

- this bundle follows the current skills-first Claude adapter strategy
- it does not include a slash-command compatibility layer
- it does not include Claude MCP integration in the initial adaptation
