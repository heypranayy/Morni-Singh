import React from "react";
import { Container, Section } from "../components/primitives/Container";
import { SEOHead } from "../components/common/SEOHead";
import { StayEnquirySection } from "../components/sections/StayEnquirySection";
import { ShieldCheck, Sparkles, Clock, Heart } from "lucide-react";

export const BookPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="Direct Reservation Enquiry · Reserve 2BHK Villa"
        description="Book Morni Singh's 2BHK mountain villa directly. Check dates, enquire about tariffs and group stays, with instant WhatsApp connection to our resident hospitality team."
        canonicalUrl="https://mornisinghs.com/book"
      />

      {/* 1. IMAGE-BRIGHT EDITORIAL HEADER */}
      <section className="relative pt-32 sm:pt-36 pb-20 bg-forest-950 text-white border-b border-gold-500/20 overflow-hidden">
        {/* Real photo background: Twilight Garden Patio */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morni/57058.webp"
            alt="Morni Singh's Twilight Garden Patio"
            className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.04] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>RESERVATION ENQUIRY · 100% PRIVATE RESIDENCE · 1,220M</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            Book Your <span className="italic font-light text-gold-300">Sanctuary.</span>
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-gold-200 font-light mb-6 drop-shadow-md">
            An Intimate 2BHK Mountain Villa Just for Your Group.
          </p>

          <p className="font-ui text-base sm:text-lg text-parchment-100 leading-relaxed font-light max-w-2xl mx-auto mb-8 drop-shadow-md">
            When you book Morni Singh’s, you reserve the complete 2-bedroom villa, private veranda, garden lawn, and hearth. No other guests are on the property during your stay.
          </p>

          {/* Quick Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-wider text-parchment-200 font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20"><ShieldCheck className="w-4 h-4 text-gold-400" /> Exclusive Private Access</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20"><Sparkles className="w-4 h-4 text-gold-400" /> Sleeps up to 6 Guests</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20"><Heart className="w-4 h-4 text-gold-400" /> Dedicated Caretaker</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20"><Clock className="w-4 h-4 text-gold-400" /> Check-in 2:00 PM</span>
          </div>
        </Container>
      </section>

      {/* 2. THE ENQUIRY SECTION */}
      <StayEnquirySection />

      {/* 3. BOOKING FAQS & IMPORTANT DETAILS */}
      <Section spacing="lg" variant="white" className="border-t border-[#E7DFCD]">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal text-center mb-8">
              Important Stay Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF8F5] border border-[#E7DFCD]">
                <h4 className="font-serif text-lg text-forest-950 font-medium mb-2">How Booking Works</h4>
                <p className="font-ui text-xs sm:text-sm text-forest-900/75 leading-relaxed font-light">
                  Submitting the form connects you directly with our hospitality concierge on WhatsApp. Because we host only one group at a time, we verify dates and share tailored tariff packages immediately.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#E7DFCD]">
                <h4 className="font-serif text-lg text-forest-950 font-medium mb-2">Pet-Friendly Haven</h4>
                <p className="font-ui text-xs sm:text-sm text-forest-900/75 leading-relaxed font-light">
                  We welcome pets on the property! The enclosed private garden lawn provides a safe, liberating environment for your dogs to run and play in mountain air.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#E7DFCD]">
                <h4 className="font-serif text-lg text-forest-950 font-medium mb-2">Home-Style Dining</h4>
                <p className="font-ui text-xs sm:text-sm text-forest-900/75 leading-relaxed font-light">
                  Our resident caretaker prepares fresh, wholesome home-style meals with advance notice. An outdoor barbecue grill is also available for evening gatherings.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#E7DFCD]">
                <h4 className="font-serif text-lg text-forest-950 font-medium mb-2">Safety & Backing</h4>
                <p className="font-ui text-xs sm:text-sm text-forest-900/75 leading-relaxed font-light">
                  Morni Singh’s is managed under Pratham Hospitality Services Pvt. Ltd. (PHS), ensuring professional standards of cleanliness, fresh linen, and guest security.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default BookPage;
