export const BRAND_COLORS = {
  amber: "#FFAF00",
  orange: "#F46920",
  crimson: "#F53255",
  magenta: "#F857C1",
  cyan: "#29BDFD",
  teal: "#00CBBF",
  green: "#01C159",
} as const;

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Streaming & Media" | "Commerce & SaaS" | "AI & Agents";
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroHeadline: string;
  url: string;
  status: "Live Platform" | "Active SaaS" | "Coming Soon";
  brandColor: string;
  secondaryColor?: string;
  previewImage?: string;
  features: string[];
  metrics: { label: string; value: string }[];
  targetAudience: string;
  keyDifferentiator: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "vinylflix",
    name: "Vinylflix",
    slug: "vinylflix",
    category: "Streaming & Media",
    tagline: "The Premier Global Stage for African Cinema",
    shortDescription: "A world-class streaming destination bringing Pan-African storytelling, blockbuster premieres, and visionary African filmmakers to global audiences in stunning 4K Ultra HD.",
    fullDescription: "Vinylflix celebrates the bold, vibrant pulse of African cinema. Designed for audiences worldwide across smart TVs, mobile devices, and the web, Vinylflix pairs breathtaking 4K visual fidelity with an equitable distribution model that rewards filmmakers directly. From record-setting Nollywood hits to festival-acclaimed masterpieces, African storytelling has found its global home.",
    heroHeadline: "African cinema, crafted for the world's biggest screens.",
    url: "https://vinylflix.com/",
    status: "Live Platform",
    brandColor: "#FFAF00",
    secondaryColor: "#F46920",
    previewImage: "/images/vinylflix-preview.png",
    features: [
      "Stunning 4K Ultra HD & HDR streaming with intelligent adaptive bandwidth optimization",
      "An extraordinary library of Nollywood blockbusters, Pan-African epics, and indie gems",
      "Unified entertainment experience across Smart TVs, mobile devices, and the web",
      "Direct filmmaker revenue sharing that honors and empowers creative talent",
      "Verified creator ambassador and affiliate partner programs with transparent payouts",
      "Smart offline downloads tailored for high-convenience mobile viewing anywhere"
    ],
    metrics: [
      { label: "Visual Fidelity", value: "4K UHD & HDR" },
      { label: "Availability", value: "Smart TV, Mobile, Web" },
      { label: "Content Reach", value: "Global Pan-African" },
      { label: "Creator Economics", value: "Direct Revenue Share" }
    ],
    targetAudience: "Global film enthusiasts, the worldwide African diaspora, filmmakers, and independent distributors.",
    keyDifferentiator: "Pioneering premium streaming fidelity alongside direct creator compensation, bringing African cinema to audiences everywhere without compromise."
  },
  {
    id: "ulodine",
    name: "UloDine",
    slug: "ulodine",
    category: "Commerce & SaaS",
    tagline: "Empowering Local Dining with Zero Commission Fees",
    shortDescription: "The all-in-one restaurant operating platform that lets independent dining venues keep 100% of their revenue with effortless table ordering, digital menus, and direct guest loyalty.",
    fullDescription: "Local restaurants are the heartbeat of our communities, yet third-party delivery marketplaces eat away 20% to 30% of their hard-earned revenue. UloDine gives venue operators their independence back. With zero app downloads required, diners order and pay directly from their table in seconds, while restaurateurs retain their full margins, own their customer relationships, and streamline kitchen operations.",
    heroHeadline: "Keep 100% of your revenue. Build direct guest loyalty.",
    url: "https://web-black-three-80.vercel.app/",
    status: "Active SaaS",
    brandColor: "#01C159",
    secondaryColor: "#00CBBF",
    previewImage: "/images/ulodine-preview.png",
    features: [
      "0% Commission fees — venues keep every dollar of dine-in and takeout revenue",
      "Contactless QR table ordering with zero app downloads or friction for guests",
      "Real-time Kitchen Display System (KDS) for faster ticket times and fewer order errors",
      "Native manager suite with live revenue telemetry, menu controls, and table turnover analytics",
      "Direct guest relationship management and automated repeat-visit campaigns",
      "Interactive venue ROI calculator demonstrating immediate monthly cost savings"
    ],
    metrics: [
      { label: "Commission Fee", value: "0%" },
      { label: "Guest Experience", value: "Zero App Installs" },
      { label: "Revenue Kept", value: "100%" },
      { label: "Table Ordering", value: "Instant QR Sync" }
    ],
    targetAudience: "Independent restaurant owners, culinary entrepreneurs, boutique cafes, and hospitality operators.",
    keyDifferentiator: "Replaces predatory marketplace cuts with an honest, flat software platform that puts venue profitability and guest ownership first."
  },
  {
    id: "keel",
    name: "Keel",
    slug: "keel",
    category: "AI & Agents",
    tagline: "Product Specification Engine for Engineering Teams",
    shortDescription: "An upcoming product planning engine designed to analyze user interviews and synthesize actionable specifications grounded in real codebase architecture.",
    fullDescription: "Keel is an upcoming product specification platform currently in research and development at Ellic. It is being designed to bridge the gap between user feedback and technical architecture by transforming customer interviews into clear, executable requirements grounded directly in existing repository components.",
    heroHeadline: "From customer conversations to verified specifications.",
    url: "/contact?type=keel",
    status: "Coming Soon",
    brandColor: "#29BDFD",
    secondaryColor: "#F857C1",
    features: [
      "Customer interview ingestion and automated extraction of real user friction points",
      "Codebase component mapping to ensure proposed features align with existing architecture",
      "Evidence-linked specification generation designed to eliminate speculative roadmap tickets",
      "Structured collaboration workspace for engineering and product leadership"
    ],
    metrics: [
      { label: "Status", value: "Coming Soon" },
      { label: "Stage", value: "Private Incubation" },
      { label: "Focus", value: "Developer Intelligence" },
      { label: "Access", value: "Waitlist Only" }
    ],
    targetAudience: "Product managers, engineering leaders, software architects, and development organizations.",
    keyDifferentiator: "Designed to ground requirements directly against actual codebase schemas and routes with zero speculative claims."
  }
];

export const CATEGORIES = [
  "All Products",
  "Streaming & Media",
  "Commerce & SaaS",
  "AI & Agents"
] as const;
