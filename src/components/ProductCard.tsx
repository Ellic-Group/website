"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  className?: string;
}

export default function ProductCard({ product, featured = false, className = "" }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = product.url.startsWith("http");

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-8 sm:p-10 flex flex-col justify-between transition-colors bg-black ${className}`}
    >
      {/* Render-style Reactive Radial Gradient Bloom on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at 50% 0%, ${product.brandColor}18 0%, transparent 75%)`,
        }}
      />

      {/* Top Hairline Brand Accent Line on Hover (Vercel/Render style stroke accent) */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-200"
        style={{
          backgroundColor: isHovered ? product.brandColor : "transparent",
        }}
      />

      <div>
        {/* Clean plain-text category label & status (NO PILLS, NO DOTS) */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
          <span
            style={{ color: isHovered ? product.brandColor : undefined }}
            className="transition-colors font-medium"
          >
            {product.category}
          </span>
          <span className="text-neutral-500">{product.status}</span>
        </div>

        {/* Product Identity */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm font-medium text-neutral-200 mt-2">
          {product.tagline}
        </p>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Minimal metrics row divided by hairline stroke */}
        <div className="grid grid-cols-2 gap-4 mt-8 pt-5 border-t border-neutral-900">
          {product.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx}>
              <div className="text-[11px] font-mono uppercase text-neutral-500">
                {m.label}
              </div>
              <div className="text-sm font-medium text-white mt-0.5">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link (Flat, zero shadows) */}
      <div className="mt-8 pt-5 border-t border-neutral-900 flex items-center justify-between">
        {product.status === "Coming Soon" ? (
          <Link
            href="/contact?type=keel"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-neutral-300 transition-colors group/link"
          >
            <span style={{ color: isHovered ? product.brandColor : undefined }}>
              Join waitlist (Coming soon)
            </span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5"
              style={{ color: isHovered ? product.brandColor : undefined }}
            />
          </Link>
        ) : isExternal ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-neutral-300 transition-colors group/link"
          >
            <span style={{ color: isHovered ? product.brandColor : undefined }}>
              Visit {product.name}
            </span>
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              style={{ color: isHovered ? product.brandColor : undefined }}
            />
          </a>
        ) : (
          <Link
            href={product.url}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-neutral-300 transition-colors group/link"
          >
            <span style={{ color: isHovered ? product.brandColor : undefined }}>
              Learn more
            </span>
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              style={{ color: isHovered ? product.brandColor : undefined }}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
