// app/services/nri/page.jsx
"use client";

import React from "react";
import Link from "next/link";
import PracticeAreas from "../../../components/Practice";
import TestimonialsCarousel from "../../../components/Testimonials";
import FounderSection from "../../../components/Founder";

const GOLD_FROM = "#f5e7c5";
const GOLD_VIA = "#d4af37";
const GOLD_TO = "#b8962e";



export default function NriServices() {
  const nriServices = [
    {
      title: "Consultation & Case Assessment",
      desc: "Expert advice on property registration, POA requirements, embassy attestation rules and strategy for NRIs based on the property's jurisdiction.",
      icon: "🗣️",
    },
    {
      title: "Document Submission & Verification",
      desc: "Secure submission of identity, ownership and transaction-related documents for legal verification and processing in India.",
      icon: "📁",
    },
    {
      title: "Power of Attorney (POA) Drafting",
      desc: "Drafting tailored POAs for property sale, purchase or registration with clear scope, powers and compliance checks.",
      icon: "✍️",
    },
    {
      title: "Execution of POA Abroad",
      desc: "Guidance for POA signing before a Notary or Consulate abroad and support for embassy-level attestation.",
      icon: "🌐",
    },
    {
      title: "Embassy / Consulate Attestation",
      desc: "Coordinate attestation with Indian Embassy/Consulate and validate documents for use in India.",
      icon: "🏛️",
    },
    {
      title: "Sale Deed Preparation & Registration",
      desc: "Drafting sale deeds, coordinating stamp duty, and registering deeds using POA where applicable.",
      icon: "📜",
    },
  ];

  const workflowSteps = [
    {
      step: "01 - Consultation",
      text: "Expert legal advice on property registration process and Power of Attorney requirements for NRIs.",
    },
    {
      step: "02 - Document Submission",
      text: "Submit identity, ownership, and transaction-related documents for legal verification and processing.",
    },
    {
      step: "03 - Preparing POA",
      text: "Drafting Power of Attorney tailored to NRI's property needs and legal compliance.",
    },
    {
      step: "04 - Execution of POA at Foreign Country",
      text: "Sign POA before Notary or Consulate as per Indian legal standards.",
    },
    {
      step: "05 - Send POA through Indian Embassy",
      text: "Attested POA sent to India via Embassy/Consulate for local use and validation.",
    },
    {
      step: "06 - Preparing Sale Deed",
      text: "Drafting detailed sale deed ensuring clear title, terms, and legal compliance.",
    },
    {
      step: "07 - Property Valuation",
      text: "Assess fair market value of property for stamp duty and legal documentation.",
    },
    {
      step: "08 - Query Generation",
      text: "Initiate process with Registrar’s office for official property transaction queries.",
    },
    {
      step: "09 - Stamp Duty Payment",
      text: "Calculate and arrange stamp duty payment as per state rules; reconcile documents for registration.",
    },
    {
      step: "10 - Deed Registration",
      text: "Register sale deed at local Registrar office using POA on behalf of NRI and hand over verified copies.",
    },
  ];

  return (
    <main className="bg-white text-[#0b0b09]">
      <section className="relative bg-[#0b0b09] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/20 via-[#0b0b09] to-[#0b0b09]" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <h1
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            NRI Property & Real Estate Legal Services
          </h1>
          <p className="text-neutral-300 max-w-2xl text-lg">
            Complete end-to-end support for NRIs: POA drafting and execution abroad, embassy attestation, remote sale deed preparation and registration through authorised representatives.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#d4a373] text-[#0b0b09] font-medium px-8 py-3 rounded-full hover:bg-[#c18c59] transition-all shadow-md"
            >
              Request NRI Assistance
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">NRI Services</p>
            <h2 className="font-playfair text-3xl md:text-4xl mt-3 font-semibold">Tailored services for NRIs</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              We manage the entire NRI workflow—right from drafting POA to registration and handover—ensuring compliance, embassy coordination and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nriServices.map((s, idx) => (
              <div key={idx} className="p-7 rounded-2xl border border-[#eee] bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-neutral-600 text-[15px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">Step-by-step Workflow</p>
            <h2 className="font-playfair text-3xl md:text-4xl mt-3 font-semibold">NRI Property Registration via Power of Attorney</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Clear stages and what to expect at each step — designed for NRIs who need dependable remote support.
            </p>
          </div>

          <div className="space-y-6">
            {workflowSteps.map((w, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#eee] bg-white shadow-sm flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f7f2e6] text-[#b8962e] font-semibold text-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{w.step}</h4>
                  <p className="text-neutral-600">{w.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-neutral-500">
            <p className="mb-2">Additional considerations:</p>
            <ul className="list-disc list-inside text-neutral-500">
              <li>Development agreements and special builder executions may require personal appearance abroad or specific embassy processes.</li>
              <li>In cases where property owners must execute documents abroad, we provide detailed guidance and local embassy liaison support.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b09] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#d4a373]">Why NRIs choose us</h3>
              <h2 className="font-playfair text-3xl md:text-4xl mt-3 font-semibold text-white">Secure, Compliant & Remote-Ready</h2>
              <p className="mt-4 text-neutral-300">
                Our NRI services combine legal expertise with embassy coordination and reliable couriering to ensure documents are valid, compliant and usable in India.
              </p>

              <ul className="mt-6 space-y-3 text-neutral-300">
                <li>• POA drafting & attestation guidance</li>
                <li>• Embassy coordination and document return logistics</li>
                <li>• Registration via authorized representatives using POA</li>
              </ul>

              <div className="mt-6">
                <Link href="/contact" className="inline-block bg-[#d4a373] text-[#0b0b09] px-6 py-3 rounded-full font-medium shadow-md">
                  Start your NRI Case
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-[#0b0b09]">Documents commonly required</h4>
              <ul className="text-neutral-700 space-y-3">
                <li>• Proof of identity (passport/ Aadhaar/ PAN)</li>
                <li>• Proof of ownership (previous sale deed/ title documents)</li>
                <li>• Power of Attorney (executed & attested)</li>
                <li>• No-objection certificates (if applicable)</li>
                <li>• Bank/loan documents (if loan/settlement involved)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PracticeAreas />

      <FounderSection />

      <TestimonialsCarousel />

      <section className="bg-white py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h3 className="font-playfair text-2xl text-[#0b0b09] mb-4">Ready to begin?</h3>
          <p className="text-neutral-600 mb-6">Request our NRI intake form and we'll guide you step-by-step — from POA drafting to deed registration.</p>
          <Link href="/contact" className="inline-block bg-[#d4a373] text-[#0b0b09] px-8 py-3 rounded-full font-medium shadow-md">
            Request NRI Assistance
          </Link>
        </div>
      </section>
    </main>
  );
}
