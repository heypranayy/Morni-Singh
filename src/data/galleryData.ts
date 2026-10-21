export type GalleryCategory =
  | "ALL"
  | "PROPERTY"
  | "VILLA"
  | "ROOMS"
  | "VIEWS"
  | "DETAILS"
  | "EXPERIENCES"
  | "MORNI HILLS";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, "ALL">;
  aspectRatio: "16/9" | "4/3" | "3/2" | "1/1" | "4/5" | "21/9";
  colSpan?: "col-span-1" | "col-span-2";
  location?: string;
  tag?: string;
}

export const GALLERY_CATEGORIES: Array<{ key: GalleryCategory; label: string }> = [
  { key: "ALL", label: "All Photographs" },
  { key: "PROPERTY", label: "The Estate & Grounds" },
  { key: "VILLA", label: "Living & Dining" },
  { key: "ROOMS", label: "Suites & Bedrooms" },
  { key: "VIEWS", label: "Mountain Horizons" },
  { key: "EXPERIENCES", label: "Patio & Dining" },
  { key: "MORNI HILLS", label: "Hamlets & Lakes" }
];

export const galleryItems: GalleryItem[] = [
  // 1. VIEWS & PANORAMAS
  {
    id: "view-panorama",
    src: "/images/morni/56971.webp",
    title: "1,220m Shivalik Valley Panorama",
    caption: "Sweeping view across miles of unbroken pine valleys, framed by vibrant pink bougainvillea in the mountain foreground.",
    category: "VIEWS",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Upper Observation Deck",
    tag: "Panoramic Horizon"
  },
  {
    id: "view-terrace-bougainvillea",
    src: "/images/morni/57047.webp",
    title: "Bougainvillea Veranda Perch",
    caption: "Intimate morning sit-out framed by flowering bougainvillea vines, offering unhurried vantage points as mist clears over the mountain valleys.",
    category: "VIEWS",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Private Balcony",
    tag: "Morning Chai Vista"
  },
  {
    id: "view-terrace-ridge",
    src: "/images/morni/57012.webp",
    title: "Terrace Ridge & Floral Pergola",
    caption: "The villa's scenic terrace perimeter adorned with cascading magenta flowers overlooking the dramatic emerald peaks of Morni.",
    category: "VIEWS",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Terrace Walkway",
    tag: "Ridge Outlook"
  },
  {
    id: "view-twilight-ridge",
    src: "/images/morni/57071.webp",
    title: "Dusk Horizon & Magenta Silhouette",
    caption: "Close-up floral silhouette against the indigo and amber twilight sky as the cool mountain night air settles in.",
    category: "VIEWS",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Sunset Terrace Deck",
    tag: "Twilight Atmosphere"
  },

  // 2. VILLA INTERIORS & LIVING
  {
    id: "villa-living-stone",
    src: "/images/morni/56931.webp",
    title: "Artistic Living Room & Stone Hearth",
    caption: "Spacious central living lounge featuring an authentic stone feature wall, plush deep-cushioned sectional seating, and warm artisanal lighting.",
    category: "VILLA",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Main Villa Lounge",
    tag: "Stone Architecture"
  },
  {
    id: "villa-dining-amber",
    src: "/images/morni/56960.webp",
    title: "Handcrafted Wood Dining Chamber",
    caption: "Solid timber dining table and handcrafted chairs, curated for family feasts, morning breakfast spreads, and evening wine conversations.",
    category: "VILLA",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Ground Floor Dining Room",
    tag: "Solid Wood Dining"
  },
  {
    id: "villa-dining-heritage",
    src: "/images/morni/57052.webp",
    title: "Heritage Dining Setup & Tableware",
    caption: "Complete formal dining layout with ceramic dinnerware and mountain hospitality touches.",
    category: "VILLA",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Dining Chamber",
    tag: "Hospitality"
  },
  {
    id: "villa-dining-candlelight",
    src: "/images/morni/57056.webp",
    title: "Candlelight Dinner & Wine Service",
    caption: "Elegant table setting with crisp folded linen napkins, wine glasses, ambient candles, and bespoke seasonal cuisine.",
    category: "EXPERIENCES",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Private Dining Table",
    tag: "Fine Dining"
  },
  {
    id: "villa-chef-kitchen",
    src: "/images/morni/57055.webp",
    title: "Private Chef & Farm-to-Table Kitchen",
    caption: "Our professional in-house chef preparing bespoke hot mountain delicacies and farm-fresh organic meals for your group.",
    category: "EXPERIENCES",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Villa Kitchen",
    tag: "Culinary Craft"
  },

  // 3. BEDROOMS & SUITES
  {
    id: "room-master-king",
    src: "/images/morni/57010.webp",
    title: "Master Valley King Suite",
    caption: "The pinnacle master chamber with a custom-carved wooden headboard, plush king mattress, premium pillows, and wide mountain windows.",
    category: "ROOMS",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Master Bedroom Suite",
    tag: "King Bed Luxury"
  },
  {
    id: "room-garden-double",
    src: "/images/morni/57054.webp",
    title: "Garden View Double Suite",
    caption: "Sunlit double bedroom overlooking the private pine garden, dressed in pristine white hotel linens and warm terracotta accents.",
    category: "ROOMS",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Garden Wing",
    tag: "Garden Outlook"
  },
  {
    id: "room-twin-deluxe",
    src: "/images/morni/56969.webp",
    title: "Deluxe Twin Suite with Artistry",
    caption: "Deluxe twin bedroom with custom twin beds, vibrant hand-woven orange throws, original wall art, and ambient bedside sconces.",
    category: "ROOMS",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Upper Suite Level",
    tag: "Twin Comfort"
  },
  {
    id: "room-twin-warm",
    src: "/images/morni/57066.webp",
    title: "Guest Bedroom with Ambient Sconces",
    caption: "Quiet guest bedroom tailored for siblings, friends, or extended family with warm sconce lighting and hypoallergenic bedding.",
    category: "ROOMS",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "First Floor Suite",
    tag: "Warm Ambient Decor"
  },

  // 4. PROPERTY EXTERIOR & COURTYARDS
  {
    id: "prop-courtyard-fountain",
    src: "/images/morni/56974.webp",
    title: "Water Fountain & Stone Courtyard",
    caption: "Central ornamental water fountain surrounded by flagstone pavers, lush green shrubs, and peaceful shaded sitting corners.",
    category: "PROPERTY",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Central Courtyard",
    tag: "Water Feature"
  },
  {
    id: "prop-courtyard-seating",
    src: "/images/morni/56973.webp",
    title: "White-Washed Villa Courtyard & Veranda",
    caption: "Private villa courtyard with pristine white masonry, emerald green ironwork railings, potted pines, and sheltered outdoor chairs.",
    category: "PROPERTY",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Main Residence Entry",
    tag: "Heritage Architecture"
  },
  {
    id: "prop-lawn-sunset",
    src: "/images/morni/57011.webp",
    title: "Sunset Glow Over Private Estate Grounds",
    caption: "The full expanse of the property at golden hour, capturing the warmth of the sun setting behind pine-covered ridges.",
    category: "PROPERTY",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Upper Garden Grounds",
    tag: "Golden Hour Lawn"
  },
  {
    id: "prop-lawn-trees",
    src: "/images/morni/57001.webp",
    title: "Private Mountain Lawn & Tree Canopy",
    caption: "Expansive green grass lawns bordered by tall pine trees, perimeter security fencing, and mountain flowerbeds.",
    category: "PROPERTY",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Estate Gardens",
    tag: "Enclosed Grounds"
  },
  {
    id: "prop-garden-path",
    src: "/images/morni/57028.webp",
    title: "Paved Garden Pathway & Hanging Planters",
    caption: "Stone-paved path running alongside the white-washed residence, shaded by green overhanging branches and decorative planters.",
    category: "PROPERTY",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Side Garden Pathway",
    tag: "Stone Pathway"
  },
  {
    id: "prop-stone-staircase",
    src: "/images/morni/57029.webp",
    title: "Outdoor Architectural Staircase",
    caption: "Graceful outdoor stone staircase with emerald railings, leading guests up to the panoramic observation deck.",
    category: "PROPERTY",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Deck Stairway",
    tag: "Observation Deck"
  },

  // 5. OUTDOOR EXPERIENCES & NIGHTFALL
  {
    id: "exp-patio-dining",
    src: "/images/morni/57014.webp",
    title: "Al-Fresco Umbrella Dining on the Lawn",
    caption: "Outdoor metal dining furniture set with large garden umbrella on the flagstone patio, surrounded by bougainvillea blossoms.",
    category: "EXPERIENCES",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Garden Patio Deck",
    tag: "Outdoor Dining"
  },
  {
    id: "exp-patio-twilight",
    src: "/images/morni/57058.webp",
    title: "Twilight Garden Lounge & Fairy Lights",
    caption: "The outdoor patio illuminated at dusk with warm lantern glows, pink flowers in soft focus, and quiet night breezes.",
    category: "EXPERIENCES",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Evening Lounge Patio",
    tag: "Fireside & Starlight"
  },

  // 6. MORNI HILLS DESTINATION
  {
    id: "dest-sunset-lake",
    src: "/images/morni/57070.webp",
    title: "Golden Hour Over Tikkar Taal & Hills",
    caption: "The magical golden hour casting deep orange reflections across the serene waters and mountain ridges surrounding Morni Hills.",
    category: "MORNI HILLS",
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    location: "Morni Hills Expanse",
    tag: "Tikkar Taal Lake"
  },
  {
    id: "dest-shrine-dusk",
    src: "/images/morni/57006.webp",
    title: "Historic Hillside Shrine at Twilight",
    caption: "Centuries-old stone shrine with red-tiled roof glowing warmly at twilight, reflecting the deep heritage of the Shivalik hill clans.",
    category: "MORNI HILLS",
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Bhoj Darara Village",
    tag: "Spiritual Heritage"
  }
];
