'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      {/* Nom */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none mb-6"
      >
        WOODLE <span className="gradient-text">Lab</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-sm text-white/30 tracking-wide mb-12"
      >
        A creative and technology studio.
      </motion.p>

      {/* CTA */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        href="https://career.woodlelab.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-sm font-medium text-white/35 hover:text-white/70 transition-colors"
      >
        Explore Woodle Career
        <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
      </motion.a>

    </section>
  )
}
