# React Component Architecture & Project Structure: MORNI SINGH'S

**Brand:** MORNI SINGH'S  
**Tagline:** *Stay, Explore, Repeat!*  
**Tech Stack:** React 18+ / Vite / Vanilla CSS (Custom Design System with CSS Tokens) / Lucide Icons  
**Document Type:** Senior Frontend Architectural Blueprint  

---

## 1. Architectural Principles

1. **Pure Performance & Zero Bloat:** Built with blazing-fast Vite and React, leveraging Vanilla CSS for complete bespoke design freedom, zero CSS runtime overhead, and 100/100 Lighthouse performance potential.
2. **Modular Component Isolation:** Every section and atomic element lives in its own dedicated, reusable directory with clean props interfaces.
3. **Verified Content Decoupling:** All property facts, room specifications, amenities, attraction distances, and FAQs are housed in a strictly typed `data/` directory, making updates instantaneous and clean.
4. **Frictionless Mobile Interaction:** Touch-first drawer patterns, thumb-zone conversion docks, and accessible ARIA attributes across all interactive components.

---

## 2. Proposed React Folder Structure

```
d:/SOFTWARE DEVELOPMENT/MORNI SINGHS/
├── index.html                   # HTML5 shell with OpenGraph tags, semantic SEO & Google Fonts
├── package.json                 # Project dependencies and build scripts
├── vite.config.js               # Vite build configuration with path aliases
├── public/                      # Static assets, favicon, robots.txt, sitemap.xml
│   ├── favicon.svg
│   ├── og-morni-singhs.jpg
│   └── images/                  # High-resolution property assets
│       ├── hero/
│       ├── villa/
│       ├── experiences/
│       ├── greens/
│       └── surroundings/
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Root layout orchestration and modal provider
│   ├── index.css                # Global design system tokens, typography & CSS reset
│   │
│   ├── assets/                  # Bundled SVGs, vector badges, and brand icons
│   │
│   ├── data/                    # Ground-truth verified content repository
│   │   ├── propertyDetails.js   # Name, tagline, address, coordinates, altitude, parent entity
│   │   ├── villaSpecs.js        # 2BHK room breakdowns, dimensions, capacities, features
│   │   ├── amenities.js         # Verified categorized amenity matrix
│   │   ├── experiences.js       # Curated mountain activities (bonfires, trails, yoga)
│   │   ├── morniGreens.js       # Organic farm sister project details & crops
│   │   ├── attractions.js       # Nearby sights (Tikkar Taal, Morni Fort) with travel times
│   │   ├── reviews.js           # Verified guest testimonials with ratings
│   │   └── faqs.js              # Categorized questions & policies
│   │
│   ├── context/                 # Application context providers
│   │   └── BookingContext.jsx   # State for date selector, guest count & WhatsApp builder
│   │
│   ├── hooks/                   # Custom reusable React hooks
│   │   ├── useScrollSpy.js      # Active navigation section detection on scroll
│   │   ├── useWindowSize.js     # Responsive viewport listener
│   │   └── useModal.js          # Accessible modal trap and body scroll lock
│   │
│   ├── components/              # Modular UI components
│   │   ├── common/              # Atomic & Molecule Design System elements
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.css
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.jsx
│   │   │   │   └── Badge.css
│   │   │   ├── SectionHeader/
│   │   │   │   ├── SectionHeader.jsx
│   │   │   │   └── SectionHeader.css
│   │   │   ├── Marquee/
│   │   │   │   ├── Marquee.jsx
│   │   │   │   └── Marquee.css
│   │   │   ├── Accordion/
│   │   │   │   ├── Accordion.jsx
│   │   │   │   └── Accordion.css
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Modal.css
│   │   │   └── Lightbox/
│   │   │       ├── Lightbox.jsx
│   │   │       └── Lightbox.css
│   │   │
│   │   ├── layout/              # Macro shell structures
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.css
│   │   │   ├── MobileNav/
│   │   │   │   ├── MobileNav.jsx
│   │   │   │   └── MobileNav.css
│   │   │   ├── MobileBookingDock/
│   │   │   │   ├── MobileBookingDock.jsx
│   │   │   │   └── MobileBookingDock.css
│   │   │   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       └── Footer.css
│   │   │
│   │   └── sections/            # Page-level domain sections
│   │       ├── Hero/
│   │       │   ├── Hero.jsx
│   │       │   └── Hero.css
│   │       ├── TrustTicker/
│   │       │   ├── TrustTicker.jsx
│   │       │   └── TrustTicker.css
│   │       ├── AboutRetreat/
│   │       │   ├── AboutRetreat.jsx
│   │       │   └── AboutRetreat.css
│   │       ├── VillaShowcase/
│   │       │   ├── VillaShowcase.jsx
│   │       │   ├── VillaSpaceCard.jsx
│   │       │   └── VillaShowcase.css
│   │       ├── Amenities/
│   │       │   ├── AmenitiesGrid.jsx
│   │       │   └── Amenities.css
│   │       ├── Experiences/
│   │       │   ├── ExperiencesSection.jsx
│   │       │   └── Experiences.css
│   │       ├── MorniGreens/
│   │       │   ├── MorniGreensSection.jsx
│   │       │   └── MorniGreens.css
│   │       ├── Gallery/
│   │       │   ├── GalleryMasonry.jsx
│   │       │   └── Gallery.css
│   │       ├── Reviews/
│   │       │   ├── ReviewsCarousel.jsx
│   │       │   └── Reviews.css
│   │       ├── LocationRoutes/
│   │       │   ├── LocationSection.jsx
│   │       │   └── Location.css
│   │       ├── NearbyAttractions/
│   │       │   ├── AttractionsGrid.jsx
│   │       │   └── Attractions.css
│   │       ├── FAQ/
│   │       │   ├── FAQSection.jsx
│   │       │   └── FAQ.css
│   │       └── BookingDrawer/
│   │           ├── BookingDrawer.jsx
│   │           └── BookingDrawer.css
│   │
│   └── utils/                   # Helper functions
│       ├── whatsappLink.js      # Formats customized WhatsApp deep-links
│       └── formatters.js        # Date, time, and distance string formatters
│
└── docs/                        # Architecture & Research Documentation
    ├── RESEARCH_AND_DATA_FINDINGS.md
    ├── BENCHMARK_ANALYSIS_EBC_AND_CLOUD_VILLA.md
    ├── DESIGN_DIRECTION.md
    ├── INFORMATION_ARCHITECTURE_AND_SITEMAP.md
    └── COMPONENT_ARCHITECTURE_AND_REACT_STRUCTURE.md
```

---

## 3. Component Hierarchy Tree

```
<App>
  ├── <Navbar /> (Sticky Glassmorphic Header with Nav Links & CTA)
  ├── <MobileNav /> (Slide-over drawer for phone/tablet)
  ├── <main>
  │     ├── <Hero /> (Cinematic banner, elevation pill, tagline, CTAs)
  │     ├── <TrustTicker /> (Running marquee with verified badges)
  │     ├── <AboutRetreat /> (Vision, Mission, PHS legacy & artistic interior story)
  │     ├── <VillaShowcase /> (2BHK Villa interactive spaces: Bedrooms, Lounge, Lawn)
  │     ├── <AmenitiesGrid /> (Categorized comfort matrix)
  │     ├── <ExperiencesSection /> (Bonfires, morning yoga, forest walks)
  │     ├── <MorniGreensSection /> (Organic farm sister project & farm-to-table story)
  │     ├── <GalleryMasonry /> (Curated gallery with full-screen lightbox trigger)
  │     ├── <ReviewsCarousel /> (Verified 4.6★ guest stories and testimonials)
  │     ├── <LocationSection /> (Distance cards from Delhi/Chandigarh + Interactive Map)
  │     ├── <AttractionsGrid /> (Tikkar Taal, Morni Fort, Adventure Park)
  │     └── <FAQSection /> (Grouped accordion addressing guest questions)
  ├── <Footer /> (PHS corporate details, contact, copyright)
  ├── <BookingDrawer /> (Flyout date selector & pre-filled WhatsApp generator)
  ├── <MobileBookingDock /> (Fixed bottom thumb-bar for quick mobile conversion)
  └── <Lightbox /> (Global high-resolution photo viewer modal)
```

---

## 4. State Management Strategy

To ensure lightning-fast responsiveness without unnecessary state libraries (like Redux or Zustand for a single-property retreat):

1. **`BookingContext`:**
   * Tracks: `checkInDate`, `checkOutDate`, `guestsCount`, `hasPet`, `isDrawerOpen`.
   * Automatically derives: Total estimated nights, customized WhatsApp reservation query string.
2. **`LightboxContext` / Global Modal State:**
   * Tracks: `activeImageIndex`, `isOpen`, `imagesList`.
   * Handles keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`).
3. **UI Micro-States:**
   * Local component states handle tab switching in `<VillaShowcase />` and accordion toggling in `<FAQSection />`.

---

## 5. Verified Data Model Schema

### Property Model (`src/data/propertyDetails.js`)
```javascript
export const propertyDetails = {
  name: "Morni Singh's",
  tagline: "Stay, Explore, Repeat!",
  elevation: "1,220m (~4,000 ft)",
  location: {
    address: "Panchkula - Badiyal Road, Bhoj Darara, Morni Hills",
    district: "Panchkula",
    state: "Haryana",
    pincode: "134205",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=Morni+Singh's+Bhoj+Darara"
  },
  rating: {
    score: "4.6",
    maxScore: "5.0",
    label: "Guest Satisfaction Rating"
  },
  parentEntity: {
    name: "Pratham Hospitality Services Pvt. Ltd. (PHS)",
    founded: 2001,
    regdOffice: "8628/C-8, Vasant Kunj, New Delhi - 110070",
    contactEmail: "info@prathamhospitalityservices.com",
    contactPhone: "+91-966-779-8451"
  },
  timings: {
    checkIn: "2:00 PM (14:00)",
    checkOut: "11:00 AM (11:00)"
  }
};
```

---

## 6. Implementation Readiness

With this architecture:
* Every component is scoped, typed, and isolated.
* No third-party heavy dependencies are required.
* All data is cleanly decoupled.
* The structure is prepared for immediate scaffolding and assembly in the subsequent phase.
