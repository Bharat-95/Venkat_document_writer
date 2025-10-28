"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

const Header = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-30 w-full bg-[#0b0b09] text-white border-b border-white/5 backdrop-blur-sm"
        aria-label="Site header"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span
                className="text-2xl md:text-3xl font-semibold tracking-wide italic bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e] text-[#0b0b09] px-5 py-1.5 rounded-md shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                }}
              >
                P Venkat Rao
              </span>
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <div className="hidden md:block text-sm font-medium text-white/90">
                Get a Free Consultation
              </div>

              <button
                aria-label={panelOpen ? "Close menu" : "Open menu"}
                onClick={() => setPanelOpen((v) => !v)}
                className="p-2 md:p-3 rounded focus:outline-none transition-all hover:scale-105"
              >
                {panelOpen ? (
                  <HiOutlineX className="w-6 h-6" />
                ) : (
                  <HiOutlineMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {panelOpen && (
        <div
          onClick={() => setPanelOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Slide Panel (Now slides from top instead of right) */}
      <div
        aria-hidden={!panelOpen}
        className={`fixed top-0 left-0 w-full bg-[#0b0b09] text-white z-50 shadow-xl transform transition-transform duration-500 ease-in-out
        ${panelOpen ? "translate-y-0" : "-translate-y-full"}
        h-[100vh] md:h-[85vh] lg:h-[80vh] border-b border-white/10`}
      >
        <div className="flex flex-col h-full">
          {/* Header inside menu */}
          <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
            <span
              className="font-serif text-xl bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e] text-[#0b0b09] px-4 py-1 rounded-md font-semibold shadow-md"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
              }}
            >
              P Venkat Rao
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setPanelOpen(false)}
              className="p-2 rounded focus:outline-none hover:bg-white/10 transition-all"
            >
              <HiOutlineX className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-10 py-10 flex-1 overflow-auto">
            <ul className="space-y-8">
              <li>
                <Link
                  href="/"
                  onClick={() => setPanelOpen(false)}
                  className="block font-playfair text-2xl md:text-3xl leading-snug hover:text-[#d4a373] transition-all"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setPanelOpen(false)}
                  className="block font-playfair text-2xl md:text-3xl leading-snug hover:text-[#d4a373] transition-all"
                >
                  About Us
                </Link>
              </li>

              {/* Services with submenu */}
              <li>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setServicesOpen((s) => !s)}
                    aria-expanded={servicesOpen}
                    aria-controls="services-submenu"
                    className="flex items-center gap-3 font-playfair text-2xl md:text-3xl leading-snug hover:text-[#d4a373] transition-all"
                  >
                    Services
                    {servicesOpen ? (
                      <HiChevronUp className="w-5 h-5" />
                    ) : (
                      <HiChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <ul
                  id="services-submenu"
                  className={`mt-3 ml-5 space-y-3 transition-all duration-500 ${
                    servicesOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <li>
                    <Link
                      href="/services/india"
                      onClick={() => {
                        setPanelOpen(false);
                        setServicesOpen(false);
                      }}
                      className="block text-base md:text-lg font-medium text-neutral-300 hover:text-[#d4a373] transition-all"
                    >
                      India Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/nri"
                      onClick={() => {
                        setPanelOpen(false);
                        setServicesOpen(false);
                      }}
                      className="block text-base md:text-lg font-medium text-neutral-300 hover:text-[#d4a373] transition-all"
                    >
                      NRI Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setPanelOpen(false)}
                  className="block font-playfair text-2xl md:text-3xl leading-snug hover:text-[#d4a373] transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer Section in Menu */}
          <div className="px-10 py-6 border-t border-white/10 text-neutral-400 text-sm">
            <p className="mb-2">📞 +91 93470 31611</p>
            <p className="mb-4">✉️ contact@pvrao.legal</p>
            <Link
              href="/contact"
              onClick={() => setPanelOpen(false)}
              className="inline-block bg-[#d4a373] hover:bg-[#c18c59] text-[#0b0b09] px-6 py-2 rounded-full text-xs font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
