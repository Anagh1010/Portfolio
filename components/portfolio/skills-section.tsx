"use client";

import { Box, ChevronRight } from "lucide-react";
import { dependencyGroups, strengths } from "@/data/portfolio";

export function SkillsSection() {
  const defaultLevels = [95, 92, 90, 88, 84];

  return (
    <section id="stack" className="border-t border-white/[0.04] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-600">~</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
            </span>
            <span className="text-zinc-300 font-medium">package.json</span>
            <span className="ml-3 text-zinc-600">// 02</span>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
              Dependencies
            </h2>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
              <span className="text-emerald-400 font-semibold">✓</span>
              <span>added 24 packages, audited 0 vulnerabilities</span>
            </div>
          </div>
        </div>

        {/* 3 Dependency Cards Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dependencyGroups.map((group) => (
            <div
              key={group.file}
              className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 font-mono text-xs shadow-xl backdrop-blur transition-all duration-300 hover:border-white/[0.12]"
            >
              {/* Card Header with Box icon */}
              <div className="flex h-10 items-center justify-between border-b border-white/[0.06] px-4 text-zinc-400">
                <span className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                  <Box className="h-3.5 w-3.5 text-sky-400" />
                  {group.file}
                </span>
                <span className="text-[11px] text-zinc-600">json</span>
              </div>

              {/* JSON code block with properly aligned name and version */}
              <div className="p-4 space-y-3.5 text-xs sm:text-sm">
                <div className="text-zinc-500">&#123;</div>

                <div className="space-y-3">
                  {group.packages.map((pkg, idx) => (
                    <div key={pkg.name} className="pl-4">
                      <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                        <span className="truncate">
                          <span className="text-sky-300">&quot;{pkg.name}&quot;</span>
                          <span className="text-zinc-600">:</span>
                        </span>
                        <span className="text-emerald-300 font-mono shrink-0">
                          &quot;{pkg.version}&quot;
                          {idx < group.packages.length - 1 && (
                            <span className="text-zinc-600">,</span>
                          )}
                        </span>
                      </div>

                      {/* Proficiency bar */}
                      <div className="mt-1.5 h-0.5 overflow-hidden rounded-full bg-white/[0.05]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400/70 to-sky-400/50"
                          style={{ width: `${defaultLevels[idx % defaultLevels.length]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-zinc-500">&#125;</div>
              </div>
            </div>
          ))}
        </div>

        {/* Strengths / Domains Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {strengths.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/[0.06] bg-[#0d0d10]/50 p-4 backdrop-blur"
            >
              <div className="font-mono text-2xl font-bold text-zinc-100">{item.score}</div>
              <div className="mt-1 font-medium text-xs sm:text-sm text-zinc-300">{item.label}</div>
              <div className="mt-0.5 text-[11px] text-zinc-500 font-mono truncate">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
