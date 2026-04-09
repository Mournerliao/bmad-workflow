# Install The Codex Plugin

Codex is handled as a packaging target layered on top of an official BMAD installation.

## Recommended Flow

From the repository root:

```bash
npx mourner-bmad-workflow install --target codex
```

That command will:

1. run official BMAD install with `claude-code` enabled as the compiled-skill source
2. include this repo's personal custom content
3. sync `.customize.yaml` overrides
4. generate `plugins/mourner-bmad-workflow-codex/`
5. expose only:
   - `bmad-help`
   - `bmad-code-review`
   - `bmad-generate-project-context`
   - `bmad-quick-dev`
   - `bmad-brainstorming`

Use `--preset full` if you want to keep all official generated commands.

## Local Marketplace

This repository includes a repo-local marketplace file at `.agents/plugins/marketplace.json`.

It points to `./plugins/mourner-bmad-workflow-codex`, which Codex can load as a local folder-based plugin.
