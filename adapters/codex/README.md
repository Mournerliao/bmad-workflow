# Codex Adapter

The Codex adapter wraps official BMAD output into a local Codex plugin.

Because BMAD does not currently expose a native Codex tool target, this adapter reuses BMAD's Claude-generated skills as a neutral compiled source, then repackages them for Codex.

## Source Of Truth

- official BMAD Claude skills: `<install-dir>/.claude/skills/`
- personal add-on skill templates: `custom-content/modules/personal-workflow/skills/`
- Codex plugin manifest template: `adapters/codex/plugin.json`
