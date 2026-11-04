"use client";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactFormEmailJS } from "@/components/contact-form-emailjs";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const texts = [
    "Anagh Bajpai",
    "Software Engineer",
    "Full-Stack Developer",
    "AI / ML Enthusiast",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayText.length < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayText.length > 1) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        const nextIndex = (textIndex + 1) % texts.length;
        setTextIndex(nextIndex);
        setDisplayText(texts[nextIndex][0]);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, textIndex]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Subtle top glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-glow-top" />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid">
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tag */}
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Software Engineering @ DTU
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              <span className="block text-slate-400 font-medium text-2xl sm:text-3xl mb-1">
                Hi, I'm
              </span>
              <span className="block h-[1.25em] min-h-[1.25em] overflow-hidden">
                <span className="text-white whitespace-nowrap">
                  {displayText}
                </span>
                <span className="inline-block w-[2px] h-[0.8em] ml-1 bg-indigo-400 animate-pulse align-baseline" />
              </span>
            </h1>

            <p className="text-base text-slate-400 max-w-[520px] leading-relaxed">
              Software Engineering student at Delhi Technological University (DTU),
              passionate about developing intelligent full-stack applications, scalable
              backend systems, and machine learning solutions that solve real-world challenges.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#projects">
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 bg-transparent">
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-1">
              <Link href="https://github.com/Anagh1010" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white h-9 w-9">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/anagh-bajpai-b928182a7/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white h-9 w-9">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:anaghb1010@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white h-9 w-9">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Particle canvas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <CreativeHero />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-slate-600"
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </a>
      </section>

      {/* ── About ──────────────────────────────────────── */}
      <section id="about" className="py-24 border-t border-slate-800/60">
        <div className="container">
          <SectionHeading title="About Me" subtitle="Background & Journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-6 space-y-5"
            >
              <div className="flex items-center gap-3 border-b border-slate-700/60 pb-4">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Education & Highlights</h3>
                  <p className="text-xs text-slate-500">Academic & Technical Milestones</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-700/40">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-medium text-white text-sm">Delhi Technological University</h4>
                      <p className="text-xs text-indigo-400 mt-0.5">B.Tech in Software Engineering</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono shrink-0">2023 – 2027</span>
                  </div>
                  <div className="mt-2.5 text-xs text-slate-400 flex items-center justify-between">
                    <span>Academic Score</span>
                    <span className="font-semibold text-white">8.86 / 10 CGPA</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-700/40">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-medium text-white text-sm">Maxfort School Dwarka</h4>
                      <p className="text-xs text-slate-400 mt-0.5">CBSE Class XII & Class X</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300 font-mono shrink-0">95% & 94.6%</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">School Trophy — Highest marks in Computer Science (12th Boards)</p>
                </div>

                <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-700/40">
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">1st Place — Execute 5.0 Hackathon</p>
                      <p className="text-xs text-slate-400">E-Cell, Delhi Technological University</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span className="text-sm text-green-400">Open to SWE Internships & Full-time Roles</span>
              </div>
            </motion.div>

            {/* Bio card */}
            <GlassmorphicCard>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am a Software Engineering student at Delhi Technological University (DTU)
                with a strong passion for architecting resilient software systems, designing
                clean full-stack applications, and building machine learning models.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                My professional experience includes software engineering roles at Coforge Technologies
                and DLED Labs (IIT Ropar), where I developed production RESTful APIs,
                implemented robust error-handling mechanisms and database field guides, and optimized
                state handling and Git workflows.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                I enjoy turning ideas into high-performance products — whether it's an AI-powered travel planner
                using Google Gemini API, a responsive e-commerce platform with RBAC and payment gateways,
                or deep learning computer vision pipelines.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-8 text-sm">
                {[
                  { label: "Name", value: "Anagh Bajpai" },
                  { label: "Email", value: "anaghb1010@gmail.com", small: true },
                  { label: "Location", value: "New Delhi, India" },
                  { label: "Phone", value: "+91-9821112573" },
                ].map(({ label, value, small }) => (
                  <div key={label} className="space-y-0.5">
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
                    <div className={`font-medium text-white ${small ? "text-xs" : ""}`}>{value}</div>
                  </div>
                ))}
                <div className="col-span-2 space-y-0.5">
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Availability</div>
                  <div className="font-medium text-green-400">Open to opportunities</div>
                </div>
              </div>

              <div className="mt-6">
                <a href="/resume.pdf" download="Anagh_Bajpai_Resume.pdf">
                  <Button className="bg-slate-700 hover:bg-slate-600 text-white border-0 text-sm">
                    Download Resume
                  </Button>
                </a>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────── */}
      <section id="skills" className="py-24 border-t border-slate-800/60">
        <div className="container">
          <SectionHeading title="Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            <SkillBadge name="TypeScript & JS" level={92} />
            <SkillBadge name="React & Next.js" level={90} />
            <SkillBadge name="Python" level={88} />
            <SkillBadge name="C / C++" level={85} />
            <SkillBadge name="PostgreSQL & SQL" level={86} />
            <SkillBadge name="MongoDB & Mongoose" level={88} />
            <SkillBadge name="Tailwind CSS" level={92} />
            <SkillBadge name="PyTorch & OpenCV" level={82} />
            <SkillBadge name="Supabase & Prisma" level={85} />
            <SkillBadge name="REST APIs & Flask" level={86} />
            <SkillBadge name="Git & GitHub" level={90} />
            <SkillBadge name="System Design & DSA" level={88} />
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────── */}
      <section id="projects" className="py-24 border-t border-slate-800/60">
        <div className="container">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ProjectCard
              title="Roamwise — AI Travel Planner"
              description="A full-stack AI travel planner using Next.js, Google Gemini API, and OpenStreetMap Nominatim to generate personalized day-by-day itineraries with geocoding, AI revisions, Supabase Auth, PostgreSQL, Prisma ORM, and expense tracking."
              tags={["Next.js", "TypeScript", "Gemini API", "Supabase", "PostgreSQL", "Prisma"]}
              image="/project1.png?height=400&width=600"
              demoUrl="https://roamwise-one.vercel.app/"
              repoUrl="https://github.com/Anagh1010/Roamwise"
            />
            <ProjectCard
              title="QuickCart — E-Commerce Platform"
              description="Full-stack e-commerce platform with Next.js and MongoDB featuring cart, checkout, order tracking, admin dashboards, Clerk RBAC, Razorpay payments, Cloudinary media, and Inngest event synchronization."
              tags={["Next.js", "MongoDB", "Clerk", "Razorpay", "Inngest", "Tailwind CSS"]}
              image="/project2.png?height=400&width=600"
              demoUrl="https://quickcart-ecom-alpha.vercel.app/"
              repoUrl="https://github.com/Anagh1010/QuickCart"
            />
            <ProjectCard
              title="Object Detection & Classification"
              description="End-to-end 20-class pipeline on Pascal VOC 2012 (17K images). 2048-dim ResNet-50 embeddings, ensemble models — 87.25% accuracy and 0.993 macro AUC with sliding-window inference."
              tags={["Python", "PyTorch", "ResNet-50", "Scikit-learn", "OpenCV", "Flask"]}
              image="/project3.png?height=400&width=600"
              repoUrl="https://github.com/Anagh1010/Object-Detection"
            />
          </div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────── */}
      <section id="experience" className="py-24 border-t border-slate-800/60">
        <div className="container max-w-3xl">
          <SectionHeading title="Experience & Milestones" subtitle="My professional journey" />
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section id="contact" className="py-24 border-t border-slate-800/60">
        <div className="container">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
            <GlassmorphicCard>
              <h3 className="text-lg font-semibold mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "anaghb1010@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anagh-bajpai-b928182a7" },
                  { icon: Github, label: "GitHub", value: "github.com/Anagh1010" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{label}</div>
                      <div className="text-sm font-medium text-white">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/50">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                  <span className="text-sm text-slate-300">
                    Open to internships and full-time software engineering roles
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactFormEmailJS />
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="border-t border-slate-800/60 py-8">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <Link href="/" className="text-base font-semibold text-white">
              Anagh <span className="text-indigo-400">Bajpai</span>
            </Link>
            <p className="text-xs text-slate-500 mt-1">
              © {new Date().getFullYear()} Anagh Bajpai. All rights reserved.
            </p>
          </div>
          <div className="flex gap-2">
            {[
              { href: "https://github.com/Anagh1010", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/anagh-bajpai-b928182a7/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:anaghb1010@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Link key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white h-9 w-9">
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
