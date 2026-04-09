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

Codex can load this plugin via a **local** marketplace file that is **not** committed (`.agents/` is gitignored).

1. Copy [`adapters/codex/marketplace.local.example.json`](../adapters/codex/marketplace.local.example.json) to `.agents/plugins/marketplace.json` inside your project (create the folders if needed).
2. Adjust `source.path` if your plugin directory differs from `./plugins/mourner-bmad-workflow-codex`.
