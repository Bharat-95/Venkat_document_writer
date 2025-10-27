"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const images = ["/Hero.jpg", "/Hero1.jpg", "/Hero2.jpg"];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const delay = 3000;

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, delay);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, images.length]);

  function goTo(n) {
    setIndex(((n % images.length) + images.length) % images.length);
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  return (
    <section className="bg-[#0b0b09] text-white py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="font-playfair text-5xl md:text-5xl lg:text-4xl leading-tight md:leading-tight tracking-tight mb-4">
              Your Trusted
              <br />
              Property Documentation Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-serif max-w-xl">
              Expert guidance in property documentation, Power of Attorney
              facilitation, and registration support for NRIs.
            </p>
          </div>

          {/* IMAGE SLIDER */}
          <div
            className="bg-transparent w-full overflow-hidden rounded-sm shadow relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-roledescription="carousel"
          >
            <div className="w-full h-[350px] border border-transparent relative">
              {images.map((src, i) => (
                <div
                  key={src + i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  aria-hidden={i !== index}
                >
                  <Image
                    src={src}
                    alt={`Hero image ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                    className="block"
                  />
                </div>
              ))}

              {/* Navigation */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-md hover:bg-black/60"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-md hover:bg-black/60"
                aria-label="Next slide"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === index ? "scale-110 bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <aside className="flex justify-center lg:justify-end">
          <div
            className="bg-[#d8dcd7] text-black w-full max-w-md lg:max-w-xl p-10 md:p-12 rounded-md"
            style={{ boxSizing: "border-box" }}
          >
            <h2 className="font-playfair text-2xl md:text-3xl text-[#0b0b09] mb-8">
              Contact Us
            </h2>

            <form className="space-y-6 text-sm" onSubmit={(e) => e.preventDefault()}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-[#0b0b09]">
                    First name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-[#0b0b09] bg-transparent py-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-[#0b0b09]">
                    Last name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-[#0b0b09] bg-transparent py-2 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-[#0b0b09]">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="w-full border-b border-[#0b0b09] bg-transparent py-2 focus:outline-none"
                />
              </div>

              {/* Service Area */}
              <div>
                <label className="block mb-2 font-medium text-[#0b0b09]">
                  Choose Service Area
                </label>
                <select className="w-full border-b border-[#0b0b09] bg-transparent py-2 focus:outline-none">
                  <option value="">Select a service</option>
                  <option>Property Report (Title Search, EC, Litigation Check)</option>
                  <option>Agreement to Sale</option>
                  <option>Sale Deed Preparation</option>
                  <option>Loan Settlement Assistance</option>
                  <option>Property Search & Verification</option>
                  <option>Property Registration Support</option>
                  <option>Property Mutation / Transfer</option>
                  <option>First-Time Property Buyer Assistance</option>
                  <option>Relinquishment Deed</option>
                  <option>Gift Deed</option>
                  <option>Certified True Copy</option>
                  <option>Will & Trust Documentation</option>
                  <option>Birth / Marriage Certificate Assistance</option>
                  <option>Power of Attorney (POA) Execution</option>
                  <option>Development Agreement Drafting</option>
                  <option>Rental Agreement</option>
                  <option>Property Valuation Coordination</option>
                  <option>Deed Registration (NRI / Domestic)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-5 font-medium text-[#0b0b09]">
                  Write a message
                </label>
                <textarea
                  rows={4}
                  className="w-full border p-2 rounded-md border-[#0b0b09] bg-transparent py-2 focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#0b0b09] text-white px-5 py-2 text-sm hover:opacity-90 transition cursor-pointer hover:bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e] hover:text-black font-semibold rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
