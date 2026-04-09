# Development

## Repository Model

This repository is now an installer-and-adapter project, not a standalone BMAD implementation.

When adding new capability:

- prefer `customize/` for agent behavior tweaks
- prefer `custom-content/` for new personal add-ons
- keep `adapters/` thin
- avoid copying official BMAD prompts into the repo

## Git Conventions

This repository uses a lightweight modern git commit setup:

- `.gitattributes` enforces consistent line endings across platforms
- `commitlint` enforces Conventional Commits
- `husky` runs commit message validation through the `commit-msg` hook

Example commit messages:

- `feat: add bugfix workflow variant`
- `fix: correct plugin skill path`
- `docs: clarify codex plugin usage`

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run a dry-run installer check:

```bash
npm run verify:dry-run
```

3. Regenerate local adapter outputs if needed:

```bash
npm run generate:claude
npm run generate:codex
npm run generate:cursor
```

4. Commit as usual. The `commit-msg` hook will validate the commit message format automatically.

## Package Layout

- `installer/`: orchestration CLI
- `customize/`: `.customize.yaml` templates
- `custom-content/`: personal add-on module
- `plugins/`: generated/example plugin outputs
- `adapters/codex/marketplace.local.example.json`: template for Codex local marketplace (copy to `.agents/plugins/marketplace.json`; `.agents/` is gitignored)
- `plugins/mourner-bmad-workflow-cursor/`: repo-local Cursor plugin output
