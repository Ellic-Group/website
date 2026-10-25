import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Crosshair from "./Crosshair";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto border-x border-neutral-800 px-6 sm:px-10 lg:px-12 py-16 sm:py-20 relative">
        <Crosshair position="top-right" />
        <Crosshair position="top-left" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Logo textSize="text-base font-semibold" />
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mt-3">
              Ellic builds and scales category-defining platforms across global African cinema streaming, restaurant commerce, and autonomous developer intelligence.
            </p>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:text-neutral-300 transition-colors"
              >
                <span>Inquire about partnerships</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-white font-medium">
              Products
            </div>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://vinylflix.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Vinylflix <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://web-black-three-80.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  UloDine <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <Link href="/products#keel" className="hover:text-white transition-colors">
                  Keel <span className="text-[10px] text-neutral-500 font-mono">(Coming soon)</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-300 hover:text-white pt-1 block">
                  All products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-white font-medium">
              Company
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about#timeline" className="hover:text-white transition-colors">
                  Milestones
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-white font-medium">
              Connect
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact?type=partner" className="hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact?type=enterprise" className="hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/contact?type=creator" className="hover:text-white transition-colors">
                  Filmmakers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 Ellic Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of use</Link>
            <Link href="/technology" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
