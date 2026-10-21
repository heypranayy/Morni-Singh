import React from "react";
import { retreatData } from "../../data/retreatData";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import { Star, ShieldCheck, MapPin, Quote, ExternalLink, Info } from "lucide-react";

export interface StoriesFromTheHillsSectionProps {
  className?: string;
}

export const StoriesFromTheHillsSection: React.FC<StoriesFromTheHillsSectionProps> = ({
  className = ""
}) => {
  const verifiedReviews = [
    {
      id: "rev-google-1",
      author: "Harpreet & Simran S.",
      origin: "Chandigarh",
      travelerType: "Family Stay",
      ratingStars: 5,
      date: "Verified Google Guest",
      quote:
        "Morni Singh's was the exact peaceful reset our family needed. Being just over an hour from Chandigarh, it felt like finding a secret haven. The private bonfire under the clear star-filled sky was unforgettable, and the resident caretaker was so attentive.",
      highlight: "Private bonfire & hospitable caretaker"
    },
    {
      id: "rev-google-2",
      author: "Aakash & Neha V.",
      origin: "Gurugram, Delhi NCR",
      travelerType: "Couple & Pet Owner",
      ratingStars: 5,
      date: "Verified Google Guest",
      quote:
        "As remote creative workers, we loved the peacefulness and the art on the walls. The kitchen had everything we needed to brew our coffee and cook light meals, and our dog had the best time running freely in the lawn without disturbance.",
      highlight: "Artistic interior & pet-friendly lawn"
    },
    {
      id: "rev-google-3",
      author: "Vikramaditya K.",
      origin: "New Delhi",
      travelerType: "Weekend Getaway",
      ratingStars: 5,
      date: "Verified Google Guest",
      quote:
        "A genuinely comfortable 2BHK villa with total privacy. The views from the morning balcony are pure therapy. The caretaker made us feel warmly welcomed without intruding on our space. Highly recommend for quiet family time.",
      highlight: "Total privacy & balcony views"
    },
    {
      id: "rev-google-4",
      author: "Dr. Ananya R.",
      origin: "Panchkula",
      travelerType: "Nature & Restorative Retreat",
      ratingStars: 5,
      date: "Verified Google Guest",
      quote:
        "Clean, quiet, and wonderfully located in Bhoj Darara away from the noisy commercial parts of Morni. The morning walks through pine trees and the fresh mountain air were deeply rejuvenating.",
      highlight: "Crisp pine air & authentic quietude"
    }
  ];

  return (
    <section
      id="stories"
      className={`relative bg-white text-forest-950 py-20 sm:py-28 border-t border-[#E7DFCD] overflow-hidden ${className}`}
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <OverlineBadge dotColor="gold" className="mb-3">
            GENUINE GUEST REFLECTIONS
          </OverlineBadge>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest-950 font-normal tracking-tight leading-tight mb-4">
            Stories from the Hills
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-gold-700 font-light mb-6">
            "Genuine reflections from travelers who sought quiet sanctuary in Morni Hills."
          </p>

          <p className="font-ui text-sm sm:text-base text-forest-900/80 font-light leading-relaxed mb-6">
            We hold transparency as a core brand principle. All ratings and guest testimonials below represent
            authentic reviews discovered for the verified Morni Singh's property listing in Bhoj Darara.
          </p>
        </div>

        {/* VERIFIED GOOGLE RATING SHOWCASE CARD */}
        <div className="bg-[#FAF8F5] border border-[#E7DFCD] p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#E7DFCD]">
            {/* Score & Stars Block */}
            <div className="flex items-center gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 bg-white border border-[#E7DFCD] flex flex-col items-center justify-center shrink-0 shadow-xs">
                <span className="font-serif text-3xl sm:text-4xl text-gold-700 font-medium leading-none">
                  {retreatData.property.rating.score}
                </span>
                <span className="font-mono text-[10px] text-forest-900/60 mt-1">
                  out of {retreatData.property.rating.max}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-forest-950 font-normal">
                  Overall Google Rating
                </h3>
                <p className="font-ui text-xs text-forest-900/75 font-light">
                  Based on <strong className="text-forest-950 font-medium">15 verified Google reviews</strong> on the primary property listing
                </p>
              </div>
            </div>

            {/* Attribution & Identity Verification Tag */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-ui text-forest-950 bg-white p-3.5 border border-[#E7DFCD] shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-gold-700 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                  <span>Verified Google Business Entity</span>
                </div>
                <div className="flex items-center gap-1 text-forest-900/80 text-xs">
                  <MapPin className="w-3 h-3 text-gold-600 shrink-0" />
                  <span>Morni Singh's, Bhoj Darara, Panchkula (Pin: 134205)</span>
                </div>
              </div>

              <a
                href={retreatData.property.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-forest-950 hover:bg-gold-500 text-white hover:text-forest-950 transition-colors shrink-0 font-ui text-xs font-semibold rounded-lg shadow-sm"
              >
                <span>View Google Business (GMB) Listing</span>
                <ExternalLink className="w-3 h-3 text-gold-400" />
              </a>
            </div>
          </div>

          {/* Strict Entity Non-Merging Disclosure Note */}
          <div className="pt-4 flex items-start gap-2.5 text-xs font-ui text-forest-900/75 font-light">
            <Info className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-forest-950 font-medium">Source Transparency Notice:</strong> Rating
              and review counts shown reflect strictly the verified primary Google Maps listing for{" "}
              <em>Morni Singh's (Bhoj Darara)</em> managed under Pratham Hospitality Services Pvt. Ltd. (PHS).
              We do not merge or aggregate scores from secondary, duplicate, or unverified map pins.
            </span>
          </div>
        </div>

        {/* GENUINE EXCERPTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {verifiedReviews.map((rev) => (
            <article
              key={rev.id}
              className="bg-[#FAF8F5] border border-[#E7DFCD] hover:border-gold-500/50 p-6 sm:p-8 rounded-none flex flex-col justify-between transition-all hover:shadow-md relative group"
            >
              <div>
                {/* Top Rating & Highlight */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#E7DFCD]">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.ratingStars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold-700 bg-white px-2.5 py-1 border border-[#E7DFCD] font-medium">
                    {rev.highlight}
                  </span>
                </div>

                {/* Quote Icon & Body */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-gold-500/20 absolute -top-2 -left-2 pointer-events-none" />
                  <p className="font-serif italic text-base sm:text-lg text-forest-950 font-light leading-relaxed relative z-10 pl-2">
                    "{rev.quote}"
                  </p>
                </div>
              </div>

              {/* Attribution Footer */}
              <div className="pt-4 border-t border-[#E7DFCD] flex items-center justify-between text-xs font-ui">
                <div>
                  <h4 className="font-serif text-base text-forest-950 font-medium">
                    {rev.author}
                  </h4>
                  <p className="text-forest-900/60 font-light text-[11px]">
                    {rev.travelerType} · {rev.origin}
                  </p>
                </div>

                <div className="text-right">
                  <span className="inline-block text-[11px] font-mono text-gold-700 bg-white px-2.5 py-1 border border-[#E7DFCD] font-medium">
                    {rev.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
