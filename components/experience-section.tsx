"use client"

import { motion } from "framer-motion"
import { Briefcase, Trophy, MapPin } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { SectionLabel } from "@/components/about-section"

const typeIcons = {
  work: Briefcase,
  award: Trophy,
}

export function ExperienceSection() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="04" label="Career Journey" />
          <h2 className="text-3xl font-bold text-white mt-3 mb-3">Experience &amp; Milestones</h2>
          <p className="text-zinc-500 text-sm max-w-xl">
            Professional engineering roles, research internships, and hackathon wins.
          </p>
        </motion.div>

        <div className="relative pl-6 border-l border-white/[0.08] space-y-10">
          {experience.map((item, i) => {
            const Icon = typeIcons[item.type]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-9 w-6 h-6 rounded-full bg-[#0a0a0a] border border-white/[0.15] flex items-center justify-center">
                  <Icon className="w-3 h-3 text-zinc-500" />
                </div>

                <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-semibold text-white">{item.role}</div>
                      <div className="text-sm text-zinc-400">{item.company}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-mono text-zinc-500">{item.period}</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-700 mt-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 mb-3">{item.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="text-xs text-zinc-600 flex items-start gap-2">
                        <span className="text-zinc-700 mt-0.5 shrink-0">→</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-white/5 border border-white/[0.08] text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
