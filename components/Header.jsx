"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

const Header = () => {
  const pathname = usePathname();
  const [panelOpen, setPanelOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Determine active routes
  const isActive = (path) => pathname === path;
  const isServicesActive = pathname && pathname.startsWith("/services");

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  // Close mobile panel when route changes (optional nice-to-have)
  useEffect(() => {
    setPanelOpen(false);
  }, [pathname]);

  // utility classes
  const linkBase = "text-sm font-medium transition-all";
  const activeClass = "text-[#d4a373] font-semibold";
  const inactiveClass = "text-white/90 hover:text-[#d4a373]";

  return (
    <>
      {/* TOP NAVBAR */}
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

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              <Link
                href="/"
                className={`${linkBase} ${isActive("/") ? activeClass : inactiveClass}`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`${linkBase} ${isActive("/about") ? activeClass : inactiveClass}`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About
              </Link>

              {/* Services dropdown with outside click detection */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  className={`flex items-center gap-1 text-sm font-medium transition-all ${
                    isServicesActive ? activeClass : inactiveClass
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  {servicesOpen ? (
                    <HiChevronUp className="w-4 h-4" />
                  ) : (
                    <HiChevronDown className="w-4 h-4" />
                  )}
                </button>

                {servicesOpen && (
                  <ul className="absolute right-0 mt-3 w-52 bg-[#0b0b09] border border-white/10 rounded-lg shadow-xl py-2 animate-fadeIn">
                    <li>
                      <Link
                        href="/services/india"
                        onClick={() => setServicesOpen(false)}
                        className={`block px-4 py-2 text-sm ${
                          isActive("/services/india") ? "text-[#d4a373] font-semibold" : "text-white/90 hover:bg-[#151412] hover:text-[#d4a373]"
                        }`}
                        aria-current={isActive("/services/india") ? "page" : undefined}
                      >
                        India Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/nri"
                        onClick={() => setServicesOpen(false)}
                        className={`block px-4 py-2 text-sm ${
                          isActive("/services/nri") ? "text-[#d4a373] font-semibold" : "text-white/90 hover:bg-[#151412] hover:text-[#d4a373]"
                        }`}
                        aria-current={isActive("/services/nri") ? "page" : undefined}
                      >
                        NRI Services
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <Link
                href="/contact"
                className={`${linkBase} ${isActive("/contact") ? activeClass : inactiveClass}`}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="ml-4 inline-block bg-[#d4a373] hover:bg-[#c18c59] text-[#0b0b09] px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Book Consultation
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              aria-label={panelOpen ? "Close menu" : "Open menu"}
              onClick={() => setPanelOpen((v) => !v)}
              className="p-2 md:hidden rounded focus:outline-none transition-all hover:scale-105"
            >
              {panelOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile */}
      {panelOpen && (
        <div
          onClick={() => setPanelOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        />
      )}

      {/* MOBILE MENU PANEL */}
      <div
        aria-hidden={!panelOpen}
        className={`fixed top-0 left-0 w-full bg-[#0b0b09] text-white z-50 shadow-xl transform transition-transform duration-500 ease-in-out md:hidden
        ${panelOpen ? "translate-y-0" : "-translate-y-full"}
        h-[100vh] border-b border-white/10`}
      >
        <div className="flex flex-col h-full">
          <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
            <span
              className="font-serif text-xl bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e] text-[#0b0b09] px-4 py-1 rounded-md font-semibold shadow-md"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
              }}
            >
              P Venkat Rao
            </span>
            <button aria-label="Close menu" onClick={() => setPanelOpen(false)} className="p-2 rounded focus:outline-none hover:bg-white/10 transition-all">
              <HiOutlineX className="w-6 h-6" />
            </button>
          </div>

          <nav className="px-10 py-10 flex-1 overflow-auto">
            <ul className="space-y-8">
              <li>
                <Link
                  href="/"
                  onClick={() => setPanelOpen(false)}
                  className={`block font-playfair text-2xl leading-snug transition-all ${isActive("/") ? "text-[#d4a373] font-semibold" : "hover:text-[#d4a373]"}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setPanelOpen(false)}
                  className={`block font-playfair text-2xl leading-snug transition-all ${isActive("/about") ? "text-[#d4a373] font-semibold" : "hover:text-[#d4a373]"}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setServicesOpen((s) => !s)}
                    aria-expanded={servicesOpen}
                    aria-controls="services-submenu"
                    className={`flex items-center gap-3 font-playfair text-2xl leading-snug transition-all ${isServicesActive ? "text-[#d4a373] font-semibold" : "hover:text-[#d4a373]"}`}
                  >
                    Services
                    {servicesOpen ? <HiChevronUp className="w-5 h-5" /> : <HiChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                <ul
                  id="services-submenu"
                  className={`mt-3 ml-5 space-y-3 transition-all duration-500 ${
                    servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <li>
                    <Link
                      href="/services/india"
                      onClick={() => {
                        setPanelOpen(false);
                        setServicesOpen(false);
                      }}
                      className={`block text-base font-medium ${isActive("/services/india") ? "text-[#d4a373] font-semibold" : "text-neutral-300 hover:text-[#d4a373]"}`}
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
                      className={`block text-base font-medium ${isActive("/services/nri") ? "text-[#d4a373] font-semibold" : "text-neutral-300 hover:text-[#d4a373]"}`}
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
                  className={`block font-playfair text-2xl leading-snug transition-all ${isActive("/contact") ? "text-[#d4a373] font-semibold" : "hover:text-[#d4a373]"}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
