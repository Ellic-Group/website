"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { PRODUCTS } from "@/data/products";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-neutral-800 py-3.5" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${productsDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Minimalist Dropdown Panel (OpenAI Style) */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-3 z-50">
                  <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-2 shadow-none">
                    <div className="space-y-0.5">
                      {PRODUCTS.map((prod) => (
                        <a
                          key={prod.id}
                          href={prod.url}
                          target={prod.url.startsWith("http") ? "_blank" : undefined}
                          rel={prod.url.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-900 transition-colors group"
                        >
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-neutral-200 flex items-center gap-2">
                              <span>{prod.name}</span>
                              {prod.status === "Coming Soon" && (
                                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                                  Coming Soon
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-neutral-400">
                              {prod.category}
                            </div>
                          </div>
                          {prod.url.startsWith("http") && (
                            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white" />
                          )}
                        </a>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-neutral-900 px-2 py-1">
                      <Link 
                        href="/products"
                        className="text-xs text-neutral-400 hover:text-white font-medium flex items-center justify-between"
                      >
                        <span>View all products</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA (OpenAI style: flat white pill button, zero shadow) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-black bg-white shadow-none"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean, flat) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-white py-1.5"
          >
            All Products
          </Link>
          <div className="pl-3 space-y-2 border-l border-neutral-800">
            {PRODUCTS.map((prod) => (
              <a
                key={prod.id}
                href={prod.url}
                target={prod.url.startsWith("http") ? "_blank" : undefined}
                rel={prod.url.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-neutral-400 hover:text-white"
              >
                {prod.name} <span className="text-neutral-600">({prod.category})</span>
              </a>
            ))}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-400 hover:text-white py-1.5"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-neutral-800">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-xs font-medium text-black bg-white shadow-none"
            >
              Partner with Ellic
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
