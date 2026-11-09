"use client";

import { useState } from "react";
import { Workspace } from "@/components/portfolio/workspace";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HighlightsSection,
  ProjectsSection,
  SkillsSection,
  TerminalSection,
} from "@/components/portfolio/portfolio-sections";
import { terminalCommands, type PortfolioTab } from "@/data/portfolio";

const welcomeLines = ["Welcome to anagh.dev shell.", "Type `help` to explore the portfolio."];

export default function Home() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("index.tsx");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>(welcomeLines);
  const [expanded, setExpanded] = useState(true);

  const runCommand = (raw: string) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setTerminalLines([]);
      setTerminalInput("");
      return;
    }
    const response = terminalCommands[command] ?? `zsh: command not found: ${command}. Type 'help' for available commands.`;
    setTerminalLines((lines) => [...lines, `anagh@portfolio:~$ ${raw}`, response]);
    setTerminalInput("");
  };

  return <main>
    <Workspace activeTab={activeTab} expanded={expanded} onSelectTab={setActiveTab} onToggleExplorer={() => setExpanded((open) => !open)} />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <HighlightsSection />
    <TerminalSection lines={terminalLines} input={terminalInput} onInputChange={setTerminalInput} onRun={runCommand} />
    <ContactSection />
  </main>;
}
