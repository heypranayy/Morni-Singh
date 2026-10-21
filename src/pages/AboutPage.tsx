import React from "react";
import { Container, Section } from "../components/primitives/Container";
import { OverlineBadge } from "../components/ui/Badge";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { BrandLogo } from "../components/ui/BrandLogo";
import { SEOHead } from "../components/common/SEOHead";
import { retreatData } from "../data/retreatData";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Palette, 
  ShieldCheck, 
  Sparkles, 
  Coffee, 
  Flame, 
  Trees, 
  MessageSquare,
  Award
} from "lucide-react";

export const AboutPage: React.FC = () => {
  const philosophyPillars = [
    {
      num: "01",
      title: "STAY",
      subtitle: "Unplug, breathe, and belong.",
      description:
        "Morning tea on the private balcony as pine mist rolls across the Shivalik ridge. Reading undisturbed in the garden lawn. Evenings gathered around a crackling cedarwood bonfire under an unpolluted canopy of stars."
    },
    {
      num: "02",
      title: "EXPLORE",
      subtitle: "The quiet wilderness at your doorstep.",
      description:
        "Trekking unpaved forest trails, birdwatching endemic Himalayan species, discovering the ancient quietude of Morni Fort, or sitting by the shimmering waters of Tikkar Taal. Adventures taken at your own unhurried pace."
    },
    {
      num: "03",
      title: "REPEAT",
      subtitle: "A ritual of seasonal renewal.",
      description:
        "The hill retreat you don't merely cross off a bucket list, but return to season after season. When the plains grow stifling or the city feels overwhelming, Morni Singh's is your permanent sanctuary in the hills."
    }
  ];

  const artAndDetailItems = [
    {
      title: "Original Paintings & Local Artistry",
      desc: "Each room at Morni Singh's features hand-selected original canvases and framed hill art that reflect the colours of the Shivalik flora, migratory birds, and forest moods.",
      image: "/images/morni/56931.webp",
      tag: "Curation"
    },
    {
      title: "Photographic Mountain Chronicles",
      desc: "Framed black-and-white and archival photographs lining the corridors chronicle the untamed ridges, mist-covered ravines, and historic hamlets of Bhoj Darara.",
      image: "/images/morni/56969.webp",
      tag: "Archives"
    },
    {
      title: "Warm Timber & Earthen Textures",
      desc: "From hand-carved wooden accents to soft linen weaves and tactile pottery, every texture is chosen to evoke the grounded tactile calm of home.",
      image: "/images/morni/57010.webp",
      tag: "Craft"
    }
  ];

  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="Our Story & Philosophy · A Home Away From Home"
        description="The story of Morni Singh's in the Shivalik Hills. An intimate boutique mountain sanctuary rooted in slow travel, personal hospitality, nature, and quiet privacy."
        canonicalUrl="https://mornisinghs.com/about"
      />

      {/* 1. IMAGE-BRIGHT LUXURY CINEMATIC HERO */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 bg-forest-950 text-white border-b border-gold-500/20 overflow-hidden">
        {/* Real photo background: Bougainvillea Veranda Perch */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morni/57047.webp"
            alt="Morni Singh's Bougainvillea Veranda & Mountain Vista"
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
          />
          {/* Subtle minimal vignette so text pops brilliantly without dulling the sunny photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <BrandLogo size="md" showText={false} theme="dark" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>BHOJ DARARA · MORNI HILLS · 1,220M ELEVATION</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight mb-4 leading-[1.02] drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            The Hills, <span className="italic font-light text-gold-300">A Little Closer.</span>
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-gold-200 font-light mb-6 max-w-2xl mx-auto drop-shadow-md">
            "A Home Away From Home in the Shivalik Hills."
          </p>

          <p className="font-ui text-base sm:text-lg text-parchment-100 leading-relaxed font-light max-w-3xl mx-auto mb-8 drop-shadow-md">
            Morni Singh’s was born from a singular, heartfelt desire: to create a genuine sanctuary where the unhurried calm of the mountains feels warm, intimate, and deeply personal—never transactional.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-mono uppercase tracking-wider text-parchment-200 font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20"><Heart className="w-3.5 h-3.5 text-gold-400" /> Hospitality</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20"><Trees className="w-3.5 h-3.5 text-gold-400" /> Nature</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20"><ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> Privacy</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20"><Palette className="w-3.5 h-3.5 text-gold-400" /> Art</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20"><Coffee className="w-3.5 h-3.5 text-gold-400" /> Comfort</span>
          </div>
        </Container>
      </section>

      {/* 2. LARGE HERO IMAGE FEATURE */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 z-20">
        <div className="relative overflow-hidden border border-[#E7DFCD] shadow-lg bg-white">
          <img
            src="/images/morni/56971.webp"
            alt="Morni Singh's Villa amidst Shivalik hills greenery"
            className="w-full h-[55vh] sm:h-[70vh] object-cover object-center filter brightness-[0.97]"
            loading="eager"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-transparent p-6 sm:p-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400">The Shivalik Sanctuary</span>
              <p className="font-serif text-xl sm:text-2xl font-light">Perched at 1,220 metres amidst pine and wild mountain breezes.</p>
            </div>
            <span className="text-xs font-ui tracking-widest uppercase text-white/80 shrink-0">
              Bhoj Darara · Haryana
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE STORY: WHERE MORNI SINGH'S COMES FROM */}
      <Section spacing="xl" variant="white" className="border-b border-[#E7DFCD]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <OverlineBadge dotColor="gold" className="mb-3">
                ORIGINS & SOUL
              </OverlineBadge>
              <h2 className="font-serif text-3xl sm:text-5xl text-forest-950 leading-tight mb-6 font-normal">
                Not a Hotel. <br />
                <span className="italic font-light">A Hill Home With a Soul.</span>
              </h2>
              <div className="w-12 h-0.5 bg-gold-600 mb-6" />
              <p className="font-ui text-sm sm:text-base text-forest-900/80 leading-relaxed font-light mb-5">
                Most travelers heading to the hills find themselves trapped in overcrowded hill stations, negotiating noisy streets and anonymous hotel hallways.
              </p>
              <p className="font-ui text-sm sm:text-base text-forest-900/80 leading-relaxed font-light">
                Morni Singh’s was founded on the opposite conviction: that true mountain luxury is quietness, private space, clean pine air, and the genuine warmth of caretakers who look after you like family.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 sm:p-10 bg-[#FAF8F5] border border-[#E7DFCD] relative">
                <span className="absolute top-4 right-6 font-serif text-6xl text-gold-500/20 italic">“</span>
                <p className="font-serif text-xl sm:text-2xl text-forest-950 font-normal leading-relaxed italic mb-4">
                  “We wanted a place where Delhi NCR and Chandigarh could reach the hills without losing an entire day to travel—yet step into an entirely different world the moment they arrived.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold-600" />
                  <span className="font-ui text-xs uppercase tracking-widest text-gold-700 font-semibold">
                    The Founding Philosophy
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-[#E7DFCD]">
                  <h4 className="font-serif text-lg text-forest-950 mb-2 font-medium">Bhoj Darara Haven</h4>
                  <p className="font-ui text-xs sm:text-sm text-forest-900/70 leading-relaxed font-light">
                    Located in the tranquil Bhoj Darara pocket of Morni Hills, away from commercial highway noise, wrapped by virgin pine tracks.
                  </p>
                </div>
                <div className="p-6 bg-white border border-[#E7DFCD]">
                  <h4 className="font-serif text-lg text-forest-950 mb-2 font-medium">Under 5 Hours Away</h4>
                  <p className="font-ui text-xs sm:text-sm text-forest-900/70 leading-relaxed font-light">
                    The closest true hill escape from Delhi NCR (~4.5 hrs) and Chandigarh Tricity (~1.5 hrs), making spontaneous weekend retreats effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. THE PHILOSOPHY: STAY · EXPLORE · REPEAT */}
      <Section spacing="xl" variant="warm" className="border-b border-[#E7DFCD]">
        <Container size="default">
          <SectionHeader
            overline="OUR GUIDING CADENCE"
            title="Stay. Explore. Repeat."
            subtitle="Three simple movements that govern life at Morni Singh's. No rushed schedules, no mandatory activities—only the rhythm you choose."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {philosophyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 border border-[#E7DFCD] flex flex-col justify-between shadow-xs hover:border-gold-500/50 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-600 font-semibold block mb-4">
                    Phase {pillar.num}
                  </span>
                  <h3 className="font-serif text-3xl text-forest-950 font-normal tracking-wide mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-serif italic text-gold-700 text-sm mb-5">
                    {pillar.subtitle}
                  </p>
                  <div className="w-8 h-0.5 bg-gold-600/40 mb-6" />
                  <p className="font-ui text-sm text-forest-900/80 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. ART & VISUAL SOUL */}
      <Section spacing="xl" variant="white" className="border-b border-[#E7DFCD]">
        <Container size="default">
          <div className="max-w-3xl mb-12">
            <OverlineBadge dotColor="gold" className="mb-3">
              THE PROPERTY'S CURATION
            </OverlineBadge>
            <h2 className="font-serif text-3xl sm:text-5xl text-forest-950 font-normal leading-tight mb-4">
              Paintings, Photography & Mountain Art
            </h2>
            <div className="w-12 h-0.5 bg-gold-600 mb-6" />
            <p className="font-ui text-base text-forest-900/80 leading-relaxed font-light">
              Morni Singh’s was curated with an eye for artistic quietude. The villa is not merely decorated; it is infused with regional paintings, handcrafted wooden artifacts, and evocative hill photography that honor the natural heritage of the Shivaliks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artAndDetailItems.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col border border-[#E7DFCD] bg-[#FAF8F5] overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-forest-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.98]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 text-forest-950 text-[10px] font-mono tracking-widest uppercase font-semibold border border-[#E7DFCD]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-forest-950 mb-3 font-normal">
                      {item.title}
                    </h3>
                    <p className="font-ui text-xs sm:text-sm text-forest-900/75 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. HOSPITALITY DESIGNED AROUND WARMTH & COMFORT */}
      <Section spacing="xl" variant="warm" className="border-b border-[#E7DFCD]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative border border-[#E7DFCD] p-2 bg-white shadow-sm">
                <img
                  src="/images/morni/56973.webp"
                  alt="Morni Singh's Villa Living and Hearth"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <OverlineBadge dotColor="gold" className="mb-3">
                GENUINE CARE
              </OverlineBadge>
              <h2 className="font-serif text-3xl sm:text-5xl text-forest-950 font-normal leading-tight mb-6">
                Hospitality As It <br />
                <span className="italic font-light">Ought To Be.</span>
              </h2>
              <div className="w-12 h-0.5 bg-gold-600 mb-6" />

              <div className="space-y-6 text-sm sm:text-base font-ui text-forest-900/80 font-light leading-relaxed">
                <p>
                  There are no automated check-in kiosks or aloof service desks here. From the moment you arrive along the winding mountain road, our dedicated resident caretaker welcomes you with fresh local refreshments and personal attention.
                </p>
                <p>
                  Whether it is preparing hot tea on the lawn, setting up the evening barbecue grill, or lighting a crackling bonfire as the mountain breeze turns crisp, the hospitality at Morni Singh's is quiet, respectful of your privacy, and unfailingly warm.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#E7DFCD]">
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="text-xs uppercase tracking-wider text-forest-950 font-medium">Bonfires & Starry Nights</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="text-xs uppercase tracking-wider text-forest-950 font-medium">Home-Style Hill Cooking</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="text-xs uppercase tracking-wider text-forest-950 font-medium">100% Private Grounds</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="text-xs uppercase tracking-wider text-forest-950 font-medium">Pet-Friendly Sanctuary</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. SUBTLE CREDIBILITY SECTION: PRATHAM HOSPITALITY SERVICES */}
      <Section spacing="lg" variant="white" className="border-b border-[#E7DFCD]">
        <Container size="narrow">
          <div className="p-8 sm:p-12 border border-[#E7DFCD] bg-[#FAF8F5] text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-700 mb-4">
              <Award className="w-6 h-6" />
            </div>

            <OverlineBadge dotColor="gold" className="mb-2">
              STEWARDSHIP & TRUST
            </OverlineBadge>

            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal mb-4">
              Backed by Pratham Hospitality Services
            </h3>

            <p className="font-ui text-sm sm:text-base text-forest-900/80 leading-relaxed font-light max-w-xl mx-auto mb-6">
              Morni Singh’s operates with the quiet credibility and operational standards of <strong>Pratham Hospitality Services Pvt. Ltd. (PHS)</strong>—a dedicated hospitality organization established in 2001 in New Delhi.
            </p>

            <p className="font-ui text-xs sm:text-sm text-forest-900/70 leading-relaxed font-light max-w-lg mx-auto">
              From historic restoration retreats like Pachewar Fort to boutique mountain homestays, PHS guarantees that your private retreat is supported by rigorous hygiene, verified safety protocols, and enduring hospitality values.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. FINAL BOOKING CTA */}
      <Section spacing="xl" variant="pine" className="relative overflow-hidden text-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-forest-800/40 via-[#14281E] to-[#14281E] pointer-events-none" />

        <Container size="default" className="relative z-10">
          <OverlineBadge dotColor="gold" className="mb-4 text-gold-400">
            A HOME AWAY FROM HOME
          </OverlineBadge>

          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight mb-6 max-w-3xl mx-auto">
            Your Mountain Home Is Waiting in the Shivalik Hills.
          </h2>

          <p className="font-ui text-base sm:text-lg text-parchment-200/90 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Reservations are for the entire private 2BHK residence. We accommodate up to 6 guests at a time to ensure total privacy and tranquil seclusion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book">
              <Button variant="primary" size="lg" className="bg-white text-forest-950 hover:bg-gold-400 hover:text-forest-950 border-white">
                Book Your Stay
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/60 hover:bg-white/10"
              href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                "Hello Morni Singh's team! I have read your story and would like to enquire about staying at the 2BHK Villa."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageSquare className="w-4 h-4 text-gold-400" />}
            >
              WhatsApp Concierge
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;
