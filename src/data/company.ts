export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface ValueItem {
  iconName: string;
  title: string;
  description: string;
}

export const COMPANY_TAGLINE = "Built on the curve.";

export const COMPANY_METRICS: MetricItem[] = [
  {
    value: "4K UHD",
    label: "Cinema Streaming",
    description: "Bringing high-definition Pan-African cinema and original storytelling to audiences worldwide."
  },
  {
    value: "100%",
    label: "Revenue Kept by Venues",
    description: "Empowering local restaurants with direct dining technology and zero marketplace commission fees."
  },
  {
    value: "Global",
    label: "Reach & Impact",
    description: "Connecting creators, diners, and engineering teams across international markets and diaspora communities."
  },
  {
    value: "Enterprise",
    label: "Platform Reliability",
    description: "Architected with high-concurrency infrastructure engineered for scale, security, and continuous uptime."
  }
];

export const CORE_VALUES: ValueItem[] = [
  {
    iconName: "Compass",
    title: "Culture & Craft",
    description: "We build platforms that celebrate human ingenuity—from amplifying authentic African voices in global cinema to elevating local culinary traditions."
  },
  {
    iconName: "ShieldCheck",
    title: "True Independence",
    description: "We design software that returns control to creators and business owners, replacing extractive middleman fees with direct relationships and shared prosperity."
  },
  {
    iconName: "Sparkles",
    title: "Engineering with Conviction",
    description: "Every product is built on strong technical foundations, designed with restraint, and focused on solving genuine, structural industry challenges."
  },
  {
    iconName: "Zap",
    title: "Built on the Curve",
    description: "We don't follow existing trajectories. We identify emerging technological and cultural shifts early, building enduring platforms ahead of the curve."
  }
];

export const TIMELINE_MILESTONES = [
  {
    year: "2026",
    title: "Establishment & Portfolio Launch",
    description: "Ellic was established in 2026 with a bold mandate: architecting category-defining platforms across Pan-African cinema streaming (Vinylflix), 0% commission restaurant commerce (UloDine), and developer intelligence (Keel)."
  },
  {
    year: "2026",
    title: "Global Streaming & Venue Rollout",
    description: "Rapid expansion of Vinylflix's 4K streaming catalog to diaspora audiences worldwide, alongside the active deployment of UloDine across local dining communities."
  },
  {
    year: "2027+",
    title: "Intelligent Systems & Frontier R&D",
    description: "Scaling Keel's developer platform and pioneering next-generation creative networks at the intersection of media, commerce, and autonomous intelligence."
  }
];
