"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight, ArrowRight, Lock } from "lucide-react";

export default function ProductExplorer() {
  const [activeId, setActiveId] = useState<string>("vinylflix");
  const activeProduct = PRODUCTS.find((p) => p.id === activeId) || PRODUCTS[0];

  return (
    <div className="w-full">
      {/* Editorial Horizontal Stroke Tabs Bar */}
      <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center gap-8 overflow-x-auto no-scrollbar bg-black">
        {PRODUCTS.map((prod) => {
          const isActive = prod.id === activeId;
          const isComingSoon = prod.status === "Coming Soon";
          return (
            <button
              key={prod.id}
              onClick={() => setActiveId(prod.id)}
              className={`text-sm sm:text-base font-medium whitespace-nowrap transition-colors pb-1 relative cursor-pointer flex items-center gap-2 ${
                isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <span>{prod.name}</span>
              {isComingSoon && (
                <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-700 text-neutral-400">
                  Coming soon
                </span>
              )}
              {isActive && (
                <span
                  className="absolute bottom-[-15px] left-0 right-0 h-[2px] transition-all"
                  style={{ backgroundColor: prod.brandColor }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Single-Column Stacked Showcase (No Split View, Stacked Layout) */}
      <div className="relative overflow-hidden bg-black pt-12 sm:pt-16 px-6 sm:px-10 lg:px-12">
        {/* Render-style Ambient Aurora Glow - Anchored at the BOTTOM */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(110% 80% at 50% 100%, ${activeProduct.brandColor}24 0%, ${activeProduct.brandColor}08 45%, transparent 75%)`,
          }}
        />

        {/* Ambient bottom illumination behind the graphic container */}
        <div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-56 pointer-events-none blur-3xl opacity-35 transition-all duration-700"
          style={{
            backgroundColor: activeProduct.brandColor,
          }}
        />

        {/* Existing Title, Intro, and Action Button Placed Above Media */}
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          {/* Category & Status */}
          <div className="text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 text-neutral-400">
            <span style={{ color: activeProduct.brandColor }} className="font-medium">
              {activeProduct.category}
            </span>
            <span className="text-neutral-600">•</span>
            <span>{activeProduct.status}</span>
          </div>

          {/* Hero Headline */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.12]">
            {activeProduct.heroHeadline}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
            {activeProduct.fullDescription}
          </p>

          {/* Action Button */}
          <div className="pt-2 flex items-center justify-center gap-4">
            {activeProduct.status === "Coming Soon" ? (
              <Link
                href="/contact?type=keel"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none cursor-pointer"
              >
                <span>Join Keel waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <a
                href={activeProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none cursor-pointer"
              >
                <span>Experience {activeProduct.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Graphics Container with Stroke & Shadow, Cut Off More Portion at the Bottom to Reduce Height */}
        <div className="relative mt-12 sm:mt-14 max-w-5xl mx-auto -mb-16 sm:-mb-24">
          <div className="rounded-t-xl sm:rounded-t-2xl border border-b-0 border-neutral-700/80 bg-neutral-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden">
            {/* Window Chrome Header Bar */}
            <div className="px-4 sm:px-6 py-3 border-b border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                </div>
                <span className="text-neutral-500 ml-2 hidden sm:inline">
                  {activeProduct.id === "vinylflix" && "vinylflix.com"}
                  {activeProduct.id === "ulodine" && "web-black-three-80.vercel.app"}
                  {activeProduct.id === "keel" && "keel.ellic.group (Private Incubation)"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: activeProduct.brandColor }} className="font-medium text-[11px] uppercase tracking-wider">
                  {activeProduct.status}
                </span>
              </div>
            </div>

            {/* Media Image / Interactive Canvas (Height Reduced, Bottom Cut Off Cleanly, 100% Quality Uncompressed) */}
            <div className="relative bg-black overflow-hidden h-[240px] sm:h-[340px] md:h-[390px] max-h-[400px]">
              {activeProduct.previewImage ? (
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={activeProduct.previewImage}
                    alt={`${activeProduct.name} platform interface`}
                    width={1024}
                    height={511}
                    quality={100}
                    unoptimized
                    priority
                    className="w-full h-auto object-cover object-top block"
                  />
                </div>
              ) : (
                /* Keel Coming Soon Canvas (Matching Sleek Reduced Height) */
                <div className="relative w-full h-full bg-neutral-950 flex flex-col items-center justify-center p-8 sm:p-12 text-center border-t border-neutral-900 bg-render-grid">
                  <div className="max-w-md space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs font-mono text-neutral-400">
                      <Lock className="w-3.5 h-3.5 text-[#29BDFD]" />
                      <span>In Private Incubation</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      Keel Specification Engine
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
                      Transforming customer interview transcripts directly into executable product specifications grounded in existing repository code.
                    </p>
                    <div className="pt-1">
                      <span className="text-xs font-mono text-[#29BDFD] uppercase tracking-wider">
                        Coming Soon 2026 • Waitlist Open
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
