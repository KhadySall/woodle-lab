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
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20 mb-4">
            The Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Three poles,{' '}
            <span className="text-white/35">one direction.</span>
          </h2>
        </motion.div>

        {/* List */}
        <div>

          {/* — 01 Resources — */}
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-10 flex items-start justify-between gap-8"
          >
            <div className="flex items-start gap-8 flex-1 min-w-0">
              <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] mt-0.5 shrink-0">01</span>
              <div>
                <h3 className="text-base font-semibold text-white/60 mb-2">Resources</h3>
                <p className="text-sm text-white/25 leading-relaxed max-w-sm">
                  Workbooks, templates and thinking frameworks for structured work.
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-white/20 tracking-[0.15em] uppercase mt-0.5 shrink-0">
              Available
            </span>
          </motion.div>

          {/* — 02 Advisory — */}
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06, duration: 0.5 }}
            className="py-10 flex items-start justify-between gap-8"
          >
            <div className="flex items-start gap-8 flex-1 min-w-0">
              <span className="text-[10px] font-mono text-white/10 tracking-[0.2em] mt-0.5 shrink-0">02</span>
              <div>
                <h3 className="text-base font-semibold text-white/25 mb-2">Advisory</h3>
                <p className="text-sm text-white/15 leading-relaxed max-w-sm">
                  Strategic support for builders and early-stage projects.
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-white/12 tracking-[0.15em] uppercase mt-0.5 shrink-0">
              Soon
            </span>
          </motion.div>

          {/* — 03 The Lab — */}
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="pt-10"
          >
            <div className="flex items-start justify-between gap-8 mb-20">
              <div className="flex items-start gap-8 flex-1 min-w-0">
                <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] mt-0.5 shrink-0">03</span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">The Lab</h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                    Digital products designed around real problems.
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/30 tracking-[0.15em] uppercase mt-0.5 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-white/30 animate-pulse" />
                Active
              </span>
            </div>

            {/* Woodle Career — product hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="sm:pl-16 pb-16"
            >
              {/* First product label */}
              <div className="flex items-center gap-5 mb-14">
                <div className="h-px w-8" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <span className="text-[9px] font-mono text-white/15 tracking-[0.2em] uppercase">
                  First product
                </span>
              </div>

              {/* Live */}
              <div className="flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono text-emerald-400/60 uppercase tracking-[0.15em]">
                  Live
                </span>
              </div>

              {/* Product name */}
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
                Woodle Career
              </h2>

              {/* Description */}
              <p className="text-sm text-white/35 leading-relaxed max-w-lg mb-14">
                A complete job search management SaaS. Kanban pipeline, automated follow-ups,
                personalized daily brief and statistical insights.
              </p>

              {/* Stats — flat, no boxes */}
              <div className="flex flex-wrap gap-x-10 gap-y-5 mb-14">
                {STATS.map(stat => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-white mb-0.5">{stat.value}</p>
                    <p className="text-[10px] font-mono text-white/25 tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://career.woodlelab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                Access Woodle Career
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Coming next */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[10px] font-mono text-white/15 tracking-[0.15em] mt-10 uppercase"
        >
          More products are being built in the Lab.
        </motion.p>

      </div>
    </section>
  )
}
