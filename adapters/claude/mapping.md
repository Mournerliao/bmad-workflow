# Claude Mapping

## Skills

- capability `help` -> skill `bmad-help`
- capability `quick-dev` -> skill `bmad-quick-dev`
- capability `plan` -> skill `bmad-plan`
- capability `review` -> skill `bmad-review`

All four skills are manual workflow entry points and should use `disable-model-invocation: true`.

## Subagents

- role `analyst` -> Claude subagent `analyst`
- role `planner` -> Claude subagent `planner`
- role `architect` -> Claude subagent `architect`
- role `builder` -> Claude subagent `builder`
- role `reviewer` -> Claude subagent `reviewer`

## Orchestration Rules

- `bmad-help` explains entry points and should not spawn subagents
- `bmad-quick-dev` orchestrates `analyst -> planner -> architect -> builder -> reviewer`
- `bmad-plan` orchestrates `analyst -> planner -> architect`
- `bmad-review` centers `reviewer`
