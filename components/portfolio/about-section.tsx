"use client";

import { ChevronRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { aboutData } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl">
        {/* Section Path Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-600">src</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
            </span>
            <span className="text-zinc-300 font-medium">about.md</span>
            <span className="ml-3 text-zinc-600">// 01</span>
          </div>

          <div className="mt-4">
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
              From <span className="text-zinc-500">schema</span> to{" "}
              <span className="text-zinc-500">screen</span>, I own the whole request lifecycle.
            </h2>
          </div>
        </div>

        {/* Content Layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left: Line-numbered Markdown Editor Canvas */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 backdrop-blur font-mono text-xs leading-7 sm:text-sm">
              <div className="flex">
                {/* Line numbers column */}
                <div className="select-none border-r border-white/[0.04] py-5 pl-4 pr-3 text-right text-zinc-700">
                  {Array.from({ length: 15 }, (_, i) => (
                    <div key={i + 1}>{i + 1}</div>
                  ))}
                </div>

                {/* Markdown content */}
                <div className="flex-1 p-5 space-y-3 text-zinc-300">
                  <p>
                    <span className="text-purple-400 font-semibold">#</span>{" "}
                    <span className="text-zinc-100 font-medium">whoami</span>
                  </p>
                  <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed pl-2">
                    {aboutData.whoami}
                  </p>

                  <p className="pt-2">
                    <span className="text-purple-400 font-semibold">##</span>{" "}
                    <span className="text-zinc-100 font-medium">principles</span>
                  </p>
                  <ul className="space-y-1.5 pl-2 font-sans text-sm sm:text-base text-zinc-400">
                    {aboutData.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono text-xs mt-1">❯</span>
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <p className="border-l-2 border-emerald-400/60 pl-3 text-xs italic text-zinc-500 font-mono">
                      &gt; Open to Software Engineering internships and full-time opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education & Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 font-mono mb-4">
                <GraduationCap className="h-4 w-4 text-emerald-400" />
                <span>Education</span>
              </div>

              <div className="space-y-5">
                {aboutData.education.map((item, index) => (
                  <div key={index} className="space-y-1 border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-zinc-100 text-sm sm:text-base">
                        {item.institution}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500 shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400">{item.degree}</div>
                    <div className="flex items-center gap-3 pt-1 text-xs font-mono text-zinc-500">
                      <span className="text-emerald-400 font-semibold">{item.gpa}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 p-5 backdrop-blur flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  DTU Academic Standing
                </div>
                <div className="text-2xl font-bold font-mono text-zinc-100 mt-1">
                  8.86 <span className="text-xs text-zinc-500 font-normal">/ 10 CGPA</span>
                </div>
              </div>
              <Sparkles className="h-7 w-7 text-emerald-400/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
