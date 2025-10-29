"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.2 }); // re-triggers on every entry
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const badgeControls = useAnimation();

  useEffect(() => {
    if (inView) {
      leftControls.start("visible");
      rightControls.start("visible");
      badgeControls.start("visible");
    } else {
      // reset so animation plays again on re-entry
      leftControls.start("hidden");
      rightControls.start("hidden");
      badgeControls.start("hidden");
    }
  }, [inView, leftControls, rightControls, badgeControls]);

  const leftVariant = {
    hidden: { opacity: 0, x: -120, scale: 0.995 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 120, scale: 0.995 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
    },
  };

  const badgeVariant = {
    hidden: { opacity: 0, scale: 0.85, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut", delay: 0.18 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0b09] text-white py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          animate={leftControls}
        >
          {/* small label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#d4a373]/20 text-[#d4a373] text-lg font-serif">
              🏛️
            </div>
            <p className="italic text-[#d4a373] text-sm">About Our Services</p>
          </div>

          {/* headline */}
          <h2 className="font-playfair text-4xl md:text-4xl lg:text-5xl leading-[1.1] mb-6">
            Your trusted partners in{" "}
            <span className="italic text-[#d4a373] font-semibold">
              Property & Documentation Services for NRIs
            </span>
          </h2>

          {/* paragraph */}
          <p className="text-neutral-300 text-[16px] leading-relaxed max-w-[600px] mb-8">
            At{" "}
            <span className="text-[#d4a373] font-semibold">
              P Venkat Rao Document Writers
            </span>
            , we specialize in property documentation, Power of Attorney (POA)
            facilitation, and registration support for NRIs. Our team ensures
            every process — from drafting and attestation to registration — is
            handled with precision, transparency, and reliability. We simplify
            complex documentation procedures so clients can complete property
            transactions smoothly and confidently.
          </p>

          {/* bullet points */}
          <ul className="space-y-3 mb-10 text-[15px] text-neutral-200">
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] mt-[2px]">✓</span>
              <span>
                Specialized in property documentation, registration, and Power
                of Attorney preparation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] mt-[2px]">✓</span>
              <span>
                Assistance for NRIs in embassy attestation, POA execution, and
                property registration coordination.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a373] mt-[2px]">✓</span>
              <span>
                Transparent, reliable, and client-focused service at every
                stage.
              </span>
            </li>
          </ul>

          <Link
            href="/services/nri"
            className="bg-[#d4a373] text-[#0b0b09] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#c3925f] transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        {/* RIGHT IMAGE with badge */}
        <motion.div
          className="relative"
          variants={rightVariant}
          initial="hidden"
          animate={rightControls}
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/About.png" // Update your About image here
              alt="Property documentation services for NRIs"
              width={700}
              height={800}
              className="w-full h-[520px] object-cover rounded-lg"
              priority
            />
          </div>

          {/* Badge overlay */}
          <motion.div
            className="absolute bottom-8 left-8 bg-[#d4a373] text-[#0b0b09] p-6 rounded-lg shadow-lg"
            variants={badgeVariant}
            initial="hidden"
            animate={badgeControls}
          >
            <div className="text-5xl font-bold leading-none">10+</div>
            <div className="text-sm font-serif italic mt-1">
              Years of Documentation Experience
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
