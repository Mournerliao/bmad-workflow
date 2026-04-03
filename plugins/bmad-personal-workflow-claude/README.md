# BMAD Personal Workflow Claude Plugin

This folder is the Claude-oriented plugin package for BMAD Personal Workflow.

It is derived from the shared `core/` layer and the Claude adapter.

## Included Components

- `.claude-plugin/plugin.json`: Claude plugin manifest
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

## Local Testing

Run Claude Code with:

```bash
claude --plugin-dir ./plugins/bmad-personal-workflow-claude
```

Expected skill names are namespaced by the plugin name, for example:

- `/bmad-personal-workflow-claude:bmad-help`
- `/bmad-personal-workflow-claude:bmad-quick-dev`

## Notes

- this plugin follows the current skills-first Claude adapter strategy
- it does not include a slash-command compatibility layer
- it does not include Claude MCP integration in the initial adaptation
