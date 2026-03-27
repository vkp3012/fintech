# Aqua Aarisis — Finance & Business Consulting Website

> **Your All Finance Team in One Place**

A fully component-split React + Material UI website for Aqua Aarisis.

---

## 📁 Project Structure

```
aqua-aarisis/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                    ← React entry point
    ├── App.jsx                     ← Root layout (assembles all components)
    │
    ├── theme/
    │   └── theme.js                ← MUI theme (colors, typography, breakpoints)
    │
    ├── constants/
    │   └── data.js                 ← All data: nav, services, charts, pricing, chat
    │
    ├── components/                 ← Reusable layout components
    │   ├── Header.jsx              ← Fixed navbar + mobile drawer
    │   ├── Footer.jsx              ← CTA banner + nav links + bottom bar
    │   ├── AIChatButton.jsx        ← Claude-powered floating chat widget
    │   └── ScrollTop.jsx           ← Back-to-top button
    │
    └── sections/                   ← Full-page sections
        ├── Hero.jsx                ← Hero with live area chart
        ├── Services.jsx            ← 6-service card grid
        ├── Dashboard.jsx           ← KPI cards + 4 Recharts graphs
        ├── About.jsx               ← 4-pillar cards + pain points
        ├── Pricing.jsx             ← 3-tier pricing cards
        └── Contact.jsx             ← Contact form + info
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `@mui/material` | Component library |
| `@mui/icons-material` | Icons |
| `@emotion/react` + `@emotion/styled` | MUI styling engine |
| `recharts` | Charts (Area, Bar, Line, Pie) |
| `vite` | Build tool |

---

## 🤖 AI Chat

The chat button calls the **Anthropic Claude API** directly from the browser.
The system prompt in `src/constants/data.js → CHAT_SYSTEM` is pre-loaded with
all Aqua Aarisis service and pricing knowledge.

---

## 📞 Contact

- **Email:** ckaarisis@gmail.com  
- **Phone:** +91 6376980718