# Use With Claude Code

This guide explains how to use the Claude-oriented BMAD adapter bundle in this repository.

## Bundle

The Claude adapter bundle is:

- `plugins/bmad-personal-workflow-claude/`

It includes:

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

## How To Use It

Use the Claude-oriented bundle as the source material for your Claude Code setup.

The key pieces are:

- the skills in `plugins/bmad-personal-workflow-claude/skills/`
- the role agents in `plugins/bmad-personal-workflow-claude/agents/`
- the shared references in `plugins/bmad-personal-workflow-claude/references/core/`

## Notes

- this adapter is skills-first
- it does not include a slash-command compatibility layer
- it does not include Claude MCP integration in the initial adaptation
- it is not documented here as a formal installable plugin package with a host-specific plugin manifest

For implementation details of the adapter itself, see [claude-adapter.md](./claude-adapter.md).
