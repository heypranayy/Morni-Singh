/**
 * MORNI SINGH'S — REAL ASSET PHOTOGRAPHY REGISTRY
 * 
 * High-resolution authentic property photographs captured on site in Bhoj Darara, Morni Hills (1,220m).
 * Every image is semantically categorized with rich descriptions, room specifications, and metadata.
 */

export interface RealPhotoAsset {
  id: string;
  filename: string;
  src: string;
  title: string;
  subtitle: string;
  caption: string;
  category: "PROPERTY" | "VILLA" | "ROOMS" | "VIEWS" | "DETAILS" | "EXPERIENCES" | "MORNI HILLS";
  tags: readonly string[];
  aspectRatio: "16/9" | "4/3" | "3/2" | "1/1" | "4/5" | "21/9";
  colSpan?: "col-span-1" | "col-span-2";
  featuredInHero?: boolean;
  featuredInStory?: boolean;
  location: string;
}

export const REAL_ASSETS = {
  // 1. LIVING & LOUNGE
  LIVING_LOUNGE_STONE: {
    id: "img-56931",
    filename: "56931.png",
    src: "/images/morni/56931.webp",
    title: "Artistic Living Room & Stone Hearth",
    subtitle: "Warm Mountain Lounge with Curated Fine Art",
    caption: "Spacious central living lounge featuring an authentic stone feature wall, plush deep-cushioned sectional seating, and warm artisanal lighting.",
    category: "VILLA",
    tags: ["Living Room", "Stone Wall", "Art Gallery", "Lounge"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInHero: true,
    featuredInStory: true,
    location: "Main Villa Lounge"
  },

  // 2. DINING & CHEF
  DINING_TABLE_AMBER: {
    id: "img-56960",
    filename: "56960.png",
    src: "/images/morni/56960.webp",
    title: "Handcrafted Wood Dining Chamber",
    subtitle: "Intimate Dinners in Warm Ambient Light",
    caption: "Solid timber dining table and handcrafted chairs, curated for family feasts, morning breakfast spreads, and evening wine conversations.",
    category: "VILLA",
    tags: ["Dining", "Handcrafted Wood", "Family Gatherings"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Ground Floor Dining Room"
  },
  DINING_HERITAGE_SET: {
    id: "img-57052",
    filename: "57052.png",
    src: "/images/morni/57052.webp",
    title: "Heritage Dining Setup & Tableware",
    subtitle: "Artisanal Table Appointments",
    caption: "Complete formal dining layout with ceramic dinnerware and mountain hospitality touches.",
    category: "VILLA",
    tags: ["Dining", "Interior", "Tableware"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Dining Chamber"
  },
  DINING_CANDLELIGHT_FINE: {
    id: "img-57056",
    filename: "57056.png",
    src: "/images/morni/57056.webp",
    title: "Candlelight Dinner & Wine Service",
    subtitle: "Bespoke Evening Fine Dining",
    caption: "Elegant table setting with crisp folded linen napkins, wine glasses, ambient candles, and bespoke seasonal cuisine.",
    category: "EXPERIENCES",
    tags: ["Fine Dining", "Candlelight", "Wine & Dine", "Romantic"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    featuredInStory: true,
    location: "Private Dining Table"
  },
  CHEF_PRIVATE_KITCHEN: {
    id: "img-57055",
    filename: "57055.png",
    src: "/images/morni/57055.webp",
    title: "Private Chef & Farm-to-Table Kitchen",
    subtitle: "Culinary Craft with Fresh Shivalik Produce",
    caption: "Our professional in-house chef preparing bespoke hot mountain delicacies and farm-fresh organic meals for your group.",
    category: "EXPERIENCES",
    tags: ["Private Chef", "Gourmet Kitchen", "Culinary Craft"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    featuredInStory: true,
    location: "Villa Kitchen"
  },

  // 3. BEDROOMS & SUITES
  BEDROOM_TWIN_ORANGE: {
    id: "img-56969",
    filename: "56969.png",
    src: "/images/morni/56969.webp",
    title: "Deluxe Twin Suite with Artistry",
    subtitle: "Two Single Beds with Warm Amber Throws",
    caption: "Deluxe twin bedroom with custom twin beds, vibrant hand-woven orange throws, original wall art, and ambient bedside sconces.",
    category: "ROOMS",
    tags: ["Twin Bedroom", "Handmade Art", "Linens"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Upper Suite Level"
  },
  BEDROOM_MASTER_KING: {
    id: "img-57010",
    filename: "57010.png",
    src: "/images/morni/57010.webp",
    title: "Master Valley King Suite",
    subtitle: "Grand Solid Wood Headboard & Mountain Light",
    caption: "The pinnacle master chamber with a custom-carved wooden headboard, plush king mattress, premium pillows, and wide mountain windows.",
    category: "ROOMS",
    tags: ["Master Suite", "King Bed", "Solid Wood", "Valley Outlook"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInHero: true,
    featuredInStory: true,
    location: "Master Bedroom Suite"
  },
  BEDROOM_GARDEN_VIEW: {
    id: "img-57054",
    filename: "57054.png",
    src: "/images/morni/57054.webp",
    title: "Garden View Double Suite",
    subtitle: "Crisp White Linens & Forest Windows",
    caption: "Sunlit double bedroom overlooking the private pine garden, dressed in pristine white hotel linens and warm terracotta accents.",
    category: "ROOMS",
    tags: ["Double Bedroom", "Garden Vista", "Restful Silence"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    featuredInStory: true,
    location: "Garden Wing"
  },
  BEDROOM_TWIN_WARM: {
    id: "img-57066",
    filename: "57066.png",
    src: "/images/morni/57066.webp",
    title: "Guest Bedroom with Ambient Sconces",
    subtitle: "Two Single Beds with Earth-Tone Throws",
    caption: "Quiet guest bedroom tailored for siblings, friends, or extended family with warm sconce lighting and hypoallergenic bedding.",
    category: "ROOMS",
    tags: ["Guest Bedroom", "Warm Lighting", "Family Friendly"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "First Floor Suite"
  },

  // 4. SCENIC VIEWS & BALCONIES
  VIEW_PANORAMA_BOUGAINVILLEA: {
    id: "img-56971",
    filename: "56971.png",
    src: "/images/morni/56971.webp",
    title: "1,220m Shivalik Valley Panorama",
    subtitle: "Rolling Green Ridges Framed by Vibrant Pink Bougainvillea",
    caption: "Breathtaking panoramic horizon from the private estate terrace, looking across miles of unbroken pine valleys under endless blue skies.",
    category: "VIEWS",
    tags: ["Panoramic Vista", "Bougainvillea", "Mountain Horizon", "1220m Elevation"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInHero: true,
    featuredInStory: true,
    location: "Upper Observation Terrace"
  },
  VIEW_TERRACE_RIDGE: {
    id: "img-57012",
    filename: "57012.png",
    src: "/images/morni/57012.webp",
    title: "Terrace Ridge & Floral Pergola",
    subtitle: "Elevated View Over Shivalik Slopes",
    caption: "The villa's scenic terrace perimeter adorned with cascading magenta flowers overlooking the dramatic emerald peaks of Morni.",
    category: "VIEWS",
    tags: ["Terrace", "Ridge View", "Wild Flowers", "Shivalik Peaks"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Terrace Walkway"
  },
  VIEW_BALCONY_CANOPY: {
    id: "img-57047",
    filename: "57047.png",
    src: "/images/morni/57047.webp",
    title: "Bougainvillea Veranda Perch",
    subtitle: "Morning Chai with Valley Mist Below",
    caption: "Intimate morning sit-out framed by flowering bougainvillea vines, offering unhurried vantage points as mist clears over the mountain valleys.",
    category: "VIEWS",
    tags: ["Veranda", "Morning Tea", "Valley Mist", "Quiet Reflection"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInStory: true,
    location: "Private Balcony"
  },
  VIEW_SUNSET_LAKE: {
    id: "img-57070",
    filename: "57070.png",
    src: "/images/morni/57070.webp",
    title: "Golden Hour Over Tikkar Taal & Hills",
    subtitle: "Spectacular Sunset Silhouettes & Mountain Lakes",
    caption: "The magical golden hour casting deep orange reflections across the serene waters and mountain ridges surrounding Morni Hills.",
    category: "MORNI HILLS",
    tags: ["Golden Hour", "Tikkar Taal", "Lake Vista", "Sunset"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInHero: true,
    featuredInStory: true,
    location: "Morni Hills Expanse"
  },
  VIEW_TWILIGHT_RIDGE: {
    id: "img-57071",
    filename: "57071.png",
    src: "/images/morni/57071.webp",
    title: "Dusk Silhouette & Magenta Petals",
    subtitle: "Transition into Star-Filled Mountain Night",
    caption: "Close-up floral silhouette against the indigo and amber twilight sky as the cool mountain night air settles in.",
    category: "VIEWS",
    tags: ["Twilight", "Dusk", "Macro Horizon", "Nightfall"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    featuredInHero: true,
    location: "Sunset Terrace Deck"
  },

  // 5. EXTERIOR, COURTYARDS & GROUNDS
  EXTERIOR_COURTYARD_SEATING: {
    id: "img-56973",
    filename: "56973.png",
    src: "/images/morni/56973.webp",
    title: "White-Washed Villa Courtyard & Veranda",
    subtitle: "Classic Shivalik Architecture with Green Railings",
    caption: "Private villa courtyard with pristine white masonry, emerald green ironwork railings, potted pines, and sheltered outdoor chairs.",
    category: "PROPERTY",
    tags: ["Villa Exterior", "Courtyard", "Shivalik Style", "Veranda"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    featuredInStory: true,
    location: "Main Residence Entry"
  },
  EXTERIOR_COURTYARD_FOUNTAIN: {
    id: "img-56974",
    filename: "56974.png",
    src: "/images/morni/56974.webp",
    title: "Water Fountain & Stone Courtyard",
    subtitle: "Tranquil Water Soundscapes Amidst Lush Foliage",
    caption: "Central ornamental water fountain surrounded by flagstone pavers, lush green shrubs, and peaceful shaded sitting corners.",
    category: "PROPERTY",
    tags: ["Fountain", "Stone Courtyard", "Water Feature", "Peaceful"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInHero: true,
    featuredInStory: true,
    location: "Central Courtyard"
  },
  EXTERIOR_LAWN_GROUNDS: {
    id: "img-57001",
    filename: "57001.png",
    src: "/images/morni/57001.webp",
    title: "Private Mountain Lawn & Tree Canopy",
    subtitle: "Spacious Enclosed Grounds for Relaxation & Pets",
    caption: "Expansive green grass lawns bordered by tall pine trees, perimeter security fencing, and mountain flowerbeds.",
    category: "PROPERTY",
    tags: ["Private Lawn", "Pet Friendly", "Pine Canopy", "Lush Grass"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Estate Gardens"
  },
  EXTERIOR_LAWN_SUNSET: {
    id: "img-57011",
    filename: "57011.png",
    src: "/images/morni/57011.webp",
    title: "Sunset Glow Over Private Estate Grounds",
    subtitle: "Golden Light Bathing the Rolling Hillside",
    caption: "The full expanse of the property at golden hour, capturing the warmth of the sun setting behind pine-covered ridges.",
    category: "PROPERTY",
    tags: ["Sunset", "Manicured Grounds", "Golden Hour", "Expansive"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInHero: true,
    location: "Upper Garden Grounds"
  },
  EXTERIOR_GARDEN_PATH: {
    id: "img-57028",
    filename: "57028.png",
    src: "/images/morni/57028.webp",
    title: "Paved Garden Pathway & Hanging Planters",
    subtitle: "Connecting Living Chambers to Nature",
    caption: "Stone-paved path running alongside the white-washed residence, shaded by green overhanging branches and decorative planters.",
    category: "PROPERTY",
    tags: ["Garden Path", "Flagstone", "Nature Walk"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Side Garden Pathway"
  },
  EXTERIOR_WHITE_STAIRCASE: {
    id: "img-57029",
    filename: "57029.png",
    src: "/images/morni/57029.webp",
    title: "Outdoor Architectural Staircase",
    subtitle: "Ascending to the Scenic Rooftop Deck",
    caption: "Graceful outdoor stone staircase with emerald railings, leading guests up to the panoramic observation deck.",
    category: "PROPERTY",
    tags: ["Architecture", "Staircase", "Rooftop Access"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    location: "Deck Stairway"
  },

  // 6. OUTDOOR EXPERIENCES & DINING
  OUTDOOR_PATIO_DINING: {
    id: "img-57014",
    filename: "57014.png",
    src: "/images/morni/57014.webp",
    title: "Al-Fresco Umbrella Dining on the Lawn",
    subtitle: "Breakfast & Barbecue in the Fresh Mountain Air",
    caption: "Outdoor metal dining furniture set with large garden umbrella on the flagstone patio, surrounded by bougainvillea blossoms.",
    category: "EXPERIENCES",
    tags: ["Al-Fresco Dining", "Garden Patio", "Barbecue Setup", "Mountain Air"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInStory: true,
    location: "Garden Patio Deck"
  },
  EVENING_PATIO_TWILIGHT: {
    id: "img-57058",
    filename: "57058.png",
    src: "/images/morni/57058.webp",
    title: "Twilight Garden Lounge & Fairy Lights",
    subtitle: "Magical Mountain Evenings Under the Stars",
    caption: "The outdoor patio illuminated at dusk with warm lantern glows, pink flowers in soft focus, and quiet night breezes.",
    category: "EXPERIENCES",
    tags: ["Evening Ambience", "Bonfire Deck", "Fairy Lights", "Stargazing"],
    aspectRatio: "16/9",
    colSpan: "col-span-2",
    featuredInHero: true,
    featuredInStory: true,
    location: "Evening Lounge Patio"
  },
  CULTURE_SHRINE_TEMPLE: {
    id: "img-57006",
    filename: "57006.png",
    src: "/images/morni/57006.webp",
    title: "Historic Hillside Shrine at Twilight",
    subtitle: "Ancient Spiritual Heritage of Morni Hamlets",
    caption: "Centuries-old stone shrine with red-tiled roof glowing warmly at twilight, reflecting the deep heritage of the Shivalik hill clans.",
    category: "MORNI HILLS",
    tags: ["Temple", "Historic Shrine", "Culture", "Twilight Heritage"],
    aspectRatio: "4/3",
    colSpan: "col-span-1",
    featuredInStory: true,
    location: "Bhoj Darara Village"
  }
} as const;

export const ALL_REAL_PHOTOS: RealPhotoAsset[] = Object.values(REAL_ASSETS);

export const HERO_CAROUSEL_PHOTOS: RealPhotoAsset[] = [
  REAL_ASSETS.VIEW_PANORAMA_BOUGAINVILLEA,
  REAL_ASSETS.VIEW_SUNSET_LAKE,
  REAL_ASSETS.EXTERIOR_COURTYARD_FOUNTAIN,
  REAL_ASSETS.LIVING_LOUNGE_STONE,
  REAL_ASSETS.BEDROOM_MASTER_KING,
  REAL_ASSETS.EVENING_PATIO_TWILIGHT
];

export const VILLA_HIGHLIGHT_PHOTOS: RealPhotoAsset[] = [
  REAL_ASSETS.EXTERIOR_COURTYARD_SEATING,
  REAL_ASSETS.LIVING_LOUNGE_STONE,
  REAL_ASSETS.BEDROOM_MASTER_KING,
  REAL_ASSETS.BEDROOM_GARDEN_VIEW,
  REAL_ASSETS.BEDROOM_TWIN_ORANGE,
  REAL_ASSETS.DINING_TABLE_AMBER,
  REAL_ASSETS.VIEW_BALCONY_CANOPY,
  REAL_ASSETS.EXTERIOR_COURTYARD_FOUNTAIN,
  REAL_ASSETS.OUTDOOR_PATIO_DINING,
  REAL_ASSETS.CHEF_PRIVATE_KITCHEN
];
