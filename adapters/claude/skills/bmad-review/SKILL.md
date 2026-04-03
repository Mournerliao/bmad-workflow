---
name: bmad-review
description: Review a plan, patch, or implementation for risks, regressions, and missing validation using the BMAD reviewer role.
disable-model-invocation: true
---

# BMAD Review

Use this skill when the user wants review-oriented feedback.

## References

- `references/core/capabilities/review.md`
- `references/core/templates/review-report.md`
- `references/core/rules/global.md`

## Orchestration

Center the `reviewer` role.

When a reviewer subagent is available, delegate the review pass to it.

## Output Contract

Return these labeled sections:

- `summary`
- `findings`
- `regression-watchlist`
- `validation-gaps`
- `recommended-next-step`
