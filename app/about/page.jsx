"use client";

import React, { useEffect, useRef } from "react";
import AboutSection from "../../components/About";
import FounderSection from "../../components/Founder";
import TestimonialsCarousel from "../../components/Testimonials";

const GOLD_FROM = "#f5e7c5";
const GOLD_VIA = "#d4af37";
const GOLD_TO = "#b8962e";



export default function AboutPage() {
  const founderRef = useRef(null);

  // Remove 'Advocate' text dynamically from FounderSection if it appears
  useEffect(() => {
    const root = founderRef.current;
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    const texts = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue && node.nodeValue.includes("Advocate")) {
        texts.push(node);
      }
    }
    texts.forEach((t) => {
      t.nodeValue = t.nodeValue.replace(/Advocate\s*/gi, "");
    });
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Primary About Section */}
      <AboutSection />


      <section className="bg-white text-[#0b0b09] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">
              WHY CLIENTS TRUST US
            </p>
            <h2
              className="font-playfair text-4xl md:text-5xl mt-3 font-semibold text-[#0b0b09]"
            >
              Why Choose P Venkat Rao Legal Associates
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Every case is handled with a commitment to precision,
              professionalism, and personal attention — making your legal
              journey seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Transparent Pricing",
                desc: "Clear communication, no hidden charges. Every cost is discussed and approved before work begins.",
              },
              {
                title: "Expert Legal Team",
                desc: "Experienced professionals specializing in property law, registration, and NRI documentation processes.",
              },
              {
                title: "Tech-Enabled Process",
                desc: "Digital document tracking, timely updates, and easy communication channels for clients anywhere in the world.",
              },
              {
                title: "Nationwide Reach",
                desc: "Supporting clients across India with local expertise in regional laws and property jurisdictions.",
              },
              {
                title: "NRI-Focused Solutions",
                desc: "Specialized assistance for overseas clients in Power of Attorney, sale deed registration, and embassy coordination.",
              },
              {
                title: "Proven Track Record",
                desc: "Over a decade of experience delivering accuracy, compliance, and peace of mind to every client.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 border border-[#eee] rounded-2xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <h3 className="text-lg font-semibold text-[#0b0b09] mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-[#0b0b09] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-[#0b0b09]" />
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <p
              className="text-sm uppercase tracking-[0.25em] text-[#d4a373]"
            >
              OUR PURPOSE
            </p>
            <h2
              className="font-playfair text-4xl md:text-5xl mt-3 font-semibold"
              style={{
                background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Mission & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-[#111111] rounded-2xl border border-[#2a2a28]">
              <h3 className="text-xl font-semibold text-[#d4a373] mb-3">
                Our Mission
              </h3>
              <p className="text-neutral-300 leading-relaxed text-[15px]">
                To simplify the complex landscape of property and NRI legal
                services through clarity, integrity, and precision. We aim to
                bridge the gap between clients and their documentation goals.
              </p>
            </div>

            <div className="p-8 bg-[#111111] rounded-2xl border border-[#2a2a28]">
              <h3 className="text-xl font-semibold text-[#d4a373] mb-3">
                Our Vision
              </h3>
              <p className="text-neutral-300 leading-relaxed text-[15px]">
                To become India’s most trusted documentation and legal
                facilitation firm — recognized for transparency, technology, and
                a client-first approach.
              </p>
            </div>

            <div className="p-8 bg-[#111111] rounded-2xl border border-[#2a2a28]">
              <h3 className="text-xl font-semibold text-[#d4a373] mb-3">
                Our Values
              </h3>
              <ul className="space-y-2 text-neutral-300 text-[15px]">
                <li>• Transparency in every interaction.</li>
                <li>• Precision in every document.</li>
                <li>• Respect for client timelines and confidentiality.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      

      {/* Founder */}
      <section ref={founderRef}>
        <FounderSection />
      </section>

      {/* Testimonials */}
      <section>
        <TestimonialsCarousel />
      </section>

      {/* CTA */}
      <section className="bg-[#0b0b09] py-20 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2
            className="font-playfair text-4xl md:text-5xl font-semibold mb-6"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Ready to begin your legal journey?
          </h2>
          <p className="text-neutral-300 mb-8">
            Whether you’re buying, selling, or managing property as an NRI — our
            team ensures clarity and compliance from start to finish.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#d4a373] text-[#0b0b09] font-medium px-8 py-3 rounded-full hover:bg-[#c18c59] transition-all shadow-md hover:shadow-lg"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
