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
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isPaused, images.length]);

  function goTo() {
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
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl leading-tight tracking-tight mb-4">
              Your Trusted
              <br />
              Property Documentation Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Expert guidance in property documentation, Power of Attorney
              facilitation, and registration support for NRIs — seamless,
              secure, and reliable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-3 bg-[#f5e7c5] text-[#0b0b09] px-6 py-3 rounded-md font-semibold shadow hover:scale-[1.01] transition"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-md text-sm hover:bg-white/5 transition"
            >
              How it works
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-lg p-4">
              <div className="text-sm text-gray-300">Turnaround</div>
              <div className="text-2xl font-semibold">24–48 hrs</div>
              <div className="text-xs text-gray-400 mt-1">for simple docs</div>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-lg p-4">
              <div className="text-sm text-gray-300">Trusted</div>
              <div className="text-2xl font-semibold">5,000+</div>
              <div className="text-xs text-gray-400 mt-1">cases handled</div>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-lg p-4">
              <div className="text-sm text-gray-300">Support</div>
              <div className="text-2xl font-semibold">24/7</div>
              <div className="text-xs text-gray-400 mt-1">global assistance</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="text-xs text-gray-400">As seen in</div>
            <div className="flex gap-4 items-center">
              <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-xs text-gray-200">
                The Ledger
              </div>
              <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-xs text-gray-200">
                Global Estates
              </div>
              <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-xs text-gray-200">
                NRI Times
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-transparent w-full overflow-hidden rounded-sm shadow relative min-h-[350px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
        >
          <div className="w-full h-[420px] md:h-[480px] border border-transparent relative">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute left-6 bottom-6 text-white max-w-[70%]">
                  <div className="bg-black/40 inline-block px-3 py-1 rounded text-xs mb-2">
                    Trusted Experts
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold">
                    Comprehensive Title & Registration Support
                  </h3>
                  <p className="text-sm text-gray-200/80 mt-1 hidden md:block">
                    From title search to POA execution — we handle the paperwork,
                    so you don't have to.
                  </p>
                </div>
              </div>
            ))}

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
    </section>
  );
}
