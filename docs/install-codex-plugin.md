# Install The Codex Plugin

This document describes how to install `bmad-personal-workflow` in a way that matches the current Codex plugin model as closely as possible.

## What Is Officially Confirmed

OpenAI's public Codex documentation currently confirms these points:

- Codex plugins are the installable distribution unit for reusable workflows.
- A plugin can package one or more skills, optional app integrations, and MCP server configurations.
- Plugins complement local skills rather than replacing them.

Official references:

- [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan/)
- [Codex docs overview](https://platform.openai.com/docs/codex)

## What This Repository Uses

OpenAI's public docs do not currently expose a more detailed packaging guide than the statements above.

For the concrete on-disk layout, this repository follows the Codex plugin scaffolding conventions available in the current Codex environment:

- plugin package directory: `plugins/<plugin-name>/`
- manifest file: `plugins/<plugin-name>/.codex-plugin/plugin.json`
- repo-local marketplace file: `.agents/plugins/marketplace.json`
- marketplace plugin source path: `./plugins/<plugin-name>`

This is the layout used by this repository:

- plugin package: `plugins/bmad-personal-workflow/`
- manifest: `plugins/bmad-personal-workflow/.codex-plugin/plugin.json`
- marketplace entry: `.agents/plugins/marketplace.json`

## Install Option 1: Use This Repository Directly

Use this option when a user wants the plugin from this repo without copying files elsewhere.

1. Clone the repository.
2. Open or register the repo-local marketplace file:
   `.agents/plugins/marketplace.json`
3. Ensure the marketplace contains this plugin entry:

```json
{
  "name": "bmad-personal-workflow",
  "source": {
    "source": "local",
    "path": "./plugins/bmad-personal-workflow"
  },
  "policy": {
    "installation": "AVAILABLE",
    "authentication": "ON_INSTALL"
  },
  "category": "Productivity"
}
```

4. Install or enable the plugin from Codex if your Codex surface exposes the marketplace UI.

## Install Option 2: Copy The Plugin To A Local Plugin Directory

Use this option when a user wants the plugin outside this repository.

1. Copy `plugins/bmad-personal-workflow/` to:
   `~/plugins/bmad-personal-workflow`
2. Create or update:
   `~/.agents/plugins/marketplace.json`
3. Add a plugin entry pointing to:
   `./plugins/bmad-personal-workflow`

Example marketplace file:

```json
{
  "name": "local-plugins",
  "interface": {
    "displayName": "Local Plugins"
  },
  "plugins": [
    {
      "name": "bmad-personal-workflow",
      "source": {
        "source": "local",
        "path": "./plugins/bmad-personal-workflow"
      },
      "policy": {
        "installation": "AVAILABLE",
        "authentication": "ON_INSTALL"
      },
      "category": "Productivity"
    }
  ]
}
```

## What To Share With Other Users

For distribution, share:

- the GitHub repository URL
- the plugin directory path: `plugins/bmad-personal-workflow`
- this installation guide

If you want a fully self-contained artifact, distribute the `plugins/bmad-personal-workflow/` folder together with the marketplace snippet above.

## Notes And Limits

- This plugin is a folder-based distribution, not an npm package.
- The public Codex docs confirm the plugin concept, but not a more detailed public registry/package publication workflow.
- If OpenAI later publishes a formal plugin publishing guide or registry flow, this repository should be updated to match that official process.
