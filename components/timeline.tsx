"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap, Trophy, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react"

export interface TimelineItem {
  type: "work" | "education" | "award"
  role: string
  organization: string
  period: string
  location: string
  description: string
  bullets: string[]
  tags: string[]
}

export function Timeline() {
  const items: TimelineItem[] = [
    {
      type: "work",
      role: "Graduate Engineer Trainee",
      organization: "Coforge Technologies Limited",
      period: "June 2026 – July 2026",
      location: "On-site",
      description: "Primary software modules development, security audit acceleration, and schema architecture.",
      bullets: [
        "Engineered robust error-handling mechanisms and activity-tracking logs across primary software modules, accelerating issue identification and strengthening system security audits.",
        "Architected detailed database blueprints and schema field guides, enabling seamless cross-team navigation of complex data structures and ensuring consistent data governance.",
      ],
      tags: ["Database Architecture", "Error Handling", "Security Audits", "Data Governance"],
    },
    {
      type: "work",
      role: "Software Engineering Intern",
      organization: "DLED Labs, IIT Ropar",
      period: "January 2026 – March 2026",
      location: "Remote",
      description: "Full-stack MERN application engineering, RESTful APIs, JWT authentication, and core refactoring.",
      bullets: [
        "Achieved 100% completion on the Vibe platform's MERN stack track, solving complex Web Dev and Data Science challenges.",
        "Built end-to-end MERN applications featuring RESTful APIs, secure JWT authentication, and MongoDB schemas.",
        "Refactored code bases under senior mentorship, resolving multi-module state handling bugs and streamlining Git workflows.",
      ],
      tags: ["MERN Stack", "RESTful APIs", "JWT Auth", "MongoDB", "Git Workflows"],
    },
    {
      type: "education",
      role: "B.Tech in Software Engineering",
      organization: "Delhi Technological University (DTU)",
      period: "2023 – 2027",
      location: "New Delhi, India",
      description: "High academic excellence in Software Engineering with an 8.86 / 10 CGPA.",
      bullets: [
        "Core Coursework: Data Structures & Algorithms, System Design, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Cyber Security, Internet of Things.",
        "Active contributor to hackathons, technical communities, and algorithmic engineering projects.",
      ],
      tags: ["8.86 CGPA", "Data Structures", "System Design", "Operating Systems", "DBMS"],
    },
    {
      type: "award",
      role: "1st Place Winner — Execute 5.0 Hackathon",
      organization: "E-Cell, Delhi Technological University",
      period: "Hackathon Milestone",
      location: "DTU Campus",
      description: "Secured 1st place in premier university hackathon solving real-world software problems.",
      bullets: [
        "Architected and deployed a fully functional software prototype under intense 24-hour hackathon constraints.",
        "Awarded 1st place overall by a panel of industry judges.",
      ],
      tags: ["Hackathon Winner", "1st Place", "Rapid Prototyping", "Team Lead"],
    },
    {
      type: "education",
      role: "Senior Secondary (CBSE Class XII & X)",
      organization: "Maxfort School Dwarka",
      period: "2021 – 2023",
      location: "New Delhi, India",
      description: "Class XII — 95% | Class X — 94.6%",
      bullets: [
        "Awarded a prestigious School Trophy for securing the highest marks in Computer Science across the school in the 12th CBSE Board exams.",
        "Consistent academic excellence with 95% in Class XII and 94.6% in Class X.",
      ],
      tags: ["Class XII: 95%", "CS Subject Trophy", "Class X: 94.6%", "Academic Honor"],
    },
  ]

  const getIcon = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return Building2
      case "education":
        return GraduationCap
      case "award":
        return Trophy
    }
  }

  return (
    <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
      {items.map((item, idx) => {
        const Icon = getIcon(item.type)
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 p-1 rounded-full bg-zinc-950 border border-zinc-700 text-zinc-400 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-colors">
              <Icon className="w-3.5 h-3.5" />
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-3">
              {/* Top metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 pt-0.5">
                    <span className="text-emerald-400 font-semibold">{item.organization}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-1.5 pt-1">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-950/70 border border-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
