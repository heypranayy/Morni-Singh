# Design Direction & Visual Identity Guide: MORNI SINGH'S

**Brand:** MORNI SINGH'S  
**Tagline:** *Stay, Explore, Repeat!*  
**Positioning:** Premium Boutique Mountain Sanctuary in the Shivalik Hills  
**Document Type:** Creative Direction & Design System Specification  

---

## 1. Aesthetic Vision: "Earth, Mist & Art"

The visual direction for Morni Singh's is anchored in the concept of **"Rustic Refinement"**—marrying the raw, unhurried charm of the Shivalik pine forests with the modern comforts of an artistic private villa retreat.

### Core Visual Tenets
1. **Atmospheric & Immersive:** Every view must transport the guest to a crisp 1,220m mountain sunrise, complete with mountain mists, terracotta warmth, and evening fireside amber.
2. **Editorial & Curated:** Avoid generic booking portal clutter. Utilize spacious layouts, elegant typography, generous white/dark-space, and refined photographic framing.
3. **Tactile Warmth:** Use subtle earthen textures, soft glassmorphic depth (`backdrop-filter`), warm golden highlights, and deep pine undertones.
4. **Fluid Motion:** Micro-interactions should feel organic and weighted—like the gentle rustle of pine needles or rising evening campfire smoke.

---

## 2. Color Palette & Design Tokens

The color palette is derived directly from the landscape of Morni Hills and the organic heritage of Morni Singh's Greens:

| Token Name | Hex Code | HSL Value | Semantic Role & Psychological Resonance |
| :--- | :--- | :--- | :--- |
| **Pine Forest Deep** (`--color-pine-900`) | `#0F1D15` | `hsl(146, 31%, 9%)` | Primary background in dark luxury modes; deep evergreen shadow evoking Himalayan conifers. |
| **Pine Canopy** (`--color-pine-800`) | `#182C22` | `hsl(150, 29%, 13%)` | Secondary surface cards, header blur backdrops, nested panels. |
| **Forest Sage** (`--color-sage-600`) | `#365345` | `hsl(151, 21%, 27%)` | Subtle borders, badge backgrounds, iconography accents. |
| **Shivalik Amber / Ochre** (`--color-amber-500`) | `#C89B53` | `hsl(37, 52%, 55%)` | Primary luxury accent, CTA buttons, rating stars, hover highlights. |
| **Warm Gold Leaf** (`--color-gold-400`) | `#DFB770` | `hsl(39, 65%, 66%)` | Glowing borders, active tabs, headline italic flourishes. |
| **Terracotta Earth** (`--color-earth-500`) | `#9E5B3E` | `hsl(18, 44%, 43%)` | Accent for bonfire storytelling, farm-to-table Morni Greens callouts. |
| **Misty Cream** (`--color-cream-100`) | `#FBF9F4` | `hsl(43, 44%, 97%)` | High-contrast light card backgrounds, crisp clean typography base. |
| **Parchment Alabaster** (`--color-cream-200`) | `#F3EFE6` | `hsl(41, 35%, 93%)` | Secondary light backgrounds, muted sections, subtle dividers. |
| **Slate Charcoal** (`--color-charcoal-900`)| `#1B201E` | `hsl(160, 8%, 12%)` | Primary text in light mode, high contrast readability. |
| **Muted Stone** (`--color-stone-400`) | `#8E9590` | `hsl(135, 4%, 57%)` | Secondary metadata, dates, specs, coordinate labels. |

---

## 3. Typography Hierarchy

We pair a timeless, editorial serif with an ultra-clean, high-legibility geometric sans-serif:

* **Primary Display Headline:** **`Playfair Display`** or **`Cormorant Garamond`**  
  * Used for: Section titles, editorial quotes, villa room titles, hero statement.
  * Styling: Semi-bold and Italic accents to create artisanal luxury contrast.
* **Secondary UI & Body Font:** **`Plus Jakarta Sans`** or **`Outfit`**  
  * Used for: Body copy, feature bullet points, technical specs, booking forms, button CTAs, navigation links.
  * Styling: Weights 400 (Regular), 500 (Medium), 600 (SemiBold) with generous line heights (`1.65–1.75`).
* **Accent / Monospace Font:** **`JetBrains Mono`** or styled tabular figures for numerical elevation badges (`1,220m`), driving times, and check-in/out timestamps.

### Typographic Scale
* `Hero Display H1`: `clamp(2.75rem, 6vw, 4.75rem)` | line-height `1.1`
* `Section Title H2`: `clamp(2.0rem, 4vw, 3.25rem)` | line-height `1.2`
* `Card Headline H3`: `clamp(1.35rem, 2.5vw, 1.85rem)` | line-height `1.3`
* `Feature Subhead H4`: `1.15rem` | letter-spacing `0.05em` | uppercase
* `Body Copy`: `1.0rem` (16px) to `1.125rem` (18px) | line-height `1.7`
* `Micro Badge / Caption`: `0.75rem` (12px) to `0.85rem` (13.6px) | letter-spacing `0.12em` | uppercase

---

## 4. Elevation, Glassmorphism & Depth Layers

To achieve visual wow-factor without visual clutter:
1. **Glassmorphism Layers:**
   * Header: `background: rgba(15, 29, 21, 0.75); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(200, 155, 83, 0.15);`
   * Floating CTAs: `background: rgba(24, 44, 34, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(223, 183, 112, 0.25);`
2. **Card Elevating Effects:**
   * Normal: `box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.08);`
   * Hover: `transform: translateY(-4px); box-shadow: 0 20px 40px -12px rgba(200, 155, 83, 0.15); border-color: rgba(200, 155, 83, 0.35);`
3. **Atmospheric Gradients:**
   * Hero Vignette: `radial-gradient(ellipse at center, rgba(15, 29, 21, 0.3) 0%, rgba(15, 29, 21, 0.85) 100%)`
   * Sunrise Glow: `radial-gradient(circle at top right, rgba(200, 155, 83, 0.12), transparent 70%)`

---

## 5. Micro-Animations & Interaction Choreography

* **Hero Parallax & Entrance:** Gentle staggered reveal of location pill → main display title → sensory description → dual CTA buttons.
* **Continuous Horizon Marquee:** Smooth, infinite linear loop for the trust badges with hover-to-pause capability.
* **Interactive Villa Floorplan / Space Tabs:** Instant tab transitions with fade and subtle scale-in (`duration: 250ms`).
* **Image Gallery Lightbox:** Zoom-in preview with thumbnail rail, swipe gestures for mobile, and keyboard navigation.
* **Dynamic Booking Date Picker & Calculator:** Real-time calculation of nights, estimated pricing preview, and auto-generated pre-filled WhatsApp message generator.
* **FAQ Accordion Springs:** Smooth height transition with rotating amber plus/minus indicator.

---

## 6. Mobile Experience Strategy

* **Sticky Bottom Conversion Dock:** Fixed floating bar on mobile screens with two primary buttons:
  * `[ Quick Dates ]` (triggers interactive booking drawer)
  * `[ WhatsApp Reserve ]` (instant chat with property concierge)
* **Touch Target Compliance:** Minimum `48px x 48px` interactive areas for all links, buttons, and form inputs.
* **Zero Horizontal Scroll:** Content strictly constrained to responsive viewports with fluid clamp formulas.
* **Thumb-Zone Optimization:** Critical navigation items positioned within natural thumb reach.
