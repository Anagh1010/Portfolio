"use client"

import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="relative h-full flex flex-col rounded-xl bg-slate-800/60 border border-slate-700/60 overflow-hidden hover:border-indigo-500/40 transition-colors duration-300">
        {/* Image */}
        <div className="relative overflow-hidden h-44 shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed flex-grow">{description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-700/60 hover:bg-slate-700 text-slate-300 text-xs px-2 py-0.5 border-0"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-700/50 h-8 px-2 text-xs"
              asChild
            >
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-3.5 w-3.5" />
                Source
              </Link>
            </Button>
            {demoUrl && (
              <Button
                size="sm"
                className="ml-auto bg-indigo-600 hover:bg-indigo-500 text-white border-0 h-8 px-3 text-xs"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
