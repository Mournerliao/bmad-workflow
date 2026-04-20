# Use With Claude Code

This repository assumes official BMAD is installed first, then layers personal customizations and packaging on top.

## Recommended Flow

From the repository root:

```bash
npx mourner-bmad-workflow install --target claude
```

The installer asks whether to install Claude Code skills at project or global scope. Use
`--scope project` or `--scope global` for automation.

That command will:

1. run official BMAD install for the current directory
2. install `bmm`
3. include this repo's `custom-content/`
4. sync `customize/agents/*.customize.yaml`
5. regenerate `plugins/mourner-bmad-workflow-claude/`
6. install selected skills to `.claude/skills/` for project scope or `~/.claude/skills/` for global scope
7. expose only:
   - `bmad-help`
   - `bmad-code-review`
   - `bmad-generate-project-context`
   - `bmad-quick-dev`
   - `bmad-brainstorming`

Use `--preset full` if you want to keep all official generated commands.

## Local Plugin Testing

```bash
claude --plugin-dir ./plugins/mourner-bmad-workflow-claude
```
