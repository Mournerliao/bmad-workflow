# Cursor Adapter

Cursor is handled as a packaging target layered on top of an official BMAD installation.

## Flow

1. Official BMAD installs with `claude-code` enabled.
2. Upstream BMAD generates skills into `.claude/skills/`.
3. This repository copies the selected upstream skill folders into `plugins/mourner-bmad-workflow-cursor/workflow/`.
4. This repository generates Cursor slash commands into `plugins/mourner-bmad-workflow-cursor/commands/`.
5. The manifest lists **commands** only. A `/bmad-*` run follows `workflow/<name>/SKILL.md`.
6. Cursor loads the resulting local plugin from the generated plugin directory.
