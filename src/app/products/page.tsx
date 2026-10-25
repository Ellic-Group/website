"use client";

import React, { useState } from "react";
import { PRODUCTS, CATEGORIES, BRAND_COLORS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Crosshair from "@/components/Crosshair";
import { Search, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCategory =
      selectedCategory === "All Products" || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto border-x border-neutral-800">
      {/* 1. Header Section (Stroked with Render-Style Ambient Aurora) */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-16 sm:py-20 bg-render-subpage overflow-hidden">
        <Crosshair position="all-corners" />

        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Products &amp; Ventures
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.08]">
            Explore the ecosystem.
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
            Our suite of category-defining technologies across Pan-African streaming media, decentralized restaurant commerce, and autonomous developer intelligence.
          </p>
        </div>
      </section>

      {/* 2. Search & Category Filter Bar Divided by Stroke Lines */}
      <section className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-neutral-950/30">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-black border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Categories (Flat text tabs, zero shadows) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  borderColor: isSelected ? BRAND_COLORS.amber : undefined,
                  color: isSelected ? "#000000" : undefined,
                  backgroundColor: isSelected ? BRAND_COLORS.amber : "transparent",
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border shadow-none cursor-pointer ${
                  isSelected
                    ? "font-semibold"
                    : "text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Contiguous Stroked Product Grid (Zero Card Displays) */}
      <section className="relative border-b border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {filteredProducts.map((prod) => (
            <div key={prod.id} id={prod.id} className="border-b md:border-b-0 border-neutral-800">
              <ProductCard product={prod} />
            </div>
          ))}

          {/* Labs R&D Incubator Stroked Cell */}
          <div className="relative p-8 sm:p-10 flex flex-col justify-between bg-black hover:bg-neutral-950/50 transition-colors border-b md:border-b-0 border-neutral-800">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
                R&amp;D • Ellic Labs
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Future Incubation
              </h3>
              <p className="text-sm font-medium text-neutral-200 mt-2">
                Next-generation platforms in research
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
                Ellic continuously prototypes emerging platforms across decentralized media distribution, automated hospitality routing, and autonomous developer orchestration.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-neutral-900 flex items-center justify-between">
              <Link
                href="/contact?type=partner"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-neutral-300 transition-colors group"
              >
                <span>Propose collaboration</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 px-6">
            <p className="text-neutral-400 text-sm">No products found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Products");
              }}
              className="mt-4 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Enterprise Assurance Section (Stroked Section with Render-Style Luminous Arc Glow) */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-16 sm:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-render-cta overflow-hidden">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Enterprise Deployments
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Need custom integration or SLA?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            All Ellic products can be integrated with dedicated enterprise authentication, isolated infrastructure, and custom SLAs tailored to your organization.
          </p>
        </div>

        <Link
          href="/contact?type=enterprise"
          className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none whitespace-nowrap"
        >
          Contact enterprise team
        </Link>
      </section>
    </div>
  );
}
