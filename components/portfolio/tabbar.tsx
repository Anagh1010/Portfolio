"use client";

import { PortfolioFileIcon } from "@/components/portfolio/file-icon";
import { portfolioTabs, tabToSectionId, type PortfolioTab } from "@/data/portfolio";
import { X } from "lucide-react";

interface TabbarProps {
  activeTab: PortfolioTab;
  onSelectTab: (tab: PortfolioTab) => void;
}

export function Tabbar({ activeTab, onSelectTab }: TabbarProps) {
  const handleTabClick = (tab: PortfolioTab) => {
    onSelectTab(tab);
    const targetId = tabToSectionId[tab];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-10 z-30 flex items-center border-b border-white/[0.06] bg-[#09090b]/90 backdrop-blur-md overflow-x-auto scrollbar-none font-mono text-xs select-none">
      {portfolioTabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className={`group flex items-center gap-2 border-r border-white/[0.06] px-3.5 py-2 transition-colors shrink-0 ${
              isActive
                ? "border-t-2 border-t-emerald-400 bg-white/[0.04] text-zinc-100 font-medium"
                : "border-t-2 border-t-transparent text-zinc-500 hover:bg-white/[0.02] hover:text-zinc-300"
            }`}
          >
            <PortfolioFileIcon file={tab} />
            <span>{tab}</span>
            <span
              className={`rounded-sm p-0.5 opacity-0 transition-opacity group-hover:opacity-100 ${
                isActive ? "opacity-60 hover:opacity-100" : "hover:bg-white/10"
              }`}
            >
              <X className="h-3 w-3 text-zinc-400" />
            </span>
          </button>
        );
      })}
    </div>
  );
}
