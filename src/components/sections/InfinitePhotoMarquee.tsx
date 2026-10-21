import React, { useState } from "react";
import { ArrowUpRight, Camera } from "lucide-react";

interface RibbonPhoto {
  src: string;
  title: string;
  tag: string;
  ratio?: string;
}

const RIBBON_PHOTOS: RibbonPhoto[] = [
  {
    src: "/images/morni/56971.webp",
    title: "1,220m Shivalik Ridge Panorama",
    tag: "Mountain Vista"
  },
  {
    src: "/images/morni/56931.webp",
    title: "Living Lounge with Stone Hearth",
    tag: "Artistic Interior"
  },
  {
    src: "/images/morni/57010.webp",
    title: "Master Valley King Suite",
    tag: "Luxury Bedroom"
  },
  {
    src: "/images/morni/57047.webp",
    title: "Bougainvillea Veranda Perch",
    tag: "Morning Chai Deck"
  },
  {
    src: "/images/morni/56974.webp",
    title: "Courtyard Water Fountain",
    tag: "Stone Architecture"
  },
  {
    src: "/images/morni/57055.webp",
    title: "Private Chef & Farm Cuisine",
    tag: "Culinary Craft"
  },
  {
    src: "/images/morni/57056.webp",
    title: "Fine Candlelight Dining Setup",
    tag: "Evening Feast"
  },
  {
    src: "/images/morni/57011.webp",
    title: "Sunset Glow Over Private Lawns",
    tag: "Golden Hour"
  },
  {
    src: "/images/morni/57058.webp",
    title: "Twilight Garden & Fairy Lights",
    tag: "Fireside & Stars"
  },
  {
    src: "/images/morni/57070.webp",
    title: "Tikkar Taal Lake Sunset",
    tag: "Morni Hills"
  },
  {
    src: "/images/morni/57029.webp",
    title: "White Observation Stairway",
    tag: "Rooftop Deck"
  },
  {
    src: "/images/morni/57014.webp",
    title: "Al-Fresco Lawn Umbrella Patio",
    tag: "Barbecue Garden"
  }
];

export const InfinitePhotoMarquee: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<RibbonPhoto | null>(null);

  // Duplicate list to achieve seamless infinite loop
  const duplicatedPhotos = [...RIBBON_PHOTOS, ...RIBBON_PHOTOS];

  return (
    <section className="py-8 sm:py-12 bg-[#0d1812] text-white overflow-hidden border-y border-gold-500/25 relative select-none">
      {/* Top Banner Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300 font-bold">
            ON-SITE CHRONICLES · 100% REAL PROPERTY FRAMES
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-parchment-300/80 font-ui font-light">
          <Camera className="w-3.5 h-3.5 text-gold-400" />
          <span>Swipe or tap any photograph</span>
        </span>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-x-auto scrollbar-none no-scrollbar flex">
        <div className="flex gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused] shrink-0">
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative shrink-0 w-[240px] sm:w-[300px] md:w-[340px] aspect-[16/10] rounded-xl overflow-hidden cursor-pointer border border-white/20 hover:border-gold-400 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.03] saturate-[1.1] transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Minimal Bottom Gradient for Caption Clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-gold-300 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs mb-1">
                    {photo.tag}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base text-white font-medium truncate drop-shadow-sm">
                    {photo.title}
                  </h4>
                </div>

                <div className="w-7 h-7 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Frame */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-forest-950 border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <div className="relative aspect-[16/10] w-full">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover filter brightness-[1.05]"
              />
            </div>
            <div className="p-6 flex items-center justify-between bg-[#102018]">
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold">
                  {selectedPhoto.tag}
                </span>
                <h3 className="font-serif text-2xl text-white mt-1">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-forest-950 font-ui font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Frame
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
