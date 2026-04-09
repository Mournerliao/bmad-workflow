# Cursor Adapter

Cursor is handled as a packaging target layered on top of an official BMAD installation.

## Flow

1. Official BMAD installs with `claude-code` enabled.
2. Upstream BMAD generates skills into `.claude/skills/`.
3. This repository copies the selected upstream skill folders into `plugins/mourner-bmad-workflow-cursor/skills/` (workflow source files only).
4. This repository generates Cursor slash commands into `plugins/mourner-bmad-workflow-cursor/commands/`.
5. The Cursor plugin manifest lists **commands** only, not `skills`, so the plugin UI shows each workflow once under Commands. Agents are instructed to open `skills/<name>/SKILL.md` when a `/bmad-*` command runs.
6. Cursor loads the resulting local plugin from the generated plugin directory.
