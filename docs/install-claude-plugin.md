# Use With Claude Code

This guide explains how to use the Claude-oriented BMAD plugin package in this repository.

## Plugin Package

The Claude plugin package is:

- `plugins/bmad-personal-workflow-claude/`

It includes:

- `.claude-plugin/plugin.json`
- `skills/`
- `agents/`
- `references/core/`

## What It Provides

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

Claude Code officially supports local plugin testing with `--plugin-dir`.

From the repository root, run:

```bash
claude --plugin-dir ./plugins/bmad-personal-workflow-claude
```

After Claude Code starts, reload plugins if needed:

```text
/reload-plugins
```

## How To Use It

Use the Claude plugin package as the source for your Claude Code setup.

The key pieces are:

- the skills in `plugins/bmad-personal-workflow-claude/skills/`
- the role agents in `plugins/bmad-personal-workflow-claude/agents/`
- the shared references in `plugins/bmad-personal-workflow-claude/references/core/`

Plugin skills are namespaced by the plugin name, so the expected command surface is:

- `/bmad-personal-workflow-claude:bmad-help`
- `/bmad-personal-workflow-claude:bmad-quick-dev`
- `/bmad-personal-workflow-claude:bmad-plan`
- `/bmad-personal-workflow-claude:bmad-review`

## Notes

- this adapter is skills-first
- it does not include a slash-command compatibility layer
- it does not include Claude MCP integration in the initial adaptation

For implementation details of the adapter itself, see [claude-adapter.md](./claude-adapter.md).
