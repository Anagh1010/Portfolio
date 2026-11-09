# Continuity Ledger

## Snapshot
- 2026-11-09 [USER] Goal: Match portfolio UI closely to `https://anoopsonkriya.dev/` with data sourced from `data/portfolio.ts`; music widget removed per user request.
- 2026-11-09 [CODE] Invariant: No code file longer than 300 lines; modular architecture; all data sourced from `data/portfolio.ts`.
- 2026-11-09 [TOOL] Build verified: `npm run build` exits 0 with zero warnings/errors on `next@16.4.5` and `react@19`; `npm audit` reports 0 vulnerabilities.
- 2026-11-09 [CODE] Rewrote `README.md` with complete architecture breakdown, feature guide, single-file editing manual, tech stack details, and deployment guide.

## Decisions
- 2026-11-09 [CODE] D001 ACTIVE: VS Code layout modeled directly after `anoopsonkriya.dev` with fixed top titlebar (`h-10`), fixed activity rail + explorer sidebar (`w-72`), fixed bottom status bar (`h-7`), sticky editor tabs, and radial grid background (`.grid-bg`).
- 2026-11-09 [CODE] D002 ACTIVE: Single source of truth in `data/portfolio.ts` containing profile, roles, projects, dependencies, education, timeline, and terminal commands.
- 2026-11-09 [CODE] D003 ACTIVE: Implemented `⌘K` command palette modal, dynamic typewriter role switcher, interactive zsh terminal with history navigation, and scroll spy syncing active tab.
- 2026-11-09 [USER] D004 ACTIVE: Removed the music widget from the sidebar and data store; explorer now features a clean profiles and links footer.
- 2026-11-09 [CODE] D005 ACTIVE: Aligned dependency package names and versions to match code editor JSON standards with left-bound colons, right-aligned version strings, and gradient proficiency bars.
- 2026-11-09 [CODE] D006 ACTIVE: Expanded release history date column width to `13.5rem` with right padding (`sm:pr-7`) and aligned vertical timeline track/dots so longer date ranges never touch or fall behind the timeline line.
- 2026-11-09 [CODE] D007 ACTIVE: Upgraded to `react@19`, `react-dom@19`, and `framer-motion@11.18.2` matching Next.js 16 native runtime with zero deprecation warnings.

## Done (recent)
- 2026-11-09 [CODE] Inspected DOM, CSS, layout structure, and section mechanics of `anoopsonkriya.dev`.
- 2026-11-09 [CODE] Re-architected portfolio into modular components under 300 LOC each (`header.tsx`, `sidebar.tsx`, `tabbar.tsx`, `status-bar.tsx`, `command-palette.tsx`, `hero-section.tsx`, `about-section.tsx`, `skills-section.tsx`, `projects-section.tsx`, `experience-section.tsx`, `terminal-section.tsx`, `contact-section.tsx`).
- 2026-11-09 [CODE] Configured `tailwind.config.ts` content scanning paths and implemented exact `.grid-bg` mask styling in `app/globals.css`.
- 2026-11-09 [TOOL] `npm run build` passed cleanly with exit code 0 and zero Tailwind warnings.
- 2026-11-09 [TOOL] Tested local render via `next dev` and verified HTML delivery on port 3000.

## Working set
- `CONTINUITY.md`
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `data/portfolio.ts`
- `tailwind.config.ts`
- `components/portfolio/*`

## Receipts
- 2026-11-09 [TOOL] `npm run build` produced static `/` (18.5 kB, 106 kB first load JS) with 0 errors.
- 2026-11-09 [TOOL] Line count audit verified all 18 files strictly under 300 lines (longest file 238 lines).
- 2026-11-09 [TOOL] Verified `curl http://localhost:3000` responds HTTP 200 with full VS Code DOM tree.
