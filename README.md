# mourner-bmad-workflow

`mourner-bmad-workflow` is an installer wrapper and adapter layer for the official [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD).

This repository does not maintain a forked BMAD core anymore. It now exists to:

- install official BMAD into a project
- inject personal `.customize.yaml` overrides
- attach a personal add-on module via `--custom-content`
- generate local adapter outputs for Claude Code, Codex, and Cursor with a minimal official command set

The operating model is:

`official BMAD + personal customizations + platform adapters`

## What This Repository Owns

- `installer/`: one-click installation and regeneration flow
- `customize/`: update-safe agent customizations copied into `_bmad/_config/agents/`
- `custom-content/`: personal add-on module content
- `adapters/`: Claude/Codex/Cursor packaging rules
- `plugins/`: generated or example local plugin outputs

## Quick Start

Install official BMAD plus Mourner's enhancements into the current project:

```bash
npx mourner-bmad-workflow install
```

Useful variants:

- `npx mourner-bmad-workflow install --target claude`
- `npx mourner-bmad-workflow install --target codex`
- `npx mourner-bmad-workflow install --target cursor`
- `npx mourner-bmad-workflow install --preset full`
- `npx mourner-bmad-workflow verify --dry-run`

Developer mode inside this repository still works:

- `npm run install:all`
- `npm run generate:claude`
- `npm run generate:codex`
- `npm run generate:cursor`

## Default Exposed Commands

By default, this package only exposes a minimal set of official BMAD commands:

- `bmad-help`
- `bmad-code-review`
- `bmad-generate-project-context`
- `bmad-quick-dev`
- `bmad-brainstorming`

These are exposed through:

- [plugins/mourner-bmad-workflow-claude](/Users/asherliao/Projects/bmad-workflow/plugins/mourner-bmad-workflow-claude)
- [plugins/mourner-bmad-workflow-codex](/Users/asherliao/Projects/bmad-workflow/plugins/mourner-bmad-workflow-codex)
- [plugins/mourner-bmad-workflow-cursor](/Users/asherliao/Projects/bmad-workflow/plugins/mourner-bmad-workflow-cursor)

## Publish

Release checks:

```bash
npm run check:release
npm run pack:release
```

Dry-run a local release without publishing:

```bash
npm run release -- patch --no-publish
```

Publish:

```bash
npm run release:patch
```

Full publishing guidance is in [docs/releasing.md](/Users/asherliao/Projects/bmad-workflow/docs/releasing.md).

## Documentation

- [Architecture](/Users/asherliao/Projects/bmad-workflow/docs/architecture.md)
- [Development](/Users/asherliao/Projects/bmad-workflow/docs/development.md)
- [Claude adapter](/Users/asherliao/Projects/bmad-workflow/docs/claude-adapter.md)
- [Codex adapter](/Users/asherliao/Projects/bmad-workflow/docs/codex-adapter.md)
- [Cursor adapter](/Users/asherliao/Projects/bmad-workflow/docs/cursor-adapter.md)
- [Install for Claude](/Users/asherliao/Projects/bmad-workflow/docs/install-claude-plugin.md)
- [Install for Codex](/Users/asherliao/Projects/bmad-workflow/docs/install-codex-plugin.md)
- [Install for Cursor](/Users/asherliao/Projects/bmad-workflow/docs/install-cursor-plugin.md)
