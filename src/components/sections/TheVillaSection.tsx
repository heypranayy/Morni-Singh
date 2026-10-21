import React, { useState } from "react";
import { retreatData } from "../../data/retreatData";
import { Container } from "../primitives/Container";
import { Button } from "../ui/Button";
import { OverlineBadge } from "../ui/Badge";
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
  Trees,
  Car,
  UserCheck,
  Mountain,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export const TheVillaSection: React.FC = () => {
  const villa = retreatData.villa;

  const villaPhotos = [
    {
      src: "/images/morni/56973.webp",
      title: "Gated Residence & White Stone Perimeters",
      caption: "Stand-alone 2BHK residence with private boundary walls, stone terraces, and lush lawn surrounds.",
      categoryTag: "EXCLUSIVE VILLA"
    },
    {
      src: "/images/morni/56931.webp",
      title: "Artistic Living Room & Stone Hearth",
      caption: "Spacious central living lounge featuring an authentic stone feature wall and plush deep-cushioned sectional seating.",
      categoryTag: "LIVING LOUNGE"
    },
    {
      src: "/images/morni/57010.webp",
      title: "Master Valley King Suite",
      caption: "Grand solid wood headboard and wide mountain windows overlooking Shivalik pine valleys.",
      categoryTag: "MASTER SUITE"
    },
    {
      src: "/images/morni/57054.webp",
      title: "Garden View Double Suite",
      caption: "Sunlit restorative haven looking out to the pine gardens with crisp white linens.",
      categoryTag: "GARDEN SUITE"
    },
    {
      src: "/images/morni/57047.webp",
      title: "Bougainvillea Veranda Perch",
      caption: "Intimate morning sit-out framed by flowering bougainvillea vines facing 1,220m mountain crests.",
      categoryTag: "PRIVATE BALCONY"
    },
    {
      src: "/images/morni/56974.webp",
      title: "Water Fountain & Stone Courtyard",
      caption: "Central ornamental water fountain surrounded by flagstone pavers and shaded sitting perches.",
      categoryTag: "COURTYARD FOUNTAIN"
    },
    {
      src: "/images/morni/57055.webp",
      title: "Private Chef & Farm-to-Table Kitchen",
      caption: "In-house culinary craft preparing bespoke hot mountain delicacies and fresh Shivalik produce.",
      categoryTag: "PRIVATE CHEF"
    },
    {
      src: "/images/morni/57058.webp",
      title: "Twilight Garden Patio & Fairy Lights",
      caption: "Outdoor patio illuminated at dusk with warm lantern glows, pink flowers, and quiet night breezes.",
      categoryTag: "EVENING PATIO"
    }
  ];

  const [selectedVillaPhoto, setSelectedVillaPhoto] = useState(villaPhotos[0]);

  // Icon mapping for minimal line icons
  const getIcon = (name: string) => {
    switch (name) {
      case "2 Private Bedrooms":
        return <BedDouble className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "2 Private Bathrooms":
        return <Bath className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Sleeps up to 6":
        return <Users className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Approx. 80 sq m / 861 sq ft":
        return <Maximize2 className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Scenic Balcony":
        return <Sun className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Equipped Kitchen":
        return <UtensilsCrossed className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Outdoor Grill":
        return <Flame className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Pet-Friendly":
        return <Dog className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Private Garden Lawn":
        return <Trees className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Free Private Parking":
        return <Car className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Caretaker on Premises":
        return <UserCheck className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      case "Mountain Ridge Vistas":
        return <Mountain className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
      default:
        return <Sun className="w-4 h-4 text-gold-400 stroke-[1.5]" />;
    }
  };

  return (
    <section id="the-villa" className="py-20 sm:py-28 lg:py-32 bg-white text-forest-950 relative overflow-hidden border-b border-[#E7DFCD]">
      <Container size="wide">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <OverlineBadge dotColor="gold" className="mb-3">
            HERO ACCOMMODATION · EXCLUSIVE RESIDENCE
          </OverlineBadge>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest-950 font-normal tracking-tight">
                The Villa
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-gold-700 font-light mt-1">
                An intimate mountain sanctuary above the pine valleys
              </p>
            </div>
            <Link
              to="/stay/villa"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-forest-950 hover:text-gold-700 transition-colors font-ui group pb-1 border-b border-[#E7DFCD] font-medium"
            >
              <span>View Full Villa Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-gold-600" />
            </Link>
          </div>
        </div>

        {/* Large Editorial Split-Screen Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Side A: Large Architectural Photograph with Interactive Switcher */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative group">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#E7DFCD] bg-forest-950 shadow-lg">
                <img
                  src={selectedVillaPhoto.src}
                  alt={selectedVillaPhoto.title}
                  className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-forest-950 font-semibold border border-[#E7DFCD]">
                    {selectedVillaPhoto.categoryTag}
                  </span>
                </div>

                {/* Overlaid Title & Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h4 className="font-serif text-lg sm:text-xl font-normal drop-shadow-md">
                    {selectedVillaPhoto.title}
                  </h4>
                  <p className="text-xs text-parchment-200/90 font-light drop-shadow-sm mt-0.5">
                    {selectedVillaPhoto.caption}
                  </p>
                </div>
              </div>

              {/* Floating Architectural Metric Badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md p-5 border border-[#E7DFCD] shadow-xl max-w-xs hidden sm:block z-20">
                <span className="text-[10px] font-mono tracking-widest uppercase text-gold-700 font-semibold block mb-1">
                  TOTAL LIVING EXPANSE
                </span>
                <span className="font-serif text-2xl text-forest-950 block font-normal">
                  ~80 sq m / 861 sq ft
                </span>
                <span className="text-xs text-forest-900/70 font-light">
                  Complete private perimeter with lawn, veranda & firepit
                </span>
              </div>
            </div>

            {/* Interactive Thumbnail Selector Strip */}
            <div className="flex items-center gap-2.5 overflow-x-auto pt-4 pb-2 scrollbar-none no-scrollbar">
              {villaPhotos.map((photo, pIdx) => {
                const isSelected = photo.src === selectedVillaPhoto.src;
                return (
                  <button
                    key={pIdx}
                    onClick={() => setSelectedVillaPhoto(photo)}
                    className={`shrink-0 relative w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "border-gold-600 scale-105 shadow-md"
                        : "border-[#E7DFCD] opacity-70 hover:opacity-100 hover:border-gold-400"
                    }`}
                    title={photo.title}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Side B: Specifications & Elegant Minimal Amenity List */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Title & Hierarchy */}
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-700 font-semibold mb-2 block">
              // STANDALONE 2BHK SANCTUARY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal tracking-tight mb-4">
              MORNI SINGH'S 2BHK VILLA
            </h3>

            {/* Core Metrics Banner */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#FAF8F5] border border-[#E7DFCD] mb-6 text-center">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-gold-700 block font-normal">
                  2
                </span>
                <span className="text-[11px] font-ui uppercase tracking-wider text-forest-950 font-medium">
                  Bedrooms
                </span>
              </div>
              <div className="border-x border-[#E7DFCD]">
                <span className="font-serif text-2xl sm:text-3xl text-gold-700 block font-normal">
                  2
                </span>
                <span className="text-[11px] font-ui uppercase tracking-wider text-forest-950 font-medium">
                  Bathrooms
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-gold-700 block font-normal">
                  6
                </span>
                <span className="text-[11px] font-ui uppercase tracking-wider text-forest-950 font-medium">
                  Sleeps Max
                </span>
              </div>
            </div>

            {/* Core Callout */}
            <div className="border-l-2 border-gold-600 pl-4 py-2 mb-6 bg-[#FAF8F5]">
              <p className="font-serif italic text-lg sm:text-xl text-forest-950 font-light">
                "{villa.taglineCallout || "Designed as a home away from home."}"
              </p>
              <p className="text-xs font-ui text-forest-900/70 mt-1 font-light">
                Self-sufficient haven blending rustic Shivalik warmth with modern comforts.
              </p>
            </div>

            {/* Elegant Minimal Line Icon Amenity List */}
            <div className="mb-8">
              <h4 className="text-xs font-ui uppercase tracking-widest text-forest-950 font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                Verified Inclusions & Villa Features
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs font-ui">
                {villa.verifiedAmenities?.slice(0, 8).map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 bg-[#FAF8F5] border border-[#E7DFCD] hover:border-gold-500/50 transition-colors"
                  >
                    <span className="shrink-0">{getIcon(amenity.name)}</span>
                    <span className="text-forest-950 font-normal truncate">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Morni Singh's team! I would like to reserve the 2BHK Villa. Please share availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4 text-gold-400" />}
                className="w-full sm:w-auto"
              >
                Inquire on WhatsApp
              </Button>

              <Link to="/stay/villa" className="w-full sm:w-auto">
                <Button variant="outline" size="md" fullWidth>
                  Explore Floor Plan & Suites
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
