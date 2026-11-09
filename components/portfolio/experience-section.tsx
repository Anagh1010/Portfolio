"use client";

import { ChevronRight } from "lucide-react";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/[0.04] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-600">~</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
            </span>
            <span className="text-zinc-300 font-medium">experience.log</span>
            <span className="ml-3 text-zinc-600">// 04</span>
          </div>

          <div className="mt-4">
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
              Release history
            </h2>
            <p className="mt-2 text-sm text-zinc-400 font-mono">
              Professional engineering roles, research internships, and hackathon wins.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical Track Lines positioned cleanly past the date column */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06] sm:left-[13.5rem]" />
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400 via-emerald-400/40 to-transparent sm:left-[13.5rem]" />

          <div className="space-y-12">
            {experience.map((item) => (
              <div
                key={item.company}
                className="relative grid gap-4 pl-8 sm:grid-cols-[13.5rem_1fr] sm:gap-10 sm:pl-0"
              >
                {/* Date & Mode on left with dedicated padding so text never touches the line */}
                <div className="font-mono text-xs text-zinc-500 sm:pt-1 sm:text-right sm:pr-7">
                  <div className="text-zinc-200 font-medium sm:whitespace-nowrap">{item.date}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{item.mode}</div>
                </div>

                {/* Timeline Dot centered on the vertical line */}
                <div className="absolute left-0 top-1 sm:left-[13.5rem] sm:-translate-x-1/2 flex h-4 w-4 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-[#09090b]" />
                </div>

                {/* Content Card on right */}
                <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 p-6 backdrop-blur sm:ml-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-emerald-400/90 font-medium">
                      {item.company}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-zinc-600 mt-1 shrink-0 font-mono text-xs">❯</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
