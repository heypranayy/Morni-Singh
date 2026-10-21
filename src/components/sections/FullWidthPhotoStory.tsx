import React from "react";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import { Compass, Sparkles } from "lucide-react";

export const FullWidthPhotoStory: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-forest-950 relative overflow-hidden border-b border-[#E7DFCD]">
      <Container size="wide">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <OverlineBadge dotColor="gold" className="mb-3">
            PHOTO ESSAY · VISUAL ARCHITECTURE
          </OverlineBadge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest-950 font-normal tracking-tight">
            Light, Pine & Mountain Stone
          </h2>
          <p className="font-serif italic text-xl text-gold-700 font-light mt-1">
            An unhurried visual narrative of Morni Singh's
          </p>
          <p className="font-ui text-sm text-forest-900/80 mt-4 leading-relaxed max-w-xl font-light">
            Every room opens to natural light, forested ridges, and curated artistic details.
            Here, architecture exists in service of tranquility.
          </p>
        </div>

        {/* 1. PANORAMIC ANCHOR: Wide Shivalik Horizon */}
        <div className="relative mb-12 lg:mb-20">
          <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden border border-[#E7DFCD] group shadow-sm">
            <img
              src="/images/morni/56971.webp"
              alt="Panoramic View of Shivalik Hills from Morni Singh's"
              className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay Caption Pill */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3">
              <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-forest-950 font-semibold border border-[#E7DFCD]">
                01 · PANORAMIC RIDGE
              </span>
              <span className="hidden sm:inline-block text-xs font-serif italic text-white">
                Golden hour across 1,220m Shivalik pine valleys
              </span>
            </div>

            <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-white bg-black/60 px-2.5 py-1 border border-white/20">
              <Compass className="w-3 h-3 text-gold-400" />
              <span>30.70° N, 77.02° E</span>
            </div>
          </div>
        </div>

        {/* 2. OVERLAPPING COMPOSITION: Portrait + Landscape + Detail Crop */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Item A: PORTRAIT CROP (Tall Balcony Morning Perch) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative aspect-[3/4] overflow-hidden border border-[#E7DFCD] bg-white group shadow-md">
              <img
                src="/images/morni/57047.webp"
                alt="Sunrise Balcony at Morni Singh's"
                className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
                  02 · PORTRAIT PERSPECTIVE
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  Morning Tea on the Balcony
                </h4>
                <p className="text-xs font-ui text-parchment-200/90 font-light mt-1">
                  Private sit-out facing the morning mist as birds call from the valley.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Metric Card */}
            <div className="mt-4 lg:-mt-12 lg:-ml-6 relative z-20 bg-white p-5 border border-[#E7DFCD] max-w-xs shadow-xl">
              <div className="flex items-center gap-2 text-gold-700 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">
                  SANCTUARY FEATURE
                </span>
              </div>
              <p className="font-serif italic text-sm text-forest-950">
                "Unbroken pine forest horizons with zero commercial clutter."
              </p>
            </div>
          </div>

          {/* Right Column: LANDSCAPE + OVERLAPPING DETAIL CROP */}
          <div className="lg:col-span-7 flex flex-col space-y-8 lg:space-y-12">
            
            {/* Item B: LANDSCAPE CROP (Living Room & Curated Art) */}
            <div className="relative aspect-[16/10] overflow-hidden border border-[#E7DFCD] bg-white group shadow-md">
              <img
                src="/images/morni/56931.webp"
                alt="Artistic Living Lounge at Morni Singh's"
                className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    03 · LANDSCAPE INTERIOR
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    The Art of Tranquility
                  </h4>
                  <p className="text-xs font-ui text-parchment-200/90 font-light mt-1 max-w-md">
                    Curated original paintings and handcrafted wooden furniture designed for long, mindful conversations.
                  </p>
                </div>
              </div>
            </div>

            {/* Item C: ASYMMETRIC DETAIL CROPS (Square Bonfire Embers + Bedroom Quietude) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 relative">
              {/* Detail Crop 1: Square Bonfire & Outdoor Grill */}
              <div className="sm:col-span-6 relative aspect-square overflow-hidden border border-[#E7DFCD] bg-white group lg:-mt-10 z-20 shadow-xl">
                <img
                  src="/images/morni/57058.webp"
                  alt="Evening Bonfire Pit and Outdoor Barbecue"
                  className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-terracotta-400 block mb-0.5 font-semibold">
                    04 · DETAIL CROP
                  </span>
                  <span className="font-serif text-lg text-white font-normal block">
                    Bonfire & Outdoor Grill
                  </span>
                  <span className="text-[11px] font-ui text-parchment-200/80 font-light">
                    Private evening cookouts under starry skies
                  </span>
                </div>
              </div>

              {/* Detail Crop 2: Restful Master Bedroom Window */}
              <div className="sm:col-span-6 relative aspect-square overflow-hidden border border-[#E7DFCD] bg-white group shadow-md">
                <img
                  src="/images/morni/57010.webp"
                  alt="Master Bedroom Suite Window"
                  className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-gold-400 block mb-0.5 font-semibold">
                    05 · DETAIL CROP
                  </span>
                  <span className="font-serif text-lg text-white font-normal block">
                    Valley Bedroom Rest
                  </span>
                  <span className="text-[11px] font-ui text-parchment-200/80 font-light">
                    Crisp artisanal linens & pine light
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
