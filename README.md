# Metamorphosis Studio — Brand Transformation Portfolio

> A premium, interactive portfolio showcasing before-and-after brand transformation case studies, built with React, Vite, Tailwind CSS v4, and Framer Motion.

---

## ✨ Overview

**Metamorphosis Studio** is a single-page portfolio website designed to present brand transformation work in a cinematic, scroll-driven format. Each case study tells the complete story of a rebrand — from legacy identity to modern expression — with animated metrics, colour palette exploration, split-screen comparisons, and strategy breakdowns.

---

## 🖥️ Live Preview

Run locally with:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Fixed navbar with active-project tracking
│   ├── Hero.tsx                # Full-screen landing section with parallax orbs & stats bar
│   ├── ProjectsIntro.tsx       # Intro section before the case studies
│   ├── ProjectCaseStudy.tsx    # Per-project case study layout (banner, details, metrics)
│   ├── ColorPaletteExplorer.tsx# Before/after colour swatch explorer with hover detail
│   ├── SplitScreenCompare.tsx  # Draggable before/after image comparison slider
│   ├── MetricDashboard.tsx     # Animated KPI metric cards
│   ├── StrategySection.tsx     # Rebrand strategy pillars breakdown
│   ├── MarkDefinition.tsx      # Brand mark definition and usage guide
│   ├── CombinedMark.tsx        # Combined mark showcase
│   └── Footer.tsx              # Site footer
├── data/
│   └── projects.ts             # All case study data (projects, palettes, metrics, etc.)
├── hooks/                      # Custom React hooks
├── utils/                      # Utility functions
├── App.tsx                     # Root component & page composition
├── main.tsx                    # React entry point
└── index.css                   # Global styles & Tailwind base
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

> The project uses [`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile) — the entire app is bundled into a **single `dist/index.html`** file with all JS and CSS inlined, making it trivially portable.

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vitejs.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Utilities | `clsx`, `tailwind-merge` |
| Output | Single HTML file via `vite-plugin-singlefile` |

---

## 📁 Case Studies

The portfolio currently features three brand transformation case studies, each defined in [`src/data/projects.ts`](src/data/projects.ts):

| Client | Industry | Accent Colour |
|---|---|---|
| **BrewCo** | Craft Brewery | `#C4622D` Terracotta |
| **Nova Systems** | B2B SaaS | `#7C3AED` Violet |
| **Verde Collective** | Sustainable Retail | `#3E8B6A` Forest Green |

Each project entry includes:
- Before/after brand images
- Full colour palettes (before & after)
- KPI metrics with animated counters
- Brand strategy pillars
- Tagline, industry, and year

---

## 🎨 Design System

- **Dark base**: `#080808` background with `#0d0d0d` section alternates
- **Typography**: System font stack with tight tracking for headings
- **Accent colours**: Per-project, driven by `project.accentColor`
- **Animations**: Scroll-driven parallax, staggered reveals, hover micro-interactions
- **Glassmorphism**: `backdrop-blur` panels on the navbar and detail overlays

---

## 📦 Build Output

The production build outputs a single, self-contained file:

```
dist/
└── index.html   (~407 KB · ~122 KB gzipped)
```

This file can be deployed anywhere — GitHub Pages, Netlify Drop, Vercel, or simply opened directly in a browser.

---

## 📄 License

This project is private portfolio work. All brand assets, copy, and case study data are fictional and created for demonstration purposes only.
