// components/Footer.jsx
"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Sony+Complex%2C+20%2C+TGIIC+Rd%2C+Prashant+Nagar%2C+Prashanti+Nagar%2C+IDA+Kukatpally%2C+Kukatpally%2C+Hyderabad%2C+Telangana+500037";

  return (
    <footer className="relative bg-[#0b0b09] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b09] via-[#141310] to-transparent opacity-90 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-playfair text-3xl font-bold text-[#d4a373] mb-4">
            P Venkat Rao
          </h3>
          <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">
            Simplifying property and NRI legal processes with expertise,
            precision, and trust. Dedicated to providing transparent legal
            solutions for every client.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4a373] text-[#0b0b09] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#c18c59] transition-all shadow-md hover:shadow-lg"
          >
            Book a Consultation
          </Link>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#d4a373] mb-4 uppercase tracking-wide">
            Explore
          </h4>
          <ul className="space-y-3 text-[15px] text-neutral-400">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="relative group inline-block hover:text-[#d4a373] transition-all duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#d4a373] mb-4 uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-4 text-[15px] text-neutral-400">
            <li>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#d4a373] transition-all"
                aria-label="Open address in Google Maps"
              >
                <div className="bg-[#1a1a1a] p-2 rounded-md text-[#d4a373]">
                  <FaMapMarkerAlt />
                </div>
                <span>
                  Sony Complex, 20, TGIIC Rd, Prashant Nagar, Prashanti Nagar, IDA
                  Kukatpally, Kukatpally, Hyderabad, Telangana 500037
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#1a1a1a] p-2 rounded-md text-[#d4a373]">
                <FaPhoneAlt />
              </div>
              <a href="tel:+919347031611" className="hover:text-[#d4a373] transition-all">
                +91 93470 31611
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#1a1a1a] p-2 rounded-md text-[#d4a373]">
                <FaEnvelope />
              </div>
              <a href="mailto:contact@pvrao.legal" className="hover:text-[#d4a373] transition-all">
                contact@pvrao.legal
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#d4a373] mb-4 uppercase tracking-wide">
            Connect
          </h4>
          <p className="text-neutral-400 text-[15px] mb-5">
            Follow us on social media for updates and insights.
          </p>
          <div className="flex items-center gap-4">
            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="group w-10 h-10 rounded-full flex items-center justify-center bg-[#1a1a1a] text-[#d4a373] hover:bg-[#d4a373] hover:text-[#0b0b09] transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="social-link"
              >
                <Icon className="text-[16px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 max-w-[1200px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4a373]/50 to-transparent"></div>

      <div className="relative z-10 text-center text-neutral-500 text-[14px] mt-8 px-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#d4a373] font-medium">P Venkat Rao Legal Associates</span>{" "}
          — All Rights Reserved.
        </p>
       
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4a373]/10 blur-3xl rounded-full opacity-70"></div>
    </footer>
  );
}
