# Quick Dev Workflow

## Purpose

Provide a fast, repeatable solo development path from vague idea to a review-ready implementation plan.

## Audience

- solo developers
- founders building directly in code
- makers who want structure without team-process overhead

## Stages

### 1. Idea

Input:

- a feature idea
- a bug report
- a refactor goal
- a project constraint or pain point

Output:

- a one- or two-sentence problem definition

Exit criteria:

- the request is concrete enough to clarify

### 2. Clarify

Owner: `analyst`

Input:

- idea-stage definition
- user constraints and repo context

Output:

- `brief`

Exit criteria:

- problem, scope, success criteria, and assumptions are clear enough for planning

### 3. Plan

Owners: `planner`, then `architect`

Input:

- `brief`
- repo context

Output:

- `plan`
- `solution-outline`

Exit criteria:

- the work is ordered
- the technical direction is known
- major risks are visible

### 4. Build

Owner: `builder`

Input:

- `brief`
- `plan`
- `solution-outline`

Output:

- `build-checklist`

Exit criteria:

- a developer could implement without re-deciding the work from scratch

### 5. Review

Owner: `reviewer`

Input:

- all previous outputs
- implementation summary or actual code changes when available

Output:

- `review-report`

Exit criteria:

- risks, test gaps, and recommended next action are explicit

## Standard I/O

### Required Inputs Across The Workflow

- goal or problem statement
- relevant constraints
- current repo or product context when available

### Standard Outputs

- `brief`: compact problem definition
- `plan`: ordered execution plan
- `solution-outline`: technical shape and key risks
- `build-checklist`: implementation sequence and checks
- `review-report`: risks, gaps, and recommended next step

## Routing Rules

- if the request is under-specified, `analyst` fills gaps with explicit assumptions before asking broad questions
- if the request is simple, outputs stay short
- if architecture is obvious, `architect` keeps the solution-outline minimal
- if the work is a bugfix, prioritize reproduction clues, root-cause hypotheses, and regression checks
- if the work is high risk, `reviewer` emphasizes missing validation and rollback concerns
