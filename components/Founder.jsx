// components/FounderSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f9f7f4] text-[#0b0b09] py-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center relative">
          <div className="relative lg:w-[380px] lg:h-[380px] md:w-[380px] md:h-[380px] w-[320px] h-[320px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/Founder.jpeg"
              alt="Advocate P Venkat Rao"
              width={640}
              height={640}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-[#d4a373]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] font-semibold mb-2">
            Meet the Founder
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0b0b09] leading-tight mb-4">
             <span className="text-[#d4a373]">P Venkat Rao</span>
          </h2>
          <p className="text-[15px] text-neutral-700 leading-relaxed mb-6">
            With over a decade of dedicated experience in property law, registration,
            and NRI documentation, <strong>P Venkat Rao</strong> is known for
            his precision, professionalism, and unwavering commitment to client trust.
            He has successfully guided hundreds of clients in achieving legally sound
            property transactions and documentation.
          </p>

          <ul className="space-y-3 text-neutral-700 text-[15px]">
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] text-lg mt-[2px]">•</span>
              Specialist in Title Verification, Sale Deeds, and Power of Attorney for NRIs.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] text-lg mt-[2px]">•</span>
              Coordinates with Consulates and Banks for documentation and settlements.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] text-lg mt-[2px]">•</span>
              Focused on transparent, client-first legal solutions.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#d4a373] hover:bg-[#c18c59] text-[#0b0b09] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </Link>
          
          </div>

          <blockquote className="mt-8 text-neutral-600 italic border-l-4 border-[#d4a373] pl-5 text-[15px] leading-relaxed">
            “Every property transaction deserves clarity and confidence.
            My mission is to make legal services accessible, transparent, and efficient
            for every client—whether in India or abroad.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
