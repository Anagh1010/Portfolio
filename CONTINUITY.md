# Continuity Ledger

## Snapshot
- 2026-11-09 [USER] Goal: create a close VS Code-inspired portfolio experience from anoopsonkriya.dev, adapted to the resume at `app/public/resume.pdf`.
- 2026-11-09 [CODE] Constraint: production code files must stay under 300 lines; do not alter unrelated pre-existing worktree changes.
- 2026-11-09 [TOOL] Resume facts confirmed from a local Quick Look preview: DTU Software Engineering (8.86/10), Coforge and DLED Labs, Roamwise, QuickCart, and object detection project.

## Decisions
- 2026-11-09 [CODE] D001 ACTIVE: use a persistent VS Code frame with an activity rail, explorer, tabs, code editor, status bar, ticker, file-themed content sections, and interactive shell.

## Done (recent)
- 2026-11-09 [CODE] Rebuilt the portfolio’s structure and visual system around the reference site while using the supplied resume for content.
- 2026-11-09 [CODE] Updated typography to Inter and JetBrains Mono, tightened the type scale, and changed the visual system to neutral near-black surfaces.
- 2026-11-09 [CODE] Increased navigation, editor, body, card, and terminal typography to improve readability.
- 2026-11-09 [TOOL] `npm run build` passed after the rebuild.

## Working set
- `CONTINUITY.md`
- `app/page.tsx`
- `data/portfolio.ts`
- `components/portfolio/`
- `tsconfig.json`
- `app/globals.css`

## Receipts
- 2026-11-09 [TOOL] `git status --short` showed existing template changes and deletions before this task.
- 2026-11-09 [TOOL] Production build passed; generated static `/` route successfully.
- 2026-11-09 [TOOL] Quick Look produced a local preview of the resume after text extraction was unavailable.
- 2026-11-09 [TOOL] `npm run build` passed after the typography and palette update.
- 2026-11-09 [TOOL] `npm run build` passed after the readability scale update.
