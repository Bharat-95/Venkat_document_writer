// components/TestimonialsCarousel.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    text: "“P Venkat Rao Legal Associates made my property registration smooth and stress-free. Their team handled everything with professionalism.”",
    name: "Rajesh Kumar",
  },
  {
    text: "“Excellent guidance for my NRI Power of Attorney process. They coordinated with the embassy and ensured all documentation was perfect.”",
    name: "Priya Nair",
  },
  {
    text: "“I was impressed by their clear explanations and transparency throughout my property verification process.”",
    name: "Karthik Reddy",
  },
  {
    text: "“The team helped me draft and register my Sale Deed without any hassle. Truly trustworthy and efficient service.”",
    name: "Sneha Patel",
  },
  {
    text: "“Their expertise in real estate law is exceptional. I highly recommend them for all property documentation needs.”",
    name: "Arvind Rao",
  },
  {
    text: "“As an NRI, I found their end-to-end support invaluable. From POA drafting to property registration, they managed everything professionally.”",
    name: "Deepa Menon",
  },
];

export default function TestimonialsCarousel() {
  const AUTOPLAY_MS = 3000;
  const TRANSITION_MS = 600;
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const slides = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, visible)];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransitionOn(true);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [visible]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnd = () => {
      if (index >= TESTIMONIALS.length) {
        setTransitionOn(false);
        setIndex(0);
      }
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, visible]);

  useEffect(() => {
    if (!transitionOn) {
      const t = setTimeout(() => setTransitionOn(true), 40);
      return () => clearTimeout(t);
    }
  }, [transitionOn]);

  const slidesCount = slides.length;
  const containerWidthPercent = (slidesCount * 100) / visible;
  const itemWidthPercent = 100 / slidesCount;
  const translatePercent = -(index * itemWidthPercent);

  return (
    <section className="w-full bg-[#0b0b09] text-white py-20 border-t border-[#1a1a1a]">
      <h3 className="text-center font-playfair text-3xl lg:text-4xl pb-10 text-[#d4a373] uppercase tracking-wide">
        Client Testimonials
      </h3>

      <div className="overflow-hidden w-full border-y border-white/50">
        <div
          ref={containerRef}
          className="flex border-l border-white/50"
          style={{
            width: `${containerWidthPercent}%`,
            transform: `translateX(${translatePercent}%)`,
            transition: transitionOn ? `transform ${TRANSITION_MS}ms ease` : "none",
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col justify-center items-center text-center px-10 py-14 min-h-[360px] border-r border-border-white/50 bg-[#11110e] hover:bg-[#151412] transition-all duration-300"
              style={{ width: `${100 / slidesCount}%` }}
            >
              <blockquote className="text-[18px] md:text-[20px] leading-relaxed text-neutral-200 italic mb-8">
                {s.text}
              </blockquote>
              <p className="text-sm font-medium text-[#d4a373]">{s.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
        }
        @media (max-width: 1024px) {
          .min-h-[360px] {
            min-height: 300px;
          }
        }
        @media (max-width: 768px) {
          .min-h-[360px] {
            min-height: 260px;
          }
          .text-[18px] {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
