# Squadra Tech: Project Architecture & Overview

This document provides a comprehensive overview of the **Squadra Tech Next.js App Router** project architecture. The application is a highly scalable, animated, and responsive dark-mode landing platform built to showcase enterprise digital engineering capabilities.

---

## 🏗 High-Level Architecture
The project heavily leverages the **Next.js 15 App Router** (`src/app/` logic), **Framer Motion** for performant scroll-triggered animations, and **Tailwind CSS v4** for utility-first styling. The application is deliberately modular, pulling all static content from centralized constant configurations to allow hyper-fast updates and maintenance without touching UI code.

---

## 📁 Core Directory Structure

### 1. The Application Layer (`app/`)
This directory handles Next.js routing, global layouts, and all index page definitions.

- `app/layout.tsx` - The global root layout. Integrates `Plus Jakarta Sans` and `Instrument Serif` fonts, forces the global `<html className="dark">` state, and wraps the app with the Header and Footer components.
- `app/page.tsx` - The Homepage. Rendered natively using 10 modularized client components imported from `components/home/`.
- `app/services/page.tsx` - The Services interior page displaying 10 card domains in a grid flow.
- `app/case-studies/page.tsx` - The Portfolio page utilizing a distinct alternating zig-zag visual hierarchy for project case studies.
- `app/how-we-do/page.tsx` - Explains methodology utilizing an extracted animated timeline (`ProcessSection.tsx`) and dynamic achievements cards.
- `app/about/page.tsx` - The organizational showcase highlighting locations, leadership structure, and industry reach.
- `app/contact/page.tsx` - The conversion gateway leveraging a 60/40 visual split layout feeding into the centralized `LeadForm` wrapper.
- `app/loading.tsx` - The global streaming skeleton loader. Ensures zero layout shift, utilizing the custom `<SkeletonCard />` components while pages hydrate.

### 2. The Shared Components (`components/ui/` & `components/layout/`)
Reusable molecular elements deployed globally across the entire site.

- **Layout Controllers**:
  - `components/layout/Header.tsx` - Responsive top sticky navigation bar with mobile overlay menu.
  - `components/layout/Footer.tsx` - The site footer containing industry links, company details, and location data.

- **UI Atoms & Molecules**:
  - `components/ui/AnimateOnScroll.tsx` - The core engine of the site's animations. Uses Framer Motion's `useInView` to trigger directional `fade-up`, `scale-up`, `blur-in` entering animations.
  - `components/ui/CountUp.tsx` - Generates animated number counting (e.g., 0 to 200k+) triggered upon scroll intersection.
  - `components/ui/LeadForm.tsx` - The master contact form, complete with controlled state management.
  - `components/ui/FAQ.tsx` - Client component rendering accordion-style dropdown disclosures.
  - `components/ui/Carousel.tsx` - Horizontal, draggable slider interface.
  - `components/ui/SectionHeading.tsx` - Unified heading block styling spanning across `Services`, `Case Studies`, etc.
  - `components/ui/SkeletonCard.tsx` - Skeleton placeholder card for `loading.tsx` async suspense sequences.

### 3. Page-Specific Sections (`components/home/`, `components/how-we-do/`)
These act as structural blocks rather than reusable elements.

- `components/home/HeroSection.tsx`, `TrustBar.tsx`, `WhySquadra.tsx`, `TeamSection.tsx`, `ProcessSteps.tsx`, `FinalCTA.tsx`, `FAQSection.tsx`...
- `app/how-we-do/ProcessSection.tsx` - A highly specific Framer Motion vertical timeline utilizing the `useScroll` hook to physically draw a line down the page parallel to user movement.

### 4. Configuration & Utilities (`lib/`)
The foundation arrays bridging UI layout to data.

- `lib/constants.ts` - The single source of truth for text on the site. Contains `NAV_LINKS`, `SERVICES`, `CASE_STUDIES`, `PROCESS_STEPS`, `FAQ_ITEMS`, `ACHIEVEMENTS`, `TECH_STACKS`, and `COMPANY_INFO`. Update this file to modify what users read.
- `lib/animations.ts` - Centralized Framer Motion keyframe configurations (fade states, blurring variables, staggering durations).
- `lib/metadata.ts` - Next.js generic SEO metadata definitions mapped across different interior routes for social sharing stability.

### 5. Styles & Root Configurations (`styles/` & Root)

- `styles/globals.css` - Raw foundational CSS logic. Houses standard resets, the `bg-bg-dark` and `text-white` defaults, and gradient-based background tracking animation logic to avoid Tailwind conflicts.
- `tailwind.config.ts` - Extending standard Tailwind with granular Squadra Tech branding parameters (`#2a4a7e` primary, `#D4A843` gold accents).
- `next.config.ts` - Bootstraps external image origins (`res.cloudinary.com`, `googleapis`) and strict 308 URL permanent redirection mapping (`/what-we-do` -> `/how-we-do`).

---

## 🛠 Tech Stack Highlights
* **Core Framework:** Next.js 15 (App Router, Turbopack, Server Components)
* **Styling Framework:** Tailwind CSS
* **Animation Library:** Framer Motion (v11)
* **Type System:** Strict TypeScript
* **Icons / Typography:** Google Material Symbols, Plus Jakarta Sans, Instrument Serif
