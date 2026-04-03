# Development

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

2. Commit as usual. The `commit-msg` hook will validate the commit message format automatically.

## Package Layout

The repository ships a folder-based Codex plugin package:

- `plugins/bmad-personal-workflow/`

The repo-local marketplace entry is:

- `.agents/plugins/marketplace.json`
