"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, GitBranch, RefreshCw } from "lucide-react";
import type { PortfolioTab } from "@/data/portfolio";

export function StatusBar({ activeTab }: { activeTab: PortfolioTab }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalHeight)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languageMap: Record<PortfolioTab, string> = {
    "index.tsx": "TypeScript React",
    "about.md": "Markdown",
    "package.json": "JSON",
    "showcase.tsx": "TypeScript React",
    "experience.log": "Log",
    "run.sh": "Shell Script",
    "contact.ts": "TypeScript",
  };

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex h-7 items-center justify-between border-t border-white/[0.06] bg-[#0c0c0e] px-3 font-mono text-xs text-zinc-500">
      {/* Left side: Git branch, sync, problems */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="flex items-center gap-1.5 text-emerald-400/90 font-medium">
          <GitBranch className="h-3 w-3" />
          <span>main</span>
        </span>
        <span className="hidden items-center gap-1.5 sm:flex text-zinc-500">
          <RefreshCw className="h-3 w-3" />
          <span>synced</span>
        </span>
        <span className="hidden items-center gap-1.5 md:flex text-zinc-500">
          <AlertTriangle className="h-3 w-3 text-zinc-500" />
          <span>0 · 0</span>
        </span>
      </div>

      {/* Right side: Active file, line col, encoding, language, scroll bar */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-zinc-300 font-medium">{activeTab}</span>
        <span className="hidden sm:inline text-zinc-500">Ln 14, Col 20</span>
        <span className="hidden md:inline text-zinc-500">UTF-8</span>
        <span className="hidden lg:inline text-zinc-400">{languageMap[activeTab]}</span>

        {/* Mini progress bar */}
        <div className="h-1 w-16 sm:w-24 overflow-hidden rounded-full bg-white/[0.08]" title="Scroll progress">
          <div
            className="h-full origin-left bg-emerald-400/80 transition-all duration-150"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </footer>
  );
}
