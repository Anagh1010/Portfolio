import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ChevronDown, ChevronRight, FileCode2, Folder, Mail } from "lucide-react";
import { CodeContent } from "@/components/portfolio/code-content";
import { portfolioTabs, type PortfolioTab } from "@/data/portfolio";

type WorkspaceProps = {
  activeTab: PortfolioTab;
  expanded: boolean;
  onSelectTab: (tab: PortfolioTab) => void;
  onToggleExplorer: () => void;
};

function tabIcon(tab: PortfolioTab) {
  if (tab.endsWith(".md")) return "M↓";
  if (tab.endsWith(".json")) return "{}";
  if (tab.endsWith(".log")) return "≋";
  if (tab.endsWith(".sh")) return "$";
  return "TS";
}

function fileClass(tab: PortfolioTab) {
  if (tab.endsWith(".md")) return "file-md";
  if (tab.endsWith(".json")) return "file-json";
  return "file-ts";
}

function Explorer({ activeTab, expanded, onSelectTab, onToggleExplorer }: WorkspaceProps) {
  const selectTab = (tab: PortfolioTab) => {
    onSelectTab(tab);
    document.getElementById("editor")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return <aside className="explorer">
    <div className="explorer-title">EXPLORER <span>•••</span></div>
    <button className="tree-root" onClick={onToggleExplorer}>{expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />} <Folder size={15} /> ANAGH-BAJPAI</button>
    {expanded && <div className="tree-children">
      <div className="tree-folder"><ChevronDown size={13} /><Folder size={14} /> src</div>
      {portfolioTabs.map((tab) => <button key={tab} className={`tree-file ${activeTab === tab ? "selected" : ""}`} onClick={() => selectTab(tab)}><FileCode2 size={14} className={fileClass(tab)} />{tab}</button>)}
    </div>}
    <div className="explorer-bottom"><span className="pulse-dot" /> WORKSPACE READY</div>
  </aside>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-kicker"><span className="prompt">~/</span> HELLO, WORLD <span className="line" /></div>
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
      <p className="eyebrow">SOFTWARE ENGINEERING STUDENT · DELHI, INDIA</p>
      <h1>Anagh <span>Bajpai</span><b>.</b></h1>
      <div className="role-line"><span className="role-caret">❯</span> Full-stack Developer <span className="role-divider">/</span> Software Engineer</div>
      <p className="hero-copy">I build thoughtful digital products, from polished interfaces to reliable backend systems. Currently pursuing Software Engineering at Delhi Technological University.</p>
      <div className="hero-buttons"><a className="primary-button" href="#projects">Explore projects <ArrowUpRight size={16} /></a><a className="secondary-button" href="mailto:anaghb1010@gmail.com">Get in touch <Mail size={15} /></a></div>
    </motion.div>
    <div className="hero-meta"><span><i /> Based in India · Open to opportunities</span><span>DTU <b>·</b> 8.86 / 10 CGPA</span><span className="meta-right">SCROLL TO EXPLORE <ArrowDownRight size={13} /></span></div>
  </section>;
}

function Editor({ activeTab, onSelectTab }: Pick<WorkspaceProps, "activeTab" | "onSelectTab">) {
  return <section className="editor-window" id="editor">
    <div className="editor-chrome"><div className="window-dots"><i /><i /><i /></div><div className="editor-path">~/anagh-portfolio/src/<span>{activeTab}</span></div><span className="editor-status">● saved</span></div>
    <div className="tabbar">{portfolioTabs.map((tab) => <button key={tab} className={activeTab === tab ? "active-tab" : ""} onClick={() => onSelectTab(tab)}><span className="tab-icon">{tabIcon(tab)}</span>{tab}</button>)}</div>
    <div className="code-area"><CodeContent tab={activeTab} /></div>
    <div className="editor-footer"><span>◉ No issues found</span><span>TypeScript React · UTF-8</span><span>Ln 18, Col 24</span></div>
  </section>;
}

export function Workspace(props: WorkspaceProps) {
  return <div className="shell"><Explorer {...props} /><div className="main-column"><Hero /><Editor activeTab={props.activeTab} onSelectTab={props.onSelectTab} /></div></div>;
}
