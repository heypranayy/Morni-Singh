import React from "react";
import { retreatData } from "../data/retreatData";
import { Container, Section } from "../components/primitives/Container";
import { OverlineBadge, Badge } from "../components/ui/Badge";
import { ExperiencesGridSection } from "../components/sections/ExperiencesGridSection";
import { AroundMorniHillsSection } from "../components/sections/AroundMorniHillsSection";
import { StayEnquirySection } from "../components/sections/StayEnquirySection";
import { BrandLogo } from "../components/ui/BrandLogo";
import { SEOHead } from "../components/common/SEOHead";
import {
  Compass,
  MapPin,
  Sparkles,
  TreePine,
  ShieldCheck,
  ArrowRight,
  Info,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";

export const DestinationPage: React.FC = () => {
  const distances = retreatData.distances;
  const greensProduce = retreatData.morniGreens.produce;

  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="Morni Hills Destination Guide · 1,220m Shivalik Sanctuary"
        description="Discover Morni Hills, Haryana's sole hill station at 1,220m elevation. Explore Tikkar Taal, Morni Fort, pine-scented hiking trails, and scenic drive routes from Chandigarh and Delhi NCR."
        canonicalUrl="https://mornisinghs.com/morni-hills"
      />

      {/* 1. IMAGE-BRIGHT DESTINATION HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-forest-950 text-white overflow-hidden pt-32 sm:pt-36 pb-20 sm:pb-28 border-b border-gold-500/20">
        {/* Real photo background: Lake Sunset Panorama */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morni/57070.webp"
            alt="Morni Hills Lake Sunset Panorama"
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05] saturate-[1.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
        </div>

        <Container size="wide" className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <BrandLogo size="md" showText={false} theme="dark" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>SHIVALIK FOOTHILLS · 1,220M ELEVATION · HARYANA’S SOLE HILL STATION</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight mb-4 leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            Morni Hills
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-gold-200 font-light mb-6 drop-shadow-md">
            "The Destination is Part of the Product."
          </p>

          <p className="font-ui text-sm sm:text-base md:text-lg text-parchment-100 leading-relaxed font-light mb-10 max-w-3xl mx-auto drop-shadow-md">
            Perched at 1,220 meters (~4,000 feet) above sea level in the Panchkula district of Haryana,
            Morni Hills represents the nearest pristine Himalayan foothill haven from Chandigarh and Delhi NCR.
            A tranquil sanctuary of pine-scented slopes, freshwater twin lakes, centuries-old ramparts, and unhurried quietude.
          </p>

          {/* Quick Anchor Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="#experiences"
              className="px-4 py-2 text-xs font-ui uppercase tracking-wider text-forest-950 bg-white hover:bg-[#FAF8F5] border border-[#DCD5CB] hover:border-forest-900 rounded-xs transition-colors shadow-xs"
            >
              Retreat Experiences
            </a>
            <a
              href="#around-morni-hills"
              className="px-4 py-2 text-xs font-ui uppercase tracking-wider text-forest-950 bg-white hover:bg-[#FAF8F5] border border-[#DCD5CB] hover:border-forest-900 rounded-xs transition-colors shadow-xs"
            >
              Around Morni Hills (8 Chapters)
            </a>
            <a
              href="#scenic-routes"
              className="px-4 py-2 text-xs font-ui uppercase tracking-wider text-forest-950 bg-white hover:bg-[#FAF8F5] border border-[#DCD5CB] hover:border-forest-900 rounded-xs transition-colors shadow-xs"
            >
              Scenic Routes & Approx. Drive
            </a>
            <a
              href="#greens"
              className="px-4 py-2 text-xs font-ui uppercase tracking-wider text-forest-950 bg-white hover:bg-[#FAF8F5] border border-[#DCD5CB] hover:border-forest-900 rounded-xs transition-colors shadow-xs"
            >
              Morni Greens Legacy
            </a>
          </div>

          {/* Key Geographic Specs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="gold" icon={<Compass className="w-3.5 h-3.5" />}>
              1,220m Altitude (~4,000 ft)
            </Badge>
            <Badge variant="pine" icon={<TreePine className="w-3.5 h-3.5" />}>
              Chir Pine & Deciduous Forests
            </Badge>
            <Badge variant="terracotta" icon={<MapPin className="w-3.5 h-3.5" />}>
              Bhoj Darara Hamlet
            </Badge>
            <Badge variant="muted" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              Sole Hill Station in Haryana
            </Badge>
          </div>
        </Container>
      </section>

      {/* 2. GEOGRAPHY & ATMOSPHERE HIGHLIGHTS */}
      <Section variant="white" spacing="md">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF8F5] border border-[#E7DFCD] rounded-xs shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-700 block mb-2 font-medium">
                01 · THE ELEVATION
              </span>
              <h3 className="font-serif text-2xl text-forest-950 font-normal mb-2">
                1,220m Crisp Shivalik Air
              </h3>
              <p className="font-ui text-xs sm:text-sm text-forest-900/75 font-light leading-relaxed">
                Rising significantly above the Indo-Gangetic plains, Morni Hills enjoys brisk morning breezes,
                cool mountain twilights, and unpolluted starry nights throughout the seasons.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F5] border border-[#E7DFCD] rounded-xs shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-700 block mb-2 font-medium">
                02 · THE LANDSCAPE
              </span>
              <h3 className="font-serif text-2xl text-forest-950 font-normal mb-2">
                Chir Pine Canopies & Terraces
              </h3>
              <p className="font-ui text-xs sm:text-sm text-forest-900/75 font-light leading-relaxed">
                Slopes blanketed with native Chir pine and oak trees, punctuated by quiet walking tracks
                and terraced hillside crops tended by warm local hamlet communities.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F5] border border-[#E7DFCD] rounded-xs shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-700 block mb-2 font-medium">
                03 · THE ACCESSIBILITY
              </span>
              <h3 className="font-serif text-2xl text-forest-950 font-normal mb-2">
                Nearest Authentic Hill Escape
              </h3>
              <p className="font-ui text-xs sm:text-sm text-forest-900/75 font-light leading-relaxed">
                Located just ~35 km from Panchkula, ~42 km from Chandigarh, and ~260 km from Delhi NCR.
                Escape the city on Friday evening without facing exhausting Himalayan highway bottlenecks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. RETREAT EXPERIENCES SECTION */}
      <div id="experiences">
        <ExperiencesGridSection />
      </div>

      {/* 4. AROUND MORNI HILLS: LARGE IMMERSIVE VERTICAL STORYTELLER (8 Chapters) */}
      <div id="around-morni-hills">
        <AroundMorniHillsSection />
      </div>

      {/* 5. SCENIC ROUTES, GATEWAYS & STRICT "APPROX. DRIVE" TRAVEL TIMES */}
      <Section variant="white" spacing="lg" id="scenic-routes">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <OverlineBadge dotColor="gold" className="mb-3">
              JOURNEY & SCENIC APPROACH
            </OverlineBadge>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest-950 font-normal tracking-tight mb-4">
              Reaching the Sanctuary
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-gold-700 font-light mb-4">
              Scenic ascent through winding Shivalik mountain roads.
            </p>

            <p className="font-ui text-xs sm:text-sm text-forest-900/80 font-light leading-relaxed mb-6">
              Morni Hills is accessed via the Panchkula–Badiyal Road or the Pinjore–Mallah mountain route.
              Both offer picturesque climbs through dense forest belts and rolling foothills.
            </p>

            {/* Travel Advisory Callout */}
            <div className="inline-flex items-start gap-2.5 p-4 bg-[#FAF8F5] border border-[#E7DFCD] rounded-xs text-xs font-ui text-forest-900/85">
              <Info className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
              <span>
                <strong className="text-forest-950 font-semibold">Approx. drive advisory:</strong>{" "}
                Drive times represent realistic estimates under normal daytime driving conditions.
                Monsoon showers, mountain fog, holiday traffic, or hill road repairs can impact travel times.
              </span>
            </div>
          </div>

          {/* Gateway Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distances.map((dist, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAF8F5] border border-[#E7DFCD] rounded-xs flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E7DFCD]">
                    <span className="font-mono text-xs uppercase tracking-wider text-gold-700 font-medium">
                      Gateway {idx + 1}
                    </span>
                    <span className="font-mono text-xs text-forest-900/60">{dist.distanceKm}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-forest-950 font-normal mb-1">
                    {dist.city}
                  </h3>

                  <p className="font-ui text-xs text-forest-900/70 mb-4 line-clamp-2">
                    Via {dist.route}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7DFCD] flex items-center gap-2 text-xs font-ui text-forest-950 font-medium">
                  <Car className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>{dist.driveTime}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. MORNI SINGH'S GREENS SPOTLIGHT */}
      <Section variant="cream" spacing="lg" id="greens">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <OverlineBadge dotColor="gold" className="mb-3">
                SOIL & SUSTAINABILITY
              </OverlineBadge>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest-950 font-normal tracking-tight mb-4">
                Morni Singh's Greens
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-gold-700 font-light mb-5">
                "{retreatData.morniGreens.tagline}"
              </p>

              <p className="font-ui text-xs sm:text-sm text-forest-900/80 font-light leading-relaxed mb-4">
                {retreatData.morniGreens.description}
              </p>

              <p className="font-ui text-xs sm:text-sm text-forest-900/75 font-light leading-relaxed mb-6">
                {retreatData.morniGreens.philosophy}
              </p>

              <Link
                to="/stay/villa"
                className="inline-flex items-center gap-2 text-xs font-ui uppercase tracking-wider text-forest-950 font-medium hover:text-gold-700 pb-1 border-b border-forest-950 group"
              >
                <span>Discover Dining & Kitchen at the Villa</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Produce List */}
            <div className="lg:col-span-6 bg-white border border-[#E7DFCD] p-6 sm:p-8 rounded-xs shadow-xs">
              <h3 className="font-serif text-2xl text-forest-950 font-normal mb-4">
                Cultivated in Shivalik Mountain Soil
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {greensProduce.map((p, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 bg-[#FAF8F5] border border-[#E7DFCD] rounded-xs"
                  >
                    <div className="flex items-center gap-1.5 font-serif text-lg text-forest-950 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                      <span>{p.name}</span>
                    </div>
                    <p className="font-ui text-xs text-forest-900/70 font-light mt-1">
                      {p.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. DIRECT RESERVATION & WHATSAPP CTA */}
      <div id="booking">
        <StayEnquirySection />
      </div>
    </div>
  );
};
