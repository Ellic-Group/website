import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { COMPANY_METRICS, CORE_VALUES, COMPANY_TAGLINE } from "@/data/company";
import { INSIGHTS } from "@/data/insights";
import ProductCard from "@/components/ProductCard";
import ProductExplorer from "@/components/ProductExplorer";
import ProductImpact from "@/components/ProductImpact";
import Crosshair from "@/components/Crosshair";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto border-x border-neutral-800">
      {/* 1. HERO SECTION - Stroked Layout with Render-Style Ambient Hero Gradient */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-0 bg-render-hero overflow-hidden">
        <Crosshair position="all-corners" />

        <div className="max-w-4xl space-y-8">
          {/* Official Tagline */}
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            {COMPANY_TAGLINE}
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08]">
            Platforms that move culture, commerce, and intelligence forward.
          </h1>

          {/* Marketing Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-neutral-400 font-normal leading-relaxed">
            Ellic is a modern technology and media venture group. We build category-defining platforms—from world-class Pan-African cinema streaming in 4K to zero-commission restaurant operating systems and intelligent product planning engines.
          </p>

          {/* Flat Action Buttons (Zero Shadows) */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none"
            >
              <span>Explore products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white border border-neutral-700 hover:border-white transition-colors shadow-none"
            >
              <span>Partner with us</span>
            </Link>
          </div>
        </div>

        {/* Clean Stroked Metrics Bar (Integrated directly with vertical & horizontal stroke lines) */}
        <div className="mt-16 sm:mt-24 -mx-6 sm:-mx-10 lg:-mx-12 border-t border-neutral-800 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 bg-neutral-950/20">
          {COMPANY_METRICS.map((metric, idx) => (
            <div key={idx} className="p-6 sm:p-8 lg:p-10 space-y-1.5">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-neutral-300">
                {metric.label}
              </div>
              <div className="text-xs text-neutral-500">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE / EXPLORER SECTION */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Our active platforms
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            Interactive system explorer
          </div>
        </div>

        <ProductExplorer />
      </section>

      {/* 3. PORTFOLIO MATRIX SECTION (Contiguous 3-Column Stroked Grid, No Card Boxes) */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Shaping industries, empowering people
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-medium text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View all products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 4. PRODUCT VALUE & MARKET IMPACT */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <ProductImpact />
      </section>

      {/* 5. PHILOSOPHY & VALUES (Contiguous 4-Column Stroked Matrix) */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            How we build
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 space-y-4 bg-black hover:bg-neutral-950/40 transition-colors"
            >
              <div className="text-xs font-mono text-neutral-500">
                0{idx + 1}
              </div>
              <h3 className="text-base font-semibold text-white">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PERSPECTIVES (Contiguous 2-Column Stroked Strip) */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Perspectives
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Ideas &amp; insights
            </h2>
          </div>
          <Link
            href="/about"
            className="text-xs font-medium text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <span>About Ellic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {INSIGHTS.slice(0, 2).map((post) => (
            <a
              key={post.id}
              href={post.link}
              target={post.link.startsWith("http") ? "_blank" : undefined}
              rel={post.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-8 sm:p-12 bg-black hover:bg-neutral-950/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span>{post.author.name}</span>
                <span className="text-white font-medium inline-flex items-center gap-1">
                  Read perspective <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION (Stroked Section with Render-Style Luminous Bottom Arc Glow) */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-24 sm:py-32 text-center bg-render-cta overflow-hidden">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />
        <Crosshair position="bottom-right" />
        <Crosshair position="bottom-left" />

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            {COMPANY_TAGLINE}
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
            Build with us.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Whether you are an enterprise exploring strategic synergy, a filmmaker seeking global distribution on Vinylflix, or a hospitality venue unlocking higher profitability with UloDine.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none"
            >
              Get in touch
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white border border-neutral-700 hover:border-white transition-colors shadow-none"
            >
              View products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
