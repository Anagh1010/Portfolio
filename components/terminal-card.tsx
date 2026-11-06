"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Copy, Terminal, Code2, FileJson, Play } from "lucide-react"

export function TerminalCard() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "cli">("profile")
  const [copied, setCopied] = useState(false)
  const [commandInput, setCommandInput] = useState("")
  const [cliHistory, setCliHistory] = useState<Array<{ command: string; output: string }>>([
    { command: "whoami", output: "Anagh Bajpai — Software Engineer @ DTU ('27)" },
    { command: "git status", output: "On branch main. Ready to ship high-impact code 🚀" },
  ])

  const profileCode = `/**
 * Engineering Profile: Anagh Bajpai
 * Institution: Delhi Technological University (DTU)
 */
export const engineer: Developer = {
  name: "Anagh Bajpai",
  role: "Software Engineering Student & Full-Stack / ML Builder",
  university: "Delhi Technological University",
  degree: "B.Tech in Software Engineering (2023 - 2027)",
  cgpa: 8.86, // Out of 10.0
  location: "New Delhi, India (UTC+5:30)",
  availability: "Open for SWE Internships & Full-Time Roles",
  coreFocus: [
    "High-reliability Full-Stack Systems (Next.js, TypeScript)",
    "Applied Machine Learning & Deep Learning (PyTorch, ResNet)",
    "Distributed Backends, Auth & Database Design (PostgreSQL, Supabase)"
  ],
  achievements: [
    "1st Place Winner @ Execute 5.0 Hackathon (E-Cell, DTU)",
    "12th CBSE CS Subject Trophy Recipient (95% Overall)"
  ]
};`

  const stackJson = `{
  "languages": ["C/C++", "TypeScript", "JavaScript", "Python", "Java", "SQL"],
  "frontend": ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion"],
  "backend": ["Node.js", "Flask", "RESTful APIs", "JWT", "Zod Validation"],
  "databases": ["PostgreSQL", "MongoDB", "Supabase", "Prisma ORM", "Mongoose"],
  "machineLearning": ["PyTorch", "Torchvision", "Scikit-learn", "OpenCV", "ResNet-50", "Gemini API"],
  "cloudAndIntegrations": ["Supabase Auth", "Clerk RBAC", "Razorpay", "Inngest", "Cloudinary"],
  "tooling": ["Git", "GitHub", "Neovim", "VS Code", "Linux", "Docker"]
}`

  const copyToClipboard = () => {
    const text = activeTab === "profile" ? profileCode : activeTab === "stack" ? stackJson : "anaghb1010@gmail.com"
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = commandInput.trim().toLowerCase()
    if (!trimmed) return

    let output = ""
    switch (trimmed) {
      case "help":
        output = "Available commands: whoami, projects, skills, education, contact, clear"
        break
      case "whoami":
        output = "Anagh Bajpai — Software Engineer at DTU. Passionate about building robust full-stack & AI products."
        break
      case "projects":
        output = "• Roamwise (AI Travel Planner)\n• QuickCart (Full-Stack E-Commerce)\n• Object Detection & Classification (Pascal VOC / ResNet-50)"
        break
      case "skills":
        output = "Next.js, TypeScript, Python, PyTorch, PostgreSQL, Supabase, Prisma, MongoDB, C++"
        break
      case "education":
        output = "Delhi Technological University (DTU) — B.Tech in Software Engineering (8.86 CGPA)"
        break
      case "contact":
        output = "Email: anaghb1010@gmail.com | GitHub: Anagh1010 | LinkedIn: in/anagh-bajpai-b928182a7"
        break
      case "clear":
        setCliHistory([])
        setCommandInput("")
        return
      default:
        output = `command not found: "${trimmed}". Type "help" for a list of commands.`
    }

    setCliHistory((prev) => [...prev, { command: commandInput, output }])
    setCommandInput("")
  }

  return (
    <div className="w-full rounded-2xl bg-zinc-950/90 border border-zinc-800 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed">
      {/* Top Bar / Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-80 transition-opacity" />
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-zinc-950 rounded-lg p-1 border border-zinc-800">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              activeTab === "profile"
                ? "bg-zinc-800 text-zinc-100 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            profile.ts
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              activeTab === "stack"
                ? "bg-zinc-800 text-zinc-100 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FileJson className="w-3.5 h-3.5 text-amber-400" />
            stack.json
          </button>
          <button
            onClick={() => setActiveTab("cli")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              activeTab === "cli"
                ? "bg-zinc-800 text-zinc-100 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            terminal.sh
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          title="Copy contents"
          className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto min-h-[340px] max-h-[460px] overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === "profile" && (
            <motion.pre
              key="profile"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-zinc-300 font-mono whitespace-pre selection:bg-zinc-800"
            >
              <code>
                <span className="text-zinc-500">// TypeScript Spec for Anagh Bajpai</span>
                {"\n"}
                <span className="text-purple-400">export const</span>{" "}
                <span className="text-blue-400">engineer</span>:{" "}
                <span className="text-amber-300">Developer</span> = {"{"}
                {"\n"}  <span className="text-zinc-400">name</span>:{" "}
                <span className="text-emerald-300">"Anagh Bajpai"</span>,
                {"\n"}  <span className="text-zinc-400">role</span>:{" "}
                <span className="text-emerald-300">"Software Engineer & ML Systems Builder"</span>,
                {"\n"}  <span className="text-zinc-400">university</span>:{" "}
                <span className="text-emerald-300">"Delhi Technological University (DTU)"</span>,
                {"\n"}  <span className="text-zinc-400">cgpa</span>:{" "}
                <span className="text-cyan-300">8.86</span>,{" "}
                <span className="text-zinc-500">// /10.0</span>
                {"\n"}  <span className="text-zinc-400">location</span>:{" "}
                <span className="text-emerald-300">"New Delhi, India (UTC+5:30)"</span>,
                {"\n"}  <span className="text-zinc-400">status</span>:{" "}
                <span className="text-emerald-400 font-semibold">"Ready for SWE Roles ⚡"</span>,
                {"\n"}  <span className="text-zinc-400">strengths</span>: [
                {"\n"}    <span className="text-emerald-300">"Production Next.js & TypeScript"</span>,
                {"\n"}    <span className="text-emerald-300">"End-to-End AI/ML & Deep Learning"</span>,
                {"\n"}    <span className="text-emerald-300">"Clean RESTful APIs & PostgreSQL"</span>,
                {"\n"}    <span className="text-emerald-300">"Solid CS Fundamentals & DSA"</span>
                {"\n"}  ]
                {"\n"}{"};"}
              </code>
            </motion.pre>
          )}

          {activeTab === "stack" && (
            <motion.pre
              key="stack"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-zinc-300 font-mono whitespace-pre"
            >
              <code>
                {"{\n"}
                {"  "}<span className="text-blue-400">"languages"</span>: [<span className="text-emerald-300">"C/C++"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"SQL"</span>],{"\n"}
                {"  "}<span className="text-blue-400">"webFrameworks"</span>: [<span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"Flask"</span>],{"\n"}
                {"  "}<span className="text-blue-400">"backendAndDB"</span>: [<span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"Supabase"</span>, <span className="text-emerald-300">"Prisma ORM"</span>],{"\n"}
                {"  "}<span className="text-blue-400">"aiAndVision"</span>: [<span className="text-emerald-300">"PyTorch"</span>, <span className="text-emerald-300">"Torchvision"</span>, <span className="text-emerald-300">"ResNet-50"</span>, <span className="text-emerald-300">"Gemini API"</span>],{"\n"}
                {"  "}<span className="text-blue-400">"infrastructure"</span>: [<span className="text-emerald-300">"Clerk RBAC"</span>, <span className="text-emerald-300">"Razorpay"</span>, <span className="text-emerald-300">"Inngest"</span>, <span className="text-emerald-300">"Git"</span>]{"\n"}
                {"}"}
              </code>
            </motion.pre>
          )}

          {activeTab === "cli" && (
            <motion.div
              key="cli"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="space-y-3 font-mono text-zinc-300"
            >
              <div className="text-zinc-500 pb-2 border-b border-zinc-900 text-xs">
                Welcome to Anagh's interactive shell. Type <span className="text-emerald-400 font-semibold">help</span> to list commands.
              </div>

              {cliHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span className="text-zinc-100">{item.command}</span>
                  </div>
                  <div className="text-zinc-400 pl-4 whitespace-pre-wrap">{item.output}</div>
                </div>
              ))}

              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
                <span className="text-emerald-400 font-bold">$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder="type a command (e.g. projects, skills, contact)..."
                  className="flex-1 bg-transparent border-0 outline-none text-zinc-100 placeholder:text-zinc-600 focus:ring-0 p-0 text-xs sm:text-[13px]"
                />
                <button
                  type="submit"
                  className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 hover:text-white text-[11px] hover:bg-zinc-700"
                >
                  <Play className="w-2.5 h-2.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Footer status */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/40 border-t border-zinc-900 text-[11px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>DTU Software Engineering</span>
        </span>
        <span className="font-mono">UTF-8 • zsh • 8.86 CGPA</span>
      </div>
    </div>
  )
}
