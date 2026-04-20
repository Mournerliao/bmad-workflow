# Cursor Adapter

Cursor is handled as a packaging target layered on top of an official BMAD installation.

## Flow

1. Official BMAD installs with `claude-code` enabled.
2. Upstream BMAD generates skills into `.claude/skills/`.
3. This repository copies the selected upstream skill folders into `plugins/mourner-bmad-workflow-cursor/skills/`.
4. The manifest lists **skills** so Cursor can discover each `SKILL.md` directly.
5. Install writes those skills to `.cursor/skills/` for project scope or `~/.cursor/skills/` for global scope after user confirmation.
