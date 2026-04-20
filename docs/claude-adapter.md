# Claude Adapter

The Claude adapter packages official BMAD Claude skills together with this repository's personal add-on skills.

## Flow

1. Official BMAD installs into the target directory.
2. BMAD emits Claude skills into `.claude/skills/`.
3. This repository syncs `customize/agents/*.customize.yaml` into `_bmad/_config/agents/`.
4. The installer copies official and personal skills into `plugins/mourner-bmad-workflow-claude/skills/`.
5. Install writes selected skills to `.claude/skills/` for project scope or `~/.claude/skills/` for global scope after user confirmation.

The wrapper plugin is for local loading and sharing. Official BMAD remains the source of truth.
