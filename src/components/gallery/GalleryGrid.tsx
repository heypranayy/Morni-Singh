import React, { useState } from "react";
import { type GalleryItem } from "../../data/galleryData";
import { GalleryLightbox } from "./GalleryLightbox";
import { ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export interface GalleryGridProps {
  items: GalleryItem[];
  className?: string;
  onOpenLightbox?: (index: number) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  className = "",
  onOpenLightbox
}) => {
  const [internalLightboxIndex, setInternalLightboxIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (onOpenLightbox) {
      onOpenLightbox(index);
    } else {
      setInternalLightboxIndex(index);
    }
  };

  // Helper for controlled aspect ratio Tailwind classes
  const getAspectRatioClass = (ratio: GalleryItem["aspectRatio"]) => {
    switch (ratio) {
      case "21/9":
        return "aspect-[21/9]";
      case "16/9":
        return "aspect-[16/9]";
      case "4/3":
        return "aspect-[4/3]";
      case "3/2":
        return "aspect-[3/2]";
      case "1/1":
        return "aspect-square";
      case "4/5":
        return "aspect-[4/5]";
      default:
        return "aspect-[4/3]";
    }
  };

  return (
    <>
      {/* Editorial Responsive Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start ${className}`}
      >
        {items.map((item, index) => {
          const aspectClass = getAspectRatioClass(item.aspectRatio);
          const colSpanClass = item.colSpan === "col-span-2" ? "lg:col-span-2" : "col-span-1";

          return (
            <article
              key={item.id}
              onClick={() => handleCardClick(index)}
              className={`group relative overflow-hidden rounded-none border border-[#E7DFCD] hover:border-gold-500/60 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${colSpanClass}`}
            >
              {/* Image Frame Container with Controlled Aspect Ratio */}
              <div className={`relative w-full ${aspectClass} overflow-hidden bg-forest-950`}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transform transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Subtle Bottom Caption Vignette - Keeps Photos Crystal Bright */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none" />

                {/* Top Corner Category & Indicator Pill */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-950 bg-white/95 backdrop-blur-sm px-2.5 py-1 border border-[#E7DFCD] font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Top Right Restrained Interactive Arrow Badge */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-[#E7DFCD] flex items-center justify-center text-forest-950 group-hover:bg-forest-950 group-hover:text-white opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Editorial Content & Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col justify-end transform transition-transform duration-300">
                  {/* Location or Tag */}
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-gold-400/90 mb-1">
                      <MapPin className="w-3 h-3 text-gold-500" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {/* Title in Editorial Serif */}
                  <h3 className="font-serif text-xl sm:text-2xl text-parchment-50 font-normal leading-tight group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Caption that slides and fades into full view on hover */}
                  <p className="font-ui text-xs sm:text-sm text-parchment-300/80 font-light mt-1.5 line-clamp-2 sm:line-clamp-none transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.caption}
                  </p>

                  {/* Detail Pill */}
                  {item.tag && (
                    <div className="mt-3 pt-2.5 border-t border-gold-500/15 flex items-center gap-1 text-[11px] font-mono text-parchment-400">
                      <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                      <span>{item.tag}</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Internal Lightbox (used when no external handler is supplied) */}
      {internalLightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          currentIndex={internalLightboxIndex}
          onClose={() => setInternalLightboxIndex(null)}
          onNavigate={(newIdx) => setInternalLightboxIndex(newIdx)}
        />
      )}
    </>
  );
};
