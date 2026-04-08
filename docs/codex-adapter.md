# Codex Adapter

Codex is handled as a packaging target layered on top of an official BMAD installation.

## Flow

1. Official BMAD installs with `claude-code` enabled.
2. Upstream BMAD generates skills into `.claude/skills/`.
3. This repository copies those skill folders into `plugins/mourner-bmad-workflow-codex/skills/`.
4. Personal add-on skills are overlaid afterward.
5. Codex loads the merged plugin through `.agents/plugins/marketplace.json`.
