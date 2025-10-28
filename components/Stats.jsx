// components/StatsSection.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * useCountUp(startFlag, target, duration)
 * - starts counting from 0 -> target when startFlag is true
 * - resets to 0 when startFlag is false (so it can replay)
 */
function useCountUp(startFlag, target, duration = 1400) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // If not started, reset value and cancel any running RAF
    if (!startFlag) {
      setValue(0);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    let start = null;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target); // ensure exact target at end
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [startFlag, target, duration]);

  return value;
}

function Stat({ label, value, suffix = "", start }) {
  const animated = useCountUp(start, value, 1400);
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#d4a373] tracking-tight">
        {animated}
        <span className="text-2xl md:text-3xl font-semibold text-[#f1c98a]">
          {suffix}
        </span>
      </div>
      <div className="mt-3 text-[15px] text-neutral-300 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { label: "Years of Legal Expertise", value: 10, suffix: "+" },
    { label: "Documents Processed", value: 2500, suffix: "+" },
    { label: "NRI Clients Served", value: 300, suffix: "+" },
    { label: "Successful Registrations", value: 1800, suffix: "+" },
  ];

  // IntersectionObserver to trigger counting when section is in view
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            // Reset so it can replay when user scrolls back
            setInView(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(sectionRef.current);

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#0b0b09] via-[#141310] to-[#1c1b18] text-white py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#d4a373]">
            Our Track Record
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl mt-4 font-bold leading-tight text-white">
            Proven Experience. Trusted by Clients.
          </h2>
          <p className="mt-5 text-neutral-400 max-w-2xl mx-auto text-[15px]">
            Excellence in documentation, registration, and NRI Documentation services — built on precision and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-10 bg-[#12110e]/70 border border-[#2d2b27] rounded-2xl shadow-lg shadow-black/30 hover:scale-[1.03] transition-transform duration-300"
            >
              <Stat label={s.label} value={s.value} suffix={s.suffix} start={inView} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#d4a373] hover:bg-[#c18c59] text-[#0b0b09] px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
