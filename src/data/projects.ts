export interface ColorSwatch {
  name: string;
  hex: string;
  usage: string;
}

export interface Metric {
  label: string;
  before: number;
  after: number;
  unit: string;
  icon: string;
}

export interface Project {
  id: string;
  client: string;
  tagline: string;
  industry: string;
  year: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  strategy: string[];
  sketches: { label: string; description: string }[];
  beforePalette: ColorSwatch[];
  afterPalette: ColorSwatch[];
  metrics: Metric[];
  accentColor: string;
  accentLight: string;
  gradientFrom: string;
  gradientTo: string;
  markDefinition: {
    title: string;
    description: string;
    details: string[];
  };
}

export const projects: Project[] = [
  {
    id: "brewco",
    client: "BrewCo",
    tagline: "From Diner Coffee to Artisan Experience",
    industry: "Food & Beverage",
    year: "2024",
    beforeImage: "/images/brewco-before.jpg",
    afterImage: "/images/brewco-after.jpg",
    beforeDescription:
      "A cluttered identity built on clipart and legacy branding. The visual language said 'gas station coffee' while the product aspired to something far greater.",
    afterDescription:
      "A refined, story-driven brand anchored in warmth and craft. Every touchpoint now communicates the ritual of specialty coffee.",
    strategy: [
      "Deep consumer research revealed a hidden aspiration: customers wanted a 'third place' — not just coffee.",
      "We identified the brand's core truth: 30 years of single-origin sourcing that was never communicated.",
      "Positioning shifted from 'fast & convenient' to 'intentional & artisanal'.",
      "Tone of voice moved from corporate-generic to warm, knowledgeable, and inviting.",
    ],
    sketches: [
      {
        label: "Logomark Exploration",
        description:
          "Over 60 sketch variations exploring the intersection of bean, steam, and ritual gesture.",
      },
      {
        label: "Typography Pairing",
        description:
          "Testing Canela Display against Neue Haas Grotesk to balance heritage with modernity.",
      },
      {
        label: "Packaging System",
        description:
          "Developing a modular bag system that tells each origin story through illustration.",
      },
    ],
    beforePalette: [
      { name: "Mud Brown", hex: "#6B3A2A", usage: "Primary" },
      { name: "Pale Cream", hex: "#F5F0E0", usage: "Background" },
      { name: "Discount Red", hex: "#CC2200", usage: "Accent" },
      { name: "Flat Gray", hex: "#999999", usage: "Secondary" },
    ],
    afterPalette: [
      { name: "Terracotta", hex: "#C4622D", usage: "Primary" },
      { name: "Oat", hex: "#F2EBD9", usage: "Background" },
      { name: "Espresso", hex: "#2C1A0E", usage: "Ink" },
      { name: "Sage Mist", hex: "#8A9B7A", usage: "Accent" },
      { name: "Antique Gold", hex: "#B8935A", usage: "Highlight" },
    ],
    metrics: [
      { label: "Brand Recall", before: 22, after: 71, unit: "%", icon: "🧠" },
      { label: "Customer Lifetime Value", before: 48, after: 127, unit: "$", icon: "💰" },
      { label: "Social Engagement", before: 1200, after: 8400, unit: "", icon: "❤️" },
      { label: "Net Promoter Score", before: 18, after: 62, unit: "", icon: "⭐" },
    ],
    accentColor: "#C4622D",
    accentLight: "#F2EBD9",
    gradientFrom: "#2C1A0E",
    gradientTo: "#C4622D",
    markDefinition: {
      title: "",
      description: "",
      details: [],
    },
  },
  {
    id: "nova",
    client: "Nova Systems",
    tagline: "From IT Vendor to Thought Leader",
    industry: "B2B SaaS",
    year: "2024",
    beforeImage: "/images/nova-before2.png",
    afterImage: "/images/nova-after.jpg",
    beforeDescription:
      "Generic blue-and-grey corporate identity that blended invisibly into a sea of enterprise software competitors. Zero personality. Zero memorability.",
    afterDescription:
      "A bold, future-facing identity that positions Nova as the intelligence layer of tomorrow's enterprise — confident, visionary, and distinct.",
    strategy: [
      "Competitive audit showed 87% of competitors using identical blue/grey palettes — differentiation was the primary objective.",
      "Interviews with enterprise buyers revealed 'trustworthy innovation' as the highest-value brand attribute.",
      "We crafted a positioning: 'The architecture of what's next' — ambitious without being alienating.",
      "Visual language draws from deep-space imagery and quantum geometry to signal next-generation thinking.",
    ],
    sketches: [
      {
        label: "Constellation Mark",
        description:
          "The logomark evolved from network topology diagrams — nodes connecting into a dynamic N-form.",
      },
      {
        label: "Motion Language",
        description:
          "Defining how the brand moves: particle systems, orbital paths, and data-flow animations.",
      },
      {
        label: "UI Component Library",
        description:
          "Glassmorphic cards, gradient borders, and a dark-first design system built for product teams.",
      },
    ],
    beforePalette: [
      { name: "Corporate Blue", hex: "#0047AB", usage: "Primary" },
      { name: "Slate Gray", hex: "#708090", usage: "Secondary" },
      { name: "White", hex: "#FFFFFF", usage: "Background" },
      { name: "Link Blue", hex: "#0066CC", usage: "Accent" },
    ],
    afterPalette: [
      { name: "Void Navy", hex: "#0A0F2C", usage: "Primary" },
      { name: "Electric Violet", hex: "#7C3AED", usage: "Brand" },
      { name: "Plasma Blue", hex: "#06B6D4", usage: "Accent" },
      { name: "Star White", hex: "#F8FAFF", usage: "Type" },
      { name: "Aurora", hex: "#A78BFA", usage: "Highlight" },
    ],
    metrics: [
      { label: "Inbound Leads", before: 340, after: 1280, unit: "/mo", icon: "📈" },
      { label: "Deal Close Rate", before: 12, after: 31, unit: "%", icon: "🤝" },
      { label: "Press Mentions", before: 4, after: 47, unit: "/yr", icon: "📰" },
      { label: "Analyst Recognition", before: 0, after: 3, unit: " awards", icon: "🏆" },
    ],
    accentColor: "#7C3AED",
    accentLight: "#EDE9FE",
    gradientFrom: "#0A0F2C",
    gradientTo: "#7C3AED",
    markDefinition: {
      title: "",
      description: "",
      details: [],
    },
  },
  {
    id: "verde",
    client: "Verde Collective",
    tagline: "From Earnest to Aspirational",
    industry: "Sustainable Fashion",
    year: "2023",
    beforeImage: "/images/verde-before.jpg",
    afterImage: "/images/verde-after.jpg",
    beforeDescription:
      "Well-intentioned but visually uninspiring. The brand communicated 'eco-guilt' rather than the beauty and luxury of conscious living.",
    afterDescription:
      "A lush, editorial identity that makes sustainability feel like the most beautiful choice — not a sacrifice, but an elevation.",
    strategy: [
      "The insight: eco-conscious consumers don't want to be reminded of the problem — they want to celebrate the solution.",
      "Repositioned from 'sustainable fashion' to 'living beautifully, lightly' — aspirational over admonishing.",
      "Partnered with botanical illustrators to create a signature visual world unique to Verde.",
      "Editorial tone shifted to feel closer to Kinfolk or Apartamento than an NGO newsletter.",
    ],
    sketches: [
      {
        label: "Botanical System",
        description:
          "80+ custom illustrations of plants indigenous to Verde's sourcing regions — each telling a provenance story.",
      },
      {
        label: "Wordmark Refinement",
        description:
          "From 14 typeface explorations to a bespoke modification of Cormorant Garamond with extended ascenders.",
      },
      {
        label: "Campaign Direction",
        description:
          "Mood board development for 'The Quiet Luxury' — a campaign shot in Portuguese countryside estates.",
      },
    ],
    beforePalette: [
      { name: "Eco Green", hex: "#228B22", usage: "Primary" },
      { name: "Cardboard", hex: "#C4A882", usage: "Secondary" },
      { name: "Recycled Gray", hex: "#B0B0B0", usage: "Neutral" },
      { name: "Alert Orange", hex: "#FF6600", usage: "CTA" },
    ],
    afterPalette: [
      { name: "Forest Deep", hex: "#1C3A2A", usage: "Primary" },
      { name: "Warm Ivory", hex: "#F5EDD6", usage: "Background" },
      { name: "Moss", hex: "#5C7A5E", usage: "Secondary" },
      { name: "Antique Gold", hex: "#C9A84C", usage: "Accent" },
      { name: "Dusty Rose", hex: "#C8A89E", usage: "Highlight" },
    ],
    markDefinition: {
      title: "",
      description: "",
      details: [],
    },
    metrics: [
      { label: "Average Order Value", before: 89, after: 234, unit: "$", icon: "🛒" },
      { label: "Return Customer Rate", before: 31, after: 68, unit: "%", icon: "🔄" },
      { label: "Press Features", before: 2, after: 28, unit: "/yr", icon: "📰" },
      { label: "Wholesale Partners", before: 8, after: 67, unit: "", icon: "🤝" },
    ],
    accentColor: "#3E8B6A",
    accentLight: "#E8F5EF",
    gradientFrom: "#1A3A2A",
    gradientTo: "#3E8B6A",
  },
];
