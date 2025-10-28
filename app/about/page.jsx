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

       {/* Founder */}
      <section ref={founderRef}>
        <FounderSection />
      </section>
    

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

      {/* Workflow section - step-by-step (based on the image you supplied) */}
      <section className="bg-[#f8f7f3] py-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">OUR PROCESS</h3>
            <h2 className="font-playfair text-3xl md:text-4xl mt-3 font-semibold text-[#0b0b09]">
              Step-by-step NRI Property Registration (via POA)
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Practical, paper-first workflow to get your documents attested and property registered in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: "01 - Consultation", detail: "Initial discussion about the property, documents required and POA options for NRIs." },
              { step: "02 - Document Submission", detail: "Collect identity, title/ownership, and transaction related documents for verification and processing." },
              { step: "03 - Preparing POA", detail: "Drafting Power of Attorney tailored to the transaction and the NRI’s requirements." },
              { step: "04 - POA Execution Abroad", detail: "Guidance for signing before Notary / Consulate in the foreign country as per Indian attestation needs." },
              { step: "05 - Embassy/Consulate Attestation", detail: "Coordinate attestation and sending the attested POA to India for local use and validation." },
              { step: "06 - Preparing Sale Deed", detail: "Draft and finalise the sale deed ensuring the terms are correctly reflected for registration." },
              { step: "07 - Property Valuation", detail: "Assist with fair market valuation required for stamp duty and registration." },
              { step: "08 - Registrar Query Generation", detail: "Initiate and manage queries with the Registrar’s office to clear transaction issues." },
              { step: "09 - Stamp Duty Payment", detail: "Assist in calculating and facilitating (where applicable) stamp duty payment procedures." },
              { step: "10 - Deed Registration", detail: "Support the final registration at the local Registrar office using the POA on behalf of the NRI." },
            ].map((p, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-[#0b0b09] mb-2">{p.step}</h4>
                <p className="text-neutral-600 text-sm">{p.detail}</p>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* Mission & Values (reworded) */}
      <section className="bg-[#0b0b09] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-[#0b0b09]" />
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">OUR PURPOSE</p>
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
              <h3 className="text-xl font-semibold text-[#d4a373] mb-3">Our Mission</h3>
              <p className="text-neutral-300 leading-relaxed text-[15px]">
                To simplify NRI property documentation and registration through clear processes, reliable facilitation and timely communication.
              </p>
            </div>

            <div className="p-8 bg-[#111111] rounded-2xl border border-[#2a2a28]">
              <h3 className="text-xl font-semibold text-[#d4a373] mb-3">Our Vision</h3>
              <p className="text-neutral-300 leading-relaxed text-[15px]">
                To be the most trusted document-writing and facilitation partner for NRIs managing property transactions in India.
              </p>
            </div>

            <div className="p-8 bg-[#111111] rounded-2xl border border-[#2a2a28]">
              <h3 className="text-xl font-semibold text-[#d4a373] mb-3">Our Values</h3>
              <ul className="space-y-2 text-neutral-300 text-[15px]">
                <li>• Transparency in every interaction.</li>
                <li>• Accuracy in document preparation.</li>
                <li>• Respect for client timelines and confidentiality.</li>
              </ul>
            </div>
          </div>
        </div>
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
            Need help with POA, documents or registration?
          </h2>
          <p className="text-neutral-300 mb-8">
            We handle document drafting, attestation facilitation, and all the coordination needed to register property in India on behalf of NRIs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#d4a373] text-[#0b0b09] font-medium px-8 py-3 rounded-full hover:bg-[#c18c59] transition-all shadow-md hover:shadow-lg"
          >
            Request Assistance
          </a>
        </div>
      </section>
    </main>
  );
}
