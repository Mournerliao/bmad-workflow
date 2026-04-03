---
name: bmad-plan
description: Clarify a request and produce a BMAD plan plus technical direction without entering build or review.
disable-model-invocation: true
---

# BMAD Plan

Use this skill when the user wants clarity and planning before implementation.

## References

- `references/core/capabilities/plan.md`
- `references/core/workflows/quick-dev.md`
- `references/core/templates/brief.md`
- `references/core/templates/plan.md`
- `references/core/templates/solution-outline.md`
- `references/core/rules/global.md`

## Orchestration

Work through these roles in order:

1. `analyst`
2. `planner`
3. `architect`

When subagents are available, delegate each stage to the matching subagent.

## Output Contract

Return exactly:

- `brief`
- `plan`
- `solution-outline`
