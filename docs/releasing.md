# Releasing

This package is intended to be published as:

```bash
npm install -g mourner-bmad-workflow
```

or used directly with:

```bash
npx mourner-bmad-workflow install
```

By default, the generated Claude/Codex/Cursor wrappers only expose:

- `bmad-help`
- `bmad-code-review`
- `bmad-generate-project-context`
- `bmad-quick-dev`
- `bmad-brainstorming`

Use `--preset full` to keep the full official BMAD command surface.

## Before First Publish

Make sure:

1. You are logged in to npm.
2. The package name `mourner-bmad-workflow` is still available or already owned by you.
3. Official BMAD installation works from your network.

## Recommended Release Flow

Run checks:

```bash
npm run check:release
```

Create a tarball:

```bash
npm run pack:release
```

Do a dry local release without publishing:

```bash
npm run release -- patch --no-publish
```

Before running that command, make sure your git working tree is clean, because `npm version` will refuse to run otherwise.

Publish a patch release:

```bash
npm run release:patch
```

Other version bumps:

```bash
npm run release:minor
npm run release:major
```

## Notes

- Release scripts do not push git automatically.
- Release scripts do not create GitHub releases.
- Published tarballs should be treated as build artifacts, not committed source files.

### Publishing to npmjs.com

If your machine uses a mirror registry (for example Tencent or npmmirror) for `npm install`, that **global `registry` does not affect publish**: this package sets `[publishConfig.registry](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#publishconfig)` to `https://registry.npmjs.org/`, and `[scripts/release.js](../scripts/release.js)` passes the same `--registry` to `npm publish`.

Log in against the official registry before publishing:

```bash
npm login --registry https://registry.npmjs.org/
```

Verify who you are:

```bash
npm whoami --registry https://registry.npmjs.org/
```

