---
name: bmad-help
description: Explain the BMAD personal workflow plugin, including its solo-development roles, main workflow, outputs, and when to use each BMAD skill entry point.
---

# BMAD Help

Use this skill when the user wants orientation on the BMAD personal workflow plugin itself.

## What To Explain

- the plugin is Codex-first and focused on solo development
- the main workflow is `idea -> clarify -> plan -> build -> review`
- the five roles are `analyst`, `planner`, `architect`, `builder`, and `reviewer`
- the main reusable outputs are `brief`, `plan`, `solution-outline`, `build-checklist`, and `review-report`

## Recommended Sources

- `README.md`
- `core/workflows/quick-dev.md`
- `core/rules/global.md`

## Entry Point Guidance

- recommend `bmad-quick-dev` for end-to-end solo feature or bug work
- recommend `bmad-plan` when the user only wants clarify + planning
- recommend `bmad-review` when the user wants risk analysis, acceptance review, or testing guidance

## Response Style

- keep the explanation concise and practical
- focus on how the user should start
- do not imply slash-command compatibility in v1
