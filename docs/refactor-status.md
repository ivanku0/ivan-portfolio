# Refactor status

Living log for the portfolio v2 refactor.

**Active focus:** Structural / polish only — see [Structural backlog](#structural-backlog) below.

**Paused:** [Content strategy](#content-strategy-revisit-later) — do not pick up copy work unless explicitly requested.

---

## Content strategy (revisit later)

Editorial and narrative work is **out of scope** for current sessions until Ivan reopens it.

### How content works in this repo

| Layer | Path | Role |
|-------|------|------|
| Author notes (single doc) | `content/case-studies/Portfolio.context/portfolio-case-studies.md` | Source of truth — one `#` section per study (and per major visual where needed) |
| Published copy | `content/case-studies/{workflows,outputs,reconstruction}.ts` | What the site renders — sync from master doc |
| Visuals | `lib/case-study-visuals/` + `components/case-study/*/` | Registry maps visual keys → components |

Workflow when content resumes: edit master doc → rewrite matching `*.ts` → preview `/work/<slug>` → commit.

See also: [`Portfolio.context/README.md`](../content/case-studies/Portfolio.context/README.md).

### Snapshot when paused (2026-05-20)

| Study | Master doc section | `*.ts` on site | Visuals | Notes |
|-------|-------------------|----------------|---------|--------|
| workflows | Yes — Ivan’s notes | Synced | Full (incl. TriptychProduct) | **Approved in browser** |
| outputs | Not yet | Agent draft | `OutputsVisual` (mock diagrams) | Re-sync when `# Structured AI Outputs` is added to master doc |
| reconstruction | Yes — appended in repo | Synced from that section | `ReconstructionVisual` | Replace master-doc section if Ivan has different source notes |

### Content backlog (when reopened)

1. Add **`# Structured AI Outputs`** to `portfolio-case-studies.md` (Ivan’s words) and re-sync `outputs.ts`.
2. Review **outputs** and **reconstruction** in browser; edit master doc first, then `*.ts`.
3. Optional: refine **home** hero / “How I Think” in same voice pass as case studies.
4. Replace mock diagrams with **real assets** when available (registry-only change).

### Checkpoints (content)

- **2026-05-19** — Editorial pass started from `portfolio-case-studies.md`; workflows approved.
- **2026-05-20** — Content paused again; structural work preferred. Outputs/reconstruction drafts left as-is until content strategy reopens.

---

## Completed (v2 foundation)

- [x] Branch archive: `archive/pre-refactor-2026-05`, tag `v0-pre-refactor`
- [x] Content layer + dynamic `/work/[slug]`
- [x] Theme tokens + component folder layout
- [x] Triptych split (`components/workflows/triptych/`)
- [x] Merged and pushed to `main`

## Structural backlog

- [x] Repo hygiene: `.gitignore`, `Portfolio.context/README.md`
- [x] Token migration: workflow mocks + `OriginalWorkflowModel` light tokens
- [x] Visual registry split: `lib/case-study-visuals/{workflows,outputs,reconstruction}.tsx`
- [x] Barrel exports: `components/{layout,home,case-study,workflows}/index.ts`
- [ ] Real screenshot/Figma assets for outputs visuals (optional, structural swap in registry)
- [x] Metadata title template dedupe — case study pages use `title: study.page.title` only (root `template: "%s | Ivan Kuo"`)
- [x] Root `app/not-found.tsx`
- [x] Barrel imports in `app/layout.tsx`, `app/page.tsx`, `app/work/[slug]/page.tsx`, `CaseStudyTemplate`, `workflows` visual registry
- [x] Triptych mobile layout — full-width section on small screens, `overflow-x-auto` on visual blocks in case study template

---

## Archive

Older one-off notes from the first refactor pass are folded into the sections above. For pre-refactor code: branch `archive/pre-refactor-2026-05`, tag `v0-pre-refactor`.
