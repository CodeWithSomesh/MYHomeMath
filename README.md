<p align="center">
  <img src="https://img.shields.io/badge/MYHomeMath-Malaysia-47FFDF?style=for-the-badge&labelColor=0a0a0a" alt="MYHomeMath" />
</p>

<h1 align="center">🏠 MYHomeMath</h1>
<p align="center">
  <strong>Calculate your mortgage, check loan eligibility, and explore housing loans — all in one place.</strong>
</p>

<p align="center">
  A modern, beautifully designed mortgage calculator built for Malaysia. No more clunky spreadsheets or ugly bank sites. Just clean UI, smooth animations, and everything you need to understand your home loan.
</p>

<p align="center">
  <a href="https://home-finance-malaysia.vercel.app" target="_blank">→ Live Demo</a>
</p>

---

<br />

## ✨ Why MYHomeMath?

Most mortgage calculators are either **ugly**, **confusing**, or **incomplete**. I built MYHomeMath because:

- **I didn’t understand mortgages** — and wanted a tool that actually explains the numbers.
- **Existing sites had poor design** — so I focused on typography, layout, and a cohesive look.
- **No single site did it all** — calculator + eligibility + Malaysian bank options in one app.

MYHomeMath combines **mortgage calculation**, **indicative loan eligibility**, and **housing loan options from Malaysian banks** with a modern stack and interactive 3D-style visuals to make the experience less boring.

---

<br />

## 🎯 Features

| Feature | Description |
|--------|-------------|
| **📊 Mortgage Calculator** | Loan amount, interest rate, tenure → monthly repayment, total interest, and amortization schedule. |
| **📈 Loan Eligibility** | Property value, income, employment status → indicative eligibility amount and a clear eligibility meter. |
| **🏦 Bank Housing Loans** | Browse and filter housing loans from **60+ Malaysian banks** (conventional & Islamic), with rates and benefits. |
| **📉 Amortization Schedule** | Full breakdown of principal vs interest over the loan term. |
| **🥧 Visual Breakdown** | Pie charts and cards so you see where your money goes. |
| **✨ Interactive UI** | Framer Motion animations and 3D-style icons to make the flow engaging. |

---

<br />

## 🛠 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI:** [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts:** [Recharts](https://recharts.org/), [react-gauge-chart](https://www.npmjs.com/package/react-gauge-chart)
- **Toast:** [Sonner](https://sonner.emilkowal.ski/)

---

<br />

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/MYHomeMath.git
cd MYHomeMath

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

<br />

## 📁 Project Structure

```
MortageMath/
├── src/
│   ├── app/              # Next.js App Router (pages, layout, routes)
│   ├── components/       # React components (calculators, bank cards, UI)
│   ├── assets/           # Images (banks, icons)
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utilities
├── public/
├── utils/                # Supabase helpers (optional/auth)
└── package.json
```

---

<br />

## 📜 License

This project is open source and available for personal and educational use.

---

<p align="center">
  <sub>Built with Next.js, Framer Motion, and a lot of mortgage math.</sub>
</p>
