"use client";

import {
  ExternalLink,
  Files,
  GitBranch,
  Github,
  Linkedin,
  Search,
  Settings,
  Terminal,
} from "lucide-react";
import { PortfolioFileIcon, FileIcon, FolderIcon } from "@/components/portfolio/file-icon";
import { portfolioTabs, profile, type PortfolioTab } from "@/data/portfolio";

interface SidebarProps {
  activeTab: PortfolioTab;
  onSelectTab: (tab: PortfolioTab) => void;
  onOpenCommandPalette: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({
  activeTab,
  onSelectTab,
  onOpenCommandPalette,
  isOpenMobile,
  onCloseMobile,
}: SidebarProps) {
  const handleTabClick = (tab: PortfolioTab) => {
    onSelectTab(tab);
    onCloseMobile();
  };

  return (
    <aside
      className={`fixed bottom-7 left-0 top-10 z-40 w-72 border-r border-white/[0.06] bg-[#0c0c0e]/95 backdrop-blur-xl transition-transform duration-300 ${
        isOpenMobile ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } flex`}
    >
      {/* 1. Left Narrow Activity Bar (w-12) */}
      <div className="flex w-12 flex-col items-center justify-between border-r border-white/[0.06] py-3">
        <div className="flex flex-col items-center gap-1.5 w-full">
          <button
            type="button"
            className="relative grid h-9 w-9 place-items-center rounded-md bg-white/[0.05] text-zinc-100"
            aria-label="Explorer"
          >
            <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-r bg-emerald-400" />
            <FolderIcon className="h-[18px] w-[18px] text-zinc-200" />
          </button>

          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="grid h-9 w-9 place-items-center rounded-md text-zinc-500 transition hover:text-zinc-200"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-md text-zinc-500 transition hover:text-zinc-200"
            aria-label="Source Control"
          >
            <GitBranch className="h-[18px] w-[18px]" />
          </a>

          <a
            href="#terminal"
            onClick={() => handleTabClick("run.sh")}
            className="grid h-9 w-9 place-items-center rounded-md text-zinc-500 transition hover:text-zinc-200"
            aria-label="Terminal"
          >
            <Terminal className="h-[18px] w-[18px]" />
          </a>
        </div>

        <a
          href="#contact"
          onClick={() => handleTabClick("contact.ts")}
          className="grid h-9 w-9 place-items-center rounded-md text-zinc-500 transition hover:text-zinc-200"
          aria-label="Settings / Contact"
        >
          <Settings className="h-[18px] w-[18px]" />
        </a>
      </div>

      {/* 2. Right Explorer File Tree (w-60) */}
      <div className="flex flex-1 flex-col justify-between overflow-hidden">
        <div className="flex-1 overflow-y-auto p-2 font-mono text-xs">
          {/* Header */}
          <div className="mb-2 flex items-center justify-between px-2 py-1 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            <span>Explorer</span>
            <span className="tracking-widest text-zinc-600">•••</span>
          </div>

          {/* Root Project Folder (Static, not collapsible, with anoopsonkriya.dev folder icon) */}
          <div className="flex h-7 items-center gap-1.5 px-2 text-xs font-semibold text-zinc-300">
            <FolderIcon className="h-3.5 w-3.5 text-zinc-500" />
            <span>anagh-bajpai</span>
          </div>

          {/* src folder and files (Static, not collapsible) */}
          <div className="mt-0.5 space-y-0.5 pl-3 border-l border-white/[0.04] ml-3.5">
            <div className="flex h-7 items-center gap-1.5 px-2 text-zinc-400 text-xs">
              <FolderIcon className="h-3.5 w-3.5 text-zinc-500" />
              <span>src</span>
            </div>

            <div className="space-y-0.5 pl-2.5">
              {portfolioTabs.map((tab) => {
                const isSelected = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabClick(tab)}
                    className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left transition-colors ${
                      isSelected
                        ? "bg-white/[0.08] text-white font-medium"
                        : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
                    }`}
                  >
                    <PortfolioFileIcon file={tab} />
                    <span className="truncate">{tab}</span>
                  </button>
                );
              })}

              {/* Direct resume link in explorer */}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-2 rounded px-2 py-1 text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
              >
                <FileIcon file="resume.pdf" />
                <span>resume.pdf</span>
                <ExternalLink className="h-2.5 w-2.5 ml-auto text-zinc-600" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Profiles / Quick Links at bottom of explorer */}
        <div className="border-t border-white/[0.06] p-3 bg-black/20 font-mono text-xs space-y-1">
          <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-600">
            Profiles
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded px-2 py-1 text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
          >
            <Github className="h-3.5 w-3.5 text-zinc-500" />
            <span>GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded px-2 py-1 text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
          >
            <Linkedin className="h-3.5 w-3.5 text-sky-400" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
