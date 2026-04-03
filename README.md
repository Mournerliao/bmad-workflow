# BMAD Personal Workflow Plugin

BMAD Personal Workflow Plugin is a Codex-first adaptation of the BMAD method for solo builders.

This repository separates the workflow into:

- `core/`: platform-agnostic workflow assets
- `codex/`: Codex plugin manifest and skill adapters

Version 1 focuses on a single lightweight path:

`idea -> clarify -> plan -> build -> review`

## Goals

- Give solo developers a repeatable workflow without heavy process overhead
- Keep outputs short, structured, and execution-oriented
- Preserve clear handoffs between roles instead of letting one prompt do everything
- Stay portable so the same BMAD core can later be adapted to Claude Code or another host

## Core Roles

- `analyst`: clarify the problem, scope, constraints, and success criteria
- `planner`: turn the clarified brief into an actionable execution plan
- `architect`: shape the solution, boundaries, interfaces, and risks
- `builder`: convert the plan into implementation guidance and build steps
- `reviewer`: inspect completeness, risks, regressions, and test gaps

Role specs live in [core/agents/analyst.md](./core/agents/analyst.md), [core/agents/planner.md](./core/agents/planner.md), [core/agents/architect.md](./core/agents/architect.md), [core/agents/builder.md](./core/agents/builder.md), and [core/agents/reviewer.md](./core/agents/reviewer.md).

## Main Workflow

The v1 workflow is defined in [core/workflows/quick-dev.md](./core/workflows/quick-dev.md).

Expected outputs:

- `brief`
- `plan`
- `solution-outline`
- `build-checklist`
- `review-report`

Templates for the main reusable documents live in:

- [core/templates/brief.md](./core/templates/brief.md)
- [core/templates/plan.md](./core/templates/plan.md)
- [core/templates/solution-outline.md](./core/templates/solution-outline.md)
- [core/templates/review-report.md](./core/templates/review-report.md)

Global workflow rules live in [core/rules/global.md](./core/rules/global.md).

## Codex Integration

The Codex plugin adapter lives under `codex/`.

Current skill entry points:

- `bmad-help`: explain the plugin, roles, workflow, and entry points
- `bmad-quick-dev`: run the full solo workflow
- `bmad-plan`: stop after clarify and plan
- `bmad-review`: focus on review and risk analysis

The plugin manifest is at [codex/.codex-plugin/plugin.json](./codex/.codex-plugin/plugin.json).

## Usage Notes

This v1 plugin does not implement slash-command compatibility. It preserves the same capability boundaries as `/bmad-help` or `/bmad-quick-dev`, but exposes them as Codex skills first.

The workflow is intentionally lightweight:

- It assumes a solo developer
- It does not model release governance or team coordination
- It prefers short structured outputs over long formal documents

## Future Direction

Likely next steps:

- add a Claude Code adapter that maps the same BMAD core into slash commands and subagents
- add optional MCP prompts for stronger structured routing
- add workflow variants for bugfix, feature spike, and refactor-heavy work
