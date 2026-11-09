import { Github, Linkedin, Menu, X } from "lucide-react";

type TopbarProps = {
  mobileNav: boolean;
  onToggleMobileNav: () => void;
  onCloseMobileNav: () => void;
};

export function Topbar({ mobileNav, onToggleMobileNav, onCloseMobileNav }: TopbarProps) {
  return <header className="topbar">
    <a className="brand" href="#home"><span className="brand-mark">a.</span><span>anagh<span className="muted">.dev</span></span></a>
    <nav className={mobileNav ? "nav-links nav-open" : "nav-links"}>
      {["about", "experience", "projects", "stack", "contact"].map((item) => <a key={item} href={`#${item}`} onClick={onCloseMobileNav}>{item}</a>)}
    </nav>
    <div className="top-actions"><span className="availability"><i /> OPEN TO OPPORTUNITIES</span><a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a className="icon-link" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><button className="mobile-menu" onClick={onToggleMobileNav} aria-label="Toggle menu">{mobileNav ? <X /> : <Menu />}</button></div>
  </header>;
}
