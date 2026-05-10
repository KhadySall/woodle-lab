'use client'

import { motion } from 'framer-motion'

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

        {/* Row 2 : Le Lab — dominant */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(139,92,246,0.2)',
            background: 'rgba(139,92,246,0.04)',
          }}
        >
          {/* Shimmer top */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 10%, rgba(139,92,246,0.5) 50%, transparent 90%)',
            }}
          />

          <div className="p-8 sm:p-10 sm:flex sm:items-end sm:justify-between gap-12">

            {/* Left — headline + description */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="text-[10px] font-mono text-white/15 tracking-[0.2em]">03</span>
                <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.15em] text-violet-300/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Actif
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Le Lab</h3>
              <p className="text-sm text-white/35 leading-relaxed max-w-md">
                Le cœur de Woodle Lab. Un laboratoire qui crée des applications
                intelligentes, modernes et centrées sur de vrais besoins.
              </p>
            </div>

            {/* Right — activity list */}
            <div className="mt-8 sm:mt-0 flex flex-col gap-2 sm:min-w-[220px]">
              <div
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: 'rgba(139,92,246,0.08)',
                  border: '1px solid rgba(139,92,246,0.15)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                <span className="text-xs font-mono text-white/50">Woodle Career — live</span>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/10 shrink-0" />
                <span className="text-xs font-mono text-white/20">Nouveaux produits en cours</span>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/10 shrink-0" />
                <span className="text-xs font-mono text-white/20">Expérimentations actives</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
