---
name: bmad-review
description: Run the BMAD review path to assess implementation quality, risks, regressions, and test gaps using the reviewer role and the BMAD solo workflow rules.
---

# BMAD Review

Use this skill when the user wants a review-oriented pass over a plan, implementation, patch, or completed feature.

## Workflow

Primary role: `reviewer`

Use earlier-stage artifacts when available:

- `brief`
- `plan`
- `solution-outline`
- `build-checklist`

Review the work against the intent, technical direction, and validation expectations.

## Required References

- `references/core/agents/reviewer.md`
- `references/core/rules/global.md`
- `references/core/templates/review-report.md`

## Output Contract

Structure the response as:

- `summary`
- `findings`
- `regression-watchlist`
- `validation-gaps`
- `recommended-next-step`

## Review Style

- prioritize bugs, regressions, and missing tests
- keep praise brief and secondary
- call out assumptions when review context is incomplete
