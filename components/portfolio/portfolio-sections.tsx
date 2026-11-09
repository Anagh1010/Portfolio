import { motion } from "framer-motion";
import { ArrowUpRight, Download, ExternalLink, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { experience, profile, projects, skillGroups, strengths } from "@/data/portfolio";

function FileHeader({ file, number, title }: { file: string; number: string; title: string }) {
  return <div className="file-header"><span>~/{file}</span><span>// {number}</span><h2>{title}</h2></div>;
}

export function AboutSection() {
  return <section className="portfolio-section about-file" id="about"><FileHeader file="about.md" number="01" title="From idea to interface, I build useful systems." /><div className="about-layout"><div className="markdown-sheet"><p className="sheet-label">## whoami</p><p>I&apos;m a Software Engineering student at Delhi Technological University with a practical interest in full-stack development, backend systems, and applied machine learning.</p><p className="sheet-label">## principles</p><ul><li>Start with the problem, then choose the tools.</li><li>Keep code clear enough for the next contributor.</li><li>Use feedback to improve the product, not just the implementation.</li></ul><p className="quote">&gt; Currently open to internships and full-time opportunities.</p></div><aside className="stats-panel"><div><span>education</span><strong>B.Tech Software Engineering</strong><small>DTU · 2023 — 2027</small></div><div><span>cgpa</span><strong>8.86 / 10</strong><small>Software Engineering</small></div><div><span>based_in</span><strong>Delhi, India</strong><small>Available remotely</small></div></aside></div></section>;
}

export function SkillsSection() {
  return <section className="portfolio-section" id="skills"><FileHeader file="package.json" number="02" title="Dependencies" /><p className="section-copy">The tools I reach for when building web products and learning systems.</p><div className="dependency-grid">{skillGroups.map((group) => <article className="dependency-card" key={group.label}><div className="panel-tab">{group.label}</div><pre>{"{"}{group.entries.map((entry, index) => <span key={entry}><b>"{entry.toLowerCase().replaceAll(" ", "-")}"</b>: <i>"active"</i>{index < group.entries.length - 1 ? "," : ""}{"\n"}</span>)}{"}"}</pre></article>)}</div><div className="strength-grid">{strengths.map(([score, label, detail]) => <article key={label}><strong>{score}</strong><div><h3>{label}</h3><p>{detail}</p></div></article>)}</div></section>;
}

export function ExperienceSection() {
  return <section className="portfolio-section" id="experience"><FileHeader file="experience.log" number="03" title="Experience, in production." /><div className="experience-list">{experience.map((item, index) => <motion.article key={item.company} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><div className="experience-meta"><span>{item.date}</span><span>{item.mode}</span></div><div className="experience-content"><h3>{item.role}</h3><p>{item.company}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></motion.article>)}</div></section>;
}

export function ProjectsSection() {
  return <section className="portfolio-section" id="projects"><FileHeader file="showcase.tsx" number="04" title="Selected work" /><div className="project-grid">{projects.map((project, index) => <motion.article key={project.name} className="showcase-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><div className="card-number">0{index + 1}<span>{project.period}</span></div><p className="project-kind">{project.type}</p><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.sourceUrl} target="_blank" rel="noreferrer"><Github size={14} /> Source <ArrowUpRight size={12} /></a>{"liveUrl" in project && <a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live demo <ArrowUpRight size={12} /></a>}</div></motion.article>)}</div></section>;
}

export function HighlightsSection() {
  const entries = [
    { date: "June — July 2026", kind: "Experience", title: "Graduate Engineer Trainee · Coforge", description: "Engineered error handling and activity tracking across primary modules; documented database blueprints and schema fields for cross-team use." },
    { date: "January — March 2026", kind: "Internship", title: "Software Engineering Intern · DLED Labs, IIT Ropar", description: "Completed the Vibe MERN track, built applications with REST APIs and JWT authentication, and refactored multi-module code under senior mentorship." },
    { date: "2026", kind: "Milestone", title: "Built Roamwise and QuickCart", description: "Delivered full-stack products spanning AI-assisted travel planning, commerce workflows, authentication, payments, and persistent data." },
    { date: "2025", kind: "Milestone", title: "Object Detection & Classification", description: "Built a Pascal VOC 2012 recognition pipeline and achieved 87.25% accuracy, 87.22% weighted F1-score, and 0.993 macro AUC." },
    { date: "2025", kind: "Achievement", title: "1st Place · Execute 5.0", description: "Won first place at the Execute 5.0 Hackathon organised by the E-Cell at Delhi Technological University." },
  ];
  return <section className="portfolio-section" id="highlights"><FileHeader file="experience.log" number="05" title="Experience & milestones" /><div className="milestone-timeline">{entries.map((entry, index) => <motion.article key={entry.title} className="milestone-item" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}><div className="milestone-date">{entry.date}</div><div className="milestone-marker"><i /></div><div className="milestone-card"><div className="milestone-kind">{entry.kind}</div><h3>{entry.title}</h3><p>{entry.description}</p></div></motion.article>)}</div></section>;
}

export function TerminalSection({ lines, input, onInputChange, onRun }: { lines: string[]; input: string; onInputChange: (value: string) => void; onRun: (value: string) => void }) {
  return <section className="portfolio-section" id="terminal"><FileHeader file="run.sh" number="06" title="Interactive shell" /><p className="section-copy">Type <code>help</code> to explore. The shell accepts the same commands as the workspace.</p><div className="terminal-shell"><div className="terminal-title"><span><Terminal size={14} /> TERMINAL</span><span>zsh — 120×32</span></div><div className="terminal-output">{lines.map((line, index) => <pre className={line.startsWith("anagh@") ? "terminal-command" : ""} key={index}>{line}</pre>)}<form onSubmit={(event) => { event.preventDefault(); onRun(input); }}><span>anagh@dev:~/portfolio$</span><input value={input} onChange={(event) => onInputChange(event.target.value)} aria-label="Portfolio terminal" autoComplete="off" /><i /></form></div></div></section>;
}

export function ContactSection() {
  return <section className="contact-file" id="contact"><div><p className="hero-comment">// get in touch</p><h2>Let&apos;s build something <span>useful.</span></h2><p>I&apos;m happy to discuss software, collaboration, and opportunities to learn and contribute.</p><div className="contact-actions"><a className="run-button" href={`mailto:${profile.email}`}><Mail size={15} />email me</a><a className="contact-button" href={profile.resume} download="Anagh-Bajpai-Resume.pdf"><Download size={15} />download resume</a></div></div><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub <ArrowUpRight size={13} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn <ArrowUpRight size={13} /></a><a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a></div></section>;
}
