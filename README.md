# ivankuo.com

Portfolio site for Ivan Kuo — product design for AI workflows, structured outputs, and production-grounded systems.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- Tailwind CSS v4 (theme tokens in `app/globals.css`)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                    # Routes (home, dynamic case studies)
content/case-studies/   # Single source of truth for copy + metadata
components/
  layout/               # SiteHeader, SiteFooter, NavLink
  home/                 # Hero, cards, reveal animation
  case-study/           # Template, splash, placeholder diagrams
  workflows/            # Workflow visuals + triptych interactive demo
lib/case-study-visuals.tsx  # Visual registry for case study pages
docs/theme-tokens.md    # Token reference
```

## Theming

All colors flow from CSS variables in `app/globals.css`. See `docs/theme-tokens.md` before introducing new literals.

## Branches

- `main` — production
- `archive/pre-refactor-2026-05` — snapshot before v2 refactor
- `refactor/portfolio-v2` — refactor work
