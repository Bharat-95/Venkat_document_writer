// components/ProcessSection.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function ProcessSection() {
  const steps = [
    {
      title: "Share Your Details",
      desc: "Start by providing your property or NRI requirements through our quick form or by calling us directly.",
      icon: "📋",
    },
    {
      title: "Legal Review & Preparation",
      desc: "Our experts verify title, draft agreements, and handle compliance with utmost precision and clarity.",
      icon: "⚖️",
    },
    {
      title: "Registration & Completion",
      desc: "We manage registration, attestation, and delivery of your documents—completing the process efficiently.",
      icon: "🏛️",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#faf8f6] text-[#0b0b09] py-10 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] font-semibold text-[#d4a373] uppercase">
            Our Process
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mt-3 font-bold text-[#0b0b09] leading-[1.1]">
            Smooth, <span className="text-[#d4a373]">Transparent</span> & Modern Legal Solutions
          </h2>
          <p className="mt-5 text-neutral-600 max-w-2xl mx-auto text-[15px]">
            Experience a refined and efficient process — tailored for today’s
            property and NRI legal needs.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl shadow-md bg-white border border-[#eee] hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#d4a373]/10 text-[#d4a373] text-3xl mb-6 group-hover:bg-[#d4a373] group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#0b0b09] group-hover:text-[#d4a373] transition-colors">
                {s.title}
              </h3>
              <p className="text-neutral-700 text-[15px] leading-relaxed mb-6">
                {s.desc}
              </p>
              <Link
                href="/contact"
                className="inline-block text-sm font-medium text-[#d4a373] hover:text-[#b37a47] transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
