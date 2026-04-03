---
name: bmad-quick-dev
description: Run the full BMAD personal workflow for a feature, bugfix, or scoped change from clarification through review.
disable-model-invocation: true
---

# BMAD Quick Dev

Use this skill for an end-to-end request that should move through the full BMAD personal workflow.

## References

- `references/core/capabilities/quick-dev.md`
- `references/core/workflows/quick-dev.md`
- `references/core/templates/brief.md`
- `references/core/templates/plan.md`
- `references/core/templates/solution-outline.md`
- `references/core/templates/review-report.md`
- `references/core/rules/global.md`

## Orchestration

Work through these roles in order:

1. `analyst`
2. `planner`
3. `architect`
4. `builder`
5. `reviewer`

When subagents are available, delegate each stage to the matching subagent.

## Output Contract

Return five labeled sections:

- `brief`
- `plan`
- `solution-outline`
- `build-checklist`
- `review-report`

## Style

- keep outputs compact
- preserve explicit assumptions
- bias bugfixes toward root-cause and regression checks
