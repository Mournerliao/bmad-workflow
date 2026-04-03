# Claude Adapter

The Claude adapter maps BMAD capabilities to Claude Code skills and subagents.

## Current Design Choices

- skills-first adaptation
- no slash-command compatibility layer
- no Claude MCP integration in the first adaptation

## Current Surface

Skills:

- `bmad-help`
- `bmad-quick-dev`
- `bmad-plan`
- `bmad-review`

Subagents:

- `analyst`
- `planner`
- `architect`
- `builder`
- `reviewer`

## Source Layout

- adapter source: `adapters/claude/`
- Claude distribution bundle: `plugins/bmad-personal-workflow-claude/`

## Official Alignment

This adapter follows Claude Code's current recommended direction:

- use skills as the primary reusable workflow surface
- use subagents for specialized role behavior
- avoid building a legacy commands wrapper unless there is a concrete compatibility need
