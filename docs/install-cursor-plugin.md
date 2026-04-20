# Install The Cursor Plugin

Cursor is handled as a packaging target layered on top of an official BMAD installation.

## Recommended Flow

From the repository root:

```bash
npx mourner-bmad-workflow install --target cursor
```

The installer asks whether to install Cursor skills at project or global scope. Use
`--scope project` or `--scope global` for automation.

That command will:

1. run official BMAD install with `claude-code` enabled as the compiled-skill source
2. include this repo's personal custom content
3. sync `.customize.yaml` overrides
4. generate `plugins/mourner-bmad-workflow-cursor/skills/`
5. install selected skills to `.cursor/skills/` for project scope or `~/.cursor/skills/` for global scope
6. expose at minimum:
   - `bmad-help`
   - `bmad-code-review`
   - `bmad-generate-project-context`
   - `bmad-quick-dev`
   - `bmad-brainstorming`

Use `--preset full` if you want to keep the full official BMAD command surface.

## Local Plugin Output

This repository generates a Cursor-compatible plugin directory at `plugins/mourner-bmad-workflow-cursor/`.

Use that folder for local testing or as the source directory for a future Cursor marketplace manifest.
