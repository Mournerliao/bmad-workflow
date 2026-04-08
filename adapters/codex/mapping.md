# Codex Mapping

## Inputs

- official BMAD Claude-compatible skill folders

## Adapter Rules

- copy official BMAD skills into the Codex plugin `skills/` directory
- apply the selected preset as a whitelist at packaging time
- keep the upstream `.claude/skills` installation untouched

## Default Preset

- `bmad-help`
- `bmad-code-review`
- `bmad-generate-project-context`
