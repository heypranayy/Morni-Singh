import React, { useState } from "react";
import { galleryItems, type GalleryCategory } from "../data/galleryData";
import { Container } from "../components/primitives/Container";
import { GalleryFilterBar } from "../components/gallery/GalleryFilterBar";
import { GalleryGrid } from "../components/gallery/GalleryGrid";
import { GalleryLightbox } from "../components/gallery/GalleryLightbox";
import { StayEnquirySection } from "../components/sections/StayEnquirySection";
import { BrandLogo } from "../components/ui/BrandLogo";
import { SEOHead } from "../components/common/SEOHead";
import {
  Camera,
  Layers,
  Sparkles,
  Compass,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="Photographic Gallery · Morni Singh's Visual Archive"
        description="A visual chronicle of mountain stillness. 23 curated local photographs showcasing the 2BHK villa, mist-covered pine ridges, local art, and Morni Hills landscape."
        canonicalUrl="https://mornisinghs.com/gallery"
      />

      {/* 1. IMAGE-BRIGHT EDITORIAL GALLERY HERO */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 bg-forest-950 text-white border-b border-gold-500/20 overflow-hidden">
        {/* Real photo background with brightened mountain ridge & bougainvillea */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morni/56971.webp"
            alt="Morni Hills Panorama"
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
        </div>

        <Container size="wide" className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <BrandLogo size="md" showText={false} theme="dark" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>AUTHENTIC ARCHIVE · 23 REAL PROPERTY PHOTOGRAPHS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight mb-4 leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            The Gallery
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-gold-200 font-light mb-6 drop-shadow-md">
            "A Visual Chronicle of Mountain Stillness"
          </p>

          <p className="font-ui text-sm sm:text-base md:text-lg text-parchment-100 leading-relaxed font-light mb-8 max-w-3xl mx-auto drop-shadow-md">
            Browse through genuine local imagery capturing the architecture, interior rooms, private lawns,
            misty sunrises, and surrounding attractions of Morni Hills. Tap any photograph for high-resolution full-screen viewing with keyboard controls and swipe gestures.
          </p>

          {/* Catalog Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono text-parchment-200 flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-gold-400" />
              <span>23 Local Property & Destination Frames</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono text-parchment-200 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-gold-400" />
              <span>6 Curated Editorial Categories</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-gold-900/40 backdrop-blur-md border border-gold-400/30 text-xs font-mono text-gold-200 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Full-Screen Lightbox & Swipe Support</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono text-parchment-200 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>1,220m Shivalik Atmosphere</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. GALLERY INTERACTIVE EXPERIENCE */}
      <section className="py-14 sm:py-20 bg-white text-forest-950 min-h-[60vh]">
        <Container size="wide">
          {/* Category Filter Selector */}
          <GalleryFilterBar
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
            items={galleryItems}
            className="mb-12"
          />

          {/* Active Category Editorial Header */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E7DFCD]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold-700 font-medium">
                Viewing Collection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal mt-0.5">
                {activeCategory === "ALL" ? "Complete Photographic Archive" : `${activeCategory} Collection`}
              </h2>
            </div>

            <span className="font-mono text-xs text-forest-900/60">
              Showing {filteredItems.length} of {galleryItems.length} photographs
            </span>
          </div>

          {/* Masonry Editorial Grid */}
          <GalleryGrid
            items={filteredItems}
            onOpenLightbox={(idx) => setLightboxIndex(idx)}
          />

          {/* Quick Notice on Data Architecture */}
          <div className="mt-16 p-6 bg-[#FAF8F5] border border-[#E7DFCD] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-ui text-forest-900/80 leading-relaxed max-w-2xl">
              <span className="text-forest-950 font-semibold block mb-1">
                Local Asset Pipeline Ready:
              </span>
              All photography is loaded directly from <code className="text-forest-950 bg-white px-1.5 py-0.5 border border-[#DCD5CB] font-mono">/public/images</code>.
              When new high-resolution property photography is supplied, photos can simply be added to the data catalog without restructuring the layout.
            </div>

            <Link
              to="/stay/villa"
              className="inline-flex items-center gap-1.5 text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold hover:text-gold-700 shrink-0 group"
            >
              <span>Explore The Villa Residence</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 3. RESERVATION ENGINE */}
      <div id="booking">
        <StayEnquirySection />
      </div>

      {/* Global Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
