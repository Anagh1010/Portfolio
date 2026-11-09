import type { ReactNode } from "react";
import type { PortfolioTab } from "@/data/portfolio";

function CodeLine({ n, children }: { n: string; children?: ReactNode }) {
  return <div className="code-line"><span className="line-number">{n}</span><span>{children}</span></div>;
}

function HeroCode() {
  return <div className="code-lines">
    <CodeLine n="01"><span className="purple">const</span> <span className="blue">anagh</span> <span className="white">=</span> {"{"}</CodeLine>
    <CodeLine n="02">　<span className="cyan">name</span>: <span className="green">"Anagh Bajpai"</span>,</CodeLine>
    <CodeLine n="03">　<span className="cyan">role</span>: <span className="green">"Software Engineer"</span>,</CodeLine>
    <CodeLine n="04">　<span className="cyan">education</span>: <span className="green">"B.Tech · DTU (2023–2027)"</span>,</CodeLine>
    <CodeLine n="05">　<span className="cyan">cgpa</span>: <span className="orange">8.86</span>,</CodeLine>
    <CodeLine n="06">　<span className="cyan">focus</span>: [<span className="green">"Full-stack"</span>, <span className="green">"Backend"</span>, <span className="green">"ML"</span>],</CodeLine>
    <CodeLine n="07">　<span className="cyan">frontend</span>: <span className="green">"React · Next.js · TypeScript"</span>,</CodeLine>
    <CodeLine n="08">　<span className="cyan">backend</span>: <span className="green">"Node.js · APIs · Python"</span>,</CodeLine>
    <CodeLine n="09">　<span className="cyan">databases</span>: <span className="green">"MongoDB · PostgreSQL"</span>,</CodeLine>
    <CodeLine n="10">　<span className="cyan">building</span>: [<span className="green">"Roamwise"</span>, <span className="green">"QuickCart"</span>],</CodeLine>
    <CodeLine n="11">　<span className="cyan">curious</span>: <span className="orange">true</span>,</CodeLine>
    <CodeLine n="12">　<span className="cyan">openToWork</span>: <span className="orange">true</span>,</CodeLine>
    <CodeLine n="13">{"}"} <span className="purple">satisfies</span> <span className="blue">Engineer</span>;</CodeLine>
    <CodeLine n="14"><span className="comment">// Always learning. Always building.</span></CodeLine>
  </div>;
}

function AboutCode() {
  return <div className="code-lines"><CodeLine n="01"><span className="comment"># about.md</span></CodeLine><CodeLine n="02"><span className="purple">##</span> <span className="white">Who I am</span></CodeLine><CodeLine n="03"><span className="green">Software Engineering student at DTU.</span></CodeLine><CodeLine n="04"><span className="green">Interested in full-stack engineering, backend</span></CodeLine><CodeLine n="05"><span className="green">systems, and applied machine learning.</span></CodeLine><CodeLine n="06" /><CodeLine n="07"><span className="purple">##</span> <span className="white">How I work</span></CodeLine><CodeLine n="08">- <span className="cyan">Understand</span> the problem before writing code.</CodeLine><CodeLine n="09">- <span className="cyan">Design</span> systems that are clear and reliable.</CodeLine><CodeLine n="10">- <span className="cyan">Iterate</span> with feedback and measurable outcomes.</CodeLine><CodeLine n="11" /><CodeLine n="12"><span className="comment">&gt; Building things that solve real problems.</span></CodeLine></div>;
}

function PackageCode() {
  return <div className="code-lines"><CodeLine n="01">{"{"}</CodeLine><CodeLine n="02">　<span className="cyan">"name"</span>: <span className="green">"anagh-bajpai"</span>,</CodeLine><CodeLine n="03">　<span className="cyan">"focus"</span>: [<span className="green">"full-stack"</span>, <span className="green">"backend"</span>, <span className="green">"machine-learning"</span>],</CodeLine><CodeLine n="04">　<span className="cyan">"languages"</span>: [<span className="green">"C/C++"</span>, <span className="green">"TypeScript"</span>, <span className="green">"Python"</span>, <span className="green">"Java"</span>],</CodeLine><CodeLine n="05">　<span className="cyan">"frontend"</span>: [<span className="green">"Next.js"</span>, <span className="green">"React"</span>, <span className="green">"Tailwind CSS"</span>],</CodeLine><CodeLine n="06">　<span className="cyan">"backend"</span>: [<span className="green">"Node.js"</span>, <span className="green">"Express"</span>, <span className="green">"Flask"</span>],</CodeLine><CodeLine n="07">　<span className="cyan">"data"</span>: [<span className="green">"MongoDB"</span>, <span className="green">"PostgreSQL"</span>]</CodeLine><CodeLine n="08">{"}"}</CodeLine></div>;
}

function ContributionCode() {
  return <div className="code-lines"><CodeLine n="01"><span className="comment"># contributions.log</span></CodeLine><CodeLine n="02"><span className="comment"># Contribution data not connected yet.</span></CodeLine><CodeLine n="03"><span className="green">Connect your GitHub profile to display real activity.</span></CodeLine><CodeLine n="04" /><CodeLine n="05"><span className="cyan">github</span> = <span className="orange">"Add your GitHub username"</span></CodeLine><CodeLine n="06"><span className="cyan">contributions</span> = <span className="orange">null</span> <span className="comment">// no fabricated stats</span></CodeLine></div>;
}

function ChangelogCode() {
  return <div className="code-lines"><CodeLine n="01"><span className="comment"># CHANGELOG.md</span></CodeLine><CodeLine n="02"><span className="purple">## 2026</span></CodeLine><CodeLine n="03"><span className="green">+ Graduate Engineer Trainee · Coforge</span></CodeLine><CodeLine n="04"><span className="green">+ Software Engineering Intern · DLED Labs, IIT Ropar</span></CodeLine><CodeLine n="05"><span className="green">+ Built Roamwise AI travel planner</span></CodeLine><CodeLine n="06"><span className="green">+ Built QuickCart e-commerce platform</span></CodeLine><CodeLine n="07" /><CodeLine n="08"><span className="purple">## 2023</span></CodeLine><CodeLine n="09"><span className="green">+ Started B.Tech in Software Engineering at DTU</span></CodeLine></div>;
}

function TerminalCode() {
  return <div className="code-lines"><CodeLine n="01"><span className="comment">#!/bin/zsh</span></CodeLine><CodeLine n="02"><span className="purple">echo</span> <span className="green">"Hello, I'm Anagh."</span></CodeLine><CodeLine n="03"><span className="purple">echo</span> <span className="green">"Thanks for stopping by."</span></CodeLine><CodeLine n="04"><span className="comment"># Explore the interactive terminal below.</span></CodeLine></div>;
}

function ContactCode() {
  return <div className="code-lines"><CodeLine n="01"><span className="purple">export const</span> <span className="blue">contact</span> = {"{"}</CodeLine><CodeLine n="02">　<span className="cyan">email</span>: <span className="green">"anaghb1010@gmail.com"</span>,</CodeLine><CodeLine n="03">　<span className="cyan">location</span>: <span className="green">"Delhi, India"</span>,</CodeLine><CodeLine n="04">　<span className="cyan">github</span>: <span className="orange">"Add GitHub URL"</span>,</CodeLine><CodeLine n="05">　<span className="cyan">linkedin</span>: <span className="orange">"Add LinkedIn URL"</span>,</CodeLine><CodeLine n="06">{"}"};</CodeLine></div>;
}

export function CodeContent({ tab }: { tab: PortfolioTab }) {
  const content = {
    "index.tsx": <HeroCode />, "about.md": <AboutCode />, "package.json": <PackageCode />,
    "contributions.log": <ContributionCode />, "CHANGELOG.md": <ChangelogCode />,
    "run.sh": <TerminalCode />, "contact.ts": <ContactCode />,
  } satisfies Record<PortfolioTab, ReactNode>;
  return content[tab];
}
