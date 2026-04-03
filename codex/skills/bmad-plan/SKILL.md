---
name: bmad-plan
description: Run the BMAD planning path by clarifying the request and producing an execution plan plus a lightweight technical solution outline without entering build or review.
---

# BMAD Plan

Use this skill when the user wants structure before implementation.

## Workflow

Run only these stages:

1. `analyst` produces `brief`
2. `planner` produces `plan`
3. `architect` produces `solution-outline`

Stop after planning. Do not generate `build-checklist` or `review-report` unless the user explicitly expands the request.

## Required References

- `core/agents/analyst.md`
- `core/agents/planner.md`
- `core/agents/architect.md`
- `core/workflows/quick-dev.md`
- `core/rules/global.md`

## Output Contract

Return exactly three labeled sections:

- `brief`
- `plan`
- `solution-outline`

## Style Rules

- optimize for decision clarity
- avoid implementation detail unless needed to lock the approach
- keep outputs compact and skimmable
