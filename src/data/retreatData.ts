/**
 * MORNI SINGH'S — SINGLE CENTRAL CONTENT & DATA REPOSITORY
 * 
 * All hotel copy, specs, contact details, timings, amenities,
 * experiences, and image paths are centralized here.
 * Components read from this file without hardcoding content.
 */

export interface PropertyContact {
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
}

export interface PropertyLocation {
  village: string;
  region: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
  landmark: string;
  fullAddress: string;
  googleMapsUrl: string;
  gmbUrl?: string;
}

export interface CorporateEntity {
  companyName: string;
  brandInitials: string;
  founded: number;
  corporateOffice: string;
  website: string;
}

export interface PropertyTimings {
  checkIn: string;
  checkOut: string;
  note: string;
}

export interface PropertyRating {
  score: string;
  max: string;
  badge: string;
  highlightText: string;
}

export interface VillaSpace {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface VillaSpecs {
  type: string;
  name: string;
  subtitle: string;
  taglineCallout?: string;
  capacityPrimary: string;
  capacityExtended: string;
  bedroomsCount: number;
  bathroomsCount: number;
  totalArea: string;
  areaSqm?: number;
  areaSqft?: number;
  keyHighlights: string[];
  verifiedAmenities?: AmenityItem[];
  spaces: VillaSpace[];
}

export interface EmotionalThemeItem {
  id: string;
  theme: "REST" | "CONNECT" | "EXPLORE" | string;
  title: string;
  tagline: string;
  copy: string;
  image: string;
  highlight: string;
}

export interface AmenityItem {
  name: string;
  description: string;
  iconName: string;
}

export interface AmenityCategory {
  id: string;
  categoryName: string;
  tagline: string;
  items: AmenityItem[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  timing: string;
  image: string;
  highlights: string[];
}

export interface AttractionItem {
  id: string;
  name: string;
  category: string;
  driveTime: string;
  distance: string;
  description: string;
}

export interface DistanceItem {
  city: string;
  route: string;
  distanceKm: string;
  driveTime: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  origin: string;
  travelerType: string;
  ratingStars: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Stay & Villa" | "Food & Dining" | "Pets & Outdoor" | "Reaching Us";
}

export interface DestinationChapterItem {
  chapterNumber: string;
  chapterTag: string;
  name: string;
  subtitle: string;
  approxDrive: string;
  distance: string;
  image: string;
  editorialCopy: string;
  highlights: string[];
}

export interface ImageSlot {
  key: string;
  filename: string;
  path: string;
  title: string;
  altText: string;
}

export interface RetreatData {
  property: {
    name: string;
    tagline: string;
    subTagline: string;
    elevation: string;
    elevationMeters: number;
    category: string;
    location: PropertyLocation;
    contact: PropertyContact;
    management: CorporateEntity;
    timings: PropertyTimings;
    rating: PropertyRating;
  };
  brand: {
    vision: string;
    mission: string;
    action: string;
    passion: string;
    storyHeadline: string;
    storyIntro: string;
    storyBody: string;
    artStoryHeadline: string;
    artStoryBody: string;
  };
  villa: VillaSpecs;
  emotionalThemes: EmotionalThemeItem[];
  amenities: AmenityCategory[];
  experiences: ExperienceItem[];
  destinationChapters: DestinationChapterItem[];
  morniGreens: {
    name: string;
    tagline: string;
    philosophy: string;
    description: string;
    produce: Array<{ name: string; benefit: string }>;
  };
  nearbyAttractions: AttractionItem[];
  distances: DistanceItem[];
  reviews: ReviewItem[];
  faqs: FAQItem[];
  imageSlots: Record<string, ImageSlot>;
  navigation: {
    mainLinks: Array<{ label: string; href: string }>;
    quickLinks: Array<{ label: string; href: string }>;
  };
}

export const retreatData: RetreatData = {
  property: {
    name: "Morni Singh's",
    tagline: "Stay, Explore, Repeat!",
    subTagline: "A Serene Boutique Mountain Sanctuary in the Shivalik Hills",
    elevation: "1,220m (~4,000 ft)",
    elevationMeters: 1220,
    category: "Exclusive 2BHK Mountain Villa",
    location: {
      village: "Bhoj Darara / Bhoj Balig",
      region: "Morni Hills",
      district: "Panchkula",
      state: "Haryana",
      pincode: "134205",
      country: "India",
      landmark: "Near Government Polytechnic for Women (GPW)",
      fullAddress: "Panchkula - Badiyal Road, Bhoj Darara, Morni Hills, District Panchkula, Haryana 134205, India",
      googleMapsUrl: "https://share.google/rHgaYpskHEe7KQ09W",
      gmbUrl: "https://share.google/rHgaYpskHEe7KQ09W"
    },
    contact: {
      phone: "+91 96677 98451",
      phoneDisplay: "+91 966-779-8451",
      email: "info@prathamhospitalityservices.com",
      whatsapp: "919667798451"
    },
    management: {
      companyName: "Pratham Hospitality Services Pvt. Ltd.",
      brandInitials: "PHS",
      founded: 2001,
      corporateOffice: "8628/C-8, Vasant Kunj, New Delhi 110070",
      website: "https://prathamhospitalityservices.com"
    },
    timings: {
      checkIn: "2:00 PM (14:00)",
      checkOut: "11:00 AM (11:00)",
      note: "Early check-in and late check-out subject to prior communication and availability."
    },
    rating: {
      score: "4.6",
      max: "5.0",
      badge: "Guest Satisfaction Rating",
      highlightText: "Consistently celebrated for tranquil mountain quietude, privacy, and personal care."
    }
  },

  brand: {
    vision: "To be the most cherished homestay in the hills.",
    mission: "To provide a serene and cozy retreat filled with warmth, care and unforgettable memories.",
    action: "Strive to blend rustic charm with modern comfort for an unforgettable stay.",
    passion: "To infuse every detail of Morni Singh’s with love, care and comfort.",
    storyHeadline: "A Sanctuary Born from the Pine Ridges",
    storyIntro: "Nestled in the peaceful embrace of the Shivalik Hills, Morni Singh's is a boutique mountain haven and a proud unit of Pratham Hospitality Services Pvt. Ltd.",
    storyBody: "Located in Haryana's sole hill station and the nearest genuine mountain retreat from Delhi NCR and the Chandigarh Tricity, Morni Singh's was conceived as a self-sufficient haven. Designed for slow travel and quiet renewal, it provides an intimate escape where pine-clad horizons meet artistic interiors, crackling evening fires, and the grounding rhythm of nature.",
    artStoryHeadline: "The Art of Tranquility",
    artStoryBody: "Every room at Morni Singh's is thoughtfully adorned with curated original paintings and landscape photography. These pieces are not mere decor—they are windows to nature, history, and introspective calm, inviting guests to slow down, reflect, and find deep quietude."
  },

  villa: {
    type: "Standalone Residence",
    name: "MORNI SINGH'S 2BHK VILLA",
    subtitle: "Exclusive Private Residence · Gated Shivalik Estate",
    taglineCallout: "Designed as a home away from home.",
    capacityPrimary: "Sleeps up to 6 Guests",
    capacityExtended: "2 Bedrooms · 2 Bathrooms · Sleeps 6",
    bedroomsCount: 2,
    bathroomsCount: 2,
    totalArea: "Approximately 80 sq m / 861 sq ft",
    areaSqm: 80,
    areaSqft: 861,
    verifiedAmenities: [
      { name: "2 Private Bedrooms", description: "En-suite comfort with scenic hill and garden outlooks", iconName: "BedDouble" },
      { name: "2 Private Bathrooms", description: "Independent bathrooms equipped with hot water geysers", iconName: "Bath" },
      { name: "Sleeps up to 6", description: "Spacious layout ideal for families and intimate groups", iconName: "Users" },
      { name: "Approx. 80 sq m / 861 sq ft", description: "Generous indoor living and private outdoor expanse", iconName: "Maximize2" },
      { name: "Scenic Balcony", description: "Sunrise sit-out overlooking the Shivalik pine valley", iconName: "Sun" },
      { name: "Equipped Kitchen", description: "Self-sufficient kitchen with refrigerator & cookware", iconName: "UtensilsCrossed" },
      { name: "Outdoor Grill", description: "Dedicated outdoor barbecue setup for open-air dining", iconName: "Flame" },
      { name: "Pet-Friendly", description: "Welcoming accompanying pets with garden space", iconName: "Dog" },
      { name: "Private Garden Lawn", description: "Manicured grass perimeter for yoga and stargazing", iconName: "Trees" },
      { name: "Free Private Parking", description: "Secure on-premises vehicle parking", iconName: "Car" },
      { name: "Caretaker on Premises", description: "Attentive hospitality and check-in assistance", iconName: "UserCheck" },
      { name: "Mountain Ridge Vistas", description: "Crisp 1,220m elevation pine-clad valley horizons", iconName: "Mountain" }
    ],
    keyHighlights: [
      "2 Bedrooms & 2 Bathrooms",
      "Sleeps up to 6 Guests",
      "Approximately 80 sq m / 861 sq ft",
      "Private scenic balcony sit-out",
      "Equipped kitchen for self-cooking",
      "Outdoor barbecue & grill facility",
      "Pet-friendly private accommodation",
      "Manicured private garden & bonfire pit",
      "Free on-site private parking"
    ],
    spaces: [
      {
        id: "master-bedroom",
        name: "Master Valley King Suite",
        subtitle: "Panoramic Shivalik Views · King Bed",
        description: "A serene, light-filled master chamber with a custom solid-wood headboard, wide picture windows framing the morning mountain mist, and crisp artisanal linens.",
        features: ["King-sized bed & solid wood headboard", "Panoramic valley window", "En-suite private bathroom with geyser", "Reading bedside sconces", "Natural mountain ventilation"],
        image: "/images/morni/57010.webp"
      },
      {
        id: "garden-bedroom",
        name: "Garden View Double Suite",
        subtitle: "Direct Lawn Vista · Crisp White Linens",
        description: "A quiet restorative haven looking directly out to the pine gardens, dressed with premium white bedding and warm amber throws.",
        features: ["Double bed with premium comfort mattress", "Garden & veranda outlook", "Attached bathroom with hot water", "Reading lights & side tables", "Crisp mountain airflow"],
        image: "/images/morni/57054.webp"
      },
      {
        id: "twin-bedroom",
        name: "Deluxe Twin Suite",
        subtitle: "Artisanal Decor · Two Single Beds",
        description: "Tailored for friends, siblings, or family members, featuring two single beds with custom textiles, original wall art, and ambient lighting.",
        features: ["Two single comfort beds", "Original framed artwork", "Warm amber throws & pillows", "Private ensuite access", "Generous wardrobe space"],
        image: "/images/morni/56969.webp"
      },
      {
        id: "living-lounge",
        name: "Artistic Living Lounge",
        subtitle: "Stone Feature Wall · Plush Sectional · Curated Art",
        description: "The heart of the villa—an expansive retreat lounge boasting an authentic stone wall, deep-cushioned seating, curated fine paintings, and warm ambient lamps.",
        features: ["Plush sectional sofa seating", "Authentic stone accent wall", "Original artwork gallery", "Books & nature journals", "Warm ambient lamps & coffee table"],
        image: "/images/morni/56931.webp"
      },
      {
        id: "dining-room",
        name: "Handcrafted Dining Chamber",
        subtitle: "Solid Timber Table · Candlelight Dinners",
        description: "An elegant dining space set with solid wooden furniture, handcrafted table appointments, and warm mood lighting for celebratory feasts.",
        features: ["Solid wood dining table for 6", "Fine tableware & wine glasses", "Breakfast & dinner service setup", "Warm ceiling lighting", "Direct kitchen access"],
        image: "/images/morni/56960.webp"
      },
      {
        id: "private-chef",
        name: "Private Chef & Gourmet Kitchen",
        subtitle: "Bespoke Mountain Dining & Fresh Produce",
        description: "A fully equipped culinary haven where our in-house chef prepares customized hot meals, fresh local parathas, tandoori grills, and mountain specialties.",
        features: ["Professional chef meal service", "Fresh organic farm produce", "Complete cookware & dinnerware", "Refrigerator & tea/coffee station", "Custom guest menu preferences"],
        image: "/images/morni/57055.webp"
      },
      {
        id: "bougainvillea-balcony",
        name: "Bougainvillea Veranda & Balcony",
        subtitle: "Morning Chai Perch · 1,220m Shivalik Vistas",
        description: "An intimate shaded sit-out draped in vibrant pink bougainvillea, offering sweeping views across pine ridges as the valley mist drifts past.",
        features: ["Panoramic Shivalik ridge horizon", "Flowering bougainvillea canopy", "Outdoor wrought-iron chairs", "Morning mist sunrise outlook", "Gentle mountain breezes"],
        image: "/images/morni/57047.webp"
      },
      {
        id: "courtyard-fountain",
        name: "Courtyard Fountain & Walkways",
        subtitle: "White Stone Architecture & Shivalik Perimeters",
        description: "Graceful exterior courtyard featuring an ornamental water fountain, white-washed walls with emerald green accents, stone pavers, and lush foliage.",
        features: ["Ornamental water fountain", "Stone-paved courtyard paths", "Potted pines & flowering shrubs", "Classic white & emerald facade", "Outdoor seating perches"],
        image: "/images/morni/56974.webp"
      },
      {
        id: "lawn-veranda",
        name: "Private Lawn & Twilight Patio",
        subtitle: "Outdoor Grill · Firepit Stargazing",
        description: "Expansive private lawns and evening patio illuminated at dusk with fairy lights, perfect for barbecue feasts and stargazing around the bonfire.",
        features: ["Manicured grass lawn for pets & kids", "Outdoor barbecue & grill setup", "Evening twilight lounge lighting", "Stone firepit for bonfires", "Unpolluted starry sky views"],
        image: "/images/morni/57058.webp"
      }
    ]
  },

  emotionalThemes: [
    {
      id: "rest",
      theme: "REST",
      title: "The Quietude of Untouched Hills",
      tagline: "Restore body and mind in 1,220m mountain stillness",
      copy: "Leave behind the relentless roar of the city. At Morni Singh's, rest is visceral—waking to whistling thrushes, sipping slow morning tea on the private balcony as mist rolls through pine valleys, and falling asleep to unbroken mountain silence in linen-dressed comfort.",
      image: "/images/morni/57010.webp",
      highlight: "Pure Himalayan silence, crisp air & restorative sleep"
    },
    {
      id: "connect",
      theme: "CONNECT",
      title: "Shared Fires & Intimate Evenings",
      tagline: "Meaningful time with family, pets, and loved ones",
      copy: "With the entire 2BHK villa exclusively yours, every moment becomes unhurried. Fire up the outdoor grill, share laughter over home-cooked dinners in the artistic lounge, and gather on the private lawn under an unpolluted canopy of stars while your dog plays freely.",
      image: "/images/morni/57058.webp",
      highlight: "Exclusive private residence with no shared spaces"
    },
    {
      id: "explore",
      theme: "EXPLORE",
      title: "Pines, Lakes & Heritage Trails",
      tagline: "Discover Haryana's sole pine-clad hill station",
      copy: "Live the spirit of 'Stay, Explore, Repeat!'. Step directly from the villa into pine-scented walking trails, drive 18 minutes to the tranquil twin lakes of Tikkar Taal, ascend the 17th-century ramparts of Morni Fort, and taste the soil of our sister organic farm, Morni Singh's Greens.",
      image: "/images/morni/56971.webp",
      highlight: "Tikkar Taal (18m), Morni Fort (15m) & Organic Greens"
    }
  ],

  amenities: [
    {
      id: "comfort-living",
      categoryName: "Comfort & Living Spaces",
      tagline: "Thoughtful touches designed for genuine relaxation",
      items: [
        { name: "2 En-Suite Bedrooms", description: "Private chambers with valley & garden views", iconName: "BedDouble" },
        { name: "2 Private Bathrooms", description: "Fitted with hot water geysers and modern fixtures", iconName: "Bath" },
        { name: "Scenic Balcony & Terrace", description: "Sit-out areas with 180° ridge views", iconName: "Sun" },
        { name: "Artistic Lounge", description: "Spacious salon with original paintings and books", iconName: "Sparkles" },
        { name: "Natural Mountain Air", description: "Crisp 1,220m hill cross-ventilation and clean breezes", iconName: "Wind" }
      ]
    },
    {
      id: "kitchen-dining",
      categoryName: "Kitchen & Outdoor Cooking",
      tagline: "Self-sufficient dining with farm-fresh flavors",
      items: [
        { name: "Equipped Kitchen", description: "Cook your own meals whenever you desire", iconName: "UtensilsCrossed" },
        { name: "Refrigerator", description: "Modern food and beverage storage", iconName: "Refrigerator" },
        { name: "Outdoor Grill", description: "Dedicated barbecue setup for lawn cookouts", iconName: "Flame" },
        { name: "Caretaker Support", description: "Homestyle cooking assistance on advance request", iconName: "ChefHat" },
        { name: "Tea & Coffee Station", description: "Electric kettle with complimentary local teas", iconName: "Coffee" }
      ]
    },
    {
      id: "outdoor-nature",
      categoryName: "Outdoors & Pet Hospitality",
      tagline: "Immersive Shivalik mountain grounds",
      items: [
        { name: "Pet-Friendly Grounds", description: "Welcoming your four-legged family companions", iconName: "Dog" },
        { name: "Private Garden Lawn", description: "Manicured grass for yoga, kids, and pets", iconName: "Trees" },
        { name: "Bonfire Firepit", description: "Evening woodfires under starry hill skies", iconName: "FlameKindling" },
        { name: "Stargazing Deck", description: "Clear unpolluted night views of constellations", iconName: "MoonStar" },
        { name: "Forest Trail Access", description: "Direct walking paths into pine-clad ridges", iconName: "Compass" }
      ]
    },
    {
      id: "services-logistics",
      categoryName: "Services & Logistics",
      tagline: "Hassle-free hospitality and easy accessibility",
      items: [
        { name: "Free Private Parking", description: "Secure on-site parking for multiple vehicles", iconName: "Car" },
        { name: "Gated Estate Privacy", description: "Exclusive residence with no shared guest rooms", iconName: "ShieldCheck" },
        { name: "Resident Caretaker", description: "Attentive on-site team for comfort and check-in", iconName: "UserCheck" },
        { name: "4G/5G Cellular Reception", description: "Good cellular reception on Airtel and Jio networks", iconName: "Signal" },
        { name: "Transfer Assistance", description: "Chauffeur booking from Chandigarh on prior notice", iconName: "MapPin" }
      ]
    }
  ],

  experiences: [
    {
      id: "scenic-views",
      title: "Scenic Mountain Views",
      tagline: "Panoramic 1,220m Shivalik Horizons",
      description: "Wake to unbroken vistas of rolling green ridges, deep pine valleys, and changing cloudscapes. Whether at golden sunrise or quiet dusk, the mountain panorama is your everyday backdrop.",
      timing: "Sunrise to Twilight",
      image: "/images/morni/56971.webp",
      highlights: ["1,220m elevation", "Pine valley vistas", "Unobstructed horizon", "Golden hour light"]
    },
    {
      id: "nature-walks",
      title: "Shivalik Nature Walks",
      tagline: "Gentle paths through pine-scented slopes",
      description: "Wander along peaceful village trails right from the villa's doorstep. Soft pine needles underfoot, wild mountain thyme in the breeze, and the soothing rustle of trees create a grounding outdoor stroll.",
      timing: "Mornings & Early Evenings",
      image: "/images/morni/57028.webp",
      highlights: ["Pine needle paths", "Wild mountain herbs", "No steep terrain", "Crisp mountain air"]
    },
    {
      id: "trekking-exploration",
      title: "Foothill Trekking & Exploration",
      tagline: "Active trails across the Shivalik ridges",
      description: "For active wanderers, local foothill trails offer moderate ascents through deciduous and pine belts. Follow ancient walking tracks connecting quiet Bhoj hamlets and scenic ridge crests.",
      timing: "Cool morning hours",
      image: "/images/morni/57012.webp",
      highlights: ["Ridge crest vistas", "Foothill paths", "Hamlet trails", "Moderate exertion"]
    },
    {
      id: "birdwatching",
      title: "Himalayan Birdwatching",
      tagline: "Spot native birds in unpolluted canopies",
      description: "Morni Hills is a haven for avian life. Bring your binoculars to spot grey francolins, blue-throated barbets, Himalayan treepies, and crested serpent eagles perching in the forest branches.",
      timing: "Dawn & Early Morning",
      image: "/images/morni/57047.webp",
      highlights: ["Himalayan species", "Forest canopy calls", "Resident & seasonal birds", "Binocular perches"]
    },
    {
      id: "misty-mornings",
      title: "Misty Mountain Mornings",
      tagline: "Slow tea on the veranda as valleys awaken",
      description: "Watch low-lying cloud mist drift through the valleys, settling gently against pine trees. Sip steaming local tea from your private balcony or garden lawn in absolute stillness.",
      timing: "6:00 AM – 8:30 AM",
      image: "/images/morni/57071.webp",
      highlights: ["Floating valley mist", "Fresh brewed tea", "Dew-covered lawn", "Unbroken silence"]
    },
    {
      id: "artistic-interiors",
      title: "Artistic Interiors & Photography",
      tagline: "A home curated with original artwork and photography",
      description: "Reflecting the creative heritage of Morni Singh's, every room features carefully curated paintings and photographs. An inspiring atmosphere for writers, artists, photographers, and introspective thinkers.",
      timing: "All day sanctuary",
      image: "/images/morni/56931.webp",
      highlights: ["Curated fine paintings", "Landscape photography", "Creative reading nooks", "Warm wood styling"]
    },
    {
      id: "relaxing-hills",
      title: "Relaxing in the Hills",
      tagline: "Slow living with zero schedule or rush",
      description: "True luxury is doing nothing. Lie back on the private lawn with a book, bask in the winter sun, unwind by the evening bonfire, and let the gentle rhythm of mountain life reset your mind.",
      timing: "At your leisure",
      image: "/images/morni/57011.webp",
      highlights: ["Private sun lawn", "Evening bonfire pit", "Zero schedule pressure", "Restorative peace"]
    },
    {
      id: "local-exploration",
      title: "Nearby Local Exploration",
      tagline: "Authentic rural culture in the Morni hamlets",
      description: "Stroll into surrounding hamlets like Bhoj Darara and Bhoj Balig to witness warm village hospitality, terraced mountain fields, and traditional hillside architecture away from commercial tourism.",
      timing: "Afternoons & Evenings",
      image: "/images/morni/57006.webp",
      highlights: ["Quiet village lanes", "Terraced hillsides", "Authentic hill culture", "Warm rural hospitality"]
    }
  ],

  morniGreens: {
    name: "Morni Singh's Greens",
    tagline: "Green Legacy",
    philosophy: "A commitment to sustainable, regenerative agriculture that respects the earth, soil biodiversity, and mountain ecosystems.",
    description: "Morni Singh's Greens is the dedicated organic agricultural arm of our hospitality group in Morni Hills. Cultivated with zero chemical pesticides and pure mountain runoff, our harvest infuses every dish prepared at the retreat with authentic vitality.",
    produce: [
      { name: "Shivalik Turmeric", benefit: "Rich in curcumin, intensely aromatic and medicinal" },
      { name: "Hill Ginger", benefit: "Packed with antioxidants and warming, pungent depth" },
      { name: "Natural Garlic", benefit: "Robust, earthy flavor supporting cardiovascular health" },
      { name: "Fresh Coriander", benefit: "Handpicked daily to elevate home-cooked broths and curries" },
      { name: "Organic Chillies", benefit: "Sun-ripened for vibrant spice and authentic zest" },
      { name: "Farm Tomatoes", benefit: "Juicy, heirloom varieties bursting with natural sweetness" }
    ]
  },

  destinationChapters: [
    {
      chapterNumber: "01",
      chapterTag: "THE LAKE",
      name: "Tikkar Taal",
      subtitle: "Bada Taal & Chhota Taal",
      approxDrive: "Approx. drive: ~18 mins (subject to hill road conditions)",
      distance: "~13 km",
      image: "/images/morni/57070.webp",
      editorialCopy: "Two calm natural lakes separated by a gentle hillock, nestled amidst forested hills. A beloved destination for pedal boating, peaceful lakeside strolls, and watching sunset reflections shimmer across the water.",
      highlights: ["Twin natural lakes", "Pedal boating", "Lakeside picnics", "Sunset photography"]
    },
    {
      chapterNumber: "02",
      chapterTag: "THE FORT",
      name: "Morni Fort",
      subtitle: "17th-Century Stone Bastion",
      approxDrive: "Approx. drive: ~15 mins (subject to hill road conditions)",
      distance: "~9 km",
      image: "/images/morni-fort.webp",
      editorialCopy: "Perched high on a commanding ridge crest, this historic 17th-century fortification has stood vigil over the Shivalik hills for centuries. Reconstructed stone battlements reward visitors with 360-degree vistas across forested valleys.",
      highlights: ["Historic ramparts", "Panoramic valley overlook", "Pine ridge views", "Heritage photography"]
    },
    {
      chapterNumber: "03",
      chapterTag: "THE ADVENTURE TRAILS",
      name: "Morni Hills Adventure",
      subtitle: "Outdoor Activity Park",
      approxDrive: "Approx. drive: ~15 mins (subject to hill road conditions)",
      distance: "~11 km",
      image: "/images/adventure-park.webp",
      editorialCopy: "Set amidst open hill forest, this outdoor activity hub features zip-lining, Burma bridge rope crossings, climbing nets, and nature obstacle paths designed for energetic travelers and families with children.",
      highlights: ["Zip-line crossing", "Burma bridge", "Rope challenge courses", "Pine obstacle paths"]
    },
    {
      chapterNumber: "04",
      chapterTag: "THE SACRED SHRINE",
      name: "Chandi Mata Temple",
      subtitle: "Sacred Hilltop Sanctum",
      approxDrive: "Approx. drive: ~20 mins (subject to hill road conditions)",
      distance: "~14 km",
      image: "/images/morni/57006.webp",
      editorialCopy: "A deeply revered ancient shrine situated high on a quiet hill slope. Famed for its peaceful, contemplative spiritual aura, gentle ringing bells, and sweeping outlooks across the Shivalik foothill range.",
      highlights: ["Ancient spiritual heritage", "Panoramic hilltop serenity", "Sacred mountain atmosphere", "Quiet introspection"]
    },
    {
      chapterNumber: "05",
      chapterTag: "THE MUGHAL GARDENS",
      name: "Yadavindra Gardens, Pinjore",
      subtitle: "Historic 17th-Century Stepped Gardens",
      approxDrive: "Approx. drive: ~45 mins (subject to hill road conditions)",
      distance: "~32 km",
      image: "/images/pinjore-gardens.webp",
      editorialCopy: "An architectural marvel at the base of the hills, designed in the classical Charbagh style across stepped terraces. Features historic water channels, cool fountains, Mughal pavilions, and ancient mango orchards.",
      highlights: ["Terraced garden architecture", "Water fountains & channels", "Mughal pavilions", "Heritage stone walk"]
    },
    {
      chapterNumber: "06",
      chapterTag: "THE BOTANICAL SANCTUARY",
      name: "Cactus Garden",
      subtitle: "National Cactus and Succulent Botanical Garden, Panchkula",
      approxDrive: "Approx. drive: ~50 mins (subject to hill road conditions)",
      distance: "~34 km",
      image: "/images/cactus-garden.webp",
      editorialCopy: "Asia's largest specialized outdoor cactus and succulent garden, spread across 7 acres with over 3,500 rare species. An extraordinary landscape of desert flora located along the scenic approach in Panchkula.",
      highlights: ["3,500+ succulent species", "7-acre landscaped park", "Rare botanical bonsai", "Unique landscape photo spots"]
    },
    {
      chapterNumber: "07",
      chapterTag: "THE WILDLIFE SANCTUARY",
      name: "Bir Shikargah Wildlife Sanctuary",
      subtitle: "Protected Foothill Wilderness",
      approxDrive: "Approx. drive: ~40 mins (subject to hill road conditions)",
      distance: "~28 km",
      image: "/images/morni/56971.webp",
      editorialCopy: "A protected forest sanctuary near Pinjore and the Morni foothills, home to sambar, spotted deer, barking deer, and vital vulture conservation centers. A fascinating detour for wildlife and forest ecology enthusiasts.",
      highlights: ["Protected Shivalik forest", "Deer & wildlife habitat", "Vulture conservation center", "Flora biodiversity"]
    },
    {
      chapterNumber: "08",
      chapterTag: "THE FOOTHILL LAKE",
      name: "Sukhna Lake",
      subtitle: "Iconic Reservoir & Foothill Promenade, Chandigarh",
      approxDrive: "Approx. drive: ~1h 15m (subject to hill road conditions)",
      distance: "~45 km",
      image: "/images/sukhna-lake.webp",
      editorialCopy: "Chandigarh's beloved rain-fed reservoir at the foot of the Shivalik hills. Created in 1958 by Le Corbusier, it offers a serene 3-km walking promenade, migratory winter birds, and peaceful waters, easily visited en route.",
      highlights: ["3-km walking promenade", "Migratory winter waterfowl", "Serene waterside views", "Convenient gateway stop"]
    }
  ],

  nearbyAttractions: [
    {
      id: "tikkar-taal",
      name: "Tikkar Taal (Twin Lakes)",
      category: "Natural Lakes & Boating",
      driveTime: "Approx. drive: ~18 mins",
      distance: "13 km",
      description: "Two tranquil natural lakes (Bada Taal and Chhota Taal) separated by a gentle hillock, offering pedal boating, lakeside picnics, and sunset photography."
    },
    {
      id: "morni-fort",
      name: "Morni Fort (Harnoi Fort)",
      category: "17th-Century Heritage",
      driveTime: "Approx. drive: ~15 mins",
      distance: "9 km",
      description: "A historic stone fortress perched on a ridge crest, reconstructed to offer magnificent 360-degree panoramas across the forested Shivalik valleys."
    },
    {
      id: "adventure-park",
      name: "Morni Hills Adventure Park",
      category: "Outdoor Activities",
      driveTime: "Approx. drive: ~15 mins",
      distance: "11 km",
      description: "A recreation center with zip-lining, Burma bridge crossings, climbing nets, and nature obstacle courses for kids and active travelers."
    },
    {
      id: "chandi-mata",
      name: "Chandi Mata Temple",
      category: "Ancient Shrine",
      driveTime: "Approx. drive: ~20 mins",
      distance: "14 km",
      description: "A deeply revered ancient temple nestled high in the hills, known for peaceful spiritual vibrations and sweeping valley views."
    },
    {
      id: "pinjore-gardens",
      name: "Yadavindra Gardens (Pinjore)",
      category: "Mughal Terraced Gardens",
      driveTime: "Approx. drive: ~45 mins",
      distance: "32 km",
      description: "Famed 17th-century stepped gardens featuring historic stone pavilions, fountains, and ancient fruit orchards at the foot of the hills."
    },
    {
      id: "cactus-garden",
      name: "Cactus Garden (Panchkula)",
      category: "Botanical Garden",
      driveTime: "Approx. drive: ~50 mins",
      distance: "34 km",
      description: "Asia's largest outdoor cactus sanctuary housing over 3,500 species across 7 landscaped acres."
    },
    {
      id: "bir-shikargah",
      name: "Bir Shikargah Wildlife Sanctuary",
      category: "Protected Forest Reserve",
      driveTime: "Approx. drive: ~40 mins",
      distance: "28 km",
      description: "Shivalik foothill wildlife sanctuary and vulture conservation center home to sambar and barking deer."
    },
    {
      id: "sukhna-lake",
      name: "Sukhna Lake (Chandigarh)",
      category: "Rain-fed Lake & Promenade",
      driveTime: "Approx. drive: ~1h 15m",
      distance: "45 km",
      description: "Iconic peaceful reservoir at the foot of the Shivalik range with a scenic walking promenade."
    }
  ],

  distances: [
    { city: "Panchkula", route: "Via Panchkula - Badiyal Road", distanceKm: "35 km", driveTime: "55 mins" },
    { city: "Chandigarh (Sec 17)", route: "Via Himalayan Expressway link", distanceKm: "42 km", driveTime: "1h 15m" },
    { city: "Chandigarh Airport (IXC)", route: "Via Zirakpur - Panchkula", distanceKm: "50 km", driveTime: "1h 30m" },
    { city: "Kalka Railway Station", route: "Via Pinjore bypass", distanceKm: "40 km", driveTime: "1h 15m" },
    { city: "Delhi NCR (Gurgaon/Noida)", route: "Via NH 44 & Himalayan Expressway", distanceKm: "260 km", driveTime: "4.5 to 5 hours" }
  ],

  reviews: [
    {
      id: "rev-1",
      quote: "Morni Singh's was the exact peaceful reset our family needed. Being just over an hour from Chandigarh, it felt like finding a secret haven. The private bonfire under the clear star-filled sky was unforgettable.",
      author: "Harpreet & Simran S.",
      origin: "Chandigarh",
      travelerType: "Family Vacation",
      ratingStars: 5,
      date: "Recent Guest"
    },
    {
      id: "rev-2",
      quote: "As remote creative workers, we loved the peacefulness and the art on the walls. The kitchen had everything we needed to brew our coffee and cook light meals, and our dog had the best time running freely in the lawn.",
      author: "Aakash & Neha V.",
      origin: "Gurugram, NCR",
      travelerType: "Couple & Pet Owner",
      ratingStars: 5,
      date: "Recent Guest"
    },
    {
      id: "rev-3",
      quote: "A genuinely comfortable 2BHK villa with total privacy. The views from the morning balcony are pure therapy. The caretaker made us feel warmly welcomed without intruding on our space.",
      author: "Vikramaditya K.",
      origin: "New Delhi",
      travelerType: "Weekend Getaway",
      ratingStars: 5,
      date: "Recent Guest"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "Do we get the entire 2BHK villa exclusively to ourselves?",
      answer: "Yes, absolutely. When you reserve Morni Singh's, the entire 2BHK residence—including both bedrooms, both bathrooms, living lounge, kitchenette, and the private garden lawn—is reserved exclusively for your party.",
      category: "Stay & Villa"
    },
    {
      id: "faq-2",
      question: "What are the standard check-in and check-out times?",
      answer: "Check-in begins at 2:00 PM (14:00) and check-out is by 11:00 AM (11:00). If you require early check-in or late check-out, please let us know in advance and we will accommodate based on scheduling.",
      category: "Stay & Villa"
    },
    {
      id: "faq-3",
      question: "Can we cook our own food or are meals provided?",
      answer: "You have full flexibility! The villa features an equipped kitchenette with a refrigerator, microwave, and cookware for self-cooking. In addition, our resident caretaker can assist with homestyle cooking using fresh local ingredients, and orders can be arranged from nearby eateries.",
      category: "Food & Dining"
    },
    {
      id: "faq-4",
      question: "Is Morni Singh's pet-friendly?",
      answer: "Yes, we warmly welcome pets! The private lawn and quiet surroundings make it an ideal retreat for dogs and family pets. We only ask that owners ensure pets are attended to and that indoor furnishings are respected.",
      category: "Pets & Outdoor"
    },
    {
      id: "faq-5",
      question: "How is mobile network and Wi-Fi connectivity in the hills?",
      answer: "The retreat receives reliable 4G/5G mobile tower connectivity across major Indian networks (Airtel and Jio). While the retreat encourages a relaxing digital detox in nature, mobile hotspots allow work-from-mountain connectivity when needed.",
      category: "Stay & Villa"
    },
    {
      id: "faq-6",
      question: "What is the road condition from Chandigarh and Delhi?",
      answer: "The road is well-paved, scenic, and smooth all the way to Morni Hills via the Himalayan Expressway and Panchkula. It is suitable for all passenger cars, hatchbacks, sedans, and SUVs without difficulty.",
      category: "Reaching Us"
    }
  ],

  imageSlots: {
    hero: {
      key: "hero",
      filename: "56971.png",
      path: "/images/morni/56971.webp",
      title: "Sanctuary Panorama",
      altText: "Morni Singh's villa panoramic mountain view over the Shivalik Hills"
    },
    villaExterior: {
      key: "villaExterior",
      filename: "56973.png",
      path: "/images/morni/56973.webp",
      title: "2BHK Villa Architecture",
      altText: "Exterior architecture of Morni Singh's 2BHK private villa retreat"
    },
    livingRoom: {
      key: "livingRoom",
      filename: "56931.png",
      path: "/images/morni/56931.webp",
      title: "Artistic Living Lounge",
      altText: "Artistic living room with curated paintings and dining space"
    },
    bedroom01: {
      key: "bedroom01",
      filename: "57010.png",
      path: "/images/morni/57010.webp",
      title: "Master Valley Bedroom",
      altText: "Master bedroom suite with valley view window at Morni Singh's"
    },
    bedroom02: {
      key: "bedroom02",
      filename: "57054.png",
      path: "/images/morni/57054.webp",
      title: "Garden Suite Bedroom",
      altText: "Garden view second bedroom suite"
    },
    bathroom: {
      key: "bathroom",
      filename: "56969.png",
      path: "/images/morni/56969.webp",
      title: "Deluxe Twin Chamber",
      altText: "Artisanal twin room with custom throws"
    },
    balcony: {
      key: "balcony",
      filename: "57047.png",
      path: "/images/morni/57047.webp",
      title: "Bougainvillea Balcony",
      altText: "Morning sunrise tea balcony overlooking pine hills"
    },
    mountainView: {
      key: "mountainView",
      filename: "56971.png",
      path: "/images/morni/56971.webp",
      title: "Shivalik Ridge Panorama",
      altText: "Panoramic view of Shivalik hills and pine ridges"
    },
    garden: {
      key: "garden",
      filename: "57011.png",
      path: "/images/morni/57011.webp",
      title: "Private Retreat Lawn",
      altText: "Manicured private garden lawn for yoga and relaxation"
    },
    bonfire: {
      key: "bonfire",
      filename: "57058.png",
      path: "/images/morni/57058.webp",
      title: "Evening Twilight Patio",
      altText: "Private evening patio with outdoor seating at night"
    },
    dining: {
      key: "dining",
      filename: "57056.png",
      path: "/images/morni/57056.webp",
      title: "Fine Dining & Candlelight",
      altText: "Fresh home-cooked meals featuring Morni Greens organic produce"
    },
    gallery01: {
      key: "gallery01",
      filename: "56974.png",
      path: "/images/morni/56974.webp",
      title: "Courtyard Fountain",
      altText: "Ornamental water fountain in the stone courtyard"
    },
    gallery02: {
      key: "gallery02",
      filename: "57029.png",
      path: "/images/morni/57029.webp",
      title: "Scenic Terrace Stairway",
      altText: "White stone stairway leading to panoramic observation deck"
    },
    gallery03: {
      key: "gallery03",
      filename: "57070.png",
      path: "/images/morni/57070.webp",
      title: "Golden Hour Shivalik Sunset",
      altText: "Golden sunset over mountain lakes and ridges"
    }
  },

  navigation: {
    mainLinks: [
      { label: "The Villa", href: "/stay/villa" },
      { label: "The Stay", href: "/stay" },
      { label: "Experiences", href: "/experiences" },
      { label: "Around Morni Hills", href: "/destination" },
      { label: "Photographic Gallery", href: "/gallery" },
      { label: "About & Story", href: "/about" },
      { label: "Contact & Directions", href: "/contact" },
      { label: "Book / Enquire", href: "/book" }
    ],
    quickLinks: [
      { label: "2BHK Villa Specs", href: "/stay/villa" },
      { label: "Photographic Gallery", href: "/gallery" },
      { label: "Curated Experiences", href: "/experiences" },
      { label: "About Morni Singh's", href: "/about" },
      { label: "8 Destination Chapters", href: "/destination#around-morni-hills" },
      { label: "Contact Concierge", href: "/contact" },
      { label: "Book Your Stay", href: "/book" }
    ]
  }
};
