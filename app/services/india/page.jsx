"use client";

import React from "react";
import Link from "next/link";
import PracticeAreas from "../../../components/Practice";
import { CheckCircle } from "lucide-react";

const GOLD_FROM = "#f5e7c5";
const GOLD_VIA = "#d4af37";
const GOLD_TO = "#b8962e";


export default function IndiaServices() {
  const keyServices = [
    {
      title: "Sale Deed Drafting & Registration",
      desc: "Expert assistance in drafting and registering sale deeds with precision, ensuring full compliance and smooth execution.",
      icon: "📜",
    },
    {
      title: "Agreement to Sale",
      desc: "Legally sound agreements that protect both parties while enabling clear transaction terms and timelines.",
      icon: "✍️",
    },
    {
      title: "Title Verification & Legal Opinion",
      desc: "Comprehensive document review, title tracing, and legal opinion to verify ownership and safeguard your investment.",
      icon: "🔍",
    },
    {
      title: "Property Mutation & Name Transfer",
      desc: "Complete guidance for property mutation, ownership transfers, and local municipal record updates.",
      icon: "🏠",
    },
    {
      title: "Gift, Release & Partition Deeds",
      desc: "Drafting and registration of family deeds, transfers, and settlements while maintaining legal accuracy.",
      icon: "📑",
    },
    {
      title: "Encumbrance Certificate & EC Services",
      desc: "Quick and accurate EC retrieval and verification to ensure no legal disputes or pending liabilities exist.",
      icon: "🧾",
    },
  ];

  return (
    <main className="bg-white text-[#0b0b09] overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#0b0b09] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/30 via-[#0b0b09] to-[#0b0b09] opacity-90" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <h1
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            India Property Documentation Services
          </h1>
          <p className="text-neutral-300 max-w-2xl text-lg">
            We specialize in end-to-end legal documentation and registration
            support for property transactions across India. From Sale Deeds to
            Title Verification — we ensure accuracy, compliance, and peace of
            mind.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#d4a373] text-[#0b0b09] font-medium px-8 py-3 rounded-full hover:bg-[#c18c59] transition-all shadow-md hover:shadow-lg"
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 lg:py-28 bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">
              OUR SERVICES
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl mt-3 font-semibold">
              Comprehensive Legal Support in India
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Whether you’re purchasing, gifting, or registering property, our
              team manages the complete process — from verification to
              registration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {keyServices.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#eee] bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[#0b0b09] mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-[15px] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use the Practice Areas Section */}
      <PracticeAreas />

      {/* How We Work Section */}
      <section className="bg-[#0b0b09] text-white py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">
              HOW WE WORK
            </p>
            <h2
              className="font-playfair text-4xl md:text-5xl mt-3 font-semibold"
              style={{
                background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Simple, Transparent & Secure Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Document Submission",
                desc: "Share your basic property or ownership documents for preliminary verification.",
              },
              {
                step: "2",
                title: "Review & Preparation",
                desc: "We perform legal due diligence, prepare drafts, and share updates for your approval.",
              },
              {
                step: "3",
                title: "Execution & Handover",
                desc: "We assist with registration, attestation, and provide copies of finalized documents.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#1a1a1a] bg-[#11110e] text-center hover:shadow-md transition-all"
              >
                <div className="text-5xl font-bold text-[#d4a373] mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2
            className="font-playfair text-3xl md:text-4xl mb-6 font-semibold"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Why Choose Our India Services
          </h2>
          <div className="max-w-[800px] mx-auto text-neutral-600 mb-10">
            <p>
              With over a decade of hands-on experience in property and legal
              documentation, our India-focused team ensures every client enjoys
              smooth, compliant transactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Quick turnaround time",
              "Trusted by 2500+ clients",
              "Pan-India legal support",
              "End-to-end documentation services",
              "Transparent pricing structure",
              "Dedicated legal support team",
            ].map((point, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <CheckCircle className="text-[#d4a373] w-5 h-5" />
                <p className="text-[#0b0b09] font-medium text-sm">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-block bg-[#d4a373] text-[#0b0b09] font-medium px-8 py-3 rounded-full hover:bg-[#c18c59] transition-all shadow-md hover:shadow-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
