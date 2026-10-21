import os
import math
from PIL import Image, ImageDraw

output_dir = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(output_dir, exist_ok=True)

slots = [
    # Core Villa Assets
    {
        "filename": "hero.jpg",
        "title": "MORNI SINGH'S · SANCTUARY PANORAMA",
        "subtitle": "Shivalik Hills Foothills · 1,220m Elevation",
        "category": "HERO ATMOSPHERE",
        "aspect": (1920, 1080),
        "bg_top": (15, 29, 21),
        "bg_bottom": (31, 53, 40),
        "accent": (200, 155, 83),
    },
    {
        "filename": "villa-exterior.jpg",
        "title": "2BHK PRIVATE VILLA RESIDENCE",
        "subtitle": "Stone & Pine Architecture · Private Gated Grounds",
        "category": "ARCHITECTURE & GROUNDS",
        "aspect": (1200, 800),
        "bg_top": (20, 36, 28),
        "bg_bottom": (12, 24, 18),
        "accent": (200, 155, 83),
    },
    {
        "filename": "living-room.jpg",
        "title": "ARTISTIC LIVING LOUNGE",
        "subtitle": "Curated Wall Paintings · Reading Sanctuary · Fireplace Corner",
        "category": "INTERIORS & ART",
        "aspect": (1200, 800),
        "bg_top": (28, 42, 33),
        "bg_bottom": (16, 26, 20),
        "accent": (212, 163, 115),
    },
    {
        "filename": "bedroom-01.jpg",
        "title": "MASTER BEDROOM SUITE",
        "subtitle": "Valley Panoramic Window · King Bed · En-Suite Bath",
        "category": "VILLA SUITE 01",
        "aspect": (1200, 800),
        "bg_top": (24, 38, 30),
        "bg_bottom": (15, 25, 20),
        "accent": (200, 155, 83),
    },
    {
        "filename": "bedroom-02.jpg",
        "title": "GARDEN SUITE BEDROOM",
        "subtitle": "Pine View Veranda · Forest Light · Handcrafted Linens",
        "category": "VILLA SUITE 02",
        "aspect": (1200, 800),
        "bg_top": (22, 35, 28),
        "bg_bottom": (14, 22, 17),
        "accent": (200, 155, 83),
    },
    {
        "filename": "bathroom.jpg",
        "title": "PRIVATE BATHROOM RETREAT",
        "subtitle": "Geyser Hot Water · Modern Fittings · Stone Tile Accents",
        "category": "AMENITIES",
        "aspect": (1200, 800),
        "bg_top": (30, 44, 36),
        "bg_bottom": (18, 28, 22),
        "accent": (176, 137, 104),
    },
    {
        "filename": "balcony.jpg",
        "title": "MOUNTAIN SIT-OUT BALCONY",
        "subtitle": "Sunrise Tea Perch · Shivalik Mist & Forest Horizon",
        "category": "OUTDOOR LIVING",
        "aspect": (1200, 800),
        "bg_top": (18, 32, 24),
        "bg_bottom": (26, 48, 36),
        "accent": (200, 155, 83),
    },
    {
        "filename": "mountain-view.jpg",
        "title": "SHIVALIK RIDGE PANORAMA",
        "subtitle": "Golden Hour Over Pine Forests · 30.70° N, 77.02° E",
        "category": "NATURAL SURROUNDINGS",
        "aspect": (1200, 800),
        "bg_top": (16, 28, 22),
        "bg_bottom": (35, 60, 45),
        "accent": (223, 183, 112),
    },
    {
        "filename": "garden.jpg",
        "title": "PRIVATE RETREAT LAWN",
        "subtitle": "Lush Manicured Grass · Yoga & Stargazing Grounds",
        "category": "ESTATE GROUNDS",
        "aspect": (1200, 800),
        "bg_top": (20, 36, 27),
        "bg_bottom": (28, 50, 38),
        "accent": (200, 155, 83),
    },
    {
        "filename": "bonfire.jpg",
        "title": "EVENING BONFIRE PIT & BBQ",
        "subtitle": "Crackling Mountain Fires · Starry Night Skies",
        "category": "SIGNATURE EXPERIENCE",
        "aspect": (1200, 800),
        "bg_top": (15, 20, 18),
        "bg_bottom": (45, 25, 18),
        "accent": (194, 99, 62),
    },
    {
        "filename": "dining.jpg",
        "title": "FARM-TO-TABLE DINING",
        "subtitle": "Fresh Mountain Produce · Morni Greens Organic Spices",
        "category": "CULINARY & FARM",
        "aspect": (1200, 800),
        "bg_top": (25, 38, 30),
        "bg_bottom": (40, 30, 20),
        "accent": (200, 155, 83),
    },
    {
        "filename": "gallery-01.jpg",
        "title": "MISTY MORNING VERANDA",
        "subtitle": "Quiet Mountain Solitude · Bhoj Darara Hamlet",
        "category": "CURATED GALLERY 01",
        "aspect": (1200, 800),
        "bg_top": (18, 30, 24),
        "bg_bottom": (28, 46, 36),
        "accent": (200, 155, 83),
    },
    {
        "filename": "gallery-02.jpg",
        "title": "PINE FOREST TRAIL ACCESS",
        "subtitle": "Nature Walking Paths Leading to Tikkar Taal Foothills",
        "category": "CURATED GALLERY 02",
        "aspect": (1200, 800),
        "bg_top": (14, 26, 20),
        "bg_bottom": (25, 45, 34),
        "accent": (200, 155, 83),
    },
    {
        "filename": "gallery-03.jpg",
        "title": "STARRY NIGHTS OVER MORNI",
        "subtitle": "Zero Light Pollution · Clear Constellations & Milky Way",
        "category": "CURATED GALLERY 03",
        "aspect": (1200, 800),
        "bg_top": (10, 18, 15),
        "bg_bottom": (18, 30, 25),
        "accent": (200, 155, 83),
    },

    # Destination Attractions Slots (Around Morni Hills)
    {
        "filename": "tikkar-taal.jpg",
        "title": "TIKKAR TAAL · TWIN NATURAL LAKES",
        "subtitle": "Bada Taal & Chhota Taal · Pedal Boating & Hillside Shorelines",
        "category": "01 — THE TWIN LAKES",
        "aspect": (1600, 1000),
        "bg_top": (14, 32, 38),       # Deep lake teal
        "bg_bottom": (24, 52, 45),
        "accent": (200, 155, 83),
    },
    {
        "filename": "morni-fort.jpg",
        "title": "MORNI FORT · 17TH-CENTURY STONE FORTRESS",
        "subtitle": "Ridge Bastion Overlooking Pine-Clad Foothills & Valleys",
        "category": "02 — THE HILL FORTRESS",
        "aspect": (1600, 1000),
        "bg_top": (32, 30, 24),       # Earth stone ochre
        "bg_bottom": (18, 24, 20),
        "accent": (212, 163, 115),
    },
    {
        "filename": "adventure-park.jpg",
        "title": "MORNI HILLS ADVENTURE PARK",
        "subtitle": "Zipline · Burma Bridge · Canopy Walks · Shivalik Pine Trails",
        "category": "03 — THE ADVENTURE TRAILS",
        "aspect": (1600, 1000),
        "bg_top": (22, 40, 28),
        "bg_bottom": (15, 28, 20),
        "accent": (194, 99, 62),
    },
    {
        "filename": "chandi-mata.jpg",
        "title": "CHANDI MATA TEMPLE",
        "subtitle": "Ancient Hilltop Shrine · Sacred Peace & Valley Horizons",
        "category": "04 — THE ANCIENT SHRINE",
        "aspect": (1600, 1000),
        "bg_top": (36, 26, 20),       # Terracotta temple tones
        "bg_bottom": (20, 22, 18),
        "accent": (223, 183, 112),
    },
    {
        "filename": "pinjore-gardens.jpg",
        "title": "YADAVINDRA GARDENS, PINJORE",
        "subtitle": "17th-Century Mughal Stepped Terraces, Waterways & Pavilions",
        "category": "05 — THE MUGHAL TERRACES",
        "aspect": (1600, 1000),
        "bg_top": (20, 34, 30),
        "bg_bottom": (15, 22, 18),
        "accent": (200, 155, 83),
    },
    {
        "filename": "cactus-garden.jpg",
        "title": "NATIONAL CACTUS & SUCCULENT BOTANICAL GARDEN",
        "subtitle": "Asia's Largest Succulent Oasis · Panchkula Foothills",
        "category": "06 — THE BOTANICAL SANCTUARY",
        "aspect": (1600, 1000),
        "bg_top": (25, 42, 25),
        "bg_bottom": (18, 30, 20),
        "accent": (200, 155, 83),
    },
    {
        "filename": "wildlife-sanctuary.jpg",
        "title": "BIR SHIKARGAH WILDLIFE SANCTUARY",
        "subtitle": "Protected Forest Wilderness · Vulture Conservation · Wildlife Trails",
        "category": "07 — THE FOREST RESERVE",
        "aspect": (1600, 1000),
        "bg_top": (16, 32, 22),
        "bg_bottom": (12, 22, 15),
        "accent": (212, 163, 115),
    },
    {
        "filename": "sukhna-lake.jpg",
        "title": "SUKHNA LAKE, CHANDIGARH",
        "subtitle": "Iconic Rain-Fed Foothill Reservoir & Promenade",
        "category": "08 — THE RAIN-FED LAKE",
        "aspect": (1600, 1000),
        "bg_top": (18, 35, 42),
        "bg_bottom": (15, 24, 22),
        "accent": (200, 155, 83),
    },

    # Supported Experience Slots
    {
        "filename": "nature-walks.jpg",
        "title": "NATURE WALKS IN SHIVALIK PINES",
        "subtitle": "Soft Pine-Needle Paths & Wild Forest Herbs",
        "category": "EXPERIENCE",
        "aspect": (1200, 800),
        "bg_top": (18, 36, 26),
        "bg_bottom": (14, 25, 18),
        "accent": (200, 155, 83),
    },
    {
        "filename": "birdwatching.jpg",
        "title": "HIMALAYAN BIRDWATCHING",
        "subtitle": "Grey Francolins, Barbets, Treepies & Mountain Eagles",
        "category": "EXPERIENCE",
        "aspect": (1200, 800),
        "bg_top": (22, 38, 32),
        "bg_bottom": (16, 26, 22),
        "accent": (200, 155, 83),
    },
    {
        "filename": "misty-mornings.jpg",
        "title": "MISTY MOUNTAIN MORNINGS",
        "subtitle": "Slow Tea on the Veranda While Valleys Awaken",
        "category": "EXPERIENCE",
        "aspect": (1200, 800),
        "bg_top": (26, 38, 35),
        "bg_bottom": (18, 28, 25),
        "accent": (200, 155, 83),
    },
    {
        "filename": "artistic-interiors.jpg",
        "title": "CURATED ART & PHOTOGRAPHY",
        "subtitle": "Introspective Wall Artworks & Handcrafted Mountain Charm",
        "category": "EXPERIENCE",
        "aspect": (1200, 800),
        "bg_top": (28, 36, 30),
        "bg_bottom": (18, 24, 20),
        "accent": (212, 163, 115),
    },
]

def draw_placeholder(slot):
    width, height = slot["aspect"]
    img = Image.new("RGB", (width, height), slot["bg_top"])
    draw = ImageDraw.Draw(img)

    # 1. Subtle vertical gradient
    for y in range(height):
        factor = y / height
        r = int(slot["bg_top"][0] + (slot["bg_bottom"][0] - slot["bg_top"][0]) * factor)
        g = int(slot["bg_top"][1] + (slot["bg_bottom"][1] - slot["bg_top"][1]) * factor)
        b = int(slot["bg_top"][2] + (slot["bg_bottom"][2] - slot["bg_top"][2]) * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # 2. Mountain contour silhouettes
    ridge_points = []
    base_y = int(height * 0.72)
    step = width // 60
    for i in range(0, width + step, step):
        nx = i / width
        elevation = math.sin(nx * 7.5) * (height * 0.08) + math.cos(nx * 15.0) * (height * 0.04)
        ridge_points.append((i, base_y - int(elevation)))
    ridge_points.append((width, height))
    ridge_points.append((0, height))
    mountain_color = (
        max(0, slot["bg_bottom"][0] - 8),
        max(0, slot["bg_bottom"][1] - 8),
        max(0, slot["bg_bottom"][2] - 8),
    )
    draw.polygon(ridge_points, fill=mountain_color)

    ridge_points2 = []
    base_y2 = int(height * 0.82)
    for i in range(0, width + step, step):
        nx = i / width
        elevation = math.cos(nx * 9.0) * (height * 0.05) + math.sin(nx * 12.0) * (height * 0.03)
        ridge_points2.append((i, base_y2 - int(elevation)))
    ridge_points2.append((width, height))
    ridge_points2.append((0, height))
    mountain_color2 = (
        max(0, slot["bg_bottom"][0] - 14),
        max(0, slot["bg_bottom"][1] - 14),
        max(0, slot["bg_bottom"][2] - 14),
    )
    draw.polygon(ridge_points2, fill=mountain_color2)

    # 3. Geometric architectural borders & corner accents
    margin = int(min(width, height) * 0.05)
    draw.rectangle(
        [(margin, margin), (width - margin, height - margin)],
        outline=(slot["accent"][0], slot["accent"][1], slot["accent"][2]),
        width=1,
    )
    notch = 16
    draw.line([(margin - 4, margin), (margin + notch, margin)], fill=slot["accent"], width=2)
    draw.line([(margin, margin - 4), (margin, margin + notch)], fill=slot["accent"], width=2)
    draw.line([(width - margin - notch, margin), (width - margin + 4, margin)], fill=slot["accent"], width=2)
    draw.line([(width - margin, margin - 4), (width - margin, margin + notch)], fill=slot["accent"], width=2)
    draw.line([(margin - 4, height - margin), (margin + notch, height - margin)], fill=slot["accent"], width=2)
    draw.line([(margin, height - margin - notch), (margin, height - margin + 4)], fill=slot["accent"], width=2)
    draw.line([(width - margin - notch, height - margin), (width - margin + 4, height - margin)], fill=slot["accent"], width=2)
    draw.line([(width - margin, height - margin - notch), (width - margin, height - margin + 4)], fill=slot["accent"], width=2)

    # 4. Typography Labels
    cat_text = f"// {slot['category']} · LOCAL SLOT: {slot['filename']}"
    draw.text((margin + 24, margin + 24), cat_text, fill=slot["accent"])

    center_y = height // 2
    brand_tag = "M O R N I   S I N G H ' S   ·   D E S T I N A T I O N"
    draw.text((margin + 24, center_y - 60), brand_tag, fill=(242, 236, 225))
    
    title_text = slot["title"]
    draw.text((margin + 24, center_y - 20), title_text, fill=(255, 255, 255))
    
    subtitle_text = slot["subtitle"]
    draw.text((margin + 24, center_y + 25), subtitle_text, fill=(180, 195, 185))

    note_text = "READY FOR LOCAL PHOTOGRAPH · DROP JPG INTO /public/images/"
    draw.text((margin + 24, height - margin - 35), note_text, fill=slot["accent"])

    target_path = os.path.join(output_dir, slot["filename"])
    img.save(target_path, "JPEG", quality=92)
    print(f"Generated: {slot['filename']}")

if __name__ == "__main__":
    for slot in slots:
        draw_placeholder(slot)
    print(f"\nSuccessfully populated {len(slots)} placeholder images in /public/images/")
