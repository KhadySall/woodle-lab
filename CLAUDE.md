# CLAUDE.md — Woodle Lab

> Lis ce fichier en premier. Il contient tout ce dont tu as besoin pour comprendre le projet et reprendre le travail immédiatement.

---

## 1. Contexte du projet

**Woodle Lab** est une startup / laboratoire créatif et technologique fondée par Kha. Ce n'est pas une agence classique — c'est un studio-laboratoire qui développe des outils intelligents, des ressources digitales et des accompagnements stratégiques.

Le repository actuel (`woodle-lab`) contient le **site vitrine temporaire de Woodle Lab** (`woodlelab.com`), distinct de Woodle Career qui est le premier produit du Lab (`career.woodlelab.com`).

---

## 2. L'écosystème Woodle Lab — 3 pôles

### Pôle 1 — Ressources
Workbooks, templates, frameworks, outils d'organisation.
Trois premières ressources existantes :
- Business Plan Workbook
- Business Model Workbook
- Brain Design Workbook
**Statut : Disponible**

### Pôle 2 — Accompagnement
Accompagnements personnalisés pour entrepreneurs, créateurs, startups, porteurs de projets.
Offres en cours de structuration.
**Statut : Bientôt**

### Pôle 3 — Le Lab ⚗️ (le cœur)
Laboratoire de création de produits et applications digitales.
Premier produit : **Woodle Career** (live en production).
**Statut : Actif**

---

## 3. Woodle Career — Premier produit du Lab

- **URL** : https://career.woodlelab.com
- **Nature** : SaaS de gestion de recherche d'emploi
- **Modèle** : Freemium — Free + Pro (4,99 €/mois, 14j essai)
- **Stack** : Next.js 15, TypeScript, Supabase, Stripe, Resend, Vercel
- **Statut** : Live en production, actif

Fonctionnalités principales : Kanban 11 statuts, relances automatiques, Daily Brief Pro, insights statistiques, patterns personnels, rapport PDF, gestion entretiens, offres recommandées (Jooble, Adzuna, France Travail).

---

## 4. Ce site (woodle-lab) — Objectif actuel

**Landing page temporaire** pour `woodlelab.com`.

Objectifs :
- Présenter Woodle Lab et ses 3 pôles
- Mettre en avant Woodle Career comme premier produit live
- Signaler que le reste du site est en construction
- Avoir une présence crédible pour soutenir le lancement de Woodle Career

Ce n'est PAS le site complet de Woodle Lab — c'est une page de présence intelligente en attendant la V1 complète.

---

## 5. Direction artistique & branding

### Palette couleurs (extraite du logo Woodle Lab)
```
Cyan    : #22d3ee  (cyan-400)
Indigo  : #6366f1  (indigo-500)
Violet  : #8b5cf6  (violet-500)
Rose    : #ec4899  (pink-500)
```
Gradient principal : `linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899)`

### Fond
`#06060F` — near-black avec légère teinte bleue

### Typographie
Geist (Google Fonts) — même police que Woodle Career

### Ambiance visuelle
- Dark mode natif
- Dot grid subtil en arrière-plan
- Glows/halos colorés floutés
- Cartes avec gradient-border (padding-box technique)
- Texte blanc avec opacités variables (100%, 50%, 35%, 25%)
- Animations Framer Motion (fade + blur + y)
- Style : Anthropic / Linear / Vercel — minimaliste, tech, premium

### Animations texte (Hero)
12 phrases qui cyclent toutes les 2,8s avec fade+blur :
"Building smarter tools...", "Designing useful products...", etc.
Voir `src/components/ui/AnimatedText.tsx`

---

## 6. Stack technique

| Élément | Choix |
|---------|-------|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Déploiement | Vercel → woodlelab.com |
| Backend | Aucun (site statique/SSG) |

**Pas de Supabase, pas de Stripe, pas d'auth** — c'est un site vitrine pur.

---

## 7. Structure du projet

```
woodle-lab/
├── CLAUDE.md              ← Ce fichier (contexte session)
├── README.md              ← README technique
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .gitignore
├── docs/
│   ├── VISION.md          ← Vision produit Woodle Lab
│   ├── BRAND.md           ← Direction créative complète
│   └── ROADMAP.md         ← Ce qui est fait, ce qui reste
└── src/
    ├── app/
    │   ├── globals.css    ← Variables CSS, gradient-text, dot-grid
    │   ├── layout.tsx     ← Metadata SEO, fonts Geist
    │   └── page.tsx       ← Assemblage des sections
    └── components/
        ├── sections/
        │   ├── Hero.tsx         ← Hero plein écran + AnimatedText + CTAs
        │   ├── Ecosystem.tsx    ← 3 pôles en cards gradient
        │   ├── LabSpotlight.tsx ← Woodle Career spotlight card
        │   └── Footer.tsx       ← Footer minimaliste
        └── ui/
            └── AnimatedText.tsx ← Phrases cycliques fade+blur
```

---

## 8. État actuel du développement

### ✅ Fait
- Structure complète du projet Next.js 15 + Tailwind v4 + Framer Motion
- Page Hero : badge "Lab in progress", animation texte, headline, CTAs
- Section Ecosystem : 3 pôles avec cards gradient-border
- Section LabSpotlight : Woodle Career card avec stats et tags
- Footer : logo, status "en construction", copyright
- Repo GitHub créé : https://github.com/KhadySall/woodle-lab

### 🔜 À faire lors de la prochaine session
1. **Push initial** vers GitHub (git init + remote + push)
2. **Déploiement Vercel** → pointer sur `woodlelab.com`
3. **Logo SVG** à intégrer (remplacer le carré gradient CSS)
4. **OG image** pour les partages sociaux
5. **Favicon** personnalisé
6. **Responsive check** et ajustements mobile
7. **Performance** : vérifier LCP, animations reduced-motion

### 💡 Évolutions futures (site complet V1)
- Page `/ressources` — catalogue des workbooks
- Page `/accompagnement` — offres de coaching
- Page `/lab` — tous les produits du Lab
- Newsletter signup
- Blog / updates

---

## 9. Commandes utiles

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
# → http://localhost:3000

# Build de production
npm run build

# Push vers GitHub (première fois)
git init
git remote add origin https://github.com/KhadySall/woodle-lab.git
git add -A
git commit -m "init: landing page Woodle Lab"
git push -u origin main
```

---

## 10. Informations complémentaires

- **Propriétaire** : Kha / Woodle Lab
- **GitHub** : https://github.com/KhadySall/woodle-lab
- **Site cible** : https://woodlelab.com
- **Produit live** : https://career.woodlelab.com
- **Relation avec Woodle Career** : Ce repo est séparé de `damay-fo` (le repo de Woodle Career). Deux projets distincts, même univers.
