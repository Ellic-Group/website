"use client";

import React, { useState } from "react";
import { BRAND_COLORS } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

export default function ProductImpact() {
  const [activeTab, setActiveTab] = useState<string>("vinylflix");

  const impactStories = [
    {
      id: "vinylflix",
      name: "Vinylflix",
      audience: "For Filmmakers & Global Viewers",
      brandColor: BRAND_COLORS.amber,
      tagline: "Empowering African cinema, thrilling audiences worldwide.",
      problem: "Traditional distribution networks extract up to 70% of box office revenues and hide viewer metrics from creators.",
      solution: "Vinylflix delivers direct streaming royalties to filmmakers while broadcasting premium 4K African stories to audiences across 190+ countries.",
      highlights: [
        { label: "Creator Royalties", value: "Direct Payouts" },
        { label: "Streaming Quality", value: "4K UHD & HDR" },
        { label: "Global Audience", value: "190+ Countries" }
      ],
      ctaText: "Experience Vinylflix",
      ctaUrl: "https://vinylflix.com/"
    },
    {
      id: "ulodine",
      name: "UloDine",
      audience: "For Independent Restaurants & Diners",
      brandColor: BRAND_COLORS.green,
      tagline: "Reclaiming restaurant margins with zero commission fees.",
      problem: "Food delivery aggregators take 20%–30% cuts out of razor-thin restaurant margins and lock away diner relationships.",
      solution: "UloDine gives restaurants a turnkey operating system for contactless QR table ordering, kitchen displays, and 100% direct revenue retention.",
      highlights: [
        { label: "Commission Fee", value: "0% Marketplace Take" },
        { label: "Order Velocity", value: "Instant QR Checkout" },
        { label: "Kitchen Sync", value: "Sub-Second KDS" }
      ],
      ctaText: "Discover UloDine",
      ctaUrl: "https://web-black-three-80.vercel.app/"
    },
    {
      id: "keel",
      name: "Keel (Coming Soon)",
      audience: "Developer Intelligence • Coming Soon",
      brandColor: BRAND_COLORS.cyan,
      tagline: "Designing specification engines that eliminate roadmap ambiguity.",
      problem: "Engineering teams lose valuable velocity trying to decipher vague customer feedback notes that traditional AI spec generators hallucinate.",
      solution: "Keel is being built to bridge customer feedback directly with actual codebase architecture, generating actionable specifications for development teams.",
      highlights: [
        { label: "Platform Status", value: "Coming Soon" },
        { label: "Incubation Stage", value: "Private Research" },
        { label: "Availability", value: "Waitlist Only" }
      ],
      ctaText: "Join Keel Waitlist",
      ctaUrl: "/contact?type=keel"
    }
  ];

  const current = impactStories.find((s) => s.id === activeTab) || impactStories[0];

  return (
    <div className="w-full">
      {/* Header Stroke Band */}
      <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Market Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            How our products transform industries
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-500">
          Built for creators, restaurateurs, and builders
        </div>
      </div>

      {/* 3-Column Tab Selector Divided by Stroke Lines (No Card Display) */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800 border-b border-neutral-800">
        {impactStories.map((story) => {
          const isSelected = story.id === activeTab;
          return (
            <button
              key={story.id}
              onClick={() => setActiveTab(story.id)}
              className={`text-left p-6 sm:p-8 transition-colors relative cursor-pointer ${
                isSelected
                  ? "bg-neutral-950 text-white"
                  : "bg-black text-neutral-400 hover:bg-neutral-950/40 hover:text-white"
              }`}
            >
              {/* Active top hairline indicator */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all"
                style={{
                  backgroundColor: isSelected ? story.brandColor : "transparent",
                }}
              />

              <div className="text-[11px] font-mono uppercase tracking-wider mb-2">
                <span style={{ color: isSelected ? story.brandColor : undefined }} className="font-medium">
                  {story.audience}
                </span>
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {story.name}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                {story.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Impact Showcase (Stroked Split with Render-Style Ambient Aurora) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 overflow-hidden bg-black">
        {/* Ambient Brand Aurora Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 80% 50%, ${current.brandColor}15 0%, transparent 75%)`,
          }}
        />

        {/* Left Side: Problem & Real-World Solution */}
        <div className="relative lg:col-span-7 p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div
              className="text-xs font-mono uppercase tracking-wider font-medium"
              style={{ color: current.brandColor }}
            >
              {current.audience}
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
              {current.tagline}
            </h3>
          </div>

          <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                The Industry Problem:
              </span>
              <p className="text-neutral-400">{current.problem}</p>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                The Ellic Solution:
              </span>
              <p className="text-white">{current.solution}</p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={current.ctaUrl}
              target={current.ctaUrl.startsWith("http") ? "_blank" : undefined}
              rel={current.ctaUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none"
            >
              <span>{current.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Key Value Highlights */}
        <div className="relative lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center bg-black/50 backdrop-blur-[2px]">
          <div className="border border-neutral-800 divide-y divide-neutral-900 bg-neutral-950/60">
            <div className="px-5 py-3 border-b border-neutral-800 text-xs font-mono uppercase text-neutral-400 tracking-wider">
              Measurable Advantage
            </div>
            {current.highlights.map((h, idx) => (
              <div key={idx} className="p-5 flex items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">{h.label}</span>
                <span
                  className="text-sm font-semibold text-white font-mono"
                  style={{ color: idx === 0 ? current.brandColor : undefined }}
                >
                  {h.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
