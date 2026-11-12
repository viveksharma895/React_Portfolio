# Vivek Sharma – Premium Developer Portfolio

A modern, high-performance personal portfolio website engineered for **Vivek Sharma**, Frontend Developer, React & Next.js Specialist, and WordPress & E-commerce Expert.

---

## 1. Professional Profile

- **Name:** Vivek Sharma
- **Current Role:** Engineer Delivery at **AdGlobal360 Hakuhodo, Ltd.**
- **Experience:** 8+ Years building scalable web applications for enterprise clients (including **Pulse Shift Tool**, **Maruti Suzuki**, **TVS Motors**, and **Muthoot Finance**).
- **Location:** Gurgaon, Haryana, India
- **Phone / WhatsApp:** [+91 9717679664](tel:+919717679664)
- **Email:** [sharma.vivek895@gmail.com](mailto:sharma.vivek895@gmail.com)
- **Official Domain:** [https://www.viveksharmacoder.in/](https://www.viveksharmacoder.in/)

---

## 2. Technology Stack

- **Framework:** React 19 + Vite (SPA) / Full-Stack Express Server
- **Languages:** TypeScript, JavaScript ES6+
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`)
- **Typography:** Plus Jakarta Sans & Outfit (Google Fonts), JetBrains Mono
- **Icons:** Lucide React
- **Animations & Effects:** Smooth transitions, Canvas Confetti
- **SEO & Social Cards:** OpenGraph, Twitter Cards, Schema.org Structured Data (JSON-LD)

---

## 3. Implemented Sections

1. **Navigation:** Sticky top bar following the strict 3-zone contract (Wordmark brand, concise section links, "Hire Me" primary action, mobile drawer).
2. **Hero Section:** Split layout with high-impact headline, bio, CTAs ("Let's Work Together", "Explore My Work"), user portrait (`/public/assets/aistudio/Newuser_2ba9e273.webp`), direct email/WhatsApp links, and full-width proof strip (Pulse Shift Tool, Maruti Suzuki, TVS Motors & Muthoot Finance delivery, 8+ years experience).
3. **About Me:** Complete background, current role at AdGlobal360 Hakuhodo, core competencies, and delivery highlights.
4. **Technical Skills:** Categorized filter tabs (Frontend, Frameworks, Programming, CMS & E-commerce, Analytics, Infrastructure/DevOps). No fake percentage scores.
5. **Services:** 6 premium service cards (Website Development, Figma/PSD to Code, E-commerce Development, Website Performance Optimization, Analytics & Tracking, Website Maintenance & Support) with 1-click "Inquire About This" prefill triggers.
6. **Featured Projects:** Showcase cards with category filters (All, Enterprise, React & Next.js, E-commerce & CMS), tech badges, and an interactive Project Modal Dialog for detailed inspection.
7. **Development Approach (Process):** Interactive 5-step milestone workflow (01. Understand Requirements, 02. Plan & Design, 03. Development, 04. Testing & Optimization, 05. Deployment & Support) with milestone deliverables.
8. **Why Work With Me?:** 7 core pillars tailored for founders, startups, SMBs, and agencies.
9. **Contact Section:** Direct contact cards (WhatsApp, phone, email, portfolio domain) + interactive contact form connected to `/api/contact` with validation, confetti, reference IDs, and direct `mailto:` fallback.
10. **Footer:** Brand summary, quick navigation, contact details, dynamic copyright year, and Back-to-Top button.

---

## 4. How to Update Data

- **Projects:** Edit `/src/data/projects.ts` to add or update case studies and screenshots.
- **Skills:** Edit `/src/data/skills.ts` to add new technologies or categories.
- **Services:** Edit `/src/data/services.ts` to update offerings or deliverables.
- **Process Steps:** Edit `/src/data/process.ts`.

---

## 5. Contact Backend Configuration

The contact form posts to `POST /api/contact` in `server.ts`. To forward messages directly to email or SMS:
- Set `CONTACT_NOTIFICATION_EMAIL` in `.env`.
- Optionally configure SMTP credentials or Resend API key in `.env.example`.
