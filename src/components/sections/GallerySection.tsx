import React, { useState } from "react";
import { galleryItems, type GalleryCategory } from "../../data/galleryData";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import { GalleryFilterBar } from "../gallery/GalleryFilterBar";
import { GalleryGrid } from "../gallery/GalleryGrid";
import { GalleryLightbox } from "../gallery/GalleryLightbox";
import { Button } from "../ui/Button";
import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

export interface GallerySectionProps {
  className?: string;
  maxItems?: number;
  showViewAllButton?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  className = "",
  maxItems,
  showViewAllButton = true
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  const displayedItems = maxItems ? filteredItems.slice(0, maxItems) : filteredItems;

  return (
    <section
      id="gallery"
      className={`relative bg-[#FAF8F5] text-forest-950 py-20 sm:py-28 border-t border-[#E7DFCD] ${className}`}
    >
      <Container size="wide">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <OverlineBadge dotColor="gold" className="mb-3">
              VISUAL CHRONICLES · THE EDITORIAL ARCHIVE
            </OverlineBadge>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest-950 font-normal tracking-tight leading-tight mb-4">
              The Retreat in Frames
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-gold-700 font-light mb-4">
              "Every corner is designed for stillness, warmth, and mountain connection."
            </p>

            <p className="font-ui text-sm sm:text-base text-forest-900/80 font-light leading-relaxed">
              Explore our curated photographic catalog spanning the private 2BHK residence, shaded veranda decks,
              rolling Shivalik horizons, artistic interiors, and nearby Morni Hills destinations.
            </p>
          </div>

          {showViewAllButton && (
            <Link to="/gallery" className="shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={<Images className="w-4 h-4 text-gold-400" />}
              >
                View Full Catalog ({galleryItems.length})
              </Button>
            </Link>
          )}
        </div>

        {/* Category Filter Bar */}
        <GalleryFilterBar
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          items={galleryItems}
          className="mb-10"
        />

        {/* Responsive Editorial Grid */}
        <GalleryGrid
          items={displayedItems}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* Bottom CTA for Section */}
        {showViewAllButton && maxItems && filteredItems.length > maxItems && (
          <div className="mt-12 text-center">
            <Link to="/gallery">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore All {galleryItems.length} Photographs
              </Button>
            </Link>
          </div>
        )}
      </Container>

      {/* Global Shared Lightbox for the Section */}
      <GalleryLightbox
        items={displayedItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
