import React, { useState, useRef, useEffect } from "react";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import {
  Sparkles,
  Clock,
  MapPin,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VisualStory {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  location: string;
}

const STORIES: VisualStory[] = [
  {
    id: "story-1",
    time: "07:00 AM",
    title: "Misty Bougainvillea Chai",
    subtitle: "Sun rises over the 1,220m Shivalik ridge",
    description: "Sip hot ginger tea on your private veranda as cool mountain clouds weave through pine valleys and native thrushes call.",
    image: "/images/morni/57047.webp",
    tag: "Morning Stillness",
    location: "Private Balcony"
  },
  {
    id: "story-2",
    time: "10:00 AM",
    title: "Courtyard Fountain Stroll",
    subtitle: "Stone architecture amidst green foliage",
    description: "Listen to the gentle rhythm of the central water fountain as morning sunlight bathes the white masonry and potted hill pines.",
    image: "/images/morni/56974.webp",
    tag: "Estate Architecture",
    location: "Central Courtyard"
  },
  {
    id: "story-3",
    time: "01:30 PM",
    title: "Private Chef Mountain Dining",
    subtitle: "Artisanal flavours tailored to your group",
    description: "Enjoy hot handmade parathas, slow-cooked dal, and fresh organic greens harvested from our partner farm, Morni Singh's Greens.",
    image: "/images/morni/57055.webp",
    tag: "Farm to Table",
    location: "Villa Kitchen & Dining"
  },
  {
    id: "story-4",
    time: "04:30 PM",
    title: "Paved Pine Nature Walks",
    subtitle: "Fragrant pine needles & terraced gardens",
    description: "Wander along the stone garden pathway where hanging planters and mountain herbs scent the crisp afternoon breeze.",
    image: "/images/morni/57028.webp",
    tag: "Nature & Flora",
    location: "Side Garden Pathway"
  },
  {
    id: "story-5",
    time: "06:30 PM",
    title: "Golden Hour Shivalik Sunset",
    subtitle: "Deep amber reflections across mountain waters",
    description: "As the sun sinks behind the peaks, the sky ignites in crimson and gold. The perfect moment to relax with wine or evening chai.",
    image: "/images/morni/57070.webp",
    tag: "Sunset Spectacle",
    location: "Morni Hills Horizons"
  },
  {
    id: "story-6",
    time: "08:45 PM",
    title: "Twilight Fireside & Starlight",
    subtitle: "Warm lantern glow & unpolluted skies",
    description: "Gather around the garden patio illuminated by fairy lights. Fire up the barbecue grill, listen to wood crackle, and gaze at the Milky Way.",
    image: "/images/morni/57058.webp",
    tag: "Bonfire & Nightfall",
    location: "Evening Lounge Patio"
  },
  {
    id: "story-7",
    time: "10:30 PM",
    title: "Master Suite Deep Silence",
    subtitle: "Zero city noise. Restorative mountain sleep.",
    description: "Sink into linen-dressed king mattresses under warm duvets, enveloped in absolute Shivalik silence until dawn.",
    image: "/images/morni/57010.webp",
    tag: "Sanctuary Rest",
    location: "Master Valley Suite"
  }
];

export const VisualStoriesStrip: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<VisualStory | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasDragged = useRef(false);

  // Auto-scroll loop for both mobile and desktop
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const cardWidth = container.querySelector<HTMLElement>(".story-card")?.offsetWidth || 340;
      const gap = 24;
      const step = cardWidth + gap;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Track active story index based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector<HTMLElement>(".story-card")?.offsetWidth || 340;
    const idx = Math.round(container.scrollLeft / (cardWidth + 24));
    setActiveStoryIdx(Math.min(Math.max(idx, 0), STORIES.length - 1));
  };

  // Convert vertical mouse wheel into horizontal scroll when hovering over the strip
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollLeft += e.deltaY * 0.9;
    }
  };

  // Mouse Drag-to-Scroll handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    setIsAutoScrolling(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    if (Math.abs(walk) > 6) {
      hasDragged.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Manual Previous/Next Button Navigation
  const scrollPrev = () => {
    setIsAutoScrolling(false);
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector<HTMLElement>(".story-card")?.offsetWidth || 340;
    container.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
  };

  const scrollNext = () => {
    setIsAutoScrolling(false);
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector<HTMLElement>(".story-card")?.offsetWidth || 340;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 20) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  const jumpToStory = (index: number) => {
    setIsAutoScrolling(false);
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector<HTMLElement>(".story-card")?.offsetWidth || 340;
    container.scrollTo({ left: index * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      id="sensory-timeline"
      className="py-20 sm:py-28 bg-[#0d1c14] text-white relative overflow-hidden border-b border-gold-500/20"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Header with Live Scroll Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <OverlineBadge dotColor="gold" className="mb-3 text-gold-300 border-gold-500/30 bg-gold-900/20">
              SENSORY TIMELINE · 24 HOURS AT MORNI SINGH'S
            </OverlineBadge>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              A Day in Mountain Stillness
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-gold-300 font-light mt-1">
              Scroll through real moments captured across our 2BHK sanctuary
            </p>
          </div>

          {/* Interactive Navigation & Auto-Scroll Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Auto-scroll toggle pill */}
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
                isAutoScrolling
                  ? "bg-gold-500/15 border-gold-400/50 text-gold-300 shadow-[0_0_12px_rgba(245,212,133,0.3)]"
                  : "bg-white/5 border-white/20 text-white/70 hover:text-white"
              }`}
              title={isAutoScrolling ? "Pause auto-scroll" : "Start auto-scroll"}
            >
              {isAutoScrolling ? (
                <>
                  <Pause className="w-3 h-3 text-gold-400" />
                  <span>Auto-Scroll ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-white/70" />
                  <span>Auto-Scroll PAUSED</span>
                </>
              )}
            </button>

            {/* Prev / Next Action Arrows */}
            <div className="inline-flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500/20 border border-white/20 hover:border-gold-400/50 text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Scroll to previous moment"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500/20 border border-white/20 hover:border-gold-400/50 text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Scroll to next moment"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Chapter Jump Pills (01 to 07) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
          {STORIES.map((story, i) => (
            <button
              key={story.id}
              onClick={() => jumpToStory(i)}
              className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase transition-all shrink-0 cursor-pointer border ${
                activeStoryIdx === i
                  ? "bg-gold-400 text-forest-950 font-bold border-gold-400 shadow-[0_0_12px_rgba(245,212,133,0.5)]"
                  : "bg-black/30 hover:bg-white/10 text-parchment-200 border-white/10"
              }`}
            >
              0{i + 1} · {story.time}
            </button>
          ))}
        </div>

        {/* Main Scrollable Track with Drag, Touch & Wheel Support */}
        <div className="relative group/track">
          {/* Floating Left Arrow (Desktop) */}
          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 hover:bg-gold-500 hover:text-forest-950 text-white border border-gold-400/40 backdrop-blur-md items-center justify-center shadow-2xl transition-all opacity-0 group-hover/track:opacity-100 cursor-pointer"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Floating Right Arrow (Desktop) */}
          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 hover:bg-gold-500 hover:text-forest-950 text-white border border-gold-400/40 backdrop-blur-md items-center justify-center shadow-2xl transition-all opacity-0 group-hover/track:opacity-100 cursor-pointer"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={() => setIsAutoScrolling(false)}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gold-500/30 scrollbar-track-transparent snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: "pan-x" }}
          >
            {STORIES.map((story, idx) => (
              <motion.div
                key={story.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  if (!hasDragged.current) {
                    setSelectedStory(story);
                  }
                }}
                className="story-card group shrink-0 w-[290px] sm:w-[340px] snap-start bg-[#0a160f] border border-white/10 hover:border-gold-400/50 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all"
              >
                {/* Image Container with Luxury Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.03] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                  {/* Time Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-gold-300 font-semibold shadow-md">
                    <Clock className="w-3 h-3 text-gold-400" />
                    <span>{story.time}</span>
                  </div>

                  {/* Tag Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-gold-500/30 text-[10px] font-mono uppercase tracking-wider text-parchment-200 shadow-md">
                    {story.tag}
                  </div>

                  {/* Location indicator */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-parchment-200/90 font-ui font-light">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>{story.location}</span>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-400 font-medium block mb-1">
                    CHAPTER 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal group-hover:text-gold-300 transition-colors mb-2">
                    {story.title}
                  </h3>
                  <p className="text-xs text-parchment-300/80 leading-relaxed font-light line-clamp-3">
                    {story.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gold-400 font-medium">
                    <span>View Frame</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Helper Hint */}
        <div className="flex items-center justify-between text-xs text-parchment-300/60 font-mono mt-3 px-1">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            Drag, swipe, or use arrows to navigate · {activeStoryIdx + 1} / {STORIES.length}
          </span>
          <span className="hidden sm:inline">Hover/Touch pauses auto-scroll</span>
        </div>
      </Container>

      {/* Lightbox Modal for Selected Story */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-forest-950 border border-gold-500/30 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-gold-400 transition-colors border border-white/20 cursor-pointer"
                aria-label="Close story preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-400 font-bold">
                    {selectedStory.time} · {selectedStory.tag}
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-xs text-parchment-300 font-ui">
                    {selectedStory.location}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                  {selectedStory.title}
                </h3>
                <p className="font-serif italic text-base text-gold-300 mb-4">
                  "{selectedStory.subtitle}"
                </p>
                <p className="font-ui text-sm sm:text-base text-parchment-200/90 leading-relaxed font-light">
                  {selectedStory.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
