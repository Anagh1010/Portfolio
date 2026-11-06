"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { SectionLabel } from "@/components/about-section"

export function ContactSectionNew() {
  const { personal } = portfolioData
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Fallback to mailto if EmailJS not configured
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`)
    setTimeout(() => { setSending(false); setSent(true) }, 1000)
  }

  const contacts = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, copyable: true },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}`, copyable: false },
    { icon: MapPin, label: "Location", value: personal.location, href: null, copyable: false },
    { icon: Github, label: "GitHub", value: "Anagh1010", href: personal.github, copyable: false },
    { icon: Linkedin, label: "LinkedIn", value: "anagh-bajpai", href: personal.linkedin, copyable: false },
  ]

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="05" label="Get In Touch" />
          <h2 className="text-3xl font-bold text-white mt-3 mb-3">Contact</h2>
          <p className="text-zinc-500 text-sm max-w-xl">
            Open to internships, full-time roles, and interesting projects. Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contacts.map(({ icon: Icon, label, value, href, copyable }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/[0.08]">
                  <Icon className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-zinc-700 mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-300 hover:text-white transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-300">{value}</span>
                  )}
                </div>
                {copyable && (
                  <button onClick={copyEmail} className="p-1.5 rounded-md text-zinc-600 hover:text-white transition-colors">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] text-center">
                <div>
                  <div className="text-2xl mb-2">✓</div>
                  <div className="font-semibold text-white mb-1">Message sent!</div>
                  <div className="text-sm text-zinc-500">I&apos;ll get back to you as soon as possible.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-zinc-600 mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-md bg-white/5 border border-white/[0.08] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-600 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-md bg-white/5 border border-white/[0.08] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono text-zinc-600 mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md bg-white/5 border border-white/[0.08] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-2.5 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
