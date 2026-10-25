"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm({ defaultCategory = "partnership" }: { defaultCategory?: string }) {
  const [inquiryType, setInquiryType] = useState<string>(defaultCategory);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productInterest: "all",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: "partnership", label: "Partnership" },
    { id: "enterprise", label: "Enterprise" },
    { id: "investor", label: "Investor" },
    { id: "creator", label: "Filmmaker" },
    { id: "general", label: "General" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 text-center bg-black">
        <CheckCircle2 className="w-10 h-10 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white">Inquiry received</h3>
        <p className="text-neutral-400 text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Ellic Limited. Our leadership team will review your note and respond within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", company: "", productInterest: "all", message: "" });
          }}
          className="mt-6 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-none cursor-pointer"
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-12 bg-black">
      <div className="mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Contact Desk
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Start a conversation
        </h2>
        <p className="text-neutral-400 text-sm mt-2">
          Connect directly with our executive, engineering, or distribution teams.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Selector (Flat, zero shadows) */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
            Inquiry Type
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setInquiryType(cat.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors border shadow-none cursor-pointer ${
                  inquiryType === cat.id
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex Morgan"
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alex@company.com"
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Organization & Specific Venture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
              Organization / Studio
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Paramount / Studio Name"
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
              Platform of Interest
            </label>
            <select
              value={formData.productInterest}
              onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-white transition-colors cursor-pointer"
            >
              <option value="all">Ecosystem / General Group</option>
              <option value="vinylflix">Vinylflix (Cinema Streaming)</option>
              <option value="ulodine">UloDine (Restaurant OS)</option>
              <option value="keel">Keel (Developer Intelligence)</option>
              <option value="labs">Ellic Labs (Incubation)</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Brief Overview *
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your venture, distribution inquiry, or partnership scope..."
            className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-white transition-colors resize-none"
          />
        </div>

        {/* Submit Button (Flat, zero shadows) */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors disabled:opacity-50 shadow-none cursor-pointer"
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Transmit message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
