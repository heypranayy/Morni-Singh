import React, { useState } from "react";
import { retreatData } from "../../data/retreatData";
import {
  Calendar,
  Users,
  User,
  Phone,
  MessageSquare,
  ShieldCheck,
  PhoneCall,
  Send,
  CheckCircle2
} from "lucide-react";

export interface BookingCTAProps {
  className?: string;
  variant?: "banner" | "card" | "compact";
  title?: string;
  subtitle?: string;
  id?: string;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({
  className = "",
  title = "Stay Enquiry",
  subtitle = "Availability will be confirmed by our team.",
  id = "booking"
}) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("4 Guests (Standard)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Exact requested message template:
  // "Hello Morni Singh's, I would like to enquire about a stay.
  // Check-in:
  // Check-out:
  // Guests:
  // Name:
  // Phone:
  // Message:"
  const generateWhatsAppMessage = () => {
    const formattedCheckIn = checkIn || "To be decided / Flexible";
    const formattedCheckOut = checkOut || "To be decided / Flexible";
    const formattedName = name.trim() || "Guest";
    const formattedPhone = phone.trim() || "Not provided";
    const formattedMessage = message.trim() || "Please share tariff and availability.";

    return `Hello Morni Singh's, I would like to enquire about a stay.

Check-in: ${formattedCheckIn}
Check-out: ${formattedCheckOut}
Guests: ${guests}
Name: ${formattedName}
Phone: ${formattedPhone}
Message: ${formattedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Please provide your Name and Phone Number to submit your stay enquiry.");
      return;
    }

    const messageText = generateWhatsAppMessage();
    const whatsappNumber = retreatData.property.contact.whatsapp;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const directWhatsAppUrl = `https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Morni Singh's, I would like to enquire about a stay. Please confirm availability for the 2BHK Villa."
  )}`;

  const callTelUrl = `tel:${retreatData.property.contact.phone.replace(/\s+/g, "")}`;

  return (
    <div
      id={id}
      className={`border border-[#E7DFCD] bg-white p-6 sm:p-10 rounded-sm relative overflow-hidden shadow-xl text-forest-950 ${className}`}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
            DIRECT RESERVATION CONCIERGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest-950 font-normal tracking-tight mb-3">
            {title}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-gold-700 font-light max-w-2xl mx-auto">
            "{subtitle}"
          </p>
          <p className="font-ui text-xs sm:text-sm text-forest-900/75 font-light mt-2 max-w-2xl mx-auto leading-relaxed">
            We do not invent automated booking availability. Every enquiry is personally verified by our resident team to guarantee 100% exclusive 2BHK villa privacy.
          </p>
        </div>

        {/* Action Button Trio Banner: Primary, Secondary, Call */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 pb-6 border-b border-[#E7DFCD]">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#DCD5CB] hover:border-gold-600 rounded-xs text-xs font-ui uppercase tracking-wider text-forest-950 font-medium transition-colors flex items-center gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>WHATSAPP US</span>
          </a>

          <a
            href={callTelUrl}
            className="px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#DCD5CB] hover:border-gold-600 rounded-xs text-xs font-ui uppercase tracking-wider text-forest-950 font-medium transition-colors flex items-center gap-2 shadow-xs"
          >
            <PhoneCall className="w-4 h-4 text-gold-700" />
            <span>CALL US: {retreatData.property.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Interactive Stay Enquiry Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          {/* Dates & Guests Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-forest-900/70 mb-1 font-ui flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-gold-600" />
                <span>Check-in</span>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#DCD5CB] px-3 py-2.5 text-xs font-ui text-forest-950 rounded-xs focus:outline-none focus:border-forest-900 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-forest-900/70 mb-1 font-ui flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-gold-600" />
                <span>Check-out</span>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#DCD5CB] px-3 py-2.5 text-xs font-ui text-forest-950 rounded-xs focus:outline-none focus:border-forest-900 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-forest-900/70 mb-1 font-ui flex items-center gap-1 font-medium">
                <Users className="w-3.5 h-3.5 text-gold-600" />
                <span>Guests</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#DCD5CB] px-3 py-2.5 text-xs font-ui text-forest-950 rounded-xs focus:outline-none focus:border-forest-900 focus:bg-white"
              >
                <option value="2 Guests (Couples)">2 Guests (Couples)</option>
                <option value="4 Guests (Standard)">4 Guests (Standard)</option>
                <option value="6 Guests (Family)">6 Guests (Family)</option>
                <option value="More than 6 Guests">6+ Guests (On Request)</option>
              </select>
            </div>
          </div>

          {/* Name & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-forest-900/70 mb-1 font-ui flex items-center gap-1 font-medium">
                <User className="w-3.5 h-3.5 text-gold-600" />
                <span>Your Name *</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rohini Sharma"
                className="w-full bg-[#FAF8F5] border border-[#DCD5CB] px-3 py-2.5 text-xs font-ui text-forest-950 rounded-xs focus:outline-none focus:border-forest-900 focus:bg-white placeholder:text-forest-900/40"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-forest-900/70 mb-1 font-ui flex items-center gap-1 font-medium">
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Contact Phone *</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-[#FAF8F5] border border-[#DCD5CB] px-3 py-2.5 text-xs font-ui text-forest-950 rounded-xs focus:outline-none focus:border-forest-900 focus:bg-white placeholder:text-forest-900/40"
              />
            </div>
          </div>

          {/* Message Row */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-forest-900/70 mb-1 font-ui flex items-center gap-1 font-medium">
              <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
              <span>Message (Special Requests / Pets)</span>
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any questions regarding pets, check-in time, or meal preferences..."
              className="w-full bg-[#FAF8F5] border border-[#DCD5CB] px-3 py-2.5 text-xs font-ui text-forest-950 rounded-xs focus:outline-none focus:border-forest-900 focus:bg-white placeholder:text-forest-900/40 resize-none"
            />
          </div>

          {/* Primary CTA Button: BOOK YOUR STAY */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#14281E] hover:bg-[#1E3B2C] text-white font-ui font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-xs shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>BOOK YOUR STAY</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Availability Confirmation Note */}
          <p className="text-[11px] font-ui text-center text-forest-900/70 font-light pt-1">
            Stay Enquiry · Generates direct WhatsApp message ·{" "}
            <strong className="text-gold-700 font-medium">
              Availability will be confirmed by our team.
            </strong>
          </p>

          {isSubmitted && (
            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xs flex items-center gap-2 text-xs font-ui text-emerald-900 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                Enquiry details prepared and transferred to WhatsApp concierge.
              </span>
            </div>
          )}
        </form>

        {/* Assurance badges */}
        <div className="mt-8 pt-6 border-t border-[#E7DFCD] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-forest-900/70 font-ui font-light">
          <span className="flex items-center gap-1.5 font-medium text-forest-950">
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            100% Private 2BHK Residence
          </span>
          <span>·</span>
          <span>Check-in 2:00 PM · Check-out 11:00 AM</span>
          <span>·</span>
          <span>Pet-Friendly Private Grounds</span>
        </div>
      </div>
    </div>
  );
};
