"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-white/[0.04] px-5 py-24 sm:px-10 sm:py-32 lg:px-16 mb-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-600">src</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
            </span>
            <span className="text-zinc-300 font-medium">contact.ts</span>
            <span className="ml-3 text-zinc-600">// 06</span>
          </div>

          <div className="mt-4">
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
              Let&apos;s build something <span className="text-emerald-400">useful.</span>
            </h2>
          </div>
        </div>

        {/* Layout */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg">
              I&apos;m always happy to connect—whether discussing software engineering roles, full-stack systems, machine learning architectures, or technical collaborations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition bg-zinc-100 text-zinc-900 hover:bg-white"
              >
                <Mail className="h-4 w-4" />
                <span>email me</span>
              </a>

              <a
                href={profile.resume}
                download="Anagh-Bajpai-Resume.pdf"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition border border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
              >
                <Download className="h-4 w-4" />
                <span>download resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Links */}
          <div className="lg:col-span-5 font-mono text-xs space-y-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 p-4 text-zinc-300 transition-all hover:border-white/[0.12] hover:bg-white/[0.03] hover:text-white"
            >
              <div className="flex items-center gap-3">
                <Github className="h-4 w-4 text-zinc-400" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 p-4 text-zinc-300 transition-all hover:border-white/[0.12] hover:bg-white/[0.03] hover:text-white"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-sky-400" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" />
            </a>

            <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0d0d10]/70 p-4 text-zinc-300">
              <div className="flex items-center gap-3 truncate">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="truncate">{profile.email}</span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-3 shrink-0 rounded p-1 text-zinc-500 hover:text-zinc-200 transition-colors"
                title="Copy email"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
