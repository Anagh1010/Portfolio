"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false)
  }

  return (
    <>
      <motion.div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -60 }}
        animate={{ y: isVisible ? 0 : -60 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="px-4 py-2.5 rounded-full bg-slate-900/90 border border-slate-700/70 shadow-lg shadow-slate-900/40 backdrop-blur-md">
          {isMobile ? (
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="text-sm font-semibold text-white">
                Anagh <span className="text-indigo-400">Bajpai</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-white h-7 w-7"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Link href="/" className="text-sm font-semibold text-white mr-4">
                Anagh <span className="text-indigo-400">Bajpai</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 text-sm text-slate-400 hover:text-white rounded-full hover:bg-slate-700/50 transition-colors duration-150"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-slate-300 hover:text-white py-3 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
