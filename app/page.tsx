"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Terminal,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronDown,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { TerminalCard } from "@/components/terminal-card"
import { ProjectCard, ProjectData } from "@/components/project-card"
import { SkillsMatrix } from "@/components/skills-matrix"
import { Timeline } from "@/components/timeline"
import { ContactSection } from "@/components/contact-section"

export default function PortfolioPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("anaghb1010@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const projects: ProjectData[] = [
    {
      title: "Roamwise — AI Travel Planner",
      subtitle: "Full-Stack • Generative AI",
      category: "Full-Stack • AI",
      description:
        "An intelligent, end-to-end travel itinerary planner built with Next.js, TypeScript, Google Gemini API, and OpenStreetMap Nominatim. Generates editable, geocoded day-by-day itineraries with persistent budgeting and Supabase auth.",
      architecturePoints: [
        "Reliable AI workflows using structured JSON output & strict Zod validation for itinerary generation & travel diary revisions.",
        "Deterministic fallback preview mode when API key is unprovided.",
        "Secure trip management via Supabase Auth, PostgreSQL, and Prisma ORM with saved trips & expense tracking.",
      ],
      tags: ["Next.js 15", "TypeScript", "Google Gemini API", "Supabase", "PostgreSQL", "Prisma ORM", "Zod"],
      image: "/project1.png",
      demoUrl: "https://roamwise-one.vercel.app/",
      repoUrl: "https://github.com/Anagh1010/Roamwise",
      featured: true,
    },
    {
      title: "QuickCart — Production E-Commerce Platform",
      subtitle: "Full-Stack • Cloud & Payments",
      category: "Full-Stack",
      description:
        "A full-featured e-commerce ecosystem built with Next.js, React, and MongoDB. Features responsive product discovery, cart, checkout, order tracking, admin dashboards, Clerk RBAC, Razorpay payments, and Cloudinary media.",
      architecturePoints: [
        "Secure backend workflows using Next.js API Routes, MongoDB/Mongoose, Clerk-based RBAC, and React Context.",
        "Integrated Razorpay for seamless online/COD payments and Cloudinary for optimized product media delivery.",
        "Inngest event-driven user synchronization, abandoned-payment inventory recovery, and health monitoring.",
      ],
      tags: ["Next.js", "React", "MongoDB", "Mongoose", "Clerk RBAC", "Razorpay", "Inngest", "Cloudinary"],
      image: "/project2.png",
      demoUrl: "https://quickcart-ecom-alpha.vercel.app/",
      repoUrl: "https://github.com/Anagh1010/QuickCart",
      featured: true,
    },
    {
      title: "Object Detection & Classification Pipeline",
      subtitle: "Computer Vision • Deep Learning",
      category: "AI / ML",
      description:
        "End-to-end 20-class object recognition pipeline trained on the Pascal VOC 2012 benchmark dataset (17,125 images and 40,138 object instances) with ResNet-50 embeddings and consensus voting.",
      architecturePoints: [
        "Extracted 2,048-dimensional ResNet-50 embeddings from annotated object crops with stratified splits and 10-fold cross-validation.",
        "Trained Logistic Regression, Random Forest, and Decision Tree ensembles achieving 87.25% accuracy and 0.993 macro AUC.",
        "Deployed sliding-window inference with confidence thresholding and consensus voting to reduce false positives.",
      ],
      tags: ["Python", "PyTorch", "Torchvision", "ResNet-50", "Scikit-learn", "OpenCV", "Flask"],
      image: "/project3.png",
      repoUrl: "https://github.com/Anagh1010/Object-Detection",
      featured: true,
    },
  ]

  const stats = [
    { value: "8.86", label: "DTU CGPA", sub: "Software Engineering ('27)" },
    { value: "17,000+", label: "VOC Images", sub: "Deep Learning Pipeline" },
    { value: "1st Place", label: "Hackathon Winner", sub: "Execute 5.0 @ DTU" },
    { value: "95%", label: "CBSE XII Board", sub: "CS Trophy Recipient" },
  ]

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 bg-grid-pattern selection:bg-zinc-800 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle radial ambient light */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-indigo-600/[0.07] blur-[120px] rounded-full" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Bio & Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for SWE Internships & Full-Time Roles</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                  Hi, I'm <span className="text-zinc-100">Anagh Bajpai</span>.
                </h1>
                <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl">
                  Software Engineering student at{" "}
                  <span className="text-zinc-200 font-medium">Delhi Technological University (DTU)</span>.
                  I design high-performance full-stack web platforms, robust RESTful APIs,
                  and applied machine learning pipelines.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-all shadow-sm group"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="/resume.pdf"
                  download="Anagh_Bajpai_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-sm font-medium transition-all"
                >
                  <Download className="w-4 h-4 text-zinc-400" />
                  <span>Resume (PDF)</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links & Quick Stack */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-500 border-t border-zinc-900">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Anagh1010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anagh-bajpai-b928182a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:anaghb1010@gmail.com"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>anaghb1010@gmail.com</span>
                  </a>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-zinc-600">
                  <span>•</span>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Terminal Spec */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <TerminalCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Ribbon */}
      <section className="py-8 border-y border-zinc-900 bg-zinc-950/40 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-zinc-500">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-zinc-900">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
              01 // Background & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering with precision, curiosity, and speed.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
              <p>
                I am a Software Engineering undergraduate at{" "}
                <span className="text-zinc-200 font-medium">Delhi Technological University (DTU)</span>{" "}
                with a cumulative CGPA of <span className="text-emerald-400 font-mono font-medium">8.86/10</span>.
                My background spans distributed web architectures, high-concurrency backend workflows,
                and applied deep learning.
              </p>
              <p>
                My professional experience includes software engineering roles at{" "}
                <span className="text-zinc-200 font-medium">Coforge Technologies</span>, where I
                engineered database blueprints and robust error-handling logs across enterprise modules,
                and at <span className="text-zinc-200 font-medium">DLED Labs (IIT Ropar)</span>, building
                scalable MERN applications with secure JWT authentication and optimized Git workflows.
              </p>
              <p>
                I prioritize writing type-safe, maintainable, and well-tested code. Whether it's crafting
                AI-driven user experiences with Google Gemini API and structured Zod validation, or
                training ResNet feature extractors for computer vision pipelines, I love turning complex
                technical challenges into elegant, resilient products.
              </p>

              <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                  🏛️ Delhi Technological University ('27)
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                  🏆 1st Place Winner Execute 5.0
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                  📜 Andrew Ng ML Certified
                </span>
              </div>
            </div>

            {/* Education Highlight Card */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-800">
                  <div className="p-2 rounded-xl bg-zinc-800 text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100">Academic Standing</h3>
                    <p className="text-xs font-mono text-zinc-500">Degree & High School Milestones</p>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80">
                    <div className="flex justify-between items-start text-zinc-300">
                      <span className="font-semibold text-zinc-100">Delhi Technological University</span>
                      <span className="text-emerald-400 font-bold">8.86 CGPA</span>
                    </div>
                    <p className="text-zinc-500 text-[11px] mt-1 font-sans">B.Tech in Software Engineering (2023 - 2027)</p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80">
                    <div className="flex justify-between items-start text-zinc-300">
                      <span className="font-semibold text-zinc-100">Maxfort School Dwarka</span>
                      <span className="text-zinc-300">95% (XII CBSE)</span>
                    </div>
                    <p className="text-zinc-500 text-[11px] mt-1 font-sans">Awarded CS School Trophy | Class X: 94.6%</p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-zinc-500 flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>CS Fundamentals: DSA, System Design, DBMS, OS, Networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 border-b border-zinc-900">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                02 // Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 max-w-md">
              Full-stack production web apps, generative AI workflows, and machine learning pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="skills" className="py-24 border-b border-zinc-900">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                03 // Technical Arsenal
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Skills & Technologies
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 max-w-md">
              Hands-on proficiency across languages, modern frameworks, data infrastructure, and AI libraries.
            </p>
          </div>

          <SkillsMatrix />
        </div>
      </section>

      {/* Work Experience & Milestones Section */}
      <section id="experience" className="py-24 border-b border-zinc-900">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
              04 // Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience & Milestones
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-500">
              Professional software engineering roles, academic honors, and hackathon wins.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-b border-zinc-900">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
              05 // Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Initiate Contact
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 max-w-lg">
              Have an open engineering internship, full-time opportunity, or want to discuss a project? Drop a message below.
            </p>
          </div>

          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-zinc-200">Anagh Bajpai</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="text-center sm:text-right text-[11px] text-zinc-600">
            Crafted with Next.js 16, TypeScript, Tailwind CSS, Google Sans & JetBrains Mono.
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/Anagh1010"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anagh-bajpai-b928182a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:anaghb1010@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
