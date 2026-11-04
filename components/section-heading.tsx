"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <motion.p
        className="text-xs uppercase tracking-widest text-indigo-400 font-semibold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-10 h-[2px] bg-indigo-500 rounded-full"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ originX: 0 }}
      />
    </div>
  )
}
