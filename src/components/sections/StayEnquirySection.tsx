import React, { useState } from "react";
import { retreatData } from "../../data/retreatData";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import {
  Calendar,
  Users,
  User,
  Phone,
  MessageSquare,
  ShieldCheck,
  PhoneCall,
  Clock,
  Sparkles,
  Info,
  CheckCircle2,
  Send
} from "lucide-react";

export interface StayEnquirySectionProps {
  className?: string;
  id?: string;
}

export const StayEnquirySection: React.FC<StayEnquirySectionProps> = ({
  className = "",
  id = "booking"
}) => {
  // Form State
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("4 Guests (Standard)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate dynamic WhatsApp message complying exactly with required template:
  // "Hello Morni Singh's, I would like to enquire about a stay.
  // Check-in:
  // Check-out:
  // Guests:
  // Name:
  // Phone:
  // Message:"
  const generateWhatsAppMessage = () => {
    const formattedCheckIn = checkIn ? checkIn : "To be decided / Flexible";
    const formattedCheckOut = checkOut ? checkOut : "To be decided / Flexible";
    const formattedName = name.trim() ? name.trim() : "Guest";
    const formattedPhone = phone.trim() ? phone.trim() : "Not provided";
    const formattedMessage = message.trim() ? message.trim() : "Please share tariff and availability.";

    return `Hello Morni Singh's, I would like to enquire about a stay.

Check-in: ${formattedCheckIn}
Check-out: ${formattedCheckOut}
Guests: ${guests}
Name: ${formattedName}
Phone: ${formattedPhone}
Message: ${formattedMessage}`;
  };

  const getDynamicWhatsAppUrl = () => {
    const rawMessage = generateWhatsAppMessage();
    const whatsappNumber = retreatData.property.contact.whatsapp;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Please provide your Name and Contact Phone to submit your stay enquiry.");
      return;
    }

    const targetUrl = getDynamicWhatsAppUrl();
    setIsSubmitted(true);

    // Open WhatsApp in a new tab with the pre-filled enquiry details
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const generalWhatsAppUrl = `https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Morni Singh's! I would like to enquire about availability and tariffs for the 2BHK Villa."
  )}`;

  const callTelUrl = `tel:${retreatData.property.contact.phone.replace(/\s+/g, "")}`;

  return (
    <section
      id={id}
      className={`relative bg-[#FAF8F5] text-forest-950 py-20 sm:py-28 border-t border-[#E7DFCD] overflow-hidden ${className}`}
    >
      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Editorial Guidance & Direct Concierge CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <OverlineBadge dotColor="gold" className="mb-3">
                DIRECT RESERVATION CONCIERGE
              </OverlineBadge>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest-950 font-normal tracking-tight leading-tight mb-4">
                Stay Enquiry
              </h2>

              <p className="font-serif italic text-xl sm:text-2xl text-gold-700 font-light mb-5">
                "Availability will be confirmed by our team."
              </p>

              <p className="font-ui text-sm sm:text-base text-forest-900/80 font-light leading-relaxed mb-6">
                Because Morni Singh's is an exclusive, stand-alone 2BHK residence with no shared rooms,
                we do not invent automated availability calendars. Every enquiry is personally reviewed
                by our team to guarantee total privacy and warm hospitality.
              </p>
            </div>

            {/* Direct Quick Action Buttons (Secondary & Tertiary CTAs) */}
            <div className="p-6 bg-white border border-[#E7DFCD] rounded-none space-y-4 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-700 font-semibold block">
                Immediate Concierge Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Secondary CTA: WHATSAPP US */}
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-[#FAF8F5] hover:bg-[#F5F1E8] border border-[#E7DFCD] hover:border-gold-500/60 text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-forest-900" />
                  <span>WHATSAPP US</span>
                </a>

                {/* Tertiary CTA: CALL US */}
                <a
                  href={callTelUrl}
                  className="px-4 py-3 bg-[#FAF8F5] hover:bg-[#F5F1E8] border border-[#E7DFCD] hover:border-gold-500/60 text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <PhoneCall className="w-4 h-4 text-gold-600" />
                  <span>CALL US</span>
                </a>
              </div>

              <div className="pt-2 text-xs font-ui text-forest-900/70 font-light flex items-center gap-2 border-t border-[#E7DFCD]/60">
                <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Concierge Desk: 9:00 AM – 9:00 PM IST · Direct: {retreatData.property.contact.phoneDisplay}</span>
              </div>
            </div>

            {/* What You Receive Card */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-forest-900/60 font-semibold block">
                Sanctuary Specifications
              </span>

              <div className="space-y-2.5 text-xs font-ui text-forest-900/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>100% Private 2BHK Residence · Sleeps up to 6</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Private Garden Lawn, Veranda & Stone Bonfire Hearth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Equipped Kitchen, Outdoor Grill & Resident Caretaker</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Check-in: 2:00 PM · Check-out: 11:00 AM · Pet-Friendly</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Stay Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E7DFCD] p-6 sm:p-10 shadow-lg relative">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E7DFCD]">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal">
                    Reserve Your Dates
                  </h3>
                  <p className="font-ui text-xs text-gold-700 font-medium mt-1">
                    Stay Enquiry · Availability will be confirmed by our team.
                  </p>
                </div>

                <span className="hidden sm:inline-block font-mono text-[11px] text-forest-950 uppercase tracking-widest bg-[#FAF8F5] px-3 py-1.5 border border-[#E7DFCD] font-medium">
                  Instant WhatsApp Transfer
                </span>
              </div>

              {/* Form Elements */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Dates Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      <span>Check-in Date</span>
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E7DFCD] px-3.5 py-2.5 text-xs font-ui text-forest-950 rounded-none focus:outline-none focus:border-gold-600 transition-colors"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      <span>Check-out Date</span>
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E7DFCD] px-3.5 py-2.5 text-xs font-ui text-forest-950 rounded-none focus:outline-none focus:border-gold-600 transition-colors"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>

                {/* Guests & Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-600" />
                      <span>Guests</span>
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E7DFCD] px-3 py-2.5 text-xs font-ui text-forest-950 rounded-none focus:outline-none focus:border-gold-600 transition-colors"
                    >
                      <option value="2 Guests (Couples)">2 Guests (Couple)</option>
                      <option value="4 Guests (Standard)">4 Guests (Standard)</option>
                      <option value="6 Guests (Full Villa Capacity)">6 Guests (Full Villa)</option>
                      <option value="More than 6 Guests (On Request)">6+ Guests (On Request)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gold-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-[#FAF8F5] border border-[#E7DFCD] px-3.5 py-2.5 text-xs font-ui text-forest-950 rounded-none focus:outline-none focus:border-gold-600 transition-colors placeholder:text-forest-900/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gold-600" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF8F5] border border-[#E7DFCD] px-3.5 py-2.5 text-xs font-ui text-forest-950 rounded-none focus:outline-none focus:border-gold-600 transition-colors placeholder:text-forest-900/40"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-ui uppercase tracking-wider text-forest-950 font-semibold mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                    <span>Special Requests or Message</span>
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your group, pet details, or preferred arrival timing..."
                    className="w-full bg-[#FAF8F5] border border-[#E7DFCD] px-3.5 py-2.5 text-xs font-ui text-forest-950 rounded-none focus:outline-none focus:border-gold-600 transition-colors placeholder:text-forest-900/40 resize-none"
                  />
                </div>

                {/* Primary CTA Button: BOOK YOUR STAY */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-forest-950 hover:bg-forest-900 text-white font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-none shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>BOOK YOUR STAY</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-400" />
                  </button>
                </div>

                {/* Availability confirmation reminder */}
                <p className="text-[11px] font-ui text-center text-forest-900/70 font-light pt-1">
                  Submitting generates a direct enquiry to our WhatsApp concierge.{" "}
                  <strong className="text-forest-950 font-medium">
                    Availability will be confirmed by our team.
                  </strong>
                </p>

                {/* Submitted feedback notification */}
                {isSubmitted && (
                  <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-300 rounded-none flex items-center gap-2.5 text-xs font-ui text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Enquiry drafted! Opening WhatsApp concierge with your stay details. Our team will confirm tariff and booking availability.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
