# Engineering Form Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved Editorial Production House redesign for Engineering Form as a conversion-focused, mobile-optimized React/Vite landing page with SEO preview metadata.

**Architecture:** Keep the existing React 19, Vite, Tailwind, Framer Motion, Lenis, and lucide-react stack. Move reusable UI into `src/components/ui`, layout into `src/components/layout`, section components into `src/components/sections`, and editable content into `src/data/siteContent.ts` plus SEO data in `src/data/seo.ts`.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lenis, lucide-react.

---

### Task 1: Restructure Shared Types, Data, and SEO

**Files:**
- Modify: `src/types/site.ts`
- Modify: `src/data/siteContent.ts`
- Create: `src/data/seo.ts`
- Modify: `index.html`

- [ ] **Step 1: Extend content types**

Add explicit interfaces for audiences, capabilities, projects, materials, process steps, trust items, FAQ entries, and the expanded contact form.

- [ ] **Step 2: Replace landing content**

Rewrite `src/data/siteContent.ts` so all page copy, filters, CTA labels, projects, FAQ, form options, and placeholder contacts live in one data module. Keep placeholder contacts as requested.

- [ ] **Step 3: Add SEO data and JSON-LD helpers**

Create `src/data/seo.ts` with metadata constants and JSON-LD objects for `Organization`, `LocalBusiness`, `Service`, and `FAQPage`. Do not add address, INN, awards, clients, years, or fake metrics.

- [ ] **Step 4: Update static metadata**

Update `index.html` with title, description, canonical, Open Graph, Twitter card, theme color, and a preload for the hero image and critical display font. Use `/engineering-form/` paths for preview images.

- [ ] **Step 5: Verify type safety**

Run: `npm run build`

Expected: TypeScript and Vite build pass.

### Task 2: Build UI Primitives and Layout

**Files:**
- Move/modify: `src/components/PageShell.tsx` -> `src/components/layout/PageShell.tsx`
- Move/modify: `src/components/SiteHeader.tsx` -> `src/components/layout/SiteHeader.tsx`
- Move/modify: `src/components/MagneticButton.tsx` -> `src/components/ui/MagneticButton.tsx`
- Move/modify: `src/components/SectionReveal.tsx` -> `src/components/ui/SectionReveal.tsx`
- Modify: `src/components/AnimatedBackground.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Create target folders**

Create `src/components/layout`, `src/components/sections`, and `src/components/ui`.

- [ ] **Step 2: Move shared components**

Move layout and UI components into the target folders and update imports.

- [ ] **Step 3: Improve header**

Make `SiteHeader` mobile-friendly with a menu button, visible focus states, anchor navigation, and `aria-expanded`. Touch targets must be at least 44px on coarse pointers.

- [ ] **Step 4: Improve shell and background**

Keep the dark editorial base, add technical background lines as decorative `aria-hidden` elements, and avoid cursor behavior that harms mobile/touch users.

- [ ] **Step 5: Update global CSS tokens**

Replace legacy color variables with the approved palette, add `100dvh`/safe-area handling, `focus-visible`, responsive text wrapping, scroll-driven animation `@supports`, and reduced-motion variants.

- [ ] **Step 6: Verify**

Run: `npm run lint && npm run build`

Expected: both commands pass.

### Task 3: Build Main Sections

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/sections/HeroSection.tsx`
- Create: `src/components/sections/AudienceSection.tsx`
- Create: `src/components/sections/CapabilitiesSection.tsx`
- Create: `src/components/sections/ProjectsSection.tsx`
- Create: `src/components/sections/MaterialsSection.tsx`
- Create: `src/components/sections/ProcessSection.tsx`
- Create: `src/components/sections/TrustSection.tsx`
- Create: `src/components/sections/SeoTextSection.tsx`
- Create: `src/components/sections/FaqSection.tsx`
- Create: `src/components/sections/ContactSection.tsx`

- [ ] **Step 1: Replace `App.tsx` composition**

Use `PageShell`, `SiteHeader`, and the new section order from the design spec.

- [ ] **Step 2: Implement hero**

Build the commercial H1, subheadline, micro proof line, three CTAs, cinematic media reveal, technical labels, and mobile-safe layout.

- [ ] **Step 3: Implement audience and capabilities**

Render four audience segments and eight production capabilities from data. Keep cards compact, readable, and link each capability to the contact form.

- [ ] **Step 4: Implement projects**

Render filter buttons with `aria-pressed`, keyboard-friendly buttons, project cards with technical overlays, and mobile-visible overlays.

- [ ] **Step 5: Implement materials and process**

Render material/assembly content with parallax-light layers and a sticky process timeline with a progress indicator. Keep mobile motion lighter.

- [ ] **Step 6: Implement trust, SEO text, FAQ, and JSON-LD injection**

Render trust proof statements, compact SEO text, accessible FAQ controls, and inject structured data with React `<script type="application/ld+json">`.

- [ ] **Step 7: Implement contact brief**

Build the expanded project brief form with validation, `inputMode`, `autoComplete`, type selector, drawings selector, `mailto:` fallback, and user-facing note that a mail client opens.

- [ ] **Step 8: Verify**

Run: `npm run lint && npm run build`

Expected: both commands pass.

### Task 4: Visual QA and Browser Verification

**Files:**
- Modify as needed based on browser findings.

- [ ] **Step 1: Start local server**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite returns a local URL.

- [ ] **Step 2: Check desktop**

Open the app at the Vite URL and inspect a desktop viewport around 1440px. Verify hero, navigation, filters, process, FAQ, form, and no obvious overlap.

- [ ] **Step 3: Check mobile**

Inspect around 390px and 320px widths. Verify no horizontal scroll, navigation opens/closes, touch targets are usable, text fits, project overlays remain readable, and form inputs use appropriate mobile keyboards.

- [ ] **Step 4: Check reduced motion**

Use browser emulation or CSS inspection to verify reduced-motion rules reduce heavy motion without hiding content.

- [ ] **Step 5: Final verification**

Run: `npm run lint && npm run build`

Expected: both commands pass.

### Task 5: GitHub Sync

**Files:**
- All implementation files.

- [ ] **Step 1: Review git diff**

Run: `git status --short` and `git diff --stat`.

- [ ] **Step 2: Commit implementation**

Commit with a concise message after lint/build pass.

- [ ] **Step 3: Push branch**

Push `codex/engineering-form-redesign` to `origin`.

- [ ] **Step 4: Report**

Report changed files, verification results, known limitations, and the GitHub repository URL.
