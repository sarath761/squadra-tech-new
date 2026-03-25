# SQUADRA TECH — Next.js Conversion | Antigravity Handoff
### Project: IT Services Landing Page
### Stack: Next.js 14 (App Router) + Tailwind CSS + TypeScript
### Status: Converting approved HTML prototype → Production Next.js

---

## 1. PROJECT CONTEXT

We have an **approved HTML prototype** (6 static HTML pages) for Squadra Tech's IT services landing page. The design is finalized. Your job is to convert these into a **production-ready Next.js application** with the design changes and improvements listed below.

**What is Squadra Tech?**
The technology/IT division of Squadra Media (a digital agency in Bangalore, India). This landing page targets enterprise clients looking for technology partners — app development, e-commerce, cloud, CRM, LMS, DevOps.

**Reference HTML files provided:** `index.html`, `services.html`, `case-studies.html`, `what-we-do.html`, `about.html`, `contact.html`

---

## 2. NEXT.JS PROJECT STRUCTURE

```
squadra-tech/
│
├── app/
│   ├── layout.tsx                    ← Root layout (fonts, metadata, theme)
│   ├── page.tsx                      ← Homepage (all 11 sections)
│   ├── loading.tsx                   ← Global skeleton/loading state
│   ├── services/
│   │   └── page.tsx                  ← Services page
│   ├── case-studies/
│   │   └── page.tsx                  ← Case Studies page
│   ├── how-we-do/
│   │   └── page.tsx                  ← "How We Do" page (renamed from "What We Do")
│   ├── about/
│   │   └── page.tsx                  ← About Us page
│   └── contact/
│       └── page.tsx                  ← Contact page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                ← Sticky nav with scroll effect + mobile menu
│   │   └── Footer.tsx                ← Site-wide footer
│   ├── ui/
│   │   ├── AnimateOnScroll.tsx       ← Reusable scroll-triggered animation wrapper
│   │   ├── CountUp.tsx               ← Animated number counter component
│   │   ├── Carousel.tsx              ← Case study carousel with touch support
│   │   ├── FAQ.tsx                   ← Accordion FAQ component
│   │   ├── LeadForm.tsx              ← 7-field lead capture form (reused on home + contact)
│   │   ├── SectionHeading.tsx        ← Reusable section title + subtitle
│   │   └── SkeletonCard.tsx          ← Skeleton loading placeholder
│   └── home/
│       ├── HeroSection.tsx           ← Hero with form (Section 01)
│       ├── TrustBar.tsx              ← Stats + logo marquee (Section 02)
│       ├── CaseStudyPreview.tsx      ← Carousel preview (Section 03)
│       ├── WhySquadra.tsx            ← 4 value prop cards (Section 04)
│       ├── TeamSection.tsx           ← Team info + photo (Section 05)
│       ├── AISwitch.tsx              ← 3x, 60%, Day 1 stats (Section 06)
│       ├── ExpertiseGrid.tsx         ← 10 service cards (Section 07)
│       ├── ProcessSteps.tsx          ← "From Brief to Live Site" (Section 08)
│       ├── FinalCTA.tsx              ← CTA section (Section 09)
│       └── FAQSection.tsx            ← FAQ accordion (Section 10)
│
├── lib/
│   ├── constants.ts                  ← All static data: nav links, services, case studies,
│   │                                    form options, stats, client names, FAQ data, etc.
│   ├── animations.ts                 ← Framer Motion animation variants
│   └── metadata.ts                   ← Per-page SEO metadata objects
│
├── hooks/
│   ├── useInView.ts                  ← IntersectionObserver hook for scroll animations
│   └── useCountUp.ts                 ← Number counter animation hook
│
├── public/
│   ├── images/
│   │   ├── logo/                     ← Squadra Tech logo variants
│   │   ├── clients/                  ← Client logo files
│   │   ├── case-studies/             ← Case study screenshots
│   │   ├── team/                     ← Team photos
│   │   └── icons/                    ← Service icons if needed
│   └── videos/
│       └── Gradient-background.mp4   ← Only video file (rest on Cloudinary)
│
├── styles/
│   └── globals.css                   ← Global styles, custom animations, Tailwind base
│
├── tailwind.config.ts                ← Tailwind configuration
├── next.config.ts                    ← Next.js config (images, redirects)
├── tsconfig.json
└── package.json
```

---

## 3. COMPONENT ARCHITECTURE

Keep it simple — this is a landing page, not a SaaS app. Each page is essentially 1 component that renders its sections. The shared pieces are extracted for reuse.

### Shared Components (used across pages)

| Component | Purpose | Used On |
|-----------|---------|---------|
| `Header` | Sticky nav, transparent→solid on scroll, mobile hamburger, active page highlight | All pages |
| `Footer` | Company info, nav links, services, contact, industries, copyright | All pages |
| `LeadForm` | 7-field form (First Name, Last Name, Company, Phone, Industry, Challenge, Website URL) | Home hero + Contact page |
| `AnimateOnScroll` | Wrapper that fade/slide-in children when scrolled into viewport | All sections |
| `CountUp` | Animated number counter (0→target) triggered on scroll | Trust Bar + AI Switch |
| `SectionHeading` | Consistent section title + subtitle with serif font styling | Most sections |
| `FAQ` | Accordion with state, only-one-open, icon rotation | Home FAQ section |
| `Carousel` | Touch-enabled carousel with dots, arrows, auto-advance | Home case studies |
| `SkeletonCard` | Pulse animation placeholder for loading states | All pages |

### Page Components

| Page | Route | Sections It Renders |
|------|-------|-------------------|
| Home | `/` | HeroSection → TrustBar → CaseStudyPreview → WhySquadra → TeamSection → AISwitch → ExpertiseGrid → ProcessSteps → FinalCTA → FAQSection |
| Services | `/services` | Hero banner + 10 service cards + CTA |
| Case Studies | `/case-studies` | Hero banner + 7 alternating case study cards + CTA |
| How We Do | `/how-we-do` | Achievements + 6-step process + Tech stacks |
| About | `/about` | Who We Are + Industries + Why Partner + Team + Location |
| Contact | `/contact` | Hero + LeadForm + Contact info cards + Map placeholder |

---

## 4. DESIGN CHANGES TO IMPLEMENT

These changes were requested after the HTML prototype review. Implement ALL of these during conversion.

### Change 1: Spacing Optimization
- Reduce `py-24` to `py-16` or `py-14` across all sections
- Keep consistent gap between sections — no double padding
- Remove any visually empty vertical space
- Goal: tighter, cleaner layout without feeling cramped

### Change 2: Card Design Improvement
- Add stronger borders: `border border-white/10` → `border border-white/15` on dark bg
- Increase card padding from `p-6` to `p-8`
- Add more prominent hover effect: `hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1` with `transition-all duration-300`
- Cards should feel clickable and elevated, not flat

### Change 3: Highlight Key Metrics (Home Page)
**Trust Bar stats (5+, 150+, 200K+, 100+):**
- Make numbers significantly larger: `text-6xl md:text-7xl font-black`
- Use gradient text effect: `bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent`
- Add a subtle background card behind each stat for emphasis
- Add a thin animated underline below each stat number

**AI Switch stats (3x, 60%, Day 1):**
- Same gradient text treatment
- Add a glowing border effect: `shadow-lg shadow-primary/20`
- Make the stat cards larger with more padding

### Change 4: "From Brief to Live Site" Section
**Current:** 2x2 horizontal grid
**Change to:** Vertical card layout with a connecting timeline line on the left

```
[Timeline dot] ── Step 01 ── Title ── Description
       |
[Timeline dot] ── Step 02 ── Title ── Description
       |
[Timeline dot] ── Step 03 ── Title ── Description
       |
[Timeline dot] ── Step 04 ── Title ── Description
```

- Each step is a full-width card with the step number, a dot connected by a vertical line, title, and description
- On desktop: timeline on the left, card content on the right
- The timeline line can animate (draw down) as user scrolls
- Rename section subtitle from "Four steps. No surprises." to "Six steps. Full transparency. No surprises." (use all 6 steps from the spec, not just 4)

**The 6 steps:**
1. Discovery & Alignment — Stakeholder workshops, system audit, success metrics, delivery plan
2. Solution Design — Architecture, backlog, roadmap, SLAs, security baseline, proof of concept
3. Build & Integrate — Agile sprints, code reviews, AI-assisted testing, secure API integrations
4. Validate & Harden — Automated QA, performance testing, load testing, UAT sign-off, compliance
5. Launch & Adoption — Cutover runbook, training, change management, analytics dashboards
6. Operate & Improve — SRE monitoring, incident response, cost optimization, quarterly reviews

### Change 5: CTA After FAQ Section
After the FAQ accordion, add a CTA block:
```
"Still have questions?"
[Get in Touch →] button → links to /contact
```
Simple, centered, with the primary button style.

### Change 6: Header CTA Update
- Change the header CTA button text from "Get in Touch" / "Get Free Assessment" to **"Contact"**
- This button links to `/contact`
- Keep the styling (filled primary button, rounded)

### Change 7: Section Title Rename
- Rename "What We Do" → **"How We Do"** everywhere (nav, footer, page title, breadcrumbs)
- Route changes from `/what-we-do` to `/how-we-do`
- Add a redirect from `/what-we-do` → `/how-we-do` in `next.config.ts` for safety

---

## 5. ANIMATION SYSTEM

Use **Framer Motion** for all animations. Install: `npm install framer-motion`

### Scroll Reveal Animations (`AnimateOnScroll.tsx`)
Wrap every section's content in this component. It uses IntersectionObserver to trigger:

```
Props: direction ("up" | "down" | "left" | "right"), delay (ms), duration (ms)
Default: fade-up, 0ms delay, 600ms duration
Easing: [0.16, 1, 0.3, 1] (custom ease-out)
```

**Animation variants to implement:**
- `fade-up` — translateY(40px) + opacity:0 → normal (most common, use on all cards and text blocks)
- `fade-left` / `fade-right` — translateX(±60px) → normal (split sections like Team)
- `scale-up` — scale(0.92) → 1 (cards in grids)
- `blur-in` — blur(8px) → 0 (hero headline)

**Stagger children:** When rendering a grid of cards, stagger each card's animation by 100ms increment.

### Number Counter (`CountUp.tsx`)
- Triggered when element enters viewport
- Counts from 0 to target number over 2 seconds
- Uses `requestAnimationFrame` with ease-out cubic
- Supports suffix: "+" , "K+", "x", "%"

### Hero Animations
- Headline: blur-in + fade-up with stagger per word
- Badge pill: fade-down with slight bounce
- Form card: fade-left with 300ms delay
- Background: CSS animated gradient shifting (defined in globals.css)

### Page Transitions
- Use Framer Motion `AnimatePresence` in root layout
- Each page fades in on mount: opacity 0→1, duration 300ms

### Loading / Skeleton States
- Create `loading.tsx` in app directory for route-level loading
- Use `SkeletonCard` component: rounded rectangle with Tailwind `animate-pulse` + `bg-slate-800`
- Show 3-4 skeleton cards in a grid while page loads
- For images: use `next/image` `placeholder="blur"` with a blurDataURL

---

## 6. SEO IMPLEMENTATION

### Per-Page Metadata (`lib/metadata.ts`)
Each page exports metadata via Next.js `generateMetadata` or static `metadata` export:

```typescript
// Example for homepage
export const homeMetadata = {
  title: "Squadra Tech | AI-Powered Technology Partner for Enterprise Growth",
  description: "Squadra Tech helps enterprises modernize, automate, and scale with secure, future-ready technology. E-commerce, mobile apps, cloud, DevOps, LMS. Based in Bangalore.",
  openGraph: {
    title: "Squadra Tech | AI-Powered Technology Partner",
    description: "We help enterprises modernize, automate, and scale.",
    type: "website",
    url: "https://squadratech.com",
  },
};
```

### Technical SEO
- Semantic HTML: proper `<section>`, `<article>`, `<nav>`, `<main>`, `<footer>`
- One `<h1>` per page, proper H2→H3→H4 hierarchy
- All images use `<Image>` from `next/image` with descriptive `alt` text
- Add `robots.txt` and `sitemap.xml` (Next.js can auto-generate)
- Add JSON-LD Organization schema in root layout

---

## 7. TAILWIND CONFIGURATION

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2a4a7e",
        "bg-light": "#f6f7f8",
        "bg-dark": "#14181e",
        gold: "#D4A843",
        coral: "#C45C4D",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "blob": "blob 7s infinite",
        "gradient": "gradient-shift 12s ease infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
```

---

## 8. DATA CONSTANTS (`lib/constants.ts`)

All static data should live in this single file. This makes content updates easy without touching components.

**What goes here:**
- `NAV_LINKS` — array of {label, href} for navigation
- `SERVICES` — array of 10 services with icon, title, description, tags
- `CASE_STUDIES` — array of 7 case studies with title, category, description, challenge, solution, impact, metric, image
- `PROCESS_STEPS` — array of 6 steps with number, title, timing, description
- `FAQ_ITEMS` — array of 6 {question, answer} objects
- `STATS` — array of 4 trust bar stats {number, suffix, label}
- `AI_STATS` — array of 3 AI switch stats
- `WHY_SQUADRA` — array of 4 value prop cards
- `CLIENT_NAMES` — array of 35+ client name strings
- `INDUSTRIES` — array of 8 industry objects with emoji + name
- `TEAM_COMPOSITION` — object with 3 groups of roles
- `TECH_STACKS` — array of 6 categories with tools
- `COMPANY_INFO` — address, phone, email, cofounders
- `FORM_OPTIONS` — industry and challenge dropdown options

---

## 9. KEY DEPENDENCIES

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "tailwindcss": "^3.x",
    "@tailwindcss/forms": "^0.5.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^18.x",
    "@types/node": "^20.x"
  }
}
```

---

## 10. IMPORTANT IMPLEMENTATION NOTES

### Image Handling
- All images use `next/image` for automatic optimization
- Remote images (Cloudinary videos/assets): add domain to `next.config.ts` → `images.remotePatterns`
- Local images in `public/images/` — use relative paths `/images/...`
- Case study images currently use placeholder blocks with gradient backgrounds — keep these until real assets arrive

### Form Handling
- Hero form and Contact form use the same `LeadForm` component
- Currently shows a browser alert on submit
- Structure the form with proper state management (useState for each field)
- Ready for future backend integration (Formspree, API endpoint, etc.)

### Dark Mode
- The site uses `class="dark"` on the HTML element — it's permanently dark themed
- Don't implement a light/dark toggle — the design is dark-only
- Use `dark:` prefixed classes from the original HTML

### Mobile Responsive
- Mobile-first approach with Tailwind breakpoints
- Mobile hamburger menu with full-screen overlay
- Mobile sticky CTA bar on homepage (appears after scrolling past hero)
- All grids collapse to single column on mobile

### Performance Targets
- Lighthouse: 90+ on all metrics
- Use `loading="lazy"` on below-fold images
- Preload critical fonts
- Minimize client-side JS — use Server Components where possible (default in App Router)
- Only add `"use client"` directive on components that need interactivity (FAQ, Carousel, Form, CountUp, AnimateOnScroll)

---

## 11. PAGE ROUTING

| Page | Route | Notes |
|------|-------|-------|
| Home | `/` | Long-scroll with all 11 sections |
| Services | `/services` | 10 service detail cards |
| Case Studies | `/case-studies` | 7 case study cards alternating layout |
| How We Do | `/how-we-do` | Renamed from "What We Do" |
| About | `/about` | Company info, team, industries |
| Contact | `/contact` | Full lead form + contact details |

### Redirects (in `next.config.ts`)
```typescript
async redirects() {
  return [
    {
      source: "/what-we-do",
      destination: "/how-we-do",
      permanent: true,
    },
  ];
}
```

---

## 12. COMPANY DETAILS (Quick Reference)

```
Company:      Squadra Tech (division of Squadra Media)
Parent:       Squadra Media Private Limited
Co-Founders:  Tarush, Anu, Sandesh
Team Size:    100+ (designers, developers, strategists, engineers)
Location:     Indiranagar, Bangalore, Karnataka, India
Address:      5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd,
              HAL 2nd Stage, Bengaluru, Karnataka 560038
Phone:        +91 63667 26494
Email:        info@squadramedia.com / squadramedia.in@gmail.com
Industries:   BFSI, Shipping, Healthcare, Retail, Gaming,
              Food Services, Education, Hospitality
```

---

## 13. ACCEPTANCE CRITERIA

- [ ] All 6 pages render correctly with proper routing
- [ ] All 7 design changes implemented (spacing, cards, metrics, process, CTA, header, rename)
- [ ] Animations work: scroll reveal on all sections, number count-up, carousel, FAQ accordion
- [ ] Skeleton loading shows while pages load
- [ ] Lead form has all 7 fields with validation
- [ ] Navigation works across all pages with active state
- [ ] Mobile responsive across all breakpoints (320px → 1440px+)
- [ ] SEO metadata on every page
- [ ] Semantic HTML structure
- [ ] Lighthouse 90+ on all metrics
- [ ] No console errors
- [ ] "What We Do" renamed to "How We Do" everywhere
- [ ] CTA after FAQ section present
- [ ] Header button says "Contact" and links to /contact
