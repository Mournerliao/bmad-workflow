# Codex Mapping

## Naming

- capability `help` -> skill `bmad-help`
- capability `quick-dev` -> skill `bmad-quick-dev`
- capability `plan` -> skill `bmad-plan`
- capability `review` -> skill `bmad-review`

## Role Mapping

Codex consumes BMAD roles as references and orchestration instructions inside skills.

- `analyst`
- `planner`
- `architect`
- `builder`
- `reviewer`

## Output Contract

Codex skills should preserve these host-visible outputs:

- `brief`
- `plan`
- `solution-outline`
- `build-checklist`
- `review-report`
