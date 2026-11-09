"use client";

import { useEffect, useState, useMemo } from "react";
import { Download, ExternalLink, Mail, Search, X } from "lucide-react";
import { PortfolioFileIcon } from "@/components/portfolio/file-icon";
import { portfolioTabs, profile, tabToSectionId, type PortfolioTab } from "@/data/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: PortfolioTab) => void;
}

export function CommandPalette({ isOpen, onClose, onSelectTab }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Close on Escape, toggle on Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const items = useMemo(() => {
    const fileItems = portfolioTabs.map((tab) => ({
      id: tab,
      label: tab,
      category: "Files",
      action: () => {
        onSelectTab(tab);
        const target = document.getElementById(tabToSectionId[tab]);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    }));

    const actionItems = [
      {
        id: "resume",
        label: "Download Resume (PDF)",
        category: "Actions",
        action: () => {
          window.open(profile.resume, "_blank");
          onClose();
        },
      },
      {
        id: "email",
        label: `Email (${profile.email})`,
        category: "Actions",
        action: () => {
          window.location.href = `mailto:${profile.email}`;
          onClose();
        },
      },
      {
        id: "github",
        label: "Open GitHub Profile",
        category: "Actions",
        action: () => {
          window.open(profile.github, "_blank");
          onClose();
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn Profile",
        category: "Actions",
        action: () => {
          window.open(profile.linkedin, "_blank");
          onClose();
        },
      },
    ];

    const all = [...fileItems, ...actionItems];
    if (!query.trim()) return all;
    return all.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, onSelectTab, onClose]);

  // Handle arrow keys & enter
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === "Enter" && items[selectedIndex]) {
      e.preventDefault();
      items[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-white/[0.1] bg-[#0d0d10] shadow-2xl shadow-black/70 overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-2.5 border-b border-white/[0.08] px-4 py-3">
          <Search className="h-4 w-4 text-zinc-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search files or commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-zinc-500 hover:text-zinc-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1 text-xs">
          {items.length === 0 ? (
            <div className="py-8 text-center text-zinc-500">No matching commands or files.</div>
          ) : (
            items.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors ${
                    isSelected
                      ? "bg-white/[0.08] text-white"
                      : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.category === "Files" ? (
                      <PortfolioFileIcon file={item.id as PortfolioTab} />
                    ) : item.id === "resume" ? (
                      <Download className="h-3.5 w-3.5 text-rose-400" />
                    ) : item.id === "email" ? (
                      <Mail className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <ExternalLink className="h-3.5 w-3.5 text-sky-400" />
                    )}
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] text-zinc-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-white/[0.06] bg-black/40 px-3.5 py-2 text-[10px] text-zinc-500">
          <span>Navigate with ↑ ↓ · Select with ↵</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
