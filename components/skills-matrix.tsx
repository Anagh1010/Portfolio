"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Cpu, Wrench, Layers, Sparkles } from "lucide-react"

interface SkillGroup {
  category: string
  icon: any
  description: string
  skills: Array<{ name: string; tag?: string; highlight?: boolean }>
}

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const skillGroups: SkillGroup[] = [
    {
      category: "Languages",
      icon: Code,
      description: "Strong fundamentals in compiled & high-level scripting languages",
      skills: [
        { name: "C/C++", tag: "DSA / Core", highlight: true },
        { name: "TypeScript", tag: "Production", highlight: true },
        { name: "JavaScript (ES6+)", tag: "Full-Stack" },
        { name: "Python", tag: "AI / ML / Data", highlight: true },
        { name: "Java", tag: "OOP / Systems" },
        { name: "SQL", tag: "Relational Queries" },
      ],
    },
    {
      category: "Full-Stack & Frontend",
      icon: Layers,
      description: "Modern, high-performance web applications with responsive architecture",
      skills: [
        { name: "Next.js (App Router)", tag: "SSR / SSG", highlight: true },
        { name: "React 19", tag: "Hooks / Context", highlight: true },
        { name: "Tailwind CSS", tag: "Utility-First" },
        { name: "Flask", tag: "Python APIs" },
        { name: "RESTful APIs", tag: "Microservices" },
        { name: "HTML5 / CSS3", tag: "Semantic Web" },
      ],
    },
    {
      category: "AI, ML & Computer Vision",
      icon: Cpu,
      description: "Deep learning models, feature extraction pipelines & vision systems",
      skills: [
        { name: "PyTorch", tag: "Deep Learning", highlight: true },
        { name: "Torchvision", tag: "Computer Vision" },
        { name: "ResNet-50", tag: "Feature Embeddings", highlight: true },
        { name: "Google Gemini API", tag: "Generative AI", highlight: true },
        { name: "Scikit-learn", tag: "Classical ML" },
        { name: "OpenCV", tag: "Image Processing" },
      ],
    },
    {
      category: "Databases & Cloud Architecture",
      icon: Database,
      description: "Scalable data stores, ORMs, authentication, and event systems",
      skills: [
        { name: "PostgreSQL", tag: "Primary Relational", highlight: true },
        { name: "Supabase", tag: "Auth / DB", highlight: true },
        { name: "Prisma ORM", tag: "Type-Safe DB" },
        { name: "MongoDB", tag: "Document Store" },
        { name: "Mongoose", tag: "ODM" },
        { name: "Clerk Auth", tag: "RBAC" },
        { name: "Razorpay", tag: "Payments" },
        { name: "Inngest", tag: "Event Queues", highlight: true },
        { name: "Cloudinary", tag: "Media CDN" },
      ],
    },
    {
      category: "Core CS & Tooling",
      icon: Wrench,
      description: "Systems thinking, algorithmic problem-solving & developer environment",
      skills: [
        { name: "Data Structures & Algorithms", tag: "Core", highlight: true },
        { name: "System Design", tag: "Architecture", highlight: true },
        { name: "Object-Oriented Programming (OOP)", tag: "Patterns" },
        { name: "Database Management Systems (DBMS)", tag: "ACID / Indexing" },
        { name: "Operating Systems & Networks", tag: "POSIX / TCP/IP" },
        { name: "Git & GitHub", tag: "VCS & CI/CD", highlight: true },
        { name: "VS Code & Neovim", tag: "Productivity" },
        { name: "Cyber Security & IoT", tag: "Coursework" },
      ],
    },
  ]

  const categories = ["All", ...skillGroups.map((g) => g.category)]

  const filteredGroups =
    selectedCategory === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === cat
                ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80 hover:bg-zinc-800/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGroups.map((group, idx) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">{group.category}</h3>
                  <p className="text-[11px] text-zinc-500">{group.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                      skill.highlight
                        ? "bg-zinc-800/90 text-zinc-100 border border-zinc-700/80 hover:border-zinc-500 shadow-sm"
                        : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] text-zinc-500 border-l border-zinc-700/60 pl-1.5 font-sans">
                        {skill.tag}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
