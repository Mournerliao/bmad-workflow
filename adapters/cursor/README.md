# Cursor Adapter

The Cursor adapter wraps official BMAD output into a local Cursor plugin.

## Source Of Truth

- official BMAD Claude skills: `<install-dir>/.claude/skills/`
- personal add-on skill templates: `custom-content/modules/personal-workflow/skills/`
- Cursor plugin manifest template: `adapters/cursor/plugin.json`

## Adapter Responsibilities

- preserve upstream BMAD command semantics
- copy selected BMAD skills into the Cursor plugin `skills/` directory
- generate Cursor slash commands in `commands/` for each exposed skill
- keep the upstream `.claude/skills` installation untouched
