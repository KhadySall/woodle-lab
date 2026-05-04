'use client'

import { motion } from 'framer-motion'

const STATS = [
  { label: 'Fonctionnalités', value: '20+' },
  { label: 'Statuts Kanban', value: '11' },
  { label: 'Sources offres', value: '3' },
  { label: 'Essai gratuit', value: '14j' },
]

const TAGS = ['Kanban', 'Daily Brief', 'Insights', 'Email auto', 'Stripe', 'Freemium']

export function LabSpotlight() {
  return (
    <section className="relative py-24 px-6">
      {/* Center glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] blur-[160px] opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)' }}
      />

      <div className="relative max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 mb-4">
            Lab — Premier produit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            De l&apos;idée au{' '}
            <span className="gradient-text">produit réel</span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto text-sm leading-relaxed">
            Le Lab ne fait pas des maquettes. Il construit des produits utilisables,
            déployés en production et centrés sur de vrais problèmes.
          </p>
        </motion.div>

        {/* Woodle Career card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-10 overflow-hidden"
          style={{
            background: 'linear-gradient(#0E0E1C, #0E0E1C) padding-box, linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899) border-box',
            border: '1px solid transparent',
          }}
        >
          {/* Internal dot grid */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none dot-grid"
          />

          <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">

            {/* Left — main info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  🎯
                </div>
                <div>
                  <p className="text-[9px] font-mono tracking-[0.18em] uppercase text-white/25">
                    Woodle Lab — Produit #1
                  </p>
                  <h3 className="text-xl font-bold text-white leading-tight">Woodle Career</h3>
                </div>
                <span
                  className="ml-auto text-[9px] font-mono font-bold px-2.5 py-1 rounded-full tracking-[0.15em] uppercase flex items-center gap-1.5"
                  style={{
                    background: 'rgba(34,197,94,0.08)',
                    color: '#4ade80',
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              <p className="text-sm text-white/45 leading-relaxed mb-6">
                Un SaaS complet de gestion de recherche d&apos;emploi. Pipeline Kanban,
                relances automatiques, Daily Brief personnalisé, insights statistiques
                et tableau de bord KPI personnalisable.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {TAGS.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg"
                    style={{
                      background: 'rgba(99,102,241,0.1)',
                      color: '#818cf8',
                      border: '1px solid rgba(99,102,241,0.18)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://career.woodlelab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                Accéder à Woodle Career →
              </a>
            </div>

            {/* Right — stats */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:w-40 shrink-0">
              {STATS.map(stat => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <p className="text-2xl font-bold gradient-text leading-none mb-1">{stat.value}</p>
                  <p className="text-[9px] text-white/25 font-mono tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coming soon indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-center gap-1.5">
              {['#6366f1', '#8b5cf6', '#ec4899'].map((c, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full opacity-50"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-white/25 text-[10px] font-mono tracking-wide">
              D&apos;autres produits sont en cours dans le Lab
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
