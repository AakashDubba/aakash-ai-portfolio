# Aakash Dubba — Applied AI & ML Systems Engineer Portfolio

Production portfolio repository built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with a strict human-engineering tone, verified production metrics, and an interactive in-browser inference sandbox.

[![FlyRank AI Verified](https://img.shields.io/badge/FlyRank_AI-Verified_Graduate-10b981?style=flat-square)](https://aifluency.flyrank.ai/verify)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

## ⚡ Live Features & Systems

### 1. In-Browser Intent & Routing Engine Sandbox
- Live client-side feature extraction and linear multi-class classifier.
- Predicts primary target department, confidence score, SLA priority, and measured execution latency (<30ms).
- Calibrated probability fallback trigger (<65% confidence threshold) for automated human supervisor triage.
- Raw JSON Request/Response payload inspector.

### 2. Featured 3-Beat Production Case Studies
- **Kestrel Home Appliances AI Service Request Router**: Character-level TF-IDF + LinearSVC achieving 84.71% holdout accuracy and cutting triage delays from 48 hours to <200ms.
- **ClinicFlow AI**: Air-gapped, zero-cloud-egress local ambient clinical transcription and SOAP note generation using faster-whisper and quantized Llama 3 8B.
- **NewsWorld Deduplication Engine**: Asynchronous RSS crawler with pgvector cosine similarity clustering (>91% duplicate suppression).

### 3. FlyRank AI Verified Credential
- Verified cohort graduate credential pill with live verification hyperlink.

---

## 🛠️ Project Structure

```
├── HOW_TO_ADD_NEXT_CASE.md        # Single-file workflow for adding future case studies
├── NEXT_PROJECT_ROADMAP.md        # ClinicFlow AI v2 roadmap & reminder cadence
├── CLAUDE_PROJECT_CONTEXT.md      # AI persistent memory & engineering prompt kit
├── BUILD_WRITEUP_AND_STORY.md     # Build post-mortem, launch post & 4-min video script
├── src/
│   ├── app/
│   │   ├── globals.css            # Dark zinc palette & custom tokens
│   │   ├── layout.tsx             # Root layout with SEO & OpenGraph meta
│   │   └── page.tsx               # Main portfolio landing page
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky header with navigation & contacts
│   │   ├── HeroSection.tsx        # Engineering thesis & proof badges
│   │   ├── InteractiveRouterSandbox.tsx # In-browser inference working demo
│   │   ├── ProjectCard.tsx        # 3-beat case study card with metrics & architecture
│   │   ├── SkillsGrid.tsx         # Categorized skills & engineering standards
│   │   ├── FlyRankBadge.tsx       # Verified graduate badge component
│   │   └── Footer.tsx             # Footer links & copyright
│   ├── data/
│   │   ├── projects.ts            # Typed case study data store
│   │   ├── skills.ts              # Skills taxonomy & standards
│   │   └── routingModel.ts        # Client-side tokenizer & inference simulation
│   └── lib/
│       └── utils.ts               # Tailwind class merging utility
└── tailwind.config.ts             # Custom dark aesthetic styling tokens
```

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📄 License
MIT © [Aakash Dubba](https://github.com/aakashdubba)
