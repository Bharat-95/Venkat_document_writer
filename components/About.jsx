"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#0b0b09] text-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* small label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#d4a373]/20 text-[#d4a373] text-lg font-serif">
              🏛️
            </div>
            <p className="italic text-[#d4a373] text-sm">About Our Legal Practice</p>
          </div>

          {/* headline */}
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            Your trusted partners in{" "}
            <span className="italic text-[#d4a373] font-semibold">
              Property & NRI Legal Solutions
            </span>
          </h2>

          {/* paragraph */}
          <p className="text-neutral-300 text-[16px] leading-relaxed max-w-[600px] mb-8">
            At <span className="text-[#d4a373] font-semibold">P Venkat Rao Legal Associates</span>, 
            we specialize in real estate, property documentation, and NRI legal services. 
            Our team ensures every transaction — from title verification to registration — 
            is handled with precision, transparency, and complete legal compliance. 
            We believe in simplifying complex legal processes so you can make confident decisions.
          </p>

          {/* bullet points */}
          <ul className="space-y-3 mb-10 text-[15px] text-neutral-200">
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] mt-[2px]">✓</span>
              <span>Specialized in property, registration, and documentation services.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] mt-[2px]">✓</span>
              <span>Expert legal assistance for NRIs through Power of Attorney and embassy attestation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] mt-[2px]">✓</span>
              <span>Transparent, reliable, and client-focused approach for every case.</span>
            </li>
          </ul>

          
          <Link href="/about" className="bg-[#d4a373] text-[#0b0b09] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#c3925f] transition-colors">
            Learn More
          </Link>
        </div>

        {/* RIGHT IMAGE with badge */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/About.png" // Update your About image here
              alt="Property legal experts at work"
              width={700}
              height={800}
              className="w-full h-[520px] object-cover rounded-lg"
              priority
            />
          </div>

          {/* Badge overlay */}
          <div className="absolute bottom-8 left-8 bg-[#d4a373] text-[#0b0b09] p-6 rounded-lg shadow-lg">
            <div className="text-5xl font-bold leading-none">10+</div>
            <div className="text-sm font-serif italic mt-1">Years of Legal Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
