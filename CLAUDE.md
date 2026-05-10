# CLAUDE.md — Woodle Lab

> Lis ce fichier en premier. Il contient tout ce dont tu as besoin pour comprendre le projet et reprendre le travail immédiatement.

---

## 1. Contexte du projet

**Woodle Lab** est un studio créatif et technologique fondé par Kha. Ce n'est pas une agence — c'est un laboratoire qui conçoit des outils intelligents, des ressources digitales et des systèmes de support stratégique.

Ce repository (`woodle-lab`) contient le **site web de Woodle Lab** (`woodlelab.com`), distinct de Woodle Career qui est le premier produit du Lab (`career.woodlelab.com`).

**État actuel** : le site est en construction. Une page placeholder est live sur `woodlelab.com` en attendant la V1 complète.

---

## 2. L'écosystème Woodle Lab — 3 pôles

### Pôle 1 — Resources
Workbooks, templates, frameworks, outils d'organisation.
- Business Plan Workbook
- Business Model Workbook
- Brain Design Workbook
**Statut : Disponible**

### Pôle 2 — Advisory
Accompagnements personnalisés pour entrepreneurs, créateurs, startups, porteurs de projets.
**Statut : Bientôt**

### Pôle 3 — The Lab (le cœur)
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

Fonctionnalités : Kanban 11 statuts, relances automatiques, Daily Brief Pro, insights statistiques, patterns personnels, rapport PDF, gestion entretiens, offres recommandées.

---

## 4. Ce site (woodle-lab) — État actuel

### Phase actuelle : Placeholder live

Une page unique est déployée sur `woodlelab.com`. Elle sert de présence publique pendant la construction du site complet.

**Ce que contient la page placeholder :**
- Badge "Website Preview"
- Texte animé cyclique (AnimatedText)
- Headline : "WOODLE Lab"
- Description du studio + mention que le site est en construction
- CTA vers Woodle Career

**Ce que la page ne contient PAS intentionnellement :**
- Navbar / logo
- Footer
- Sections Ecosystem / Lab / produits
- Tout le contenu du site complet → réservé pour la V1

### Phase suivante : V1 complète (à construire)

Le site complet de Woodle Lab sera construit à partir de cette base. Voir section 8 pour la roadmap.

---

## 5. Direction artistique & branding

### Palette couleurs
```
Cyan    : #22d3ee
Indigo  : #6366f1
Violet  : #8b5cf6
Rose    : #ec4899
```
Gradient principal : `linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6, #ec4899)`

### Fond
`#06060F` — near-black, uniforme, aucun glow

### Typographie
Geist — même police que Woodle Career

### Direction visuelle validée
- **Style** : Linear / Vercel / Stripe — minimaliste, premium, calme
- **Gradient** : utilisé uniquement sur un mot-clé par section (ex: "Lab"), jamais en décoration
- **Pas de** : glows diffus, dot-grid, cartes flashy, effets néon/cyber
- **Blanc avec opacités** : texte primaire `white`, secondaire `white/40`, tertiaire `white/20`
- **Espace** : généreux, sections bien séparées, respiration verticale

---

## 6. Stack technique

| Élément | Choix |
|---------|-------|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Déploiement | Vercel → woodlelab.com |
| Backend | Aucun (site statique) |

---

## 7. Structure actuelle du projet

```
woodle-lab/
├── CLAUDE.md
├── README.md
├── Logo                       ← fichier logo binaire (à intégrer)
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .gitignore
├── docs/
│   ├── VISION.md
│   ├── BRAND.md
│   └── ROADMAP.md
└── src/
    ├── app/
    │   ├── globals.css        ← gradient-text, base CSS
    │   ├── layout.tsx         ← Metadata SEO, fonts Geist
    │   └── page.tsx           ← Importe Hero uniquement
    └── components/
        ├── sections/
        │   └── Hero.tsx       ← Page placeholder complète
        └── ui/
            └── AnimatedText.tsx ← Phrases cycliques fade+blur
```

---

## 8. Roadmap V1 — Site complet à construire

### À faire en priorité avant V1
- [ ] Intégrer le logo (fichier `Logo` à la racine → `public/`)
- [ ] Favicon personnalisé
- [ ] OG image pour les partages sociaux
- [ ] Vérifier metadata SEO dans `layout.tsx`

### Pages à créer pour la V1 complète
- [ ] `/` — Homepage complète (hero + ecosystem + spotlight + footer)
- [ ] `/resources` — Catalogue des workbooks
- [ ] `/advisory` — Offres d'accompagnement
- [ ] `/lab` — Tous les produits du Lab
- [ ] Newsletter signup

### Composants à recréer pour la V1
- [ ] `Navbar.tsx` — Navigation principale
- [ ] `Footer.tsx` — Footer narratif
- [ ] `Ecosystem.tsx` — Les 3 pôles (direction éditoriale validée)
- [ ] `LabSpotlight.tsx` — Woodle Career product hero
- [ ] Composants UI réutilisables

---

## 9. Commandes utiles

```bash
npm install      # Installer les dépendances
npm run dev      # Développement → http://localhost:3000
npm run build    # Build de production
```

---

## 10. Informations

- **Propriétaire** : Kha / Woodle Lab
- **GitHub** : https://github.com/KhadySall/woodle-lab
- **Site** : https://woodlelab.com
- **Produit live** : https://career.woodlelab.com
- **Repo Woodle Career** : `damay-fo` (séparé, même univers)
