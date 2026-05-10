'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from '@/components/ui/AnimatedText'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #06060F, transparent)' }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-20">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-7"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-[0.18em] uppercase"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            Website Preview
          </span>
        </motion.div>

        {/* Animated activity line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-7"
        >
          <AnimatedText />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-5 max-w-4xl"
        >
          WOODLE <span className="gradient-text">Lab</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-base text-white/35 max-w-lg leading-relaxed mb-4"
        >
          A creative and technology studio designing intelligent tools,
          digital resources and strategic support systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm text-white/20 max-w-sm leading-relaxed mb-10"
        >
          This page is a preview — the full website is currently being built.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://career.woodlelab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            Explore Woodle Career
            <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/15 text-[9px] font-mono tracking-[0.2em] uppercase">woodlelab.com</span>
        </div>
      </motion.div>
    </section>
  )
}
