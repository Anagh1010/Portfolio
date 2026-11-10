"use client";

import { Github, Menu, Search, X } from "lucide-react";
import { FolderIcon } from "@/components/portfolio/file-icon";
import { profile, type PortfolioTab } from "@/data/portfolio";

interface HeaderProps {
  activeTab: PortfolioTab;
  onOpenCommandPalette: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export function Header({
  activeTab,
  onOpenCommandPalette,
  mobileMenuOpen,
  onToggleMobileMenu,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-10 items-center justify-between border-b border-white/[0.06] bg-[#09090b]/80 px-3 backdrop-blur-xl sm:px-4">
      {/* Left: Window dots + Wordmark */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80 transition-colors hover:bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80 transition-colors hover:bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80 transition-colors hover:bg-emerald-500/80" />
        </div>
        <a
          href="#home"
          className="text-xs sm:text-sm font-semibold tracking-tighter text-zinc-100 hover:text-white transition-colors"
        >
          anaghbajpai<span className="text-emerald-400">.</span>dev
        </a>
      </div>

      {/* Center: File path breadcrumb */}
      <div className="hidden items-center gap-2 font-mono text-xs text-zinc-500 md:flex">
        <FolderIcon className="h-3.5 w-3.5 text-zinc-400" />
        <span>anagh-bajpai</span>
        <span className="text-zinc-700">/</span>
        <span className="text-zinc-300">src/{activeTab}</span>
      </div>

      {/* Right: Quick action buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="flex h-7 items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.02] pl-2.5 pr-1.5 text-xs text-zinc-400 transition hover:bg-white/[0.05] hover:text-zinc-200"
          aria-label="Open command palette"
        >
          <Search className="h-3.5 w-3.5 text-zinc-400" />
          <span className="hidden sm:inline">Go to file</span>
          <kbd className="rounded bg-white/[0.06] px-1.5 font-mono text-[10px] text-zinc-400">
            ⌘K
          </kbd>
        </button>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-7 w-7 place-items-center rounded-md border border-white/[0.08] text-zinc-400 transition hover:bg-white/[0.05] hover:text-zinc-100"
          aria-label="GitHub profile"
          href={profile.github}
        >
          <Github className="h-3.5 w-3.5" />
        </a>

        {/* Mobile menu button (<lg) */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="grid h-7 w-7 place-items-center rounded-md border border-white/[0.08] text-zinc-400 transition hover:bg-white/[0.05] hover:text-zinc-100 lg:hidden"
          aria-label="Toggle explorer"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
