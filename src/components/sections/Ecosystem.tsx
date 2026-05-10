'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '11', label: 'kanban statuses' },
  { value: '20+', label: 'features' },
  { value: '14 days', label: 'free trial' },
  { value: '4.99€', label: '/mo Pro' },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-40 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header — centré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20 mb-4">
            The Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Three poles,{' '}
            <span className="text-white/35">one direction.</span>
          </h2>
        </motion.div>

        {/* Poles — grille 3 colonnes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden mb-32"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* 01 — Resources */}
          <div className="p-10 flex flex-col gap-0">
            <span className="text-[10px] font-mono text-white/15 tracking-[0.2em] mb-8">01</span>
            <h3 className="text-base font-semibold text-white/50 mb-3">Resources</h3>
            <p className="text-sm text-white/20 leading-relaxed flex-1">
              Workbooks, templates and thinking frameworks for structured work.
            </p>
            <span className="text-[10px] font-mono text-white/20 tracking-[0.15em] uppercase mt-10">
              Available
            </span>
          </div>

          {/* 02 — Advisory */}
          <div
            className="p-10 flex flex-col"
            style={{
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span className="text-[10px] font-mono text-white/10 tracking-[0.2em] mb-8">02</span>
            <h3 className="text-base font-semibold text-white/20 mb-3">Advisory</h3>
            <p className="text-sm text-white/12 leading-relaxed flex-1">
              Strategic support for builders and early-stage projects.
            </p>
            <span className="text-[10px] font-mono text-white/15 tracking-[0.15em] uppercase mt-10">
              Soon
            </span>
          </div>

          {/* 03 — The Lab */}
          <div className="p-10 flex flex-col">
            <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] mb-8">03</span>
            <h3 className="text-base font-semibold text-white mb-3">The Lab</h3>
            <p className="text-sm text-white/40 leading-relaxed flex-1">
              Digital products designed around real problems.
            </p>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/35 tracking-[0.15em] uppercase mt-10">
              <span className="h-1.5 w-1.5 rounded-full bg-white/35 animate-pulse" />
              Active
            </span>
          </div>
        </motion.div>

        {/* Woodle Career — centré, product hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto"
        >
          {/* First product separator */}
          <div className="flex items-center gap-6 mb-20">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span className="text-[9px] font-mono text-white/15 tracking-[0.2em] uppercase whitespace-nowrap">
              First product
            </span>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* Live */}
          <div className="flex items-center gap-2 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono text-emerald-400/60 uppercase tracking-[0.15em]">
              Live
            </span>
          </div>

          {/* Product name */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Woodle Career
          </h2>

          {/* Description */}
          <p className="text-sm text-white/35 leading-relaxed mb-16">
            A complete job search management SaaS. Kanban pipeline, automated
            follow-ups, personalized daily brief and statistical insights.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 mb-16">
            {STATS.map(stat => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-[10px] font-mono text-white/25 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://career.woodlelab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/55 hover:text-white transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Access Woodle Career
            <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
          </a>
        </motion.div>

        {/* Coming next */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-[10px] font-mono text-white/15 tracking-[0.15em] mt-24 uppercase"
        >
          More products are being built in the Lab.
        </motion.p>

      </div>
    </section>
  )
}
