"use client";

import { ArrowUpRight, ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-white/[0.04] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-600">src</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
            </span>
            <span className="text-zinc-300 font-medium">showcase.tsx</span>
            <span className="ml-3 text-zinc-600">// 03</span>
          </div>

          <div className="mt-4">
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
              Selected work
            </h2>
            <p className="mt-2 text-sm text-zinc-400 font-mono">
              Production web applications, generative AI workflows, and machine learning pipelines.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d10]/70 p-6 shadow-xl backdrop-blur transition-all duration-300 hover:border-white/[0.16] hover:bg-[#111115]/80"
            >
              <div>
                {/* Number & Period */}
                <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-4">
                  <span className="text-zinc-400 font-semibold">0{index + 1}</span>
                  <span>{project.period}</span>
                </div>

                {/* Category Pill */}
                <span className="inline-block rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-mono text-emerald-400/90 mb-3">
                  {project.type}
                </span>

                {/* Name */}
                <h3 className="text-xl font-semibold text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">
                  {project.name}
                </h3>

                {/* Summary */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Architecture Highlights */}
                <ul className="space-y-1.5 text-[11px] text-zinc-500 mb-6 font-mono">
                  {project.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-zinc-600 shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags and Action Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06] font-mono text-xs">
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source</span>
                      <ArrowUpRight className="h-3 w-3 text-zinc-600" />
                    </a>
                  )}

                  {"liveUrl" in project && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-400/90 hover:text-emerald-300 transition-colors ml-auto"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live demo</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
