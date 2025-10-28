"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const PracticeAreas = () => {
  const areas = [
    {
      title: "Property Documentation",
      desc: "Preparation and registration of Sale Deeds, Agreements to Sale, Gift Deeds, and Relinquishment Deeds ensuring legal compliance.",
    },
    {
      title: "Title & Legal Verification",
      desc: "Comprehensive Property Reports including Title Search, Encumbrance Certificate (EC), Government Approvals, and Litigation Checks.",
    },
    {
      title: "Property Registration & Mutation",
      desc: "Assistance with registration of property, transfer of ownership, and mutation of land or flats with respective government authorities.",
    },
    {
      title: "Loan & Settlement Support",
      desc: "End-to-end assistance for Loan Settlement, verification of loan documents, and release or closure of registered mortgage deeds.",
    },
    {
      title: "NRI Real Estate Services",
      desc: "Expert guidance for NRIs on executing Power of Attorney, property purchases, sale, registration, and legal compliance through consulates.",
    },
    {
      title: "Developer / Builder Legal Support",
      desc: "Legal assistance for builders and developers including drafting Development Agreements, MOUs, and property joint ventures.",
    },
    {
      title: "First-Time Buyer Guidance",
      desc: "Step-by-step support for first-time property buyers — from legal due diligence to documentation and registration formalities.",
    },
    {
      title: "Trusts, Wills & Certificates",
      desc: "Drafting and registration of Wills and Trust Deeds, and assistance in obtaining Birth, Marriage, and Certified True Copies.",
    },
  ];

  // left panel controls
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.25 });
  const leftControls = useAnimation();

  useEffect(() => {
    if (inView) leftControls.start("visible");
    else leftControls.start("hidden");
  }, [inView, leftControls]);

  const leftVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // per-tile animation: pop + rotate + fade (gives a distinct non-slide feel)
  const tileVariant = {
    hidden: { opacity: 0, scale: 0.96, rotateX: -12, rotate: -4 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 28,
        mass: 0.6,
        delay: i * 0.06 + 0.08,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="bg-white text-[#0b0b09]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%]">
        {/* Left Panel */}
        <motion.div
          className="bg-[#f4f4f3] px-10 py-16 lg:py-24 flex items-start"
          variants={leftVariant}
          initial="hidden"
          animate={leftControls}
        >
          <div>
            <h2 className="font-playfair text-5xl lg:text-[64px] font-bold leading-[0.95] tracking-tight text-[#111111]">
              OUR
            </h2>
            <h3 className="font-playfair text-4xl lg:text-[46px] mt-2 text-[#111111]">
              SERVICES
            </h3>
            <p className="mt-4 text-sm text-neutral-600 max-w-xs">
              Professional solutions for Property, NRI, and Real Estate documentation.
            </p>
          </div>
        </motion.div>

        {/* Right Grid */}
        <div className="px-8 md:px-12 py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 transform-preserve-3d"
                variants={tileVariant}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                // hover: small rotate + lift + deeper 3D feel
                whileHover={{ y: -6, rotate: 1.5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                style={{ perspective: 800 }}
              >
                <div className="w-3 h-3 bg-[#b8962e] mt-1 rounded-sm flex-shrink-0"></div>
                <div className="bg-white rounded-md p-3 md:p-4 shadow-sm">
                  <h4 className="text-lg font-semibold text-[#0b0b09] tracking-wide">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#3a3a3a]">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
