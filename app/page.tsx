"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/portfolio/header";
import { Sidebar } from "@/components/portfolio/sidebar";
import { Tabbar } from "@/components/portfolio/tabbar";
import { StatusBar } from "@/components/portfolio/status-bar";
import { CommandPalette } from "@/components/portfolio/command-palette";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { TerminalSection } from "@/components/portfolio/terminal-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { tabToSectionId, type PortfolioTab } from "@/data/portfolio";

export default function Home() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("index.tsx");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync active tab with scroll position
  useEffect(() => {
    const sectionIds: { tab: PortfolioTab; id: string }[] = [
      { tab: "index.tsx", id: "home" },
      { tab: "about.md", id: "about" },
      { tab: "package.json", id: "stack" },
      { tab: "showcase.tsx", id: "projects" },
      { tab: "experience.log", id: "experience" },
      { tab: "run.sh", id: "terminal" },
      { tab: "contact.ts", id: "contact" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(sectionIds[i].tab);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectTab = (tab: PortfolioTab) => {
    setActiveTab(tab);
    const targetId = tabToSectionId[tab];
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-400/20 selection:text-emerald-300">
      {/* Background Grid Pattern inspired by anoopsonkriya.dev */}
      <div aria-hidden="true" className="grid-bg pointer-events-none fixed inset-0 z-0" />

      {/* Fixed Header (top-0 h-10) */}
      <Header
        activeTab={activeTab}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
      />

      {/* Fixed Sidebar (Activity bar + Explorer) */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main Workspace Area (offset by sidebar w-72 on lg and top-10 header) */}
      <main className="relative z-10 lg:pl-72 pt-10 pb-7">
        {/* Sticky Tabbar under header */}
        <Tabbar activeTab={activeTab} onSelectTab={handleSelectTab} />

        {/* Portfolio Content Sections */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TerminalSection />
        <ContactSection />
      </main>

      {/* Fixed Status Bar (bottom-0 h-7) */}
      <StatusBar activeTab={activeTab} />

      {/* Command Palette (⌘K) Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectTab={handleSelectTab}
      />
    </div>
  );
}
