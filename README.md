# Anagh Bajpai — Developer Portfolio

A responsive, high-performance developer portfolio built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed around an interactive **VS Code / IDE workspace** aesthetic.

All content across the entire portfolio is driven by a **single configuration file** (`data/portfolio.ts`), making it effortless to customize, update projects, or add new milestones without touching UI components.

---

## ✨ Features

- **VS Code Workspace Interface:**
  - **Fixed Header (`h-10`):** Window controls, custom wordmark, dynamic file path breadcrumbs (`anagh-bajpai / src/index.tsx`), and quick `⌘K` search trigger.
  - **Activity Rail & Explorer (`w-72`):** Left-side navigation with native file-type icons (`@react-symbols/icons`) for `.tsx`, `.md`, `.json`, `.log`, and `.sh` files, collapsible folders, and direct profile shortcuts.
  - **Sticky Editor Tabbar:** Tab bar that highlights active files, supports mouse navigation, and tracks viewport position.
  - **Live Status Bar (`h-7`):** Real-time Git branch indicator (`main`), sync status, diagnostics (`0 · 0`), language mode (`TypeScript React`), and an interactive scroll progress bar.

- **Single-File Content Engine (`data/portfolio.ts`):**
  - All personal information, roles, bio, project showcases, dependencies, release history, and terminal commands reside in one typed configuration file.

- **Interactive Terminal (`run.sh`):**
  - Integrated zsh shell with command history navigation (`↑`/`↓`), responsive execution, and commands (`help`, `about`, `projects`, `experience`, `skills`, `resume`, `whoami`, `clear`, `ls`).

- **Quick Command Palette (`⌘K` / `Ctrl+K`):**
  - Global modal palette to jump instantly between workspace files and external links (GitHub, LinkedIn, Resume, Email) with keyboard arrows and search filtering.

- **Editorial Section Layouts:**
  - **`index.tsx` (Hero):** Live availability badge, dual-tone display typography, dynamic typewriter role switcher with blinking emerald caret, quick action buttons, and an interactive TypeScript code card.
  - **`about.md` (About):** Line-numbered markdown canvas covering whoami, core engineering principles, and academic credentials from Delhi Technological University (DTU).
  - **`package.json` (Dependencies):** JSON dependency manifests formatted like real editor files with syntax coloring, package versioning, and subtle gradient proficiency bars.
  - **`showcase.tsx` (Projects):** Featured project cards with numbered badges, architectural highlights, tags, and direct source/live demo links (Roamwise, QuickCart, Pascal VOC Object Detection).
  - **`experience.log` (Release History):** Vertical glowing timeline documenting software engineering internships, research appointments, and hackathon wins with no text clipping.
  - **`contact.ts` (Contact):** Direct email mailto links, resume download, and 1-click clipboard copy.

- **Modern Visual Polish:**
  - Subtle `.grid-bg` radial-masked canvas, near-black zinc palette (`#09090b`), and clean typography pairing **Inter** with **JetBrains Mono**.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [@react-symbols/icons](https://github.com/pheralb/react-symbols) & [Lucide React](https://lucide.dev/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Structure

```text
portfolio-main/
├── app/
│   ├── globals.css          # Tailwind base, grid-bg mask, fonts, scrollbar
│   ├── layout.tsx           # Metadata, OpenGraph, viewport configuration
│   └── page.tsx             # Main canvas, scroll spy, and workspace assembly
├── components/
│   └── portfolio/
│       ├── header.tsx            # Fixed top titlebar (breadcrumbs, ⌘K trigger)
│       ├── sidebar.tsx           # Activity rail & explorer file tree
│       ├── tabbar.tsx            # Sticky editor tab navigation
│       ├── status-bar.tsx        # Bottom status bar with scroll progress
│       ├── command-palette.tsx   # ⌘K search and command modal dialog
│       ├── file-icon.tsx         # File-type icon renderer (Reactts, Markdown, etc.)
│       ├── hero-section.tsx      # Section 0 (Home / Typewriter / developer.ts)
│       ├── about-section.tsx     # Section 1 (about.md line-numbered markdown)
│       ├── skills-section.tsx    # Section 2 (package.json dependency manifests)
│       ├── projects-section.tsx  # Section 3 (showcase.tsx project cards)
│       ├── experience-section.tsx# Section 4 (experience.log release history)
│       ├── terminal-section.tsx  # Section 5 (run.sh interactive shell)
│       └── contact-section.tsx   # Section 6 (contact.ts communication channels)
├── data/
│   └── portfolio.ts         # ⭐ SINGLE SOURCE OF TRUTH (All content lives here)
├── public/
│   └── resume.pdf           # Downloadable PDF resume
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # Strict TypeScript configuration
└── package.json             # Scripts & dependencies
```

---

## ⚙️ Updating Portfolio Content

To customize or update the website with your own information, edit **[`data/portfolio.ts`](data/portfolio.ts)**:

| Section in `data/portfolio.ts` | What it Controls |
|---|---|
| `profile` | Name, roles, bio, contact details, social links, availability status |
| `aboutData` | Heading, bio paragraphs, core principles, and education details |
| `dependencyGroups` | The JSON dependency manifests shown in the Dependencies section |
| `strengths` | Domain score cards (Frontend, Backend, ML, Databases) |
| `projects` | Featured project cards (title, subtitle, summary, details, tech stack, links) |
| `experience` | Release history timeline (roles, dates, company, accomplishments) |
| `terminalCommands` | Responses delivered by the interactive terminal shell |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** `v18.17+` (v20+ or v22+ LTS recommended)
- **Package Manager:** `npm` (or `pnpm` / `yarn`)

### Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Anagh1010/portfolio.git
   cd portfolio-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Production Build

To test and build the production bundle:

```bash
npm run build
npm run start
```

Static HTML pages are optimized and exported automatically using Next.js Turbopack.

---

## 🚢 Deployment

Deploy directly to **Vercel** with zero extra configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your repository to GitHub.
2. Import the project in the [Vercel Dashboard](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy the site.

---

## 📄 License

MIT © [Anagh Bajpai](https://github.com/Anagh1010). Created for personal and developer portfolio use.
