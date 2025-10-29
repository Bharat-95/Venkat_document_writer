"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

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

  // Hero animations
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { threshold: 0.18, once: false });
  const heroControls = useAnimation();

  // Services list animations
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    threshold: 0.18,
    once: false,
  });
  const servicesControls = useAnimation();

  // Right panel cards (list) animations
  const rightListRef = useRef(null);
  const rightListInView = useInView(rightListRef, {
    threshold: 0.18,
    once: false,
  });
  const rightListControls = useAnimation();

  // How we work animations
  const howRef = useRef(null);
  const howInView = useInView(howRef, { threshold: 0.2, once: false });
  const howControls = useAnimation();

  // Why choose items
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { threshold: 0.18, once: false });
  const whyControls = useAnimation();

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    else heroControls.start("hidden");
  }, [heroInView, heroControls]);

  useEffect(() => {
    if (servicesInView) servicesControls.start("visible");
    else servicesControls.start("hidden");
  }, [servicesInView, servicesControls]);

  useEffect(() => {
    if (rightListInView) rightListControls.start("visible");
    else rightListControls.start("hidden");
  }, [rightListInView, rightListControls]);

  useEffect(() => {
    if (howInView) howControls.start("visible");
    else howControls.start("hidden");
  }, [howInView, howControls]);

  useEffect(() => {
    if (whyInView) whyControls.start("visible");
    else whyControls.start("hidden");
  }, [whyInView, whyControls]);

  // Variants

  // Hero: slow reveal + horizontal text slide + CTA pop
  const heroContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };
  const heroTitle = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };
  const heroText = {
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const heroCTA = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: { scale: 1.03 },
  };

  // Services left panel: depth slide in
  const leftPanel = {
    hidden: { opacity: 0, x: -28, scale: 0.995 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Services list items: staggered card rise (different animation)
  const serviceItem = {
    hidden: { opacity: 0, y: 28, rotate: -1, scale: 0.995 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.85, ease: "easeOut", delay: i * 0.09 },
    }),
  };

  // Number ring animation
  const ring = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i = 0) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.65, ease: "easeOut", delay: 0.08 + i * 0.07 },
    }),
  };

  // How we work cards: skew + pop + hover tilt
  const howCard = {
    hidden: { opacity: 0, y: 40, skewY: 6, scale: 0.97 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      scale: 1,
      transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
    }),
    hover: {
      y: -8,
      rotate: [0, -1.5, 1.5, 0],
      scale: 1.02,
      transition: { duration: 0.45 },
    },
  };

  // Why choose: staggered flip-in
  const whyItem = {
    hidden: { opacity: 0, rotateX: 18, y: 12, scale: 0.985 },
    visible: (i = 0) => ({
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: "easeOut", delay: i * 0.07 },
    }),
  };

  return (
    <main className="bg-white text-[#0b0b09] overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#0b0b09] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/30 via-[#0b0b09] to-[#0b0b09] opacity-90" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            ref={heroRef}
            variants={heroContainer}
            initial="hidden"
            animate={heroControls}
          >
            <motion.h1
              variants={heroTitle}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4"
              style={{
                background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Documentation Services
            </motion.h1>

            <motion.p
              variants={heroText}
              className="text-neutral-300 max-w-2xl text-lg"
            >
              We specialize in end-to-end document drafting, legal agreements,
              and registration support across India — ensuring precision,
              compliance, and complete peace of mind.
            </motion.p>

            <div className="mt-8">
              <motion.div
                variants={heroCTA}
                whileHover="hover"
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-block bg-[#d4a373] text-[#0b0b09] font-medium px-8 py-3 rounded-full hover:bg-[#c18c59] transition-all shadow-md hover:shadow-lg"
                >
                  Get a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Documentation Support in India Section */}
      <section className="relative">
       
        {/* Split background starts here (Black 70% | White 30%) */}
        <div className="relative py-20">
          {/* Split background */}
          <div
            className="absolute inset-0 flex pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[65%] bg-[#0b0b09]" />
            <div className="w-[35%] bg-[#fafafa]" />
          </div>

          {/* Foreground content */}
          <div className="relative z-10   flex flex-col lg:flex-row gap-10 items-start max-w-[1300px] mx-auto">
            {/* LEFT: Black panel */}
            <motion.div
              ref={servicesRef}
              variants={leftPanel}
              initial="hidden"
              animate={servicesControls}
              className="flex-1 bg-[#0b0b09] text-white rounded-2xl p-10 shadow-md"
            >
              <h3 className="text-3xl font-semibold mb-6">
                Professional Document Writing Services
              </h3>

              <p className="text-neutral-300 leading-relaxed mb-4">
                At P Venkat Rao Associates, we provide accurate,
                well-structured, and professionally typed documents for all your
                personal and business requirements. Our experienced team ensures
                every document is prepared clearly, formatted properly, and
                ready for official submission.
              </p>

              <p className="text-neutral-300 leading-relaxed mb-4">
                We specialize in preparing affidavits, declarations, agreements,
                consent letters, partnership deeds, authorization letters, and
                other essential documents with precision and attention to
                detail. Every draft is created to maintain clarity and
                consistency.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                Whether you need a simple declaration or a detailed agreement, P
                Venkat Rao Associates offers fast, dependable, and affordable
                document writing services designed to make your paperwork easy
                and worry-free.
              </p>
            </motion.div>

            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden h-[600px]">
                <div
                  ref={rightListRef}
                  className="relative z-10 p-6 h-full overflow-y-auto scroll-smooth space-y-8 pr-4 scrollbar-hide"
                >
                  {keyServices.map((service, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={serviceItem}
                      initial="hidden"
                      animate={rightListControls}
                      className="relative flex items-start"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <motion.div
                        className="absolute top-10 flex items-center justify-center z-50"
                        style={{
                          transform: "translateX(-25%)",
                          width: "60px",
                          height: "60px",
                        }}
                        custom={idx}
                        variants={ring}
                        initial="hidden"
                        animate={rightListControls}
                      >
                        <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center shadow-md">
                          {/* rotating ring */}
                          <svg
                            className="absolute w-full h-full animate-spin-slow"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M50 10 A40 40 0 0 1 50 90"
                              stroke="#bcbcbc"
                              strokeWidth="3"
                              fill="none"
                            />
                            <path
                              d="M50 10 A40 40 0 0 0 50 90"
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
                      </motion.div>

                      {/* White card */}
                      <div className="bg-white rounded-2xl py-6 px-12 border border-[#eaeaea] shadow-[0_4px_10px_rgba(0,0,0,0.06)] transition-transform hover:shadow-[0_6px_14px_rgba(0,0,0,0.08)] ml-6">
                        <h4 className="text-lg font-semibold text-[#0b0b09] mb-2">
                          {service.title}
                        </h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      {/*<section className="bg-[#0b0b09] text-white py-20 lg:py-28">
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

          <div ref={howRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
              <motion.div
                key={idx}
                custom={idx}
                variants={howCard}
                initial="hidden"
                animate={howControls}
                whileHover="hover"
                className="p-8 rounded-2xl border border-[#1a1a1a] bg-[#11110e] text-center hover:shadow-md transition-all"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="text-5xl font-bold text-[#d4a373] mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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

          <div
            ref={whyRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Quick turnaround time",
              "Trusted by 2500+ clients",
              "Pan-India support",
              "End-to-end documentation services",
              "Transparent pricing structure",
              "Dedicated support team",
            ].map((point, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={whyItem}
                initial="hidden"
                animate={whyControls}
                className="flex items-center justify-center gap-3"
              >
                <CheckCircle className="text-[#d4a373] w-5 h-5" />
                <p className="text-[#0b0b09] font-medium text-sm">{point}</p>
              </motion.div>
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
