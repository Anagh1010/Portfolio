"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionLabel } from "@/components/about-section"

export function SkillsSection() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="03" label="Technical Arsenal" />
          <h2 className="text-3xl font-bold text-white mt-3 mb-3">Skills &amp; Technologies</h2>
          <p className="text-zinc-500 text-sm max-w-xl">
            Hands-on proficiency across languages, frameworks, databases, and AI libraries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-1">{group.category}</div>
              <div className="text-xs text-zinc-700 mb-4">{group.description}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors ${
                      skill.highlight
                        ? "bg-white/[0.08] border-white/[0.15] text-zinc-200"
                        : "bg-transparent border-white/5 text-zinc-500"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
