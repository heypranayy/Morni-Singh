import React from "react";
import { Container, Section } from "../components/primitives/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { retreatData } from "../data/retreatData";
import { SEOHead } from "../components/common/SEOHead";
import { StayEnquirySection } from "../components/sections/StayEnquirySection";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Compass, 
  Navigation, 
  Car, 
  Plane, 
  Train, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";

export const ContactPage: React.FC = () => {
  const travelGateways = [
    {
      icon: <Plane className="w-5 h-5 text-gold-600" />,
      gateway: "Chandigarh International Airport (IXC)",
      distance: "Approx. 48 km",
      time: "~1.5 hours drive",
      notes: "Smooth scenic drive via Panchkula and Morni hill road."
    },
    {
      icon: <Train className="w-5 h-5 text-gold-600" />,
      gateway: "Kalka Railway Station / Chandigarh Junction",
      distance: "Approx. 38–42 km",
      time: "~1.2 hours drive",
      notes: "Convenient rail connections from Delhi (Shatabdi Express, Vande Bharat)."
    },
    {
      icon: <Car className="w-5 h-5 text-gold-600" />,
      gateway: "Delhi NCR (Gurugram, Noida, New Delhi)",
      distance: "Approx. 250 km",
      time: "~4.5 hours drive",
      notes: "Take NH44 towards Ambala / Zirakpur, then turn towards Panchkula & Morni Hills."
    }
  ];

  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="Contact & Location · Gateways to Bhoj Darara"
        description="Find Morni Singh's in Bhoj Darara, Morni Hills. Direct phone (+91 966-779-8451), official WhatsApp concierge, driving routes from Chandigarh and Delhi NCR, and stay enquiry."
        canonicalUrl="https://mornisinghs.com/contact"
      />

      {/* 1. IMAGE-BRIGHT HERO HEADER */}
      <section className="relative pt-32 sm:pt-36 pb-20 bg-forest-950 text-white border-b border-gold-500/20 overflow-hidden">
        {/* Real photo background with courtyard entry */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morni/56973.webp"
            alt="Morni Singh's Villa Entry & Courtyard"
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-lg">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>FINDING MORNI SINGH'S · BHOJ DARARA · 1,220M</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            Contact & <span className="italic font-light text-gold-300">Location.</span>
          </h1>

          <p className="font-ui text-base sm:text-lg text-parchment-100 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-md">
            Perched at 1,220m in the peaceful Bhoj Darara pocket of Morni Hills. We are here to assist with route directions, personalized stay bookings, and retreat inquiries.
          </p>
        </Container>
      </section>

      {/* 2. CONTACT DETAILS & DIRECT DIRECTORY */}
      <Section spacing="xl" variant="white" className="border-b border-[#E7DFCD]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Sanctuary Address */}
            <div className="p-8 bg-[#FAF8F5] border border-[#E7DFCD] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 mb-6">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-forest-950 font-normal mb-3">Sanctuary Address</h3>
                <p className="font-ui text-sm text-forest-900/80 font-light leading-relaxed mb-4">
                  {retreatData.property.location.fullAddress}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-gold-700 font-medium">
                  <Compass className="w-4 h-4" />
                  <span>Altitude: {retreatData.property.elevation}</span>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E7DFCD]">
                <a
                  href={retreatData.property.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-forest-950 font-semibold hover:text-gold-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-600" />
                  <span>Open in Google Maps / GMB Profile</span>
                </a>
              </div>
            </div>

            {/* Card 2: Concierge Line & WhatsApp */}
            <div className="p-8 bg-[#FAF8F5] border border-[#E7DFCD] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 mb-6">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-forest-950 font-normal mb-3">Concierge & Booking</h3>
                <p className="font-ui text-sm text-forest-900/80 font-light leading-relaxed mb-4">
                  Direct reservation assistance, guest services, and customized dining inquiries.
                </p>
                <div className="space-y-2 text-sm text-forest-950 font-medium">
                  <div>
                    <span className="text-xs font-ui text-forest-900/60 block">Direct Line:</span>
                    <a href={`tel:${retreatData.property.contact.phone.replace(/\s+/g, "")}`} className="hover:text-gold-700">
                      {retreatData.property.contact.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs font-ui text-forest-900/60 block">Email Desk:</span>
                    <a href={`mailto:${retreatData.property.contact.email}`} className="hover:text-gold-700">
                      {retreatData.property.contact.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E7DFCD]">
                <a
                  href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Morni Singh's team! I have an inquiry regarding a villa booking."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-forest-950 font-semibold hover:text-gold-700 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 3: Check-in & Management */}
            <div className="p-8 bg-[#FAF8F5] border border-[#E7DFCD] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 mb-6">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-forest-950 font-normal mb-3">Timings & Operations</h3>
                <div className="space-y-3 text-sm text-forest-900/80 font-light leading-relaxed">
                  <div>
                    <span className="text-xs font-semibold uppercase text-forest-950 block">Check-in Time</span>
                    <span>2:00 PM onwards</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-forest-950 block">Check-out Time</span>
                    <span>11:00 AM</span>
                  </div>
                  <div className="pt-2 border-t border-[#E7DFCD] text-xs">
                    <span className="text-gold-700 font-medium">Managed by:</span><br />
                    {retreatData.property.management.companyName}
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E7DFCD]">
                <div className="flex items-center gap-2 text-xs text-forest-900/70 font-light">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Private gated property with caretaker</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. TRAVEL GATEWAYS & DRIVING DIRECTIONS */}
      <Section spacing="xl" variant="warm" className="border-b border-[#E7DFCD]">
        <Container size="default">
          <SectionHeader
            overline="HOW TO REACH US"
            title="Gateways & Scenic Drives"
            subtitle="Morni Hills is renowned as the closest hill station to Delhi NCR and Chandigarh. Enjoy a comfortable ascent along quiet Shivalik mountain roads."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {travelGateways.map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-[#E7DFCD] flex flex-col justify-between">
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-serif text-xl text-forest-950 font-normal mb-2">{item.gateway}</h4>
                  <div className="flex items-center gap-3 text-xs font-mono text-gold-700 font-semibold mb-4">
                    <span>{item.distance}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                  <p className="font-ui text-xs sm:text-sm text-forest-900/75 leading-relaxed font-light">
                    {item.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. STAY ENQUIRY FORM EMBED */}
      <StayEnquirySection />
    </div>
  );
};

export default ContactPage;
