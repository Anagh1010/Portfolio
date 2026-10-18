"use client";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, Award, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactFormEmailJS } from "@/components/contact-form-emailjs";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
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
      // Typing phase
      if (displayText.length < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      // Deleting phase
      if (displayText.length > 1) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        // instead of going to 0, jump to next word with 1 character typed
        const nextIndex = (textIndex + 1) % texts.length;
        setTextIndex(nextIndex);
        setDisplayText(texts[nextIndex][0]); // start next word with first character
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, textIndex]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">
                  Software Engineering @ DTU
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-300 mb-2">
                Hi, I'm
              </span>
              <span className="block h-[1.3em] min-h-[1.3em] leading-tight overflow-hidden">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 whitespace-nowrap">
                  {displayText}
                </span>
                <span className="inline-block w-[3px] h-[0.85em] ml-1 bg-pink-500 animate-pulse align-baseline" />
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Software Engineering student at Delhi Technological University (DTU),
              passionate about developing intelligent full-stack applications, scalable backend
              systems, and machine learning solutions that solve real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
                >
                  Contact Me
                </Button>
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/Anagh1010"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/anagh-bajpai-b928182a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:anaghb1010@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/90 backdrop-blur-md p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Education & Highlights</h3>
                    <p className="text-xs text-zinc-400">Academic & Technical Milestones</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-zinc-800/40 border border-zinc-700/40">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-white text-base">Delhi Technological University</h4>
                        <p className="text-sm text-purple-400">B.Tech in Software Engineering</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-mono">2023 – 2027</span>
                    </div>
                    <div className="mt-2 text-sm text-zinc-400 flex items-center justify-between">
                      <span>Academic Score</span>
                      <span className="font-semibold text-white">8.86 / 10 CGPA</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-800/40 border border-zinc-700/40">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-white text-base">Maxfort School Dwarka</h4>
                        <p className="text-sm text-zinc-400">CBSE Class XII & Class X</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-zinc-700/50 text-zinc-300 font-mono">95% & 94.6%</span>
                    </div>
                    <p className="mt-2 text-xs text-zinc-400">Awarded School Trophy for securing the highest marks in Computer Science (12th Boards)</p>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-800/40 border border-zinc-700/40">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-pink-400 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">1st Place — Execute 5.0 Hackathon</p>
                        <p className="text-xs text-zinc-400">E-Cell, Delhi Technological University</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">
                    Available for SWE Internships & Full-time Roles
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I am a Software Engineering student at Delhi Technological University (DTU)
                  with a strong passion for architecting resilient software systems, designing
                  clean full-stack applications, and building machine learning models.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My professional experience includes software engineering roles at Coforge Technologies
                  and DLED Labs (IIT Ropar), where I developed production RESTful APIs,
                  implemented robust error-handling mechanisms and database field guides, and optimized
                  state handling and Git workflows.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I enjoy turning ideas into high-performance products — whether it's an AI-powered travel planner
                  using Google Gemini API, a responsive e-commerce platform with RBAC and payment gateways,
                  or deep learning computer vision pipelines.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Anagh Bajpai</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm break-all">anaghb1010@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">New Delhi, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+91-9821112573</div>
                  </div>
                  <div className="space-y-1 col-span-2">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/resume.pdf" download="Anagh_Bajpai_Resume.pdf">
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      Download Resume
                    </Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
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

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Roamwise — AI Travel Planner"
              description="A full-stack AI travel planner built with Next.js, React, TypeScript, Google Gemini API, and OpenStreetMap Nominatim to generate personalized, editable day-by-day itineraries with geocoding, AI revisions, Supabase Auth, PostgreSQL, Prisma ORM, and expense tracking."
              tags={["Next.js", "React", "TypeScript", "Gemini API", "Supabase", "PostgreSQL", "Prisma"]}
              image="/project1.png?height=400&width=600"
              demoUrl="https://roamwise-one.vercel.app/"
              repoUrl="https://github.com/Anagh1010/Roamwise"
            />
            <ProjectCard
              title="QuickCart — E-Commerce Platform"
              description="Full-stack e-commerce platform built with Next.js, React, Tailwind CSS, and MongoDB. Features responsive product discovery, cart, checkout, order tracking, admin dashboards, Clerk RBAC, Razorpay payments, Cloudinary media storage, and Inngest event synchronization."
              tags={["Next.js", "React", "MongoDB", "Clerk", "Razorpay", "Inngest", "Tailwind CSS"]}
              image="/project2.png?height=400&width=600"
              demoUrl="https://quickcart-ecom-alpha.vercel.app/"
              repoUrl="https://github.com/Anagh1010/QuickCart"
            />
            <ProjectCard
              title="Object Detection & Classification"
              description="End-to-end 20-class object recognition pipeline on Pascal VOC 2012 (17,125 images, 40,138 instances). Extracted 2,048-dimensional ResNet-50 embeddings and trained ensemble models with 87.25% accuracy and 0.993 macro AUC with sliding-window inference."
              tags={["Python", "PyTorch", "Torchvision", "ResNet-50", "Scikit-learn", "OpenCV", "Flask"]}
              image="/project3.png?height=400&width=600"
              repoUrl="https://github.com/Anagh1010/Object-Detection"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience & Milestones"
            subtitle="My professional journey and achievements"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">anaghb1010@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      linkedin.com/in/anagh-bajpai-b928182a7
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/Anagh1010</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>
                    Available for internships and full-time software engineering roles
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactFormEmailJS />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Anagh
              </span>
              <span className="text-white"> Bajpai</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Anagh Bajpai. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Anagh1010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/anagh-bajpai-b928182a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:anaghb1010@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
