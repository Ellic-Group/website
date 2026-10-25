import React from "react";
import Link from "next/link";
import { COMPANY_TAGLINE } from "@/data/company";
import Crosshair from "@/components/Crosshair";
import { ArrowRight } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="max-w-7xl mx-auto border-x border-neutral-800">
      {/* 1. HERO - Stroked Layout with Render Cyan-Teal Tech Gradient */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-16 sm:py-24 bg-render-tech overflow-hidden">
        <Crosshair position="all-corners" />

        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {COMPANY_TAGLINE}
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.08]">
            Engineering for scale, craft, and resilience.
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 leading-relaxed font-normal">
            How we build dependable digital foundations that power 4K cinema streaming across continents, high-volume restaurant commerce, and intelligent software creation.
          </p>
        </div>
      </section>

      {/* 2. CORE PLATFORM FOUNDATIONS (Stroked 2-Column Split, No Card Display) */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Platform Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              High-concurrency infrastructure &amp; security
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            Enterprise Reliability
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-5 bg-black">
            <p className="text-sm text-neutral-400 leading-relaxed">
              Our platforms are engineered to deliver flawless user experiences at scale. Whether streaming 4K cinema to viewers during a blockbuster premiere on Vinylflix or powering instant table ordering in high-energy restaurants with UloDine, our systems are built for non-stop availability and lightning-fast responsiveness.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We prioritize performance craft, data security, and operational dependability. Every platform in the Ellic ecosystem is designed with edge-accelerated delivery, sub-second data synchronization, and bank-grade privacy—ensuring creators, restaurateurs, and engineering teams can rely on us around the clock.
            </p>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 bg-neutral-950/30 flex flex-col justify-center">
            <div className="border border-neutral-800 bg-black">
              <div className="px-5 py-3 border-b border-neutral-800 text-xs font-mono uppercase text-neutral-400 tracking-wider">
                Product Performance Benchmarks
              </div>
              <div className="divide-y divide-neutral-900 text-xs text-neutral-300">
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-white font-medium">Instant Table Order Sync</span>
                  <span className="text-neutral-500 font-mono">UloDine Real-Time Engine</span>
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-white font-medium">Adaptive 4K Edge Streaming</span>
                  <span className="text-neutral-500 font-mono">Vinylflix Global CDN</span>
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-white font-medium">Zero-Failure Checkout Reliability</span>
                  <span className="text-neutral-500 font-mono">99.99% Ecosystem Uptime</span>
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-white font-medium">Developer Intelligence</span>
                  <span className="text-neutral-500 font-mono">Keel Engine (Coming Soon)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEEL DEVELOPER INTELLIGENCE (COMING SOON) */}
      <section id="keel" className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Developer Intelligence • Coming Soon
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Keel: Grounded software specifications
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            In Private Incubation
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-5 bg-black">
            <p className="text-sm text-neutral-400 leading-relaxed">
              Engineering teams spend countless hours trying to translate ambiguous customer interviews into actionable software tickets. Traditional AI tools exacerbate the problem by hallucinating architectures and fabricating non-existent dependencies.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Currently in active development at Ellic, Keel is being engineered to bridge customer feedback and technical reality. By ingesting user interview transcripts and cross-referencing real repository routes and component structures, Keel is designed to deliver verified, evidence-backed roadmaps without speculative claims.
            </p>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 bg-neutral-950/30 flex flex-col justify-center">
            <div className="border border-neutral-800 bg-black divide-y divide-neutral-900">
              <div className="p-4 space-y-1">
                <div className="font-semibold text-white text-xs">1. Ingest User Feedback</div>
                <div className="text-neutral-400 text-[11px] leading-relaxed">Extraction of verified user friction points directly from conversations.</div>
              </div>
              <div className="p-4 space-y-1">
                <div className="font-semibold text-white text-xs">2. Map Repository Feasibility</div>
                <div className="text-neutral-400 text-[11px] leading-relaxed">Planned verification against real codebase routes, schemas, and components.</div>
              </div>
              <div className="p-4 space-y-1">
                <div className="font-semibold text-white text-xs">3. Generate Actionable Specs</div>
                <div className="text-neutral-400 text-[11px] leading-relaxed">Structured, executable requirements designed to eliminate guesswork.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA with Render-Style Luminous Arc Glow */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-24 sm:py-32 text-center bg-render-cta overflow-hidden">
        <Crosshair position="all-corners" />

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            {COMPANY_TAGLINE}
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Enterprise technical partnerships
          </h2>
          <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            Need technical documentation, enterprise integration guides, or joint venture architectural access?
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=enterprise"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none"
            >
              <span>Request technical access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
