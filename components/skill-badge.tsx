"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="rounded-lg bg-slate-800/60 border border-slate-700/60 p-4 hover:border-indigo-500/40 transition-colors duration-200">
        <div className="text-sm font-medium text-slate-200 mb-3">{name}</div>
        <div className="relative h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        <div className="mt-1.5 text-right text-xs text-slate-500">{level}%</div>
      </div>
    </motion.div>
  )
}
