"use client";

import React from "react";
import Link from "next/link";
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
            We specialize in end-to-end document drafting and registration
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

      {/* Comprehensive Documentation Support in India Section */}
      <section className="relative">
        {/* Top white background area for title */}
        <div className="bg-white py-16">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">
              OUR SERVICES
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl mt-3 font-semibold">
              Comprehensive Documentation Support in India
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Whether you’re purchasing, gifting, or registering property, our
              team manages the complete process — from verification to
              registration.
            </p>
          </div>
        </div>

        {/* Split background starts here (Black 70% | White 30%) */}
        <div className="relative py-10">
          {/* Split background */}
          <div
            className="absolute inset-0 flex pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[70%] bg-[#0b0b09]" />
            <div className="w-[30%] bg-[#fafafa]" />
          </div>

          {/* Foreground content */}
          <div className="relative z-10   flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT: Black panel */}
            <div className="flex-1 bg-[#0b0b09] text-white rounded-2xl p-10 shadow-md">
              <h3 className="text-3xl font-semibold mb-6">
                Secure Your Real Estate Investments
              </h3>

              <p className="text-neutral-300 leading-relaxed mb-4">
                At P Venkat Rao, we offer comprehensive property documentation services in Kolkata, specializing in sale deed drafting, property title verification, and seamless registration with the Sub-Registrar Office. Our expert team ensures proper compliance for all real estate transactions, making us the preferred choice for Indians, NRIs, First-Time Property Buyers, and property investors.
              </p>

              <p className="text-neutral-300 leading-relaxed mb-4">
                We provide end-to-end solutions that protect your property rights and ensure smooth ownership transfer. From document preparation to sale deed registration and title clearance, we guide you through each step with transparent, reliable, and efficient support.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                Whether you're purchasing residential or commercial property, P Venkat Rao helps you navigate the complexities of property registration, offering hassle-free services with guaranteed protection.
              </p>
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden h-[600px]">
                <div className="relative z-10 p-6 h-full overflow-y-auto scroll-smooth space-y-8 pr-4">
                  {keyServices.map((service, idx) => (
                    <div key={idx} className="relative flex items-start">
                      <div
                        className="absolute top-10 flex items-center justify-center z-50"
                        style={{
                          transform: "translateX(-25%)",
                          width: "60px",
                          height: "60px",
                        }}
                      >
                        <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center shadow-md">
                          {/* rotating ring */}
                          <svg
                            className="absolute w-full h-full animate-spin-slow"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M50 10
           A40 40 0 0 1 50 90"
                              stroke="#bcbcbc"
                              strokeWidth="3"
                              fill="none"
                            />

                            <path
                              d="M50 10
           A40 40 0 0 0 50 90"
                              stroke="#bcbcbc"
                              strokeWidth="3"
                              strokeDasharray="4 6"
                              fill="none"
                            />
                          </svg>

                          {/* Number inside */}
                          <span className="text-[#0b0b09] font-semibold text-lg relative z-10">
                            {idx + 1}
                          </span>
                        </div>
                      </div>

                      {/* White card */}
                      <div className="bg-white rounded-2xl p-6 border border-[#eaeaea] shadow-[0_4px_10px_rgba(0,0,0,0.06)] transition-transform hover:shadow-[0_6px_14px_rgba(0,0,0,0.08)] ml-6">
                        <h4 className="text-lg font-semibold text-[#0b0b09] mb-2">
                          {service.title}
                        </h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                desc: "We perform document due diligence, prepare drafts, and share updates for your approval.",
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
              With over a decade of hands-on experience in property and
              documentation, our India-focused team ensures every client enjoys
              smooth, compliant transactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Quick turnaround time",
              "Trusted by 2500+ clients",
              "Pan-India support",
              "End-to-end documentation services",
              "Transparent pricing structure",
              "Dedicated support team",
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
