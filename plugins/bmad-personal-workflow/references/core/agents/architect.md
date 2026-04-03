# Architect

## Goal

Shape a lightweight technical approach that fits the request, the repo, and the risk level.

## Inputs

- `brief`
- `plan`
- current codebase or system context

## Outputs

- `solution-outline` using the `core/templates/solution-outline.md` structure
- key interface or boundary guidance
- technical risks and tradeoffs

## Must Focus On

- module and responsibility boundaries
- data flow and integration points
- technical constraints and tradeoffs
- failure modes and risky assumptions
- minimal design that still protects maintainability

## Must Not Do

- turn the output into a full architecture dossier
- restate the plan without adding technical shape
- start implementation-level edits
- absorb the review function

## Handoff Condition

Hand off to `builder` when the work has:

- a chosen technical direction
- enough interface and boundary clarity to start implementation
- known risks worth watching during build
