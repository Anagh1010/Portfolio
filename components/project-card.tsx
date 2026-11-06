"use client"

import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export interface ProjectData {
  title: string
  subtitle: string
  category: "Full-Stack" | "AI / ML" | "Full-Stack • AI"
  description: string
  architecturePoints: string[]
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl: string
  featured?: boolean
}

export function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between"
    >
      {/* Top Banner & Image / Preview Area */}
      <div className="relative overflow-hidden aspect-[16/9] bg-zinc-950 border-b border-zinc-800/80">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900/50">
            <span className="font-mono text-xs text-zinc-600">Technical Demo / System Pipeline</span>
          </div>
        )}

        {/* Gradient Overlay for subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-zinc-950/80 text-zinc-300 border border-zinc-800/80 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {project.category}
          </span>
        </div>

        {/* Action Link Icons on Top Right */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-1.5 rounded-lg bg-zinc-950/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 backdrop-blur-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="p-1.5 rounded-lg bg-zinc-950/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 backdrop-blur-md transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
              {project.subtitle}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors flex items-center justify-between">
              <span>{project.title}</span>
            </h3>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Architecture Highlights */}
          <div className="space-y-1.5 pt-1">
            {project.architecturePoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Tech Stack Pills & Direct Links */}
        <div className="space-y-4 pt-3 border-t border-zinc-800/80">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono font-medium text-zinc-300 hover:text-white transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </Link>

            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-all shadow-sm"
              >
                <span>Live Preview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
