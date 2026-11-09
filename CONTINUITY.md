# Continuity Ledger

## Snapshot
- 2026-11-09 [USER] Goal: create a close VS Code-inspired portfolio experience from anoopsonkriya.dev, adapted to the resume at `app/public/resume.pdf`.
- 2026-11-09 [CODE] Constraint: production code files must stay under 300 lines; do not alter unrelated pre-existing worktree changes.
- 2026-11-09 [TOOL] Resume facts confirmed from a local Quick Look preview: DTU Software Engineering (8.86/10), Coforge and DLED Labs, Roamwise, QuickCart, and object detection project.

## Decisions
- 2026-11-09 [CODE] D001 ACTIVE: use a persistent VS Code frame with an activity rail, explorer, tabs, code editor, status bar, ticker, file-themed content sections, and interactive shell.
- 2026-11-09 [USER] D002 ACTIVE: use Google Antigravity’s default Symbols file icons in the portfolio Explorer and editor tabs.

## Done (recent)
- 2026-11-09 [CODE] Rebuilt the portfolio’s structure and visual system around the reference site while using the supplied resume for content.
- 2026-11-09 [CODE] Updated typography to Inter and JetBrains Mono, tightened the type scale, and changed the visual system to neutral near-black surfaces.
- 2026-11-09 [CODE] Increased navigation, editor, body, card, and terminal typography to improve readability.
- 2026-11-09 [CODE] Replaced the release list with a chronological Experience & Milestones timeline including Coforge and DLED Labs.
- 2026-11-09 [USER] Supplied LaTeX resume with project destinations: Roamwise live/source, QuickCart live/source, Object Detection source.
- 2026-11-09 [CODE] Added project source and live demo links to the project cards; Object Detection shows its source link only.
- 2026-11-09 [CODE] Added a soft atmospheric glow and fine grain texture over the black background, with translucent workspace surfaces.
- 2026-11-09 [USER] Reported the background still appeared black after restarting the dev server.
- 2026-11-09 [CODE] Replaced the hidden negative-z pseudo-element effect with a visible fixed layer containing slowly drifting colored gradients and subtle grain.
- 2026-11-09 [CODE] Added file-type-specific Explorer icons and a Terminal link in the top navigation.
- 2026-11-09 [CODE] Replaced generic file glyphs with `@react-symbols/icons` Symbols icons for TSX, Markdown, and PDF files.
- 2026-11-09 [CODE] Published the supplied resume at `public/resume.pdf`, fixed the public URL, and added separate view and download actions.
- 2026-11-09 [USER] Superseded the separate bottom resume actions with one `download resume` button; the email action remains.
- 2026-11-09 [CODE] Fixed contact email alignment: the auto spacer now applies only to trailing external-link arrows, not the email icon.
- 2026-11-09 [USER] Requested a floating header that remains visible while scrolling.
- 2026-11-09 [CODE] Fixed the titlebar to the viewport and reserved its height in the workspace layout so it persists across the full page.
- 2026-11-09 [USER] Requested a complete UI design audit and fix pass.
- 2026-11-09 [CODE] Aligned all desktop sections to the editor canvas, preserved scrollable header navigation on compact screens, added focus states and horizontal-overflow protection, and connected the terminal `resume` command to the PDF.
- 2026-11-09 [CODE] Fixed header stacking: the titlebar now mounts directly under the page root, outside the workspace stacking context.
- 2026-11-09 [CODE] Restored the visual floating-header treatment with viewport insets, rounded border, elevated shadow, and reserved top space while preserving the page-root stacking fix.
- 2026-11-09 [CODE] Corrected the selector-priority bug that overrode the titlebar’s fixed positioning after it became a page-root child.
- 2026-11-09 [USER] Requested that the local development server be closed.
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
- 2026-11-09 [TOOL] `npm run build` passed after the timeline update.
- 2026-11-09 [TOOL] `npm run build` passed after adding project links.
- 2026-11-09 [TOOL] `npm run build` passed after the background update.
- 2026-11-09 [TOOL] `npm run build` passed after making the animated background visible.
- 2026-11-09 [TOOL] `npm run build` passed after updating sidebar icons and Terminal navigation.
- 2026-11-09 [TOOL] `npm run build` passed after switching Explorer and editor tabs to Symbols icons; Tailwind emitted the existing no-utility-classes warning.
- 2026-11-09 [TOOL] Added `@react-symbols/icons` 1.4.1 (MIT); npm reported 2 audit findings in the dependency tree.
- 2026-11-09 [TOOL] `npm run build` passed after fixing resume view/download links.
- 2026-11-09 [TOOL] `npm run build` passed after consolidating the bottom resume actions.
- 2026-11-09 [TOOL] `npm run build` passed after the contact alignment fix; existing Tailwind no-utility-classes warning remains.
- 2026-11-09 [TOOL] `npm run build` passed after fixing the header to the viewport; existing Tailwind no-utility-classes warning remains.
- 2026-11-09 [TOOL] `npm run build` passed after the UI consistency pass; existing Tailwind no-utility-classes warning remains.
- 2026-11-09 [TOOL] Sent SIGINT to the local `next dev` session; the session is no longer running.
- 2026-11-09 [TOOL] `npm run build` passed after repairing the header stacking context; existing Tailwind no-utility-classes warning remains.
- 2026-11-09 [TOOL] `npm run build` passed after restoring the floating header treatment; existing Tailwind no-utility-classes warning remains.
- 2026-11-09 [TOOL] `npm run build` passed after fixing the titlebar selector conflict; existing Tailwind no-utility-classes warning remains.
