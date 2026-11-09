import type { ReactNode } from "react";
import type { PortfolioTab } from "@/data/portfolio";

function Line({ n, children }: { n: number; children?: ReactNode }) { return <div className="code-line"><span className="line-number">{n}</span><span>{children}</span></div>; }

function DeveloperCode() {
  return <div className="code-lines"><Line n={1}><span className="purple">const</span> <span className="blue">anagh</span> = {"{"}</Line><Line n={2}>　<span className="cyan">role</span>: <span className="green">"Software Engineer"</span>,</Line><Line n={3}>　<span className="cyan">focus</span>: [<span className="green">"Web"</span>, <span className="green">"Systems"</span>, <span className="green">"ML"</span>],</Line><Line n={4}>　<span className="cyan">stack</span>: {"{"}</Line><Line n={5}>　　<span className="cyan">frontend</span>: <span className="green">"React · Next.js · TypeScript"</span>,</Line><Line n={6}>　　<span className="cyan">backend</span>: <span className="green">"Node.js · APIs · Python"</span>,</Line><Line n={7}>　　<span className="cyan">database</span>: <span className="green">"MongoDB · PostgreSQL · Supabase"</span>,</Line><Line n={8}>　{`}`},</Line><Line n={9}>　<span className="cyan">building</span>: <span className="green">"Roamwise · QuickCart"</span>,</Line><Line n={10}>　<span className="cyan">curious</span>: <span className="orange">true</span>,</Line><Line n={11}>　<span className="cyan">hireable</span>: <span className="orange">true</span>,</Line><Line n={12}>{`}`} <span className="purple">satisfies</span> <span className="blue">Engineer</span>;</Line><Line n={13} /><Line n={14}><span className="purple">export default</span> anagh;</Line></div>;
}

function AboutCode() {
  return <div className="code-lines"><Line n={1}><span className="comment"># about.md</span></Line><Line n={2} /><Line n={3}><span className="purple">##</span> From schema to screen, I build the full request lifecycle.</Line><Line n={4} /><Line n={5}><span className="purple">##</span> whoami</Line><Line n={6}>I&apos;m a Software Engineering student at DTU who enjoys</Line><Line n={7}>turning ideas into useful products and reliable systems.</Line><Line n={8} /><Line n={9}><span className="purple">##</span> principles</Line><Line n={10}>- <span className="cyan">Understand</span> the problem before writing code.</Line><Line n={11}>- <span className="cyan">Build</span> systems people can maintain.</Line><Line n={12}>- <span className="cyan">Iterate</span> with feedback and measurable outcomes.</Line><Line n={13} /><Line n={14}><span className="comment">&gt; Currently building full-stack products and ML projects.</span></Line></div>;
}

function ShowcaseCode() {
  return <div className="code-lines"><Line n={1}><span className="comment">// selected work</span></Line><Line n={2} /><Line n={3}><span className="purple">export const</span> <span className="blue">projects</span> = [</Line><Line n={4}>　<span className="green">"Roamwise"</span>, <span className="comment">// AI travel planner</span></Line><Line n={5}>　<span className="green">"QuickCart"</span>, <span className="comment">// full-stack commerce</span></Line><Line n={6}>　<span className="green">"Object Detection"</span>, <span className="comment">// Pascal VOC pipeline</span></Line><Line n={7}>];</Line><Line n={8} /><Line n={9}><span className="purple">type</span> <span className="blue">Focus</span> = <span className="green">"full-stack"</span> | <span className="green">"machine-learning"</span>;</Line></div>;
}

function ContactCode() {
  return <div className="code-lines"><Line n={1}><span className="purple">export const</span> <span className="blue">contact</span> = {"{"}</Line><Line n={2}>　<span className="cyan">email</span>: <span className="green">"anaghb1010@gmail.com"</span>,</Line><Line n={3}>　<span className="cyan">location</span>: <span className="green">"Delhi, India"</span>,</Line><Line n={4}>　<span className="cyan">status</span>: <span className="green">"Open to opportunities"</span>,</Line><Line n={5}>{`}`};</Line></div>;
}

export function CodeContent({ tab }: { tab: PortfolioTab }) {
  const content: Record<PortfolioTab, ReactNode> = { "index.tsx": <DeveloperCode />, "about.md": <AboutCode />, "showcase.tsx": <ShowcaseCode />, "contact.tsx": <ContactCode /> };
  return content[tab];
}
