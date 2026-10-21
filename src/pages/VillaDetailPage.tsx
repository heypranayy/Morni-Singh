import React, { useState } from "react";
import { retreatData, type VillaSpace } from "../data/retreatData";
import { Container, Section } from "../components/primitives/Container";
import { OverlineBadge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { ImageFrame } from "../components/ui/ImageFrame";
import { StayEnquirySection } from "../components/sections/StayEnquirySection";
import { StoriesFromTheHillsSection } from "../components/sections/StoriesFromTheHillsSection";
import { SEOHead } from "../components/common/SEOHead";
import { Link } from "react-router-dom";
import {
  BedDouble,
  Bath,
  Users,
  Maximize2,
  Sun,
  UtensilsCrossed,
  Flame,
  Dog,
  Car,
  Check,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Clock,
  Wind,
  Signal
} from "lucide-react";

export const VillaDetailPage: React.FC = () => {
  const villa = retreatData.villa;
  const spaces = villa.spaces;
  const [activeSpaceId, setActiveSpaceId] = useState<string>(spaces[0].id);

  const activeSpace: VillaSpace =
    spaces.find((s) => s.id === activeSpaceId) || spaces[0];

  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="Morni Singh's 2BHK Villa · Architectural Blueprint & Amenities"
        description="Explore the complete architectural layout, private chambers, amenities, and reservation policies of Morni Singh's 2BHK mountain villa in Bhoj Darara, Morni Hills."
        canonicalUrl="https://mornisinghs.com/stay/villa"
      />

      {/* 1. IMAGE-BRIGHT ARCHITECTURAL MASTER HERO */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 bg-forest-950 text-white border-b border-gold-500/20 overflow-hidden">
        {/* Real photo background: Master Valley King Suite */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morni/57010.webp"
            alt="Morni Singh's Master King Suite"
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
        </div>

        <Container size="wide" className="relative z-10">
          {/* Breadcrumb Navigation - Frosted Luxury Glass */}
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-ui text-parchment-200">
            <Link to="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link to="/stay" className="hover:text-gold-300 transition-colors">
              Stay
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-300 font-semibold">The 2BHK Villa</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>PRODUCT DETAIL · ENTIRE PRIVATE RESIDENCE</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight mb-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
                MORNI SINGH'S 2BHK VILLA
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-gold-200 font-light mb-4 drop-shadow-md">
                "Designed as a home away from home."
              </p>

              <p className="font-ui text-sm sm:text-base text-parchment-100 leading-relaxed font-light max-w-2xl drop-shadow-md">
                A standalone private mountain cottage perched in Bhoj Darara, Morni Hills at 1,220m elevation.
                Your booking grants exclusive access to the entire residence: 2 en-suite bedrooms,
                living lounge with curated fine art, equipped self-cooking kitchen, and private mountain lawn with outdoor grill.
              </p>
            </div>

            {/* Quick Reservation Action in Header */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Morni Singh's team! I would like to reserve the 2BHK Villa. Please confirm available dates."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4 fill-forest-950" />}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-forest-950 font-bold shadow-xl"
              >
                Inquire on WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                fullWidth
                href="#booking"
                className="bg-black/50 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              >
                Check Dates & Rates
              </Button>
            </div>
          </div>

          {/* Key Specifications Grid Strip - Luxury Frosted Glass */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10 pt-8 border-t border-white/20">
            <div className="p-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl shadow-md">
              <span className="text-[10px] font-ui uppercase tracking-widest text-parchment-300 block mb-0.5">
                Bedrooms
              </span>
              <span className="font-serif text-lg text-white font-semibold">2 Suites</span>
            </div>

            <div className="p-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl shadow-md">
              <span className="text-[10px] font-ui uppercase tracking-widest text-parchment-300 block mb-0.5">
                Bathrooms
              </span>
              <span className="font-serif text-lg text-white font-semibold">2 Private Baths</span>
            </div>

            <div className="p-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl shadow-md">
              <span className="text-[10px] font-ui uppercase tracking-widest text-parchment-300 block mb-0.5">
                Capacity
              </span>
              <span className="font-serif text-lg text-white font-semibold">Sleeps Up to 6</span>
            </div>

            <div className="p-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl shadow-md">
              <span className="text-[10px] font-ui uppercase tracking-widest text-parchment-300 block mb-0.5">
                Living Expanse
              </span>
              <span className="font-serif text-lg text-white font-semibold">~861 sq ft</span>
            </div>

            <div className="p-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl shadow-md">
              <span className="text-[10px] font-ui uppercase tracking-widest text-parchment-300 block mb-0.5">
                Elevation
              </span>
              <span className="font-serif text-lg text-white font-semibold">1,220m</span>
            </div>

            <div className="p-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl shadow-md">
              <span className="text-[10px] font-ui uppercase tracking-widest text-parchment-300 block mb-0.5">
                Exclusivity
              </span>
              <span className="font-serif text-lg text-gold-300 font-semibold">100% Gated</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. INTERACTIVE VILLA SPACE EXPLORER */}
      <Section variant="white" spacing="lg" id="spaces">
        <Container size="wide">
          <div className="max-w-3xl mb-10">
            <OverlineBadge dotColor="gold" className="mb-2">
              ARCHITECTURAL COMPOSITION
            </OverlineBadge>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal">
              Chambers & Living Spaces
            </h2>
            <p className="font-ui text-sm text-forest-900/80 font-light mt-1">
              Select any space below to explore interior appointments, features, and photographic perspective.
            </p>
          </div>

          {/* Space Selector Tabs */}
          <div className="flex flex-wrap gap-2.5 pb-6 border-b border-[#E7DFCD] mb-10">
            {spaces.map((space) => {
              const isActive = space.id === activeSpaceId;
              return (
                <button
                  key={space.id}
                  onClick={() => setActiveSpaceId(space.id)}
                  className={`font-ui text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-[#14281E] text-white border-[#14281E] font-semibold shadow-sm"
                      : "bg-[#FAF8F5] text-forest-950 border-[#E7DFCD] hover:border-gold-600 hover:text-gold-800"
                  }`}
                >
                  {space.name}
                </button>
              );
            })}
          </div>

          {/* Active Chamber Walkthrough Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 border border-[#E7DFCD] bg-[#FAF8F5]">
            <div className="lg:col-span-7">
              <ImageFrame
                src={activeSpace.image}
                alt={activeSpace.name}
                aspectRatio="16/9"
                categoryTag="VILLA CHAMBER"
                caption={`${activeSpace.name} · Morni Singh's 2BHK Residence`}
                withCorners
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-ui font-medium mb-1">
                {activeSpace.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal mb-4">
                {activeSpace.name}
              </h3>
              <p className="font-ui text-sm text-forest-900/80 leading-relaxed font-light mb-8">
                {activeSpace.description}
              </p>

              {/* Verified Features */}
              <div className="pt-6 border-t border-[#E7DFCD]">
                <h4 className="text-xs uppercase tracking-widest text-forest-950 font-ui mb-3.5 flex items-center gap-2 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  Space Amenities & Inclusions
                </h4>
                <ul className="space-y-2.5 text-xs font-ui text-forest-900/85">
                  {activeSpace.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. VERIFIED MINIMAL LINE ICON AMENITY LIST (STRICTLY VERIFIED) */}
      <Section variant="cream" spacing="lg" id="amenities">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <OverlineBadge dotColor="gold" className="mb-2">
              VERIFIED PROPERTY INCLUSIONS
            </OverlineBadge>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal">
              Amenities & Inclusions
            </h2>
            <p className="font-ui text-sm text-forest-900/80 font-light mt-1">
              Every amenity below is verified from rental listings and ground property data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Bedrooms */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <BedDouble className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">2 Private Bedrooms</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Independent chambers with valley and garden outlooks, dressed in clean artisanal bedding.
              </p>
            </div>

            {/* 2. Bathrooms */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <Bath className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">2 Private Bathrooms</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Fitted with modern hot water geysers, showers, and clean vanity amenities.
              </p>
            </div>

            {/* 3. Capacity */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <Users className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">Sleeps up to 6</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Spacious configuration designed comfortably for couples, families, and close groups.
              </p>
            </div>

            {/* 4. Total Area */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <Maximize2 className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">~80 sq m / 861 sq ft</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Generous indoor living lounge and private outdoor garden lawn area.
              </p>
            </div>

            {/* 5. Balcony */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <Sun className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">Scenic Valley Balcony</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Sunrise tea perch overlooking rolling pine ridges of the Shivalik range.
              </p>
            </div>

            {/* 6. Kitchen */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <UtensilsCrossed className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">Equipped Kitchen</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Self-cooking setup with refrigerator, cookware, dinnerware, and electric kettle.
              </p>
            </div>

            {/* 7. Outdoor Grill */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <Flame className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">Outdoor Grill & Bonfire</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Dedicated outdoor barbecue grill and stone bonfire pit for evening open-air dining.
              </p>
            </div>

            {/* 8. Pet-Friendly */}
            <div className="p-6 bg-white border border-[#E7DFCD] hover:border-gold-600 transition-colors shadow-xs">
              <Dog className="w-5 h-5 text-gold-600 stroke-[1.5] mb-3" />
              <h4 className="font-serif text-lg text-forest-950 font-medium mb-1">Pet-Friendly Living</h4>
              <p className="text-xs font-ui text-forest-900/70 font-light leading-relaxed">
                Enclosed private garden lawn where accompanied family pets can enjoy mountain nature.
              </p>
            </div>
          </div>

          {/* Network & Mountain Ventilation Note (Clear, honest context) */}
          <div className="mt-8 p-6 bg-white border border-[#E7DFCD] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-ui font-light text-forest-900/80 shadow-xs">
            <div className="flex items-start gap-3">
              <Signal className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-forest-950 block mb-0.5">Mobile Reception (4G/5G)</span>
                <span>Good cellular signal on Airtel and Jio networks across the property grounds for digital hotspots.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Wind className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-forest-950 block mb-0.5">Mountain Climate & Air</span>
                <span>Situated at 1,220m altitude, the villa enjoys natural pine cross-breezes and cool mountain evenings.</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. HOUSE RULES & RESERVATION POLICIES */}
      <Section variant="white" spacing="lg">
        <Container size="default">
          <div className="border border-[#E7DFCD] bg-[#FAF8F5] p-8 sm:p-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold-700 block mb-2 font-medium">
              RESIDENCE POLICIES & CARE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal mb-6">
              House Guidelines & Timing
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-ui font-light">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-forest-950 block">Check-In: 2:00 PM (14:00)</span>
                    <span className="text-xs text-forest-900/70">
                      Caretaker will greet you at the villa. Early check-in upon prior request and subject to availability.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-forest-950 block">Check-Out: 11:00 AM (11:00)</span>
                    <span className="text-xs text-forest-900/70">
                      Smooth check-out process. Late departures should be communicated in advance.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-forest-950 block">Exclusive Access</span>
                    <span className="text-xs text-forest-900/70">
                      The entire villa and private lawn are exclusively yours with zero shared halls or stranger access.
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Dog className="w-4 h-4 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-forest-950 block">Pet Etiquette</span>
                    <span className="text-xs text-forest-900/70">
                      Pets must be supervised on the lawn. Please bring their favorite bedding and maintain indoor hygiene.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Flame className="w-4 h-4 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-forest-950 block">Bonfire & Outdoor Grill</span>
                    <span className="text-xs text-forest-900/70">
                      Firewood and grill assistance can be coordinated with the resident caretaker upon arrival.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-forest-950 block">Private Parking</span>
                    <span className="text-xs text-forest-900/70">
                      Free on-site parking for multiple cars within the private property perimeter.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. STORIES FROM THE HILLS: VERIFIED SOCIAL PROOF */}
      <StoriesFromTheHillsSection />

      {/* 6. DIRECT RESERVATION ENGINE */}
      <div id="booking">
        <StayEnquirySection />
      </div>
    </div>
  );
};
