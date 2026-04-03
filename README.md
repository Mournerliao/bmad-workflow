# BMAD Personal Workflow Plugin

BMAD Personal Workflow Plugin is a Codex plugin for solo development workflows inspired by BMAD.

It packages a small set of role-based skills that guide work through:

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

## Plugin Package

The installable plugin package is:

- [plugins/bmad-personal-workflow](./plugins/bmad-personal-workflow)

The plugin manifest is:

- [plugins/bmad-personal-workflow/.codex-plugin/plugin.json](./plugins/bmad-personal-workflow/.codex-plugin/plugin.json)

The repo-local marketplace entry is:

- [`.agents/plugins/marketplace.json`](./.agents/plugins/marketplace.json)

## Installation

This project is distributed as a folder-based Codex plugin.

The full installation guide is here:

- [docs/install-codex-plugin.md](./docs/install-codex-plugin.md)

In short, users can either:

1. use this repository directly with the included marketplace file
2. copy `plugins/bmad-personal-workflow/` into a local plugins directory and register it in a marketplace file

## Usage

Use the plugin through its Codex skills:

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

This plugin currently focuses on:

- Codex skill-based usage
- personal development workflows
- compact, execution-oriented guidance

It does not currently include:

- Claude Code command adapters
- team collaboration workflows
- release governance flows

## Workflow References

The packaged workflow references live under:

- [plugins/bmad-personal-workflow/references/core](./plugins/bmad-personal-workflow/references/core)

Key references:

- [quick-dev workflow](./plugins/bmad-personal-workflow/references/core/workflows/quick-dev.md)
- [role definitions](./plugins/bmad-personal-workflow/references/core/agents)
- [templates](./plugins/bmad-personal-workflow/references/core/templates)
- [global rules](./plugins/bmad-personal-workflow/references/core/rules/global.md)

## Development

Contributor-focused setup notes are in:

- [docs/development.md](./docs/development.md)
