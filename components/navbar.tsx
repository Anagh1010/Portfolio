"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Check, Copy, Download, FileText, Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText("anaghb1010@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-sm text-zinc-100 group-hover:border-zinc-700 transition-colors">
              AB
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                Anagh Bajpai
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 rounded-full hover:bg-zinc-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-900/50 hover:bg-zinc-800/70 border border-zinc-800/80 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="/resume.pdf"
              download="Anagh_Bajpai_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-100 bg-zinc-100/10 hover:bg-zinc-100/20 border border-zinc-700/60 hover:border-zinc-500 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 px-6 py-6 md:hidden shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-zinc-300 hover:text-white border-b border-zinc-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  copyEmail()
                  setTimeout(() => setMobileMenuOpen(false), 800)
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono font-medium text-zinc-300"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Email Copied!" : "anaghb1010@gmail.com"}</span>
              </button>

              <a
                href="/resume.pdf"
                download="Anagh_Bajpai_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-zinc-950 font-medium text-xs shadow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
