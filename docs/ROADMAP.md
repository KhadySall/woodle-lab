# ROADMAP — Woodle Lab Site

> Version : 1.0 | Dernière mise à jour : 2026-05-03

---

## Phase 0 — Préparation (✅ Fait — session actuelle)

| Tâche | Statut |
|-------|--------|
| Architecture décidée (repo séparé de damay-fo) | ✅ |
| Direction artistique définie (palette logo) | ✅ |
| Stack choisie : Next.js 15 + Tailwind v4 + Framer Motion | ✅ |
| Landing page codée complète | ✅ |
| Repo GitHub créé : khadysall/woodle-lab | ✅ |
| Dossier projet complet avec docs de contexte | ✅ |

---

## Phase 1 — Mise en ligne (🔜 Prochaine session)

| Tâche | Priorité |
|-------|----------|
| Push initial vers GitHub (`git init` + `git push`) | 🔴 Critique |
| `npm install` + vérification build | 🔴 Critique |
| Déploiement Vercel → woodlelab.com | 🔴 Critique |
| Intégration logo SVG réel | 🟡 Important |
| OG image pour réseaux sociaux | 🟡 Important |
| Favicon personnalisé | 🟡 Important |
| Test responsive mobile complet | 🟡 Important |
| Vérification animations (reduced-motion) | 🟢 Basse |

### Commandes Phase 1
```bash
# Dans le répertoire woodle-lab/
npm install
npm run dev          # Vérifier en local
npm run build        # Vérifier le build

# Push GitHub
git init
git remote add origin https://github.com/KhadySall/woodle-lab.git
git add -A
git commit -m "init: landing page Woodle Lab"
git push -u origin main

# Déploiement Vercel
# → Importer depuis GitHub sur vercel.com
# → Pas de variables d'env nécessaires
# → Pointer woodlelab.com sur le projet Vercel
```

---

## Phase 2 — Améliorations landing (après lancement)

| Tâche | Description |
|-------|-------------|
| Section newsletter | Formulaire email simple (opt-in Woodle Lab updates) |
| Section ressources preview | Aperçu des 3 workbooks avec lien |
| Compteur animé | Chiffres animés dans les stats (20+ features, etc.) |
| Cursor personnalisé | Optionnel, effet lab/studio |
| Parallax léger | Sur le hero, renforce l'effet profondeur |

---

## Phase 3 — Site complet V1 (vision future)

| Page | Contenu |
|------|--------|
| `/` | Landing actuelle (améliorée) |
| `/ressources` | Catalogue workbooks + templates |
| `/accompagnement` | Présentation offres coaching |
| `/lab` | Tous les produits + projets en cours |
| `/blog` | Articles, updates, behind-the-scenes |
| `/contact` | Formulaire de contact |

---

## Décisions techniques prises

| Décision | Raison |
|----------|--------|
| Repo séparé de damay-fo | Domaines différents, natures différentes (SaaS vs vitrine) |
| Pas de Supabase/backend | Site vitrine statique, aucun besoin |
| Tailwind v4 | Cohérence avec Woodle Career, CSS-first |
| Inline styles pour gradients | Plus fiable avec Tailwind v4 pour les gradient-borders complexes |
| Framer Motion pour animations | Même lib que Woodle Career, maîtrisée |
| Dark mode exclusif | Identité forte, pas de mode clair prévu pour l'instant |
