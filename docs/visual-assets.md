# Case study visual assets

Mocks ship today; replace via the visual registry when captures are ready. Prefer **real screenshots** from production or a deploy. Use **CodePen / embedded demo** only when motion or interaction is the point (e.g. TriptychProduct).

## Desk swarm (`/work/desk-swarm`)

Source app: `math-is-for-blockers` (run `npm run dev`, capture at mobile width ~390px).

| Section | Visual key | Suggested capture | Target path |
|---------|------------|-----------------|-------------|
| Overview | `desk-swarm-overview` | Main menu carousel on a preset card (Scute or Horde) | `public/work/desk-swarm/overview.png` |
| Challenge | `desk-swarm-challenge` | Track screen at a high count (swarm readable) or split: table dice vs app | `public/work/desk-swarm/challenge.png` |
| Approach | `desk-swarm-approach` | Track screen: digit meter + pixel field mid-grow | `public/work/desk-swarm/approach.png` |
| Outcome | `desk-swarm-outcome` | Info sheet, share image export, or “Add to Home Screen” prompt | `public/work/desk-swarm/outcome.png` |

**Optional:** short screen recording (GIF/WebM) for swarm growth or Krenko wipe, hosted under `public/work/desk-swarm/` or embedded CodePen.

**Wire-up:** set `USE_CAPTURED_MEDIA = true` in `lib/case-study-visuals/desk-swarm.tsx` after files exist.

## Enterprise studies (existing backlog)

| Study | Notes |
|-------|--------|
| outputs | Figma or product screenshots for structured export flows |
| workflows | TriptychProduct already interactive; overview/challenge may still want prod screenshots |
| reconstruction | Production screenshot grid → component library (already mocked) |

Track completion in `docs/refactor-status.md`.
