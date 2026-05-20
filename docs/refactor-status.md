# Refactor status

Living log for the portfolio v2 refactor. Case study copy is edited in `content/case-studies/*.ts`; **all** author notes live in one file: `content/case-studies/Portfolio.context/portfolio-case-studies.md` (sections per study/visual).

## Checkpoint — 2026-05-19

**Milestone:** Editorial pass started using author-provided context, not agent-invented copy.

- Ivan added `Portfolio.context/portfolio-case-studies.md` — single document for all studies; workflows sections (main story + challenge visual + prototype) drove `workflows.ts`.
- `content/case-studies/workflows.ts` was rewritten from that file.
- **Paused:** Further case study copy (outputs, reconstruction) until structural work is in better shape.
- **Not yet committed:** Workflows copy update and `Portfolio.context/` (local only as of this note).

**Resume structural work from here** — design-system completion, repo hygiene, visual registry, component boundaries. Return to outputs/reconstruction context files when copy pass resumes.

## Completed (v2 foundation)

- [x] Branch archive: `archive/pre-refactor-2026-05`, tag `v0-pre-refactor`
- [x] Content layer + dynamic `/work/[slug]`
- [x] Theme tokens + component folder layout
- [x] Triptych split (`components/workflows/triptych/`)
- [x] Merged and pushed to `main`

## Backlog

### Structural

- [x] Repo hygiene: `.gitignore`, `Portfolio.context/README.md`, `docs/refactor-status.md`
- [x] Token migration: workflow mocks + `OriginalWorkflowModel` → `--color-mock-light-*` / theme utilities
- [x] Visual registry split: `lib/case-study-visuals/{workflows,placeholders,index}.tsx`
- [x] Barrel exports: `components/{layout,home,case-study,workflows}/index.ts`
- [ ] Replace `PlaceholderDiagram` with real assets for outputs/reconstruction (swap keys in `placeholders.tsx` when ready)

### Content

- [x] Workflows copy from `Portfolio.context` — approved in browser
- [x] Outputs copy + `OutputsVisual` diagrams (agent draft — **re-sync from master doc** when outputs section is added)
- [ ] Add `# Structured AI Outputs` (and reconstruction) sections to `portfolio-case-studies.md` if not already there
- [ ] Rewrite `outputs.ts` / `reconstruction.ts` from those sections
