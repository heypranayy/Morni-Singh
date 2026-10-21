import React from "react";
import { Link } from "react-router-dom";
import { retreatData } from "../../data/retreatData";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Compass,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Camera,
  Heart,
  Clock
} from "lucide-react";

interface FooterPhoto {
  src: string;
  title: string;
  category: string;
}

const FOOTER_GALLERY_STRIP: FooterPhoto[] = [
  {
    src: "/images/morni/56971.webp",
    title: "1,220m Shivalik Ridge Panorama",
    category: "Mountain Horizon"
  },
  {
    src: "/images/morni/57047.webp",
    title: "Bougainvillea Veranda Perch",
    category: "Morning Chai"
  },
  {
    src: "/images/morni/56974.webp",
    title: "Courtyard Water Fountain",
    category: "Estate Architecture"
  },
  {
    src: "/images/morni/56931.webp",
    title: "Artistic Living Room & Stone Hearth",
    category: "Villa Lounge"
  },
  {
    src: "/images/morni/57010.webp",
    title: "Master Valley King Suite",
    category: "Luxury Suite"
  },
  {
    src: "/images/morni/57055.webp",
    title: "Private Chef & Hot Mountain Cuisine",
    category: "Culinary Craft"
  },
  {
    src: "/images/morni/57058.webp",
    title: "Twilight Garden Patio & Fairy Lights",
    category: "Fireside Stargazing"
  },
  {
    src: "/images/morni/57070.webp",
    title: "Golden Hour Over Tikkar Taal",
    category: "Morni Hills"
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1610] border-t border-gold-500/30 text-parchment-200 relative overflow-hidden select-none">
      {/* 1. TOP IMAGE-BRIGHT VISUAL MOSAIC (8 REAL PHOTOS) */}
      <div className="border-b border-gold-500/20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-gold-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white font-bold">
              CAPTURED MOMENTS AT MORNI SINGH'S
            </span>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-ui font-medium uppercase tracking-wider transition-colors"
          >
            <span>View Full 23-Photo Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 8-Photo Grid Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2 px-2 pb-6">
          {FOOTER_GALLERY_STRIP.map((photo, idx) => (
            <Link
              key={idx}
              to="/gallery"
              className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-gold-400 shadow-md transition-all duration-300 block"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.04] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                <span className="text-[9px] font-mono text-gold-300 uppercase tracking-widest font-bold block truncate">
                  {photo.category}
                </span>
                <span className="text-[11px] font-serif text-white font-normal block truncate">
                  {photo.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2. MAIN DIRECTORY & CONCIERGE INFORMATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gold-500/20">
          
          {/* Column 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-col mb-4">
                <span className="font-serif text-3xl sm:text-4xl font-normal tracking-wide text-white drop-shadow-md">
                  MORNI SINGH’S
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-mono font-medium mt-1">
                  1,220m Shivalik Sanctuary · Bhoj Darara
                </span>
              </div>

              <p className="font-ui text-sm text-parchment-200/90 leading-relaxed font-light max-w-md mb-6">
                An intimate, standalone 2BHK boutique mountain sanctuary nestled amidst the pine valleys of Haryana.
                Designed for slow living, bespoke home-style dining, flowering verandas, and unbroken peace.
              </p>

              {/* Direct WhatsApp Callout Button */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Morni Singh's team! I would like to check availability and reserve dates."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-ui font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Concierge</span>
                </a>

                <Link
                  to="/book"
                  className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-ui font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-lg transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-forest-950" />
                  <span>Reserve 2BHK</span>
                </Link>
              </div>
            </div>

            {/* Corporate Accreditation */}
            <div className="text-xs text-parchment-300/80 font-ui font-light border-l-2 border-gold-400/50 pl-3 py-1 bg-white/5 p-2 rounded-r">
              <span className="text-gold-300 font-semibold uppercase tracking-wider block text-[10px]">
                Hospitality Leadership:
              </span>
              <span className="text-white font-medium">
                {retreatData.property.management.companyName}
              </span>
              <br />
              <span className="text-[11px] text-parchment-300/60">
                {retreatData.property.management.corporateOffice}
              </span>
            </div>
          </div>

          {/* Column 2: The Retreat Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400 font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              The Retreat
            </h4>
            <ul className="space-y-3 text-sm font-ui font-light">
              <li>
                <Link to="/stay/villa" className="hover:text-gold-300 text-parchment-200 transition-colors">
                  The 2BHK Villa
                </Link>
              </li>
              <li>
                <Link to="/stay" className="hover:text-gold-300 text-parchment-200 transition-colors">
                  The Stay Experience
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-gold-300 text-parchment-200 transition-colors">
                  Chef & Bonfires
                </Link>
              </li>
              <li>
                <Link to="/destination" className="hover:text-gold-300 text-parchment-200 transition-colors">
                  Around Morni Hills
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-300 text-parchment-200 transition-colors">
                  23-Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 text-parchment-200 transition-colors">
                  Heritage & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 text-parchment-200 transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Features & Policies (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400 font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Key Features
            </h4>
            <ul className="space-y-3 text-xs font-ui font-light text-parchment-200">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>100% Gated Property</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Sleeps Up to 6</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Pet-Friendly Lawn</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Check-in 2:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>1,220m Shivalik Air</span>
              </li>
              <li className="flex items-center gap-2 pt-2 border-t border-white/10 text-gold-300">
                <span>Morni Singh's Greens (Organic Farm)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Concierge Access (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400 font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Location & Access
            </h4>
            <div className="space-y-3.5 text-xs font-ui font-light text-parchment-200">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {retreatData.property.location.fullAddress}
                </span>
              </p>

              <div className="pt-2 border-t border-white/10 space-y-2.5">
                <a
                  href={`tel:${retreatData.property.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-gold-300 transition-colors text-white font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="font-mono">{retreatData.property.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${retreatData.property.contact.email}`}
                  className="flex items-center gap-2 hover:text-gold-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="truncate">{retreatData.property.contact.email}</span>
                </a>

                {/* Direct GMB Listing Link */}
                <a
                  href={retreatData.property.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/30 text-gold-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all shadow-xs"
                  title="Open Google My Business (GMB) Profile"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Google Business Profile (GMB)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                </a>
              </div>

              {/* Driving travel times */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-[11px] space-y-1">
                <div className="flex items-center justify-between text-parchment-200">
                  <span>From Chandigarh:</span>
                  <span className="font-mono text-gold-300 font-semibold">~1.5 hrs (48 km)</span>
                </div>
                <div className="flex items-center justify-between text-parchment-200">
                  <span>From Delhi NCR:</span>
                  <span className="font-mono text-gold-300 font-semibold">~4.5 hrs (250 km)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM BAR: COPYRIGHT & POLICIES */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-ui text-parchment-300/70 font-light gap-4">
          <p>© 2026 MORNI SINGH'S. All Rights Reserved. Managed by Pratham Hospitality Services Pvt. Ltd.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Check-in 2:00 PM · Check-out 11:00 AM</span>
            <span>·</span>
            <a
              href={retreatData.property.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-gold-200 underline underline-offset-4 font-medium inline-flex items-center gap-1"
              title="View on Google Maps"
            >
              <span>Bhoj Darara, Morni Hills (GMB)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
