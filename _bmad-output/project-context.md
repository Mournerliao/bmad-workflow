---
project_name: 'mourner-bmad-workflow'
user_name: 'asherliao'
date: '2026-04-09'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'quality_rules', 'workflow_rules', 'anti_patterns']
status: 'complete'
rule_count: 52
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- Runtime: Node.js `>=18`
- Distribution: npm package exposing `mourner-bmad-workflow`
- Main implementation language: JavaScript, with CommonJS for runtime scripts
- Config style is mixed: ESM is used for `commitlint.config.mjs`
- Dev tooling: `husky@^9.1.7`, `@commitlint/cli@^20.5.0`, `@commitlint/config-conventional@^20.5.0`
- Search and validation flows expect `rg` to be available
- The repository generates local adapter outputs for Claude, Codex, and Cursor
- Cursor command generation is derived from selected BMAD skills, not maintained as an independent command system

## Critical Implementation Rules

### Language-Specific Rules

- Runtime scripts in `installer/` and `scripts/` use plain JavaScript, not TypeScript; follow the existing style unless the repo explicitly migrates.
- Keep CLI and release logic compatible with Node 18+ APIs only.
- Use CommonJS in runtime `.js` files unless the surrounding file is already ESM.
- Keep argument parsing explicit and defensive; unknown CLI args should fail fast with clear errors.
- Prefer synchronous filesystem and child-process APIs in installer and release scripts because the current codebase is short-lived CLI orchestration.
- Preserve deterministic output ordering where possible, for example sorted directory lists and stable generated command sets.
- Do not introduce framework-heavy abstractions into CLI scripts; keep orchestration logic readable and direct.
- When adding generated content, keep the source of truth in generation logic rather than hand-editing generated output only.

### Framework-Specific Rules

- Treat this repository as a BMAD wrapper layer, not as a place to re-implement or fork BMAD core.
- Prefer `.customize.yaml` changes in `customize/` for behavior overrides.
- Prefer `custom-content/` when integrating personal add-on modules into the official BMAD install flow.
- Keep `adapters/claude/`, `adapters/codex/`, and `adapters/cursor/` thin, packaging-focused, and regeneration-friendly.
- Do not create a new repo-local BMAD core layer or duplicate upstream prompt or skill content unnecessarily.
- `plugins/` contains generated or example local-loadable outputs; if behavior is generated, update the generator and then regenerate.
- Cursor command files should mirror the selected BMAD skills and stay aligned with installer-generated descriptions.
- Preserve the minimal default command surface unless the change is intentionally about presets or exposed command scope.

### Testing Rules

- There is no broad unit-test suite in the current repository; prefer focused verification through existing repo scripts.
- For release-sensitive changes, run `npm run check:release`.
- For installer or generation flow changes, use `npm run verify:dry-run` to confirm planned actions without mutating a target project.
- When changing generated Cursor plugin outputs or command exposure, verify the expected files still exist and match release-check expectations.
- Do not add noisy test scaffolding just to satisfy process; prefer checks that protect packaging, generation, and release integrity.
- If a change affects CLI flags, presets, or generated outputs, verify both the source logic and the generated artifact surface.

### Code Quality & Style Rules

- Follow the repository's existing plain-JavaScript style; do not introduce TypeScript, class-heavy refactors, or alternative module systems without an explicit migration decision.
- Keep files and functions small, direct, and readable; this repository favors straightforward orchestration over abstraction layers.
- Maintain stable naming across package name, plugin names, command names, and filesystem paths because release checks assert exact strings.
- Preserve existing directory responsibilities: orchestration in `installer/`, release checks in `scripts/`, packaging rules in `adapters/`, generated outputs in `plugins/`.
- Keep generated text deterministic and concise, especially command descriptions and plugin-facing docs.
- Respect commitlint's Conventional Commit types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.
- Prefer documentation updates when changing install, generate, release, or adapter behavior so user-facing instructions stay in sync.

### Development Workflow Rules

- Commit messages must follow Conventional Commits and pass the `commit-msg` hook.
- Example commit styles in this repository are short and functional, such as `feat: ...`, `fix: ...`, `docs: ...`.
- Before release work, make sure the git working tree is clean because `npm version` will refuse otherwise.
- Release flow is script-driven: `npm run check:release`, `npm run pack:release`, then `npm run release -- patch --no-publish` or a versioned release script.
- Release scripts do not push git automatically and do not create GitHub releases automatically.
- Published tarballs are build artifacts and should not be committed back into source control.
- If installer defaults or generated command surfaces change, keep docs, release checks, and generated plugin outputs aligned in the same change.

### Critical Don't-Miss Rules

- Do not hand-maintain generated plugin output as the only change; update the generator or source mapping as needed, then regenerate.
- Do not widen the exposed BMAD command set accidentally; the minimal preset is intentional.
- Do not add repo-local copies of BMAD core content just to make edits feel local; keep upstream ownership boundaries clear.
- Do not rename package, plugin, marketplace, or command identifiers casually; release checks and install flows depend on exact names and paths.
- Do not let docs drift from actual CLI behavior, especially for install targets, presets, and Cursor support.
- Do not add complex async orchestration where simple synchronous CLI flow is already the established pattern.
- When changing release validation logic, remember that string checks and required-path assertions are part of the safety net, not incidental implementation details.
- If a change touches Cursor support, verify both adapter docs and generated plugin command files because release checks explicitly expect those artifacts.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code.
- Follow all rules exactly as documented.
- When in doubt, prefer the more restrictive option.
- Update this file if new project-specific patterns emerge.

**For Humans:**

- Keep this file lean and focused on agent needs.
- Update it when the technology stack, generation flow, or packaging patterns change.
- Remove rules that become obvious or obsolete.

Last Updated: 2026-04-09
