"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Check, Copy, Clock, Github, Linkedin, MessageSquare } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText("anaghb1010@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText("+919821112573")
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatusMessage(null)

    try {
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
      } else {
        // Fallback simulation / open mail client
        await new Promise((res) => setTimeout(res, 800))
        window.location.href = `mailto:anaghb1010@gmail.com?subject=${encodeURIComponent(
          form.subject || "Contact from Portfolio"
        )}&body=${encodeURIComponent(
          `Hi Anagh,\n\nFrom: ${form.from_name} (${form.from_email})\n\n${form.message}`
        )}`
      }

      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent. I'll get back to you shortly.",
      })
      setForm({ from_name: "", from_email: "", subject: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatusMessage({
        type: "error",
        text: "Could not send directly. Opening your default email client...",
      })
      window.location.href = `mailto:anaghb1010@gmail.com?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(form.message)}`
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Info Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              Direct Contact
            </span>
            <h3 className="text-xl font-bold text-zinc-100">Let's build something remarkable.</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              I'm always open to discussing software engineering internships, full-time roles,
              distributed system architectures, or AI/ML collaborations.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {/* Email card */}
            <div
              onClick={copyEmail}
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Email Address</span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-zinc-200">
                    anaghb1010@gmail.com
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="p-1.5 text-zinc-400 hover:text-white"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone card */}
            <div
              onClick={copyPhone}
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Phone / WhatsApp</span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-zinc-200">
                    +91-9821112573
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="p-1.5 text-zinc-400 hover:text-white"
                title="Copy Phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Time Card */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    New Delhi, India
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>{currentTime || "IST"}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/Anagh1010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anagh-bajpai-b928182a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Message Form Column */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-6">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-bold text-zinc-100">Send an asynchronous message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  value={form.from_name}
                  onChange={(e) => setForm({ ...form, from_name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 placeholder:text-zinc-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 font-medium">Your Email *</label>
                <input
                  type="email"
                  required
                  value={form.from_email}
                  onChange={(e) => setForm({ ...form, from_email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 placeholder:text-zinc-600 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-zinc-400 font-medium">Subject *</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Software Engineering Opportunity / Project Discussion"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 placeholder:text-zinc-600 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-zinc-400 font-medium">Message *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role, technical challenge, or project..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 placeholder:text-zinc-600 transition-colors resize-none"
              />
            </div>

            {statusMessage && (
              <div
                className={`p-3 rounded-xl text-xs font-mono ${
                  statusMessage.type === "success"
                    ? "bg-emerald-950/50 border border-emerald-800 text-emerald-300"
                    : "bg-amber-950/50 border border-amber-800 text-amber-300"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-semibold text-xs sm:text-sm transition-all disabled:opacity-50 shadow-sm"
            >
              {submitting ? (
                <>Transmitting...</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
