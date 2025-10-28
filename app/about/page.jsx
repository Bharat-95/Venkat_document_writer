"use client";

import React, { useEffect, useRef } from "react";
import AboutSection from "../../components/About";
import FounderSection from "../../components/Founder";
import TestimonialsCarousel from "../../components/Testimonials";
import { motion, useInView, useAnimation } from "framer-motion";

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

  // Section refs + inView + controls (repeatable on enter)
  const founderAnimRef = useRef(null);
  const founderInView = useInView(founderAnimRef, { threshold: 0.22, once: false });
  const founderControls = useAnimation();

  const howRef = useRef(null);
  const howInView = useInView(howRef, { threshold: 0.22, once: false });
  const howControls = useAnimation();

  const workflowRef = useRef(null);
  const workflowInView = useInView(workflowRef, { threshold: 0.18, once: false });
  const workflowControls = useAnimation();

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { threshold: 0.22, once: false });
  const missionControls = useAnimation();

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { threshold: 0.3, once: false });
  const ctaControls = useAnimation();

  // Start/Reset animations when in/out of view (so they replay on re-entry)
  useEffect(() => {
    if (founderInView) founderControls.start("visible");
    else founderControls.start("hidden");
  }, [founderInView, founderControls]);

  useEffect(() => {
    if (howInView) howControls.start("visible");
    else howControls.start("hidden");
  }, [howInView, howControls]);

  useEffect(() => {
    if (workflowInView) workflowControls.start("visible");
    else workflowControls.start("hidden");
  }, [workflowInView, workflowControls]);

  useEffect(() => {
    if (missionInView) missionControls.start("visible");
    else missionControls.start("hidden");
  }, [missionInView, missionControls]);

  useEffect(() => {
    if (ctaInView) ctaControls.start("visible");
    else ctaControls.start("hidden");
  }, [ctaInView, ctaControls]);

  //
  // Variants — each section has a distinct, trendy animation and longer durations
  //

  // Founder: slow parallax + fade + scale with slight rotation (cinematic)
  const founderContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  };
  const founderImg = {
    hidden: { opacity: 0, y: 24, scale: 0.96, rotate: -2 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } },
  };
  const founderText = {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.95, ease: "easeOut" } },
  };

  // How we work: diagonal entrance + skew + soft "wobble" to feel energetic
  const howContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const howCard = {
    hidden: { opacity: 0, y: 36, x: -10, skewY: 6, scale: 0.98 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      x: 0,
      skewY: 0,
      scale: 1,
      transition: {
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.12,
        type: "spring",
        stiffness: 80,
        damping: 18,
      },
    }),
    hover: {
      y: -10,
      rotate: [0, -1.6, 1.6, 0],
      scale: 1.03,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  // Workflow: SVG path drawing (timed) + items "slide up + fade" in sequence
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: "easeInOut", delay: 0.12 } },
  };
  const workflowItem = {
    hidden: { opacity: 0, y: 36, rotate: -3, scale: 0.995 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.85, ease: "easeOut", delay: i * 0.06 + 0.18 },
    }),
  };

  // Mission & Purpose: depth entrance with rotateY and subtle bounce — staggered
  const missionCard = {
    hidden: { opacity: 0, rotateY: 24, y: 18, scale: 0.985 },
    visible: (i = 0) => ({
      opacity: 1,
      rotateY: 0,
      y: 0,
      scale: 1,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: i * 0.12, type: "spring", stiffness: 70, damping: 16 },
    }),
    hover: {
      rotateY: 8,
      scale: 1.02,
      boxShadow: "0 22px 56px rgba(0,0,0,0.32)",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  // CTA: slow pop + pulse when visible
  const ctaVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: "easeOut", staggerChildren: 0.06 },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* Founder section — cinematic reveal */}
      <motion.section
        ref={founderAnimRef}
        initial="hidden"
        animate={founderControls}
        variants={founderContainer}
        className="overflow-hidden"
      >
        <section ref={founderRef}>
          <div className="bg-gradient-to-b from-white to-[#f9f7f4] text-[#0b0b09] py-12 lg:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={founderImg} className="flex justify-center relative">
                <div className="relative lg:w-[380px] lg:h-[380px] md:w-[380px] md:h-[380px] w-[320px] h-[320px] rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="/Founder.jpeg"
                    alt="P Venkat Rao"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#d4a373]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              <motion.div variants={founderText}>
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
                  <a
                    href="/contact"
                    className="inline-block bg-[#d4a373] hover:bg-[#c18c59] text-[#0b0b09] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
                  >
                    Book a Consultation
                  </a>
                </div>

                <blockquote className="mt-8 text-neutral-600 italic border-l-4 border-[#d4a373] pl-5 text-[15px] leading-relaxed">
                  “Every property transaction deserves clarity and confidence.
                  My mission is to make legal services accessible, transparent, and efficient
                  for every client—whether in India or abroad.”
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.section>

      {/* HOW WE WORK — diagonal / skew entrance, energetic hover */}
      <motion.section
        ref={howRef}
        initial="hidden"
        animate={howControls}
        variants={howContainer}
        className="bg-[#0b0b09] text-white py-20 lg:py-28"
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373]">HOW WE WORK</p>
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
              <motion.div
                key={idx}
                custom={idx}
                variants={howCard}
                initial="hidden"
                animate={howControls}
                whileHover="hover"
                className="p-8 rounded-2xl border border-[#1a1a1a] bg-[#11110e] text-center transition-all"
                style={{ willChange: "transform, opacity", transformStyle: "preserve-3d" }}
              >
                <div className="text-5xl font-bold text-[#d4a373] mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WORKFLOW — SVG draw + items slide/fade (timed so animation is visible) */}
      <motion.section
        ref={workflowRef}
        initial="hidden"
        animate={workflowControls}
        className="bg-[#f8f7f3] py-20"
      >
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

          <div className="relative">
            <svg
              viewBox="0 0 800 600"
              className="absolute right-[-10%] top-0 w-[60%] h-full pointer-events-none opacity-20"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 60 40 C 220 120, 120 240, 260 320 C 380 400, 200 460, 520 540"
                fill="none"
                stroke="#d4a373"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 6"
                variants={pathVariants}
                initial="hidden"
                animate={workflowControls}
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
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
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={workflowItem}
                  initial="hidden"
                  animate={workflowControls}
                  className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <h4 className="font-semibold text-[#0b0b09] mb-2">{p.step}</h4>
                  <p className="text-neutral-600 text-sm">{p.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* MISSION & PURPOSE — 3D rotateY entrance + hover depth */}
      <motion.section
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        className="bg-[#0b0b09] text-white py-20 relative overflow-hidden"
      >
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ perspective: 1400 }}>
            {[
              {
                title: "Our Mission",
                desc: "To simplify NRI property documentation and registration through clear processes, reliable facilitation and timely communication.",
              },
              {
                title: "Our Vision",
                desc: "To be the most trusted document-writing and facilitation partner for NRIs managing property transactions in India.",
              },
              {
                title: "Our Values",
                desc: "• Transparency in every interaction.\n• Accuracy in document preparation.\n• Respect for client timelines and confidentiality.",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={missionCard}
                initial="hidden"
                animate={missionControls}
                whileHover="hover"
                className="p-8 bg-[#111111] rounded-2xl border border-[#2a2a28]"
                style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
              >
                <h3 className="text-xl font-semibold text-[#d4a373] mb-3">{m.title}</h3>
                <p className="text-neutral-300 leading-relaxed text-[15px] whitespace-pre-line">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA — slow pop + subtle pulse so it's visible */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaControls}
        className="bg-[#0b0b09] py-20 text-center"
      >
        <div className="max-w-[800px] mx-auto px-6">
          <motion.h2
            className="font-playfair text-4xl md:text-5xl font-semibold mb-6"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            variants={ctaVariants}
          >
            Need help with POA, documents or registration?
          </motion.h2>

          <motion.p className="text-neutral-300 mb-8" variants={ctaVariants} transition={{ delay: 0.08 }}>
            We handle document drafting, attestation facilitation, and all the coordination needed to register property in India on behalf of NRIs.
          </motion.p>

          <motion.a
            href="/contact"
            className="inline-block bg-[#d4a373] text-[#0b0b09] font-medium px-8 py-3 rounded-full hover:bg-[#c18c59] transition-all shadow-md hover:shadow-lg"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={ctaControls}
            whileHover={{ scale: 1.03 }}
            variants={{
              hidden: { scale: 0.98, opacity: 0 },
              visible: {
                scale: [1, 1.04, 1],
                opacity: 1,
                transition: { duration: 1.0, delay: 0.12, ease: "easeInOut" },
              },
            }}
          >
            Request Assistance
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
