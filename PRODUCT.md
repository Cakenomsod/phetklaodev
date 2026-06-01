# Product

## Register

brand

## Users

- **Primary visitors**: recruiters, hiring managers, and collaborators evaluating Phetklao as a builder (portfolio home and `/portfolio`).
- **Secondary visitors**: Yuan Ze University (YZU) reviewers and admissions readers on `/yzu`, looking for motivation, fit, and supporting links.
- **Context**: quick scans on mobile or desktop, often between other tabs; they need clear hierarchy, credible project proof, and low friction to contact or explore live work.
- **Job to be done**: understand who you are, what you've built (especially self-hosted / full-stack work), and whether to interview, collaborate, or advance an application.

## Product Purpose

Personal site for **phetklaodev**: a developer portfolio with a dedicated YZU application surface, deployed as a static Next.js export on Firebase Hosting. Success means a cohesive story (builder identity + selected projects + optional live server status via Firestore), fast static delivery, and surfaces that feel intentional—not a generic template.

## Brand Personality

- **Three words**: technical, confident, luminous
- **Voice**: first-person, direct, evidence-led (show systems and outcomes, not buzzwords)
- **Feel**: dark, precise dev aesthetic with cyan/violet accents; motion used sparingly for polish (fade-up, subtle glow), not spectacle
- **Emotional goal**: trust through competence—"this person ships real infrastructure and UI"

## Anti-references

- Generic `create-next-app` / Vercel marketing clone portfolios
- Purple-gradient-on-white "AI startup" landing tropes unrelated to your token system
- Overly corporate consulting-site tone or stock-photo hero blocks
- Busy dashboards or app-chrome patterns on marketing pages (this is brand register, not a SaaS product shell)
- Placeholder lorem or empty sections left visible in production

## Design Principles

1. **Show, don't tell** — projects, stack tags, and live/status signals over abstract skill lists.
2. **One visual system** — home, portfolio, and YZU routes share tokens from `globals.css`; exceptions on `/yzu` should be deliberate, not accidental drift.
3. **Performance as respect** — static export, minimal blocking JS; animations honor `prefers-reduced-motion`.
4. **Credible depth** — each featured project earns a short story (problem, stack, highlight); avoid card grids with no substance.
5. **Purposeful secondary surfaces** — `/yzu` supports an application narrative; it is not a duplicate homepage.

## Accessibility & Inclusion

- Target **WCAG 2.1 AA** for text contrast on dark backgrounds (muted text must stay readable on `#0a0a0f` / `#111118`).
- Respect **`prefers-reduced-motion`** for Framer Motion and CSS keyframe animations.
- Keyboard-accessible navigation, modals (project detail), and chat widget controls; visible focus states on dark UI.
- Do not rely on color alone for server status (online/offline/unknown); pair with text or icons.
