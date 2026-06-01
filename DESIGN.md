---
name: phetklaodev
description: Dark developer portfolio — cyan signal on void, violet depth accents
colors:
  void-deep: "#0a0a0f"
  void-raised: "#111118"
  void-surface: "#1a1a24"
  signal-cyan: "#00d4ff"
  signal-violet: "#7c3aed"
  signal-glow: "#00d4ff33"
  text-bright: "#f0f0f0"
  text-muted: "#888899"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.void-deep}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#33ddff"
    textColor: "{colors.void-deep}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.signal-cyan}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.void-raised}"
    textColor: "{colors.text-bright}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input:
    backgroundColor: "{colors.void-surface}"
    textColor: "{colors.text-bright}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  nav-link:
    typography: "{typography.label}"
    textColor: "{colors.text-muted}"
    padding: "8px 0"
  nav-link-active:
    textColor: "{colors.signal-cyan}"
    padding: "8px 0"
  chip:
    backgroundColor: "{colors.void-surface}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: phetklaodev

## 1. Overview: The Luminous Terminal

**Creative North Star: "The Luminous Terminal"**

A dark, precise developer portfolio skin: deep void backgrounds, monospace labels, and cyan as a rare signal—not wallpaper. The system reads like a well-tuned terminal or status dashboard at night: confident, technical, quietly glowing. Violet appears as secondary depth (gradients, tags, hover accents), never as a generic “AI startup” purple wash on white.

This is **brand register** design: hierarchy and glow sell competence; there is no app chrome, sidebar product shell, or dashboard density. Motion is polish (fade-up entrances, typing cursor, soft glow on hover)—not scroll choreography or spectacle.

**Explicitly rejects** (from PRODUCT.md): generic `create-next-app` / Vercel clone portfolios, purple-gradient-on-white AI landing tropes, corporate stock-photo heroes, busy SaaS dashboards, and placeholder sections left live in production.

**Key Characteristics:**

- Void-layered backgrounds (`#0a0a0f` → `#111118` → `#1a1a24`) instead of flat single black
- Cyan accent (`#00d4ff`) reserved for CTAs, active nav, links, and glow—≤10% of any screen
- Inter for UI type; JetBrains Mono for labels, stack tags, and code-adjacent metadata
- Depth via tonal steps and glow shadows, not heavy drop shadows
- Static-export friendly: CSS variables + Tailwind `@theme`, minimal decorative JS

## 2. Colors: Signal on Void

The palette is a **restrained dark base + one primary signal (cyan) + one secondary accent (violet)**. Neutrals carry most of the surface; color earns attention.

### Primary

- **Signal Cyan** (`#00d4ff`): Primary CTA fills, active navigation, inline links, focus rings, and glow halos. Use for the single most important action per viewport—not borders on every card.
- **Signal Glow** (`#00d4ff33`): Ambient halo behind heroes, badges, or hover states. Pair with `box-shadow` tokens `--shadow-glow` / `--shadow-glow-lg`.

### Secondary

- **Depth Violet** (`#7c3aed`): Secondary highlights—gradient stops with cyan, category tags, subtle badges. Never the dominant fill on a full-bleed section.

### Neutral

- **Void Deep** (`#0a0a0f`): Page canvas (`bg-bg-primary`). Root background for `<body>`.
- **Void Raised** (`#111118`): Section bands, nav bar, footer (`bg-bg-secondary`).
- **Void Surface** (`#1a1a24`): Cards, inputs, chips, modals (`bg-bg-tertiary`).
- **Text Bright** (`#f0f0f0`): Headlines and body (`text-text-primary`). Minimum contrast target on void backgrounds: WCAG AA.
- **Text Muted** (`#888899`): Supporting copy, captions, inactive nav (`text-text-muted`). Do not use for primary CTAs or critical status alone.

### Named Rules

**The Signal Rarity Rule.** Cyan appears on ≤10% of any screen—one primary button, one active nav item, or one hero accent. If everything glows, nothing does.

**The No White Canvas Rule.** Marketing surfaces stay on void neutrals. Do not introduce a white or light-gray full-page mode unless deliberately scoped (e.g. a printable YZU PDF export)—not the default site chrome.

## 3. Typography: Terminal Clarity

**Display Font:** Inter (via `next/font`, `--font-sans`)
**Body Font:** Inter (same stack)
**Label / Mono Font:** JetBrains Mono (`--font-mono`)

**Character:** Humanist sans for readability at speed; mono for metadata, stack pills, and “system readout” labels. Pairing says *engineer who cares about UI*, not editorial magazine or corporate brochure.

### Hierarchy

- **Display** (700, `clamp(2.25rem, 6vw, 3.75rem)`, line-height 1.1): Hero name or page title—once per view.
- **Headline** (600, `clamp(1.5rem, 4vw, 2.25rem)`, line-height 1.2): Section titles (Projects, About, Skills).
- **Title** (600, 1.25rem, line-height 1.3): Card titles, modal headers, project names.
- **Body** (400, 1rem, line-height 1.6): Paragraphs and descriptions; cap measure ~65–75ch in wide layouts.
- **Label** (500, 0.75rem JetBrains Mono, letter-spacing 0.08em): Nav labels, section kickers, tech stack chips, status badges.

### Named Rules

**The Mono Metadata Rule.** JetBrains Mono is for labels, tags, timestamps, and stack strings—not long body copy.

**The One Display Rule.** Only one Display-sized line per viewport. Competing hero lines collapse hierarchy.

## 4. Elevation: Glow, Not Drop Shadow

Depth is **tonal layering first** (void-deep → raised → surface), with **cyan glow** as the only decorative elevation. There are no Material-style card drop shadows at rest.

### Shadow Vocabulary

- **Glow ambient** (`0 0 20px #00d4ff33` / `--shadow-glow`): Hover on primary buttons, active project cards, hero accent orbs.
- **Glow strong** (`0 0 40px #00d4ff55` / `--shadow-glow-lg`): Hero focal elements only—one per page maximum.

### Named Rules

**The Flat-By-Default Rule.** Cards and sections sit flat on void-raised/surface fills. Glow appears on hover, focus, or a single hero focal point—not on every container at rest.

**The No 2014 Shadow Rule.** If a shadow reads like a gray offset blob under a white card, it is forbidden on this system.

## 5. Components

Components below are **token-derived defaults** until section components are implemented. Match these when building Navbar, Hero, ProjectCard, ChatWidget, and YZU blocks.

### Buttons

- **Shape:** Softly rounded (8px / `rounded-md`)
- **Primary:** Signal Cyan fill, Void Deep text, 12×24px padding, semibold label. Use for one main CTA per section.
- **Hover / Focus:** Lighten cyan to `#33ddff`, apply `--shadow-glow`; `:focus-visible` 2px cyan outline offset 2px on void background
- **Ghost:** Transparent fill, cyan text, 1px cyan border on hover optional; for secondary actions (GitHub, “View all”)

### Chips

- **Style:** Void Surface background, muted text, 4px radius, mono label at 0.75rem
- **State:** Tech stack tags are static; filter chips (if added) use cyan border when active

### Cards / Containers

- **Corner Style:** 12px (`rounded-lg`)
- **Background:** Void Raised or Void Surface
- **Shadow Strategy:** None at rest; glow on hover for featured project cards only
- **Border:** Optional 1px `#ffffff10` hairline—never thick colored left stripes
- **Internal Padding:** 24px (`spacing.lg`)

### Inputs / Fields

- **Style:** Void Surface fill, bright text, 8px radius, no heavy inset shadow
- **Focus:** 2px Signal Cyan ring; no default browser blue outline
- **Error / Disabled:** Error text in muted red `#f87171` (not in token set—use sparingly); disabled at 50% opacity, no glow

### Navigation

- **Style:** Label typography (mono, uppercase optional), muted default
- **Active:** Signal Cyan text; optional 2px bottom border cyan
- **Hover:** Brighten to Text Bright
- **Mobile:** Full-width stack or bottom bar on void-raised; preserve touch targets ≥44px

### Project Card (signature)

- **Thumbnail:** 16:9, void-surface letterbox if image missing
- **Title:** Title typography; **stack row:** chip row below
- **Hover:** Subtle translateY(-2px) + glow; respect `prefers-reduced-motion` (opacity only)

### Status Badge (server / live)

- **Online:** Green dot + “Online” text (do not use green alone—pair icon + label per PRODUCT.md)
- **Offline / Unknown:** Muted amber or gray with explicit label

## 6. Do's and Don'ts

### Do:

- **Do** use void-deep as the default page canvas and stack void-raised → void-surface for section and card depth.
- **Do** reserve Signal Cyan for one primary CTA and active wayfinding per view.
- **Do** use JetBrains Mono for stack tags, section labels, and code-adjacent UI.
- **Do** honor `prefers-reduced-motion`—replace translate/glow animations with opacity fades.
- **Do** keep body copy at 65–75ch max width on large screens.
- **Do** pair server/status color with text or icons, never color alone.

### Don't:

- **Don't** ship a generic `create-next-app` / Vercel marketing clone layout or boilerplate hero.
- **Don't** use purple-gradient-on-white “AI startup” landing tropes unrelated to this token system.
- **Don't** adopt overly corporate consulting-site tone, stock-photo heroes, or lorem placeholder blocks in production.
- **Don't** put busy dashboard or SaaS app-chrome (sidebars, dense tables) on marketing pages.
- **Don't** flood the UI with cyan borders, glows, or violet full-bleed gradients.
- **Don't** use heavy gray drop shadows under cards—they break the luminous-terminal aesthetic.
- **Don't** set long paragraphs in JetBrains Mono or run multiple competing Display headlines on one screen.
