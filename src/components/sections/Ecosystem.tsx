'use client'

import { motion } from 'framer-motion'

const POLES = [
  {
    icon: '📚',
    label: 'Ressources',
    desc: 'Workbooks, templates, frameworks et outils d\'organisation pour structurer vos idées et vos projets.',
    items: ['Business Plan Workbook', 'Business Model Workbook', 'Brain Design Workbook'],
    statusLabel: 'Disponible',
    statusColor: '#6366f1',
    highlight: false,
  },
  {
    icon: '🧭',
    label: 'Accompagnement',
    desc: 'Accompagnements personnalisés pour entrepreneurs, créateurs et porteurs de projets qui veulent aller plus loin.',
    items: ['Structuration de projet', 'Stratégie produit', 'Vision & roadmap'],
    statusLabel: 'Bientôt',
    statusColor: '#8b5cf6',
    highlight: false,
  },
  {
    icon: '⚗️',
    label: 'Le Lab',
    desc: 'Le cœur de Woodle Lab. Un laboratoire qui crée des applications intelligentes, modernes et centrées sur de vrais besoins.',
    items: ['Woodle Career — live', 'Nouveaux produits en cours', 'Expérimentations actives'],
    statusLabel: 'Actif',
    statusColor: '#ec4899',
    highlight: true,
  },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 mb-4">
            L&apos;écosystème
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trois pôles,{' '}
            <span className="gradient-text">une vision</span>
          </h2>
          <p className="text-white/35 max-w-sm mx-auto text-sm leading-relaxed">
            Woodle Lab n&apos;est pas une agence. C&apos;est un studio-laboratoire qui construit,
            accompagne et crée des outils utiles.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {POLES.map((pole, i) => (
            <motion.div
              key={pole.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-2xl p-6"
              style={{
                background: pole.highlight
                  ? 'linear-gradient(#0E0E1C, #0E0E1C) padding-box, linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899) border-box'
                  : 'linear-gradient(#0E0E1C, #0E0E1C) padding-box, linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.25)) border-box',
                border: '1px solid transparent',
              }}
            >
              {/* Top shimmer for highlighted card */}
              {pole.highlight && (
                <div
                  className="absolute top-0 left-8 right-8 h-px rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.7), transparent)' }}
                />
              )}

              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{pole.icon}</span>
                <span
                  className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full tracking-[0.15em] uppercase"
                  style={{
                    background: `${pole.statusColor}15`,
                    color: pole.statusColor,
                    border: `1px solid ${pole.statusColor}28`,
                  }}
                >
                  {pole.statusLabel}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{pole.label}</h3>
              <p className="text-xs text-white/35 leading-relaxed mb-5">{pole.desc}</p>

              <ul className="space-y-2">
                {pole.items.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-white/25">
                    <span
                      className="h-px w-3 shrink-0 rounded-full"
                      style={{ background: pole.statusColor }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
