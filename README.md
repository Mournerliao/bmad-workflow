# BMAD Personal Workflow

BMAD Personal Workflow is a platform-neutral personal development workflow inspired by BMAD.

It currently ships with:

- a Codex plugin distribution
- a Claude Code adapter
- a shared workflow core for future platform adapters

The workflow guides work through:

`idea -> clarify -> plan -> build -> review`

## Current Features

This plugin currently provides four skill entry points:

- `bmad-help`
- `bmad-quick-dev`
- `bmad-plan`
- `bmad-review`

The workflow is designed for:

- solo development
- lightweight structured outputs
- clear role handoffs across analysis, planning, build guidance, and review

Current outputs include:

- `brief`
- `plan`
- `solution-outline`
- `build-checklist`
- `review-report`

## Platform Artifacts

Codex installable package:

- [plugins/bmad-personal-workflow-codex](./plugins/bmad-personal-workflow-codex)
- [plugins/bmad-personal-workflow-codex/.codex-plugin/plugin.json](./plugins/bmad-personal-workflow-codex/.codex-plugin/plugin.json)
- [`.agents/plugins/marketplace.json`](./.agents/plugins/marketplace.json)

Claude plugin package:

- [plugins/bmad-personal-workflow-claude](./plugins/bmad-personal-workflow-claude)

Claude plugin manifest:

- [plugins/bmad-personal-workflow-claude/.claude-plugin/plugin.json](./plugins/bmad-personal-workflow-claude/.claude-plugin/plugin.json)

## Platform Guides

- [Install for Codex](./docs/install-codex-plugin.md)
- [Use with Claude Code](./docs/install-claude-plugin.md)

## Usage

Current workflow entry points:

- `bmad-help` for plugin orientation
- `bmad-quick-dev` for the full personal workflow
- `bmad-plan` for clarify + planning only
- `bmad-review` for review, risk, and validation guidance

### Which Skill Should I Use?

- `bmad-help`
  Use this when you want to understand what the plugin does, what roles it uses, and which BMAD skill to start with.

- `bmad-quick-dev`
  Use this when you want to take a feature, bugfix, or scoped change all the way through the personal workflow from idea to review.

- `bmad-plan`
  Use this when you want to clarify a request and produce a plan first, without going into build or review yet.

- `bmad-review`
  Use this when you already have a plan, patch, or implementation and want to inspect risks, regressions, and testing gaps.

## Scope

This project currently focuses on:

- Codex and Claude Code adapters
- personal development workflows
- compact, execution-oriented guidance

## Workflow References

The shared source of truth lives under:

- [core](./core)

Key references:

- [quick-dev workflow](./core/workflows/quick-dev.md)
- [role definitions](./core/roles)
- [templates](./core/templates)
- [global rules](./core/rules/global.md)

## Development

Contributor-focused setup notes are in:

- [docs/development.md](./docs/development.md)
- [docs/architecture.md](./docs/architecture.md)
- [docs/codex-adapter.md](./docs/codex-adapter.md)
- [docs/claude-adapter.md](./docs/claude-adapter.md)
