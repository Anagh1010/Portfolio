import { motion } from "framer-motion";
import {
  BriefcaseBusiness, ChevronDown, ChevronRight, FileCode2, Files, Folder,
  Github, Linkedin, Search, Settings, Terminal, UserRound,
} from "lucide-react";
import { CodeContent } from "@/components/portfolio/code-content";
import { portfolioTabs, profile, technologies, type PortfolioTab } from "@/data/portfolio";

type WorkspaceProps = { activeTab: PortfolioTab; expanded: boolean; onSelectTab: (tab: PortfolioTab) => void; onToggleExplorer: () => void };
const navItems = [["about", "About"], ["experience", "Experience"], ["projects", "Projects"], ["skills", "Skills"], ["contact", "Contact"]] as const;

function fileIcon(tab: PortfolioTab) { return <FileCode2 size={14} className={tab.endsWith(".md") ? "file-md" : "file-ts"} />; }

function ActivityRail() {
  return <aside className="activity-rail" aria-label="Workspace tools"><Files size={22} className="rail-active" /><Search size={21} /><UserRound size={21} /><BriefcaseBusiness size={21} /><Terminal size={21} /><Settings size={21} className="rail-bottom" /></aside>;
}

function Explorer({ activeTab, expanded, onSelectTab, onToggleExplorer }: WorkspaceProps) {
  return <aside className="explorer"><div className="explorer-heading">EXPLORER <span>•••</span></div><button className="tree-root" onClick={onToggleExplorer}>{expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />} anagh-bajpai</button>{expanded && <div className="tree-children"><div className="tree-folder"><ChevronDown size={13} /><Folder size={14} /> src</div>{portfolioTabs.map((tab) => <button className={`tree-file ${tab === activeTab ? "selected" : ""}`} key={tab} onClick={() => onSelectTab(tab)}>{fileIcon(tab)}{tab}</button>)}</div>}<div className="explorer-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={14} />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} />LinkedIn</a><a href={profile.resume} target="_blank"><FileCode2 size={14} />resume.pdf</a></div></aside>;
}

function Titlebar() {
  return <header className="vscode-titlebar"><a className="wordmark" href="#home">anaghbajpai.dev</a><nav>{navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><a className="command-palette" href="#contact"><span>⌘</span>K</a></header>;
}

function Hero() {
  return <section className="hero" id="home"><div className="availability-dot">Available for internships & full-time</div><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}><p className="hero-comment">// hello, world — my name is</p><h1>{profile.firstName}<span> Bajpai</span><b>.</b></h1><p className="hero-role"><i>❯</i>{profile.role}</p><p className="hero-copy">I build reliable full-stack products and applied machine learning systems, from thoughtful interfaces to the infrastructure behind them.</p><div className="hero-actions"><a href="#projects" className="run-button">$ npm run projects</a><a href={`mailto:${profile.email}`} className="contact-button">POST /contact</a></div></motion.div><div className="hero-meta"><span>India · Delhi</span><span>DTU · 8.86 / 10 CGPA</span><span>2023 — 2027</span></div></section>;
}

function Editor({ activeTab, onSelectTab }: Pick<WorkspaceProps, "activeTab" | "onSelectTab">) {
  return <section className="editor-window" id="editor"><div className="tabbar">{portfolioTabs.map((tab) => <button key={tab} className={tab === activeTab ? "active-tab" : ""} onClick={() => onSelectTab(tab)}>{fileIcon(tab)}{tab}</button>)}</div><div className="code-area"><CodeContent tab={activeTab} /></div><div className="editor-footer"><span>◉ 0 problems</span><span>Ln 14, Col 20</span><span>TypeScript React</span></div></section>;
}

export function Workspace(props: WorkspaceProps) {
  return <div className="workspace-frame"><Titlebar /><div className="workspace-body"><ActivityRail /><Explorer {...props} /><main className="workspace-main"><Hero /><Editor activeTab={props.activeTab} onSelectTab={props.onSelectTab} /><div className="tech-marquee" aria-label="Technical skills"><div>{[...technologies, ...technologies].map((tech, index) => <span key={`${tech}-${index}`}>{tech}<b>✦</b></span>)}</div></div></main></div></div>;
}
