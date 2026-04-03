---
name: bmad-quick-dev
description: Run the BMAD solo quick-dev workflow from idea through review by chaining analyst, planner, architect, builder, and reviewer outputs into a compact execution path.
---

# BMAD Quick Dev

Use this skill for an end-to-end solo development request such as:

- a small feature
- a bugfix
- a scoped refactor
- a focused product improvement

## Workflow

Follow the workflow defined in `core/workflows/quick-dev.md`.

Run these stages in order:

1. `analyst` produces `brief`
2. `planner` produces `plan`
3. `architect` produces `solution-outline`
4. `builder` produces `build-checklist`
5. `reviewer` produces `review-report`

## Stage Rules

- keep each stage short and decision-oriented
- if the request is underspecified, add explicit assumptions in `brief`
- if the work is simple, compress outputs instead of expanding ceremony
- if the request is a bugfix, bias toward reproduction clues, root-cause hypotheses, and regression checks

## Required References

- `core/capabilities/quick-dev.md`
- `core/roles/analyst.md`
- `core/roles/planner.md`
- `core/roles/architect.md`
- `core/roles/builder.md`
- `core/roles/reviewer.md`
- `core/rules/global.md`

## Output Contract

Deliver the final response in five clearly labeled sections:

- `brief`
- `plan`
- `solution-outline`
- `build-checklist`
- `review-report`

Use the templates in `core/templates/` when useful, but keep content proportional to the request.
