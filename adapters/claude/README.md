# Claude Adapter

The Claude adapter packages official BMAD Claude skills together with this repository's personal add-on skills.

## Source Of Truth

- official BMAD Claude skills: `<install-dir>/.claude/skills/`
- personal add-on skill templates: `custom-content/modules/personal-workflow/skills/`
- update-safe customizations: `customize/agents/*.customize.yaml`

## Adapter Responsibilities

- preserve upstream BMAD command semantics
- merge personal add-on skills beside upstream skills
- provide a convenient local wrapper plugin in `plugins/mourner-bmad-workflow-claude/`
