'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '11', label: 'statuts Kanban' },
  { value: '20+', label: 'fonctionnalités' },
  { value: '14j', label: 'essai gratuit' },
  { value: '4,99€', label: 'par mois Pro' },
]

export function LabSpotlight() {
  return (
    <section className="relative py-24 px-6">
      <div className="relative max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20">
            Lab — Premier produit
          </p>
        </motion.div>

        {/* Product card — seul gradient border de la page */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(#0D0D1E, #0D0D1E) padding-box, linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899) border-box',
            border: '1px solid transparent',
          }}
        >
          <div className="p-10 sm:p-14">

            {/* Header row */}
            <div className="flex items-start justify-between mb-14">
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20">
                De l&apos;idée au produit réel
              </p>
              <span
                className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.15em]"
                style={{ color: '#4ade80' }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>

            {/* Product name */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
              Woodle Career
            </h2>

            {/* Description */}
            <p className="text-base text-white/40 leading-relaxed max-w-xl mb-12">
              Un SaaS complet de gestion de recherche d&apos;emploi. Pipeline Kanban,
              relances automatiques, Daily Brief personnalisé et insights statistiques.
            </p>

            {/* Separator */}
            <div className="h-px mb-10" style={{ background: 'rgba(255,255,255,0.06)' }} />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
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
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              Accéder à Woodle Career
              <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </a>
          </div>
        </motion.div>

        {/* Coming next */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-[10px] font-mono text-white/15 tracking-[0.15em] mt-8 uppercase"
        >
          D&apos;autres produits sont en cours dans le Lab
        </motion.p>

      </div>
    </section>
  )
}
