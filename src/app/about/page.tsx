import React from "react";
import Link from "next/link";
import { CORE_VALUES, TIMELINE_MILESTONES, COMPANY_TAGLINE } from "@/data/company";
import Crosshair from "@/components/Crosshair";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto border-x border-neutral-800">
      {/* 1. HERO / MISSION - Stroked Layout with Render Ambient Gradient */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-16 sm:py-24 bg-render-subpage overflow-hidden">
        <Crosshair position="all-corners" />

        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {COMPANY_TAGLINE}
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.08]">
            Building the platforms of tomorrow, ahead of the curve.
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 leading-relaxed font-normal">
            Ellic is an enterprise technology and media group. We build, launch, and scale enduring platforms across global African cinema streaming, decentralized restaurant commerce, and intelligent product planning engines.
          </p>
        </div>
      </section>

      {/* 2. THE ELLIC THESIS (Stroked 2-Column Split, No Card Display) */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Our Vision
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Why we exist
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            Operating thesis
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          <div className="p-8 sm:p-12 lg:p-14 space-y-4 bg-black">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              The Fundamental Challenge
            </div>
            <h3 className="text-xl font-semibold text-white">
              The tollbooth economy is broken.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              The digital economy is too often dominated by extractive intermediaries that take disproportionate cuts from the people doing the real work—the filmmakers telling vital stories, the culinary entrepreneurs feeding communities, and the software engineers building the future.
            </p>
          </div>

          <div className="p-8 sm:p-12 lg:p-14 space-y-4 bg-neutral-950/30">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              The Ellic Solution
            </div>
            <h3 className="text-xl font-semibold text-white">
              Technology as an equalizer, not a toll.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              At Ellic, we believe technology should be an equalizer, not a tollbooth. We design platforms that give sovereignty back to creators and business operators, built on dependable software infrastructure, transparent models, and aligned economic incentives.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES (Contiguous 4-Column Stroked Matrix) */}
      <section className="relative border-b border-neutral-800">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Values
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Our principles
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

      {/* 4. TRAJECTORY & KEY MILESTONES (Continuous Stroked Rows) */}
      <section className="relative border-b border-neutral-800" id="timeline">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Trajectory
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Key milestones
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            Founded 2026
          </div>
        </div>

        <div className="divide-y divide-neutral-800">
          {TIMELINE_MILESTONES.map((mile, idx) => (
            <div
              key={idx}
              className="px-6 sm:px-10 lg:px-12 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12 hover:bg-neutral-950/40 transition-colors"
            >
              <div className="font-mono text-base text-white font-medium w-24 flex-shrink-0">
                {mile.year}
              </div>
              <div className="space-y-1.5 max-w-3xl">
                <h3 className="text-lg font-semibold text-white">
                  {mile.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {mile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA (Stroked Section with Render-Style Luminous Arc Glow) */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-24 sm:py-32 text-center bg-render-cta overflow-hidden">
        <Crosshair position="all-corners" />

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            {COMPANY_TAGLINE}
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Join our journey
          </h2>
          <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            We welcome conversations with institutional partners, distribution networks, filmmakers, and senior product builders.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none"
            >
              <span>Contact leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
