"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function AboutSection() {
  const { about, education } = portfolioData

  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel number="01" label="Background" />
            <h2 className="text-3xl font-bold text-white mt-3 mb-6">About Me</h2>
            <div className="space-y-4">
              {about.bio.map((para, i) => (
                <p key={i} className="text-zinc-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            {/* Interests */}
            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-3">Interests</div>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span key={interest} className="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/[0.08] text-zinc-400 font-mono">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-6">Education</div>
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/[0.08]">
                    <GraduationCap className="w-4 h-4 text-zinc-400" />
                  </div>
                  <span className="text-xs font-mono text-zinc-600 ml-auto shrink-0">{edu.period}</span>
                </div>
                <div className="font-semibold text-white mb-1">{edu.institution}</div>
                <div className="text-sm text-zinc-400 mb-2">{edu.degree}</div>
                <div className="flex items-center gap-4 text-xs text-zinc-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </div>
                  <div className="font-mono font-semibold text-zinc-400">{edu.gpa}</div>
                </div>
                {edu.notes && (
                  <ul className="space-y-1">
                    {edu.notes.map((note, i) => (
                      <li key={i} className="text-xs text-zinc-600 flex items-start gap-2">
                        <span className="text-zinc-700 mt-0.5">—</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-mono text-zinc-700">{number} //</span>
      <span className="text-xs font-mono uppercase tracking-widest text-zinc-600">{label}</span>
    </div>
  )
}
