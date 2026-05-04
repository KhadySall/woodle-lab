'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative py-14 px-6">
      {/* Top separator */}
      <div
        className="absolute top-0 left-10 right-10 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)' }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="h-6 w-6 rounded-lg shrink-0"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #8b5cf6, #ec4899)' }}
            />
            <span className="text-white/50 font-semibold tracking-tight text-sm">
              woodle<span className="gradient-text">lab</span>
            </span>
          </div>

          {/* Build status */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/20">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Site en construction — woodlelab.com
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-[10px] font-mono">
            © {new Date().getFullYear()} Woodle Lab
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
