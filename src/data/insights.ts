export interface InsightPost {
  id: string;
  title: string;
  category: "Cinema & Culture" | "Hospitality & SaaS" | "Software Engineering" | "Architecture";
  date: string;
  readTime: string;
  summary: string;
  link: string;
  author: {
    name: string;
    role: string;
  };
}

export const INSIGHTS: InsightPost[] = [
  {
    id: "pan-african-cinema-streaming",
    title: "The Renaissance of African Cinema: Why Direct Distribution is Transforming Creative Freedom",
    category: "Cinema & Culture",
    date: "October 2026",
    readTime: "5 min read",
    summary: "African cinema is reaching unprecedented global acclaim. How Vinylflix is building an equitable digital stage where filmmakers retain their rights, connect directly with millions, and share in the true value of their craft.",
    link: "https://vinylflix.com/",
    author: {
      name: "Ellic Media",
      role: "Creative Strategy"
    }
  },
  {
    id: "death-of-food-aggregator-commissions",
    title: "The Margin Revolution: How Independent Restaurants are Reclaiming Profitability",
    category: "Hospitality & SaaS",
    date: "September 2026",
    readTime: "6 min read",
    summary: "For years, third-party marketplaces treated restaurants as commodity kitchens while taking 30% cuts. An inside look at the economic shift toward direct guest ownership, frictionless QR dining, and true venue independence.",
    link: "https://web-black-three-80.vercel.app/",
    author: {
      name: "Ellic Commerce",
      role: "Hospitality Insights"
    }
  },
  {
    id: "grounded-spec-generation",
    title: "The Future of Product Building: Connecting Customer Voice Directly to Software Reality",
    category: "Software Engineering",
    date: "August 2026",
    readTime: "7 min read",
    summary: "Why traditional software planning stalls between customer feedback and technical architecture, and how intelligent evidence-backed tooling empowers product teams to ship with clarity and velocity.",
    link: "/products#keel",
    author: {
      name: "Ellic AI Labs",
      role: "Engineering Systems"
    }
  },
  {
    id: "multi-tenant-webhook-architecture",
    title: "Architecting for Long-Term Scale: Building Resilient Platforms on the Technological Curve",
    category: "Architecture",
    date: "July 2026",
    readTime: "6 min read",
    summary: "How modern technology groups construct durable digital foundations—unifying high-concurrency payment routing, streaming edge networks, and distributed services without introducing monolithic fragility.",
    link: "/technology",
    author: {
      name: "Ellic Core Systems",
      role: "Platform Architecture"
    }
  }
];
