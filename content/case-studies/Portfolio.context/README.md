# Case study source notes (single document)

**One markdown file** holds context for all case studies and major visuals: [`portfolio-case-studies.md`](portfolio-case-studies.md).

It is **not imported at build time**. When refreshing copy, edit that file first, then update the matching `../workflows.ts`, `../outputs.ts`, or `../reconstruction.ts`.

## Document structure

Use top-level `#` headings to separate pieces. Each block follows the same template:

- **Product / Context**
- **Your Role and Constraints**
- **One Before / After Moment** (Before / After)
- **What You Want a Hiring Manager to Remember**

### Current sections in `portfolio-case-studies.md`

| `#` section | Maps to |
|-------------|---------|
| AI Workflows / Triptych Redesign | `workflows.ts` (main narrative) |
| Original Workflow Model / Challenge Visual | Workflows — overview / challenge visuals |
| Resume Analysis Workflow Prototype | Workflows — outcome visual (TriptychProduct) |
| *(add)* Structured AI Outputs | `outputs.ts` |
| From Screenshots to System | `reconstruction.ts` |

Add new case studies as additional `#` sections in the same file—do not split into per-slug files unless the doc becomes hard to maintain.

## Workflow

1. Add or edit sections in `portfolio-case-studies.md`
2. Rewrite the matching `content/case-studies/<slug>.ts`
3. Preview at `/work/<slug>`
4. Note progress in `docs/refactor-status.md`

## Sync status

| Study | Context in master doc | `*.ts` synced |
|-------|------------------------|---------------|
| workflows | Yes | Yes |
| outputs | Add section when ready | Draft (not yet from master doc) |
| reconstruction | Yes | Yes |
