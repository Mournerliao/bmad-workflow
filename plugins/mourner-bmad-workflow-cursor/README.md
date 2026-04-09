# mourner-bmad-workflow Cursor Plugin

This folder is the generated Cursor plugin wrapper for:

- official BMAD workflows (files under `skills/`, used when you run `/bmad-*` commands)
- personal add-on content from this repository

The plugin manifest registers **commands** only, so Cursor’s plugin UI does not list the same items twice under Skills and Commands.

Regenerate it with:

```bash
npm run generate:cursor
```
