# Templix AI — Free Professional Templates + AI Document Editor

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Templix AI** is a production-grade web application offering free professional business document templates (Invoices, Resumes, Contracts, Proposals, Letters, Reports, Business Plans) paired with an AI-powered interactive document editor.

Visit live app: [templix-ai.whitesparksoft.com](https://templix-ai.whitesparksoft.com)

---

## Key Features

- 📑 **200+ Professional Document Templates**: Hand-crafted layouts for billing, job applications, legal agreements, and corporate pitches.
- ⚡ **AI Document Editor**: Real-time paragraph rewriting, tone adjustment, grammar checking, and content generation.
- 📄 **Multi-Format Exports**: Export completed documents to print-ready PDF and editable Microsoft Word (`.docx`) files instantly.
- 🔒 **Privacy-First & No Sign-Up Required**: Instant guest access without mandatory authentication or credit card requirements.
- 🚀 **High Performance & Modern UI**: Built with Next.js 16 App Router, Turbopack, TailwindCSS, and dark mode support.
- 🔍 **SEO & Accessibility**: Structured Schema.org markup, ATS-friendly resume formatting, and BCP-47 i18n support.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **UI & Styling**: React 19, TailwindCSS, Lucide Icons, Framer Motion
- **Database & Auth**: Supabase (PostgreSQL + Auth SSR)
- **Editor**: TipTap Rich Text Editor
- **Language**: TypeScript

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/savan2509/Templix-AI.git
cd Templix-AI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Copy the example env file and add your environment credentials:

```bash
cp .env.example .env.local
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## License

This project is licensed under the MIT License.
