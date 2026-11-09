"use client";

import { useEffect, useState } from "react";
import { ArrowRight, FileCode2, GitBranch, Mail, MapPin, Star } from "lucide-react";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % profile.roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative flex min-h-[calc(100vh-6.5rem)] items-center px-5 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* Left Column (col-span-7) */}
        <div className="lg:col-span-7">
          {/* Availability badge */}
          <div>
            <span className="inline-flex h-7 items-center gap-2 rounded-full border px-3 text-xs border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300/90 font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </div>

          {/* Comment */}
          <p className="mt-8 font-mono text-xs text-zinc-500 sm:text-sm">
            <span className="text-zinc-600">//</span> hello, world — my name is
          </p>

          {/* Big Name */}
          <h1 className="mt-3 text-5xl font-medium leading-[0.95] tracking-tighter text-zinc-50 sm:text-7xl xl:text-8xl">
            <span className="block">{profile.firstName}</span>
            <span className="block text-zinc-500">
              {profile.lastName}
              <span className="text-emerald-400">.</span>
            </span>
          </h1>

          {/* Typewriter role with emerald cursor */}
          <div className="mt-6 flex items-center gap-2 font-mono text-sm text-zinc-300 sm:text-base">
            <span className="text-emerald-400">❯</span>
            <span>{displayedText}</span>
            <span className="inline-block h-5 w-2 bg-emerald-400/80 animate-pulse" aria-hidden="true" />
          </div>

          {/* Bio copy */}
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg">
            {profile.bio}
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition focus-visible:outline-2 bg-zinc-100 text-zinc-900 hover:bg-white group"
            >
              <span className="font-mono text-xs text-zinc-500">$</span>
              npm run projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition focus-visible:outline-2 border border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
            >
              <Mail className="h-4 w-4 text-zinc-400" />
              POST /contact
            </a>
          </div>

          {/* Meta stats */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-zinc-400" />
              {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <GitBranch className="h-3.5 w-3.5 text-zinc-400" />
              DTU · 8.86 / 10 CGPA
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-3.5 w-3.5 text-amber-400/80" />
              1st Place Execute 5.0
            </span>
          </div>
        </div>

        {/* Right Column: Code Card (col-span-5) */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d10]/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
            {/* Window title bar */}
            <div className="flex h-9 items-center justify-between border-b border-white/[0.06] px-3.5 bg-black/40">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <FileCode2 className="h-3.5 w-3.5 text-sky-400" />
                <span>developer.ts</span>
              </div>
              <span className="font-mono text-xs text-zinc-600">TypeScript</span>
            </div>

            {/* Code editor body */}
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 sm:text-sm">
              <code>
                <span className="block text-zinc-500"><span className="select-none text-zinc-700"> 1 </span><span className="text-purple-400">const</span> <span className="text-blue-300">anagh</span> = &#123;</span>
                <span className="block"><span className="select-none text-zinc-700"> 2 </span>  <span className="text-zinc-400">role</span>: <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,</span>
                <span className="block"><span className="select-none text-zinc-700"> 3 </span>  <span className="text-zinc-400">focus</span>: [<span className="text-emerald-300">&quot;Web&quot;</span>, <span className="text-emerald-300">&quot;Systems&quot;</span>, <span className="text-emerald-300">&quot;ML&quot;</span>],</span>
                <span className="block"><span className="select-none text-zinc-700"> 4 </span>  <span className="text-zinc-400">stack</span>: &#123;</span>
                <span className="block"><span className="select-none text-zinc-700"> 5 </span>    <span className="text-zinc-400">frontend</span>: <span className="text-emerald-300">&quot;React · Next.js · TS&quot;</span>,</span>
                <span className="block"><span className="select-none text-zinc-700"> 6 </span>    <span className="text-zinc-400">backend</span>: <span className="text-emerald-300">&quot;Node · APIs · Python&quot;</span>,</span>
                <span className="block"><span className="select-none text-zinc-700"> 7 </span>    <span className="text-zinc-400">database</span>: <span className="text-emerald-300">&quot;PostgreSQL · MongoDB&quot;</span>,</span>
                <span className="block"><span className="select-none text-zinc-700"> 8 </span>  &#125;,</span>
                <span className="block"><span className="select-none text-zinc-700"> 9 </span>  <span className="text-zinc-400">building</span>: <span className="text-emerald-300">&quot;Roamwise · QuickCart&quot;</span>,</span>
                <span className="block"><span className="select-none text-zinc-700">10 </span>  <span className="text-zinc-400">curious</span>: <span className="text-amber-300">true</span>,</span>
                <span className="block"><span className="select-none text-zinc-700">11 </span>  <span className="text-zinc-400">hireable</span>: <span className="text-amber-300">true</span>,</span>
                <span className="block"><span className="select-none text-zinc-700">12 </span>&#125; <span className="text-purple-400">satisfies</span> <span className="text-sky-300">Engineer</span>;</span>
                <span className="block"><span className="select-none text-zinc-700">13 </span></span>
                <span className="block"><span className="select-none text-zinc-700">14 </span><span className="text-purple-400">export default</span> anagh;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
