"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-6 hover:border-indigo-500/40 transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  )
}
