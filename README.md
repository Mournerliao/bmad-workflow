# BMAD Personal Workflow Plugin

BMAD Personal Workflow Plugin is a Codex-first adaptation of the BMAD method for solo builders.

This repository is now packaged as an installable Codex plugin.

The distributable plugin lives in:

- `plugins/bmad-personal-workflow/`

The repo-local marketplace entry lives in:

- `.agents/plugins/marketplace.json`

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

Role specs live under [plugins/bmad-personal-workflow/references/core/agents/](./plugins/bmad-personal-workflow/references/core/agents/).

## Main Workflow

The v1 workflow is defined in [plugins/bmad-personal-workflow/references/core/workflows/quick-dev.md](./plugins/bmad-personal-workflow/references/core/workflows/quick-dev.md).

Expected outputs:

- `brief`
- `plan`
- `solution-outline`
- `build-checklist`
- `review-report`

Templates for the main reusable documents live in:

- [plugins/bmad-personal-workflow/references/core/templates/brief.md](./plugins/bmad-personal-workflow/references/core/templates/brief.md)
- [plugins/bmad-personal-workflow/references/core/templates/plan.md](./plugins/bmad-personal-workflow/references/core/templates/plan.md)
- [plugins/bmad-personal-workflow/references/core/templates/solution-outline.md](./plugins/bmad-personal-workflow/references/core/templates/solution-outline.md)
- [plugins/bmad-personal-workflow/references/core/templates/review-report.md](./plugins/bmad-personal-workflow/references/core/templates/review-report.md)

Global workflow rules live in [plugins/bmad-personal-workflow/references/core/rules/global.md](./plugins/bmad-personal-workflow/references/core/rules/global.md).

## Codex Integration

The canonical plugin package lives under `plugins/bmad-personal-workflow/`.

Current skill entry points:

- `bmad-help`: explain the plugin, roles, workflow, and entry points
- `bmad-quick-dev`: run the full solo workflow
- `bmad-plan`: stop after clarify and plan
- `bmad-review`: focus on review and risk analysis

The plugin manifest is at [plugins/bmad-personal-workflow/.codex-plugin/plugin.json](./plugins/bmad-personal-workflow/.codex-plugin/plugin.json).

## Installation And Distribution

According to the local Codex plugin scaffolding spec, a distributable plugin is a folder-based package, not an npm package.

For this repo that means:

- the installable plugin is the folder [plugins/bmad-personal-workflow](./plugins/bmad-personal-workflow)
- Codex discovers it through [`.agents/plugins/marketplace.json`](./.agents/plugins/marketplace.json)
- the marketplace points to `./plugins/bmad-personal-workflow`

This setup supports two distribution modes:

1. repo-local
   Use this repository directly with its included marketplace file.
2. home-local
   Copy `plugins/bmad-personal-workflow` to `~/plugins/bmad-personal-workflow` and add the same entry shape to `~/.agents/plugins/marketplace.json`.

## Usage Notes

This v1 plugin does not implement slash-command compatibility. It preserves the same capability boundaries as `/bmad-help` or `/bmad-quick-dev`, but exposes them as Codex skills first.

The workflow is intentionally lightweight:

- It assumes a solo developer
- It does not model release governance or team coordination
- It prefers short structured outputs over long formal documents

## Git Conventions

This repository uses a lightweight modern git commit setup:

- `.gitattributes` enforces consistent line endings across platforms
- `commitlint` enforces Conventional Commits
- `husky` runs commit message validation through the `commit-msg` hook

Examples:

- `feat: add bugfix workflow variant`
- `fix: correct plugin skill path`
- `docs: clarify codex plugin usage`

## Future Direction

Likely next steps:

- add a Claude Code adapter that maps the same BMAD core into slash commands and subagents
- add optional MCP prompts for stronger structured routing
- add workflow variants for bugfix, feature spike, and refactor-heavy work
