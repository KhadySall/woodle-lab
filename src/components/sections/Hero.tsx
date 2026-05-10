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

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <div
            className="h-6 w-6 rounded-lg shrink-0"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899)' }}
          />
          <span className="text-white font-semibold tracking-tight text-sm">
            woodle<span className="text-white/50">lab</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/20 font-mono tracking-widest uppercase hidden sm:block">
            v0.1 · Public Preview
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </nav>

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
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            Public Preview
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
          Building tomorrow&apos;s{' '}
          <span className="gradient-text">tools</span>,<br />
          today.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-base text-white/35 max-w-lg leading-relaxed mb-10"
        >
          A creative and technology studio building intelligent tools,
          digital resources and strategic support.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3"
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
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/35 hover:text-white/60 transition-colors"
          >
            Learn more
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
          <span className="text-white/15 text-[9px] font-mono tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-5 w-px bg-white/10"
          />
        </div>
      </motion.div>
    </section>
  )
}
