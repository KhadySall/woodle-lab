# BRAND & DIRECTION CRÉATIVE — Woodle Lab

> Version : 1.0 | Date : 2026-05-03

---

## Identité visuelle

### Logo
Le logo Woodle Lab est un "W" stylisé avec un swoosh orbital.
Couleurs : dégradé cyan → bleu → violet → rose/magenta.
Fichier : à intégrer dans `/public/logo.svg` ou `/public/logo.png`

### Palette de couleurs
```
Cyan    : #22d3ee  — teinte fraîche, technologique
Indigo  : #6366f1  — couleur principale, brand
Violet  : #8b5cf6  — créativité, profondeur
Rose    : #ec4899  — énergie, modernité
Magenta : #d946ef  — accent dynamique (usage ponctuel)
```

**Gradient principal** (texte, boutons, accents) :
```css
linear-gradient(135deg, #22d3ee 0%, #6366f1 35%, #8b5cf6 65%, #ec4899 100%)
```

**Gradient subtil** (texte secondaire, animations) :
```css
linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #f472b6 100%)
```

### Fond
```
Fond principal  : #06060F  (near-black, légère teinte bleue)
Fond carte      : #0E0E1C  (légèrement plus clair)
```

### Typographie
- **Principale** : Geist (Google Fonts) — moderne, tech, lisible
- **Mono** : Geist Mono — labels, badges, code, metadata
- Style général : tracking serré (`tracking-tight`), poids fort pour les headlines

---

## Langage visuel

### Ambiance générale
- Dark mode natif et exclusif
- Minimaliste mais avec de la profondeur
- Références visuelles : Anthropic, Linear, Vercel, Raycast

### Éléments récurrents
1. **Dot grid** — grille de points violets très subtils en arrière-plan (opacity 4%)
2. **Glow/halo** — zones de lumière floue colorée derrière les sections clés
3. **Gradient border** — bordures dégradées sur les cards importantes (technique padding-box)
4. **Gradient text** — textes clés en dégradé cyan→violet→rose
5. **Badges mono** — labels en font-mono, tracking large, uppercase, très petits
6. **Lignes séparatrices** — `h-px` avec gradient transparent→couleur→transparent

### Cards
```
Fond       : #0E0E1C (padding-box)
Bordure    : 1px transparent avec background-image gradient
Coins      : rounded-2xl (cards), rounded-3xl (featured)
Padding    : p-6 standard, p-8 sm:p-10 pour featured
```

### Boutons
```
Primaire   : gradient indigo→violet, text-white, rounded-xl
Secondaire : border rgba(255,255,255,0.08), text-white/50→white
```

### Animations (Framer Motion)
```
Entrée page      : opacity 0→1, y +28→0, duration 0.75, ease [0.22,1,0.36,1]
Entrée scroll    : whileInView, viewport once:true, duration 0.6
Stagger cards    : delay i*0.1
Texte animé      : opacity+y+blur, mode "wait", duration 0.45
Scroll indicator : y [0,5,0], repeat Infinity, duration 1.6
```

---

## Ton éditorial

### Voix
- Directe et confiante
- Technique mais accessible
- Ambitieuse sans être arrogante
- Légèrement mystérieuse (laboratoire = expérimentations en cours)

### Exemples de formulations
```
✅ "Building tomorrow's tools, today."
✅ "Le Lab ne fait pas des maquettes. Il construit."
✅ "Un studio-laboratoire qui construit, accompagne et crée."
✅ "De l'idée au produit réel."
❌ "Nous sommes une agence créative..."
❌ "Découvrez nos services..."
❌ "Notre équipe d'experts..."
```

### Phrases d'animation (AnimatedText)
Tournent toutes les 2,8s, style Claude/Anthropic :
```
'Building smarter tools...'
'Designing useful products...'
'Refining ambitious ideas...'
'Crafting intelligent workflows...'
'Turning concepts into reality...'
'Shipping what actually matters...'
'Experimenting boldly...'
'Making complexity disappear...'
'Questioning everything. Building better.'
'Testing new approaches...'
'Connecting ideas with execution...'
'Making the complex feel simple...'
```

---

## Relation avec Woodle Career

Woodle Career utilise le même univers indigo/violet mais dans une version plus **sobre et applicative** (SaaS, dashboard, formulaires).

Woodle Lab est plus **expressif et vibrant** — le gradient complet cyan→rose est utilisé plus librement.

Les deux partagent :
- La typographie Geist
- La famille de couleurs indigo/violet
- Le style minimaliste dark

---

## Assets à créer/intégrer

| Asset | Statut | Notes |
|-------|--------|-------|
| Logo SVG vectoriel | ⚠️ À intégrer | Remplacer le carré gradient CSS actuel |
| OG image (1200×630) | ❌ À créer | Pour partages sociaux |
| Favicon .ico | ❌ À créer | Idéalement basé sur le logo |
| Logo dark PNG | ❌ À créer | Pour fond sombre |
