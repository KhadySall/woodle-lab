'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '11', label: 'statuts Kanban' },
  { value: '20+', label: 'fonctionnalités' },
  { value: '14j', label: 'essai gratuit' },
  { value: '4,99€', label: 'par mois Pro' },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20 mb-3">
            L&apos;écosystème
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trois pôles,{' '}
            <span className="gradient-text">une vision</span>
          </h2>
        </motion.div>

        {/* Row 1 : Ressources + Accompagnement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">

          {/* 01 — Ressources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-7"
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.015)',
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono text-white/15 tracking-[0.2em]">01</span>
              <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.15em] text-white/25">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/50" />
                Disponible
              </span>
            </div>
            <h3 className="text-sm font-semibold text-white/60 mb-2">Ressources</h3>
            <p className="text-xs text-white/25 leading-relaxed mb-5">
              Workbooks, templates et frameworks pour structurer vos idées et vos projets.
            </p>
            <ul className="space-y-1.5">
              {['Business Plan Workbook', 'Business Model Workbook', 'Brain Design Workbook'].map(item => (
                <li key={item} className="text-[10px] text-white/15 font-mono">— {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* 02 — Accompagnement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="rounded-2xl p-7"
            style={{
              border: '1px solid rgba(255,255,255,0.04)',
              background: 'rgba(255,255,255,0.01)',
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono text-white/10 tracking-[0.2em]">02</span>
              <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.15em] text-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                Bientôt
              </span>
            </div>
            <h3 className="text-sm font-semibold text-white/35 mb-2">Accompagnement</h3>
            <p className="text-xs text-white/20 leading-relaxed mb-5">
              Accompagnements personnalisés pour entrepreneurs, créateurs et porteurs de projets.
            </p>
            <ul className="space-y-1.5">
              {['Structuration de projet', 'Stratégie produit', 'Vision & roadmap'].map(item => (
                <li key={item} className="text-[10px] text-white/10 font-mono">— {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Row 2 : Le Lab + Woodle Career — un seul conteneur */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(#0D0D1E, #0D0D1E) padding-box, linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899) border-box',
            border: '1px solid transparent',
          }}
        >
          {/* 03 — Le Lab */}
          <div className="p-8 sm:p-10 pb-8">
            <div className="flex items-center gap-5 mb-8">
              <span className="text-[10px] font-mono text-white/15 tracking-[0.2em]">03</span>
              <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.15em] text-violet-300/80">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                Actif
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Le Lab</h3>
            <p className="text-sm text-white/35 leading-relaxed max-w-xl">
              Le cœur de Woodle Lab. Un laboratoire qui crée des applications intelligentes,
              modernes et centrées sur de vrais besoins.
            </p>
          </div>

          {/* Divider — Premier produit */}
          <div className="px-8 sm:px-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <span className="text-[9px] font-mono text-white/20 tracking-[0.2em] uppercase whitespace-nowrap">
                Premier produit
              </span>
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>
          </div>

          {/* Woodle Career */}
          <div className="p-8 sm:p-10 pt-8">

            {/* Live badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span
                className="text-[9px] font-mono uppercase tracking-[0.15em]"
                style={{ color: '#4ade80' }}
              >
                Live
              </span>
            </div>

            {/* Product name */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Woodle Career
            </h2>

            {/* Description */}
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-10">
              Un SaaS complet de gestion de recherche d&apos;emploi. Pipeline Kanban,
              relances automatiques, Daily Brief personnalisé et insights statistiques.
            </p>

            {/* Separator */}
            <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.05)' }} />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
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
          className="text-center text-[10px] font-mono text-white/15 tracking-[0.15em] mt-6 uppercase"
        >
          D&apos;autres produits sont en cours dans le Lab
        </motion.p>

      </div>
    </section>
  )
}
