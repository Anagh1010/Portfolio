"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function HeroSection() {
  const { personal, hero, stats } = portfolioData
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const currentRole = hero.roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((i) => (i + 1) % hero.roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex, hero.roles])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-grid-subtle">
      {/* Ambient top gradient */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          {/* Greeting + availability badge */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {personal.availability}
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
          >
            {hero.greeting}{" "}
            <span className="text-gradient">{hero.headline}</span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.div
            variants={item}
            className="h-10 flex items-center mb-6"
          >
            <span className="text-xl sm:text-2xl font-mono text-zinc-400">
              {displayed}
              <span className="animate-pulse text-white ml-0.5">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-10 max-w-2xl">
            {hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
            <Link
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-md text-sm text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
            >
              Get In Touch
            </Link>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-md text-sm text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-md text-sm text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/5"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-2xl font-bold font-mono text-white">{stat.value}</div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{stat.label}</div>
                <div className="text-xs text-zinc-600">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}
