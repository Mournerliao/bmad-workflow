# Use With Claude Code

This repository assumes official BMAD is installed first, then layers personal customizations and packaging on top.

## Recommended Flow

From the repository root:

```bash
npx mourner-bmad-workflow install --target claude
```

That command will:

1. run official BMAD install for the current directory
2. install `bmm`
3. include this repo's `custom-content/`
4. sync `customize/agents/*.customize.yaml`
5. regenerate `plugins/mourner-bmad-workflow-claude/`
6. expose only:
   - `bmad-help`
   - `bmad-code-review`
   - `bmad-generate-project-context`

Use `--preset full` if you want to keep all official generated commands.

## Local Plugin Testing

```bash
claude --plugin-dir ./plugins/mourner-bmad-workflow-claude
```
