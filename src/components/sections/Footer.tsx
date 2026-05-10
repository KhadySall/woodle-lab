'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative py-24 px-6">
      {/* Top separator */}
      <div className="h-px mb-16" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div
              className="h-5 w-5 rounded-md shrink-0"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899)' }}
            />
            <span className="text-white/40 font-semibold tracking-tight text-sm">
              woodlelab
            </span>
          </div>

          {/* Narrative */}
          <p className="text-sm text-white/20 leading-relaxed max-w-sm mb-16">
            This website is a temporary public window —
            the full version is on its way.
          </p>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <a
              href="https://career.woodlelab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-white/20 hover:text-white/40 transition-colors tracking-wide"
            >
              career.woodlelab.com
            </a>
            <p className="text-[10px] font-mono text-white/15">
              © {new Date().getFullYear()} Woodle Lab
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
