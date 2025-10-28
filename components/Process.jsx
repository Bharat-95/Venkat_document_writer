// components/ProcessSection.jsx
"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      title: "Share Your Details",
      desc: "Start by providing your property or NRI requirements through our quick form or by calling us directly.",
      icon: "📋",
    },
    {
      title: "Documentation & Preparation",
      desc: "Our experts verify title, draft agreements, and handle compliance with utmost precision and clarity.",
      icon: "⚖️",
    },
    {
      title: "Registration & Completion",
      desc: "We manage registration, attestation, and delivery of your documents—completing the process efficiently.",
      icon: "🏛️",
    },
  ];

  // Framer Motion: section in-view & controls (replay on re-entry)
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.18 }); // not once:true so it replays
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.06,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 24, rotate: -1 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#faf8f6] text-[#0b0b09] py-10 lg:py-10"
    >
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
            property and NRI documentation needs.
          </p>
        </div>

        {/* Animated container */}
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          variants={containerVariant}
          initial="hidden"
          animate={controls}
        >
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              className="group p-8 rounded-2xl shadow-md bg-white border border-[#eee] hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              variants={itemVariant}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
