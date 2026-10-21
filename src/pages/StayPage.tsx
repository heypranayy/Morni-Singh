import React from "react";
import { Container, Section } from "../components/primitives/Container";
import { OverlineBadge } from "../components/ui/Badge";
import { TheVillaSection } from "../components/sections/TheVillaSection";
import { VisualStoriesStrip } from "../components/sections/VisualStoriesStrip";
import { FullWidthPhotoStory } from "../components/sections/FullWidthPhotoStory";
import { WhatItFeelsLikeSection } from "../components/sections/WhatItFeelsLikeSection";
import { StoriesFromTheHillsSection } from "../components/sections/StoriesFromTheHillsSection";
import { StayEnquirySection } from "../components/sections/StayEnquirySection";
import { Button } from "../components/ui/Button";
import { SEOHead } from "../components/common/SEOHead";
import { Link } from "react-router-dom";
import {
  BedDouble,
  Bath,
  Users,
  Maximize2,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react";

export const StayPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="The Stay Experience · Morni Singh's 2BHK Villa"
        description="Discover Morni Singh's 2BHK mountain villa in Bhoj Darara, Morni Hills. 2 private suites, 2 bathrooms, sleeps up to 6 guests with private lawn, self-cooking kitchen, and dedicated caretaker."
        canonicalUrl="https://mornisinghs.com/stay"
      />

      {/* 1. IMAGE-BRIGHT LUXURY STAY HERO */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 bg-forest-950 text-white border-b border-gold-500/20 overflow-hidden">
        {/* Real photo background: Sunlit Mountain Lawn & Estate */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morni/57011.webp"
            alt="Morni Singh's Sunlit Lawn & Estate"
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>ACCOMMODATION SHOWCASE · HERO PRODUCT</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
              The Stay Experience
            </h1>

            <p className="font-serif italic text-2xl sm:text-3xl text-gold-200 font-light mb-6 drop-shadow-md">
              "Designed as a home away from home."
            </p>

            <p className="font-ui text-base sm:text-lg text-parchment-100 leading-relaxed font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
              We offer one exclusive, standalone residence: <strong>MORNI SINGH'S 2BHK VILLA</strong>.
              Nestled at 1,220m altitude, you reserve the complete private property—including both bedrooms,
              both bathrooms, living lounge, self-cooking kitchen, private lawn, and outdoor grill.
            </p>

            {/* Quick Metrics Strip - Luxury Frosted Dark Glass */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 bg-black/60 backdrop-blur-md border border-white/20 shadow-xl max-w-2xl mx-auto text-left mb-8 rounded-xl">
              <div className="flex items-center gap-3">
                <BedDouble className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-parchment-300 font-medium">Bedrooms</span>
                  <span className="font-serif text-base text-white font-semibold">2 Suites</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Bath className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-parchment-300 font-medium">Bathrooms</span>
                  <span className="font-serif text-base text-white font-semibold">2 Private</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-parchment-300 font-medium">Capacity</span>
                  <span className="font-serif text-base text-white font-semibold">Sleeps 6</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Maximize2 className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-parchment-300 font-medium">Total Area</span>
                  <span className="font-serif text-base text-white font-semibold">~861 sq ft</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/stay/villa">
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-forest-950 font-bold shadow-lg"
                >
                  Explore Villa Architecture
                </Button>
              </Link>

              <Button
                variant="outline"
                size="md"
                href="#booking"
                icon={<Calendar className="w-4 h-4" />}
                className="bg-black/45 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              >
                Check Villa Availability
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. LARGE EDITORIAL SPLIT-SCREEN ACCOMMODATION PRESENTATION */}
      <TheVillaSection />

      {/* 3. SENSORY HORIZONTAL STORIES STRIP: 24 HOURS IN THE HILLS */}
      <VisualStoriesStrip />

      {/* 4. FULL-WIDTH PHOTO STORY (Overlapping Composition & Varied Ratios) */}
      <FullWidthPhotoStory />

      {/* 5. "WHAT IT FEELS LIKE TO STAY HERE" (REST, CONNECT, EXPLORE) */}
      <WhatItFeelsLikeSection />

      {/* 5. VERIFIED POLICIES & CONCIERGE ASSURANCES */}
      <Section variant="cream" spacing="lg">
        <Container size="default">
          <div className="border border-[#E7DFCD] bg-white p-8 sm:p-12 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold-700 block mb-2 font-medium">
              REFINED HOSPITALITY STANDARDS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal mb-4">
              Essential Stay Information
            </h3>
            <p className="font-ui text-sm text-forest-900/80 font-light mb-8 max-w-xl">
              To ensure transparency and peace of mind, all essential reservation guidelines are straightforward:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-ui font-light">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-forest-950 block">Check-In & Check-Out</span>
                  <span className="text-xs text-forest-900/70">
                    Standard Check-in: 2:00 PM (14:00) · Standard Check-out: 11:00 AM (11:00).
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-forest-950 block">100% Private Gated Estate</span>
                  <span className="text-xs text-forest-900/70">
                    No shared halls, shared rooms, or outside guests during your reservation.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-forest-950 block">Pet-Friendly Living</span>
                  <span className="text-xs text-forest-900/70">
                    Accompanied pets are warmly welcomed across the private garden and veranda.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-forest-950 block">Self-Cooking & Caretaker Support</span>
                  <span className="text-xs text-forest-900/70">
                    Equipped kitchen with refrigerator, outdoor grill, and resident caretaker assistance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5B. THE DESTINATION CONNECTION */}
      <Section variant="white" spacing="md">
        <Container size="wide">
          <div className="bg-[#FAF8F5] border border-[#E7DFCD] p-8 sm:p-12 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <OverlineBadge dotColor="gold" className="mb-2">
                BEYOND THE RESIDENCE
              </OverlineBadge>
              <h3 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal mb-2">
                The Destination is Part of the Product
              </h3>
              <p className="font-ui text-sm text-forest-900/80 font-light leading-relaxed">
                From morning walks through pine needle trails and sunset pedal boating on Tikkar Taal to
                exploring the 17th-century ramparts of Morni Fort—your stay is seamlessly intertwined with the Shivalik hills.
              </p>
            </div>
            <Link to="/morni-hills" className="shrink-0">
              <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Around Morni Hills
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 6. STORIES FROM THE HILLS: VERIFIED SOCIAL PROOF */}
      <StoriesFromTheHillsSection />

      {/* 7. BOOKING CONCIERGE & WHATSAPP ENGINE */}
      <div id="booking">
        <StayEnquirySection />
      </div>
    </div>
  );
};
