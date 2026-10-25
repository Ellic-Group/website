"use client";

import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Crosshair from "@/components/Crosshair";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { COMPANY_TAGLINE } from "@/data/company";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What platforms belong to Ellic Group?",
      a: "Ellic develops and scales Vinylflix (Pan-African 4K cinema streaming platform), UloDine (0% commission restaurant operating system), and Keel (intelligent product planning and codebase specification engine), alongside emerging initiatives in Ellic Labs."
    },
    {
      q: "How can filmmakers or distributors release on Vinylflix?",
      a: "Filmmakers and producers can submit content for global streaming distribution and verified creator royalty programs directly via Vinylflix or by selecting 'Filmmaker' on this contact desk."
    },
    {
      q: "Can restaurants onboard to UloDine immediately?",
      a: "Yes. UloDine is an active SaaS platform enabling local dining venues to set up contactless QR table ordering, native management apps, and keep 100% of their revenue with zero marketplace commission fees."
    },
    {
      q: "When will Keel be available for engineering teams?",
      a: "Keel is currently in private incubation at Ellic. Engineering leaders and product teams can request early access and join the waitlist by selecting 'Keel' on this contact desk."
    },
    {
      q: "How does Ellic approach strategic partnerships and investment?",
      a: "We welcome dialogue with forward-looking capital partners, media distribution alliances, and technical collaborators who share our conviction in creator sovereignty and enduring software craft."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto border-x border-neutral-800">
      {/* 1. HEADER (Stroked with Render Ambient Gradient) */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-16 sm:py-24 bg-render-subpage overflow-hidden">
        <Crosshair position="all-corners" />

        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {COMPANY_TAGLINE}
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.08]">
            Let&apos;s build something extraordinary together.
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
            Whether you are exploring an enterprise partnership, cinema licensing on Vinylflix, restaurant deployment with UloDine, or venture collaboration—our leadership team is at your service.
          </p>
        </div>
      </section>

      {/* 2. FORM + DIRECT CHANNELS (Stroked 2-Column Split, No Card Display) */}
      <section className="relative border-b border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Direct channels & Portals (5 Cols) */}
          <div className="lg:col-span-5 divide-y divide-neutral-800 bg-neutral-950/30">
            {/* Executive Desk Info */}
            <div className="p-8 sm:p-10 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Executive Desk
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Direct Channels
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-neutral-500 block uppercase mb-0.5">Response SLA:</span>
                  <span className="text-white">&lt;24 Business Hours</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase mb-0.5">Confidentiality:</span>
                  <span className="text-white">Mutual NDA Available</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase mb-0.5">Global Operations:</span>
                  <span className="text-white">Pan-African &amp; International Hubs</span>
                </div>
              </div>
            </div>

            {/* Direct Product Portals */}
            <div className="p-8 sm:p-10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Direct Portals
              </div>
              <div className="divide-y divide-neutral-900 border border-neutral-800 bg-black text-xs">
                <a
                  href="https://vinylflix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 hover:bg-neutral-950 transition-colors text-white"
                >
                  <span className="font-medium">Vinylflix Cinema Streaming</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                <a
                  href="https://web-black-three-80.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 hover:bg-neutral-950 transition-colors text-white"
                >
                  <span className="font-medium">UloDine Restaurant OS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION (Stroked Rows) */}
      <section className="relative border-b border-neutral-800 px-6 sm:px-10 lg:px-12 py-16 sm:py-24">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-medium text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-150 ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed pr-8 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
