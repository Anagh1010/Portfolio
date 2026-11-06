"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { SectionLabel } from "@/components/about-section"

export function ProjectsSection() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="02" label="Selected Works" />
          <h2 className="text-3xl font-bold text-white mt-3 mb-3">Featured Projects</h2>
          <p className="text-zinc-500 text-sm max-w-xl">
            Production web apps, generative AI workflows, and machine learning pipelines.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-5 gap-0 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] overflow-hidden transition-all duration-300"
            >
              {/* Image panel (2 cols) */}
              <div className="md:col-span-2 relative overflow-hidden min-h-[180px] md:min-h-[240px] bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/10 to-[#0a0a0a]/60 md:bg-gradient-to-r md:from-transparent md:to-[#111]/80" />
                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-black/60 backdrop-blur border border-white/10 text-zinc-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content panel (3 cols) */}
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">{project.title}</h3>
                      <div className="text-xs font-mono text-zinc-500">{project.subtitle}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md border border-white/[0.08] text-zinc-500 hover:text-white hover:border-white/20 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md border border-white/[0.08] text-zinc-500 hover:text-white hover:border-white/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-xs text-zinc-600 flex items-start gap-2">
                        <span className="text-zinc-700 mt-0.5 shrink-0">→</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-white/5 border border-white/[0.08] text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
