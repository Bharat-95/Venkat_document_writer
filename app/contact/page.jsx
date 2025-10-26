// app/contact/page.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const GOLD_FROM = "#f5e7c5";
const GOLD_VIA = "#d4af37";
const GOLD_TO = "#b8962e";


export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    alert("Message sent successfully! Our team will reach out shortly.");
    setSubmitting(false);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <main className="bg-[#0b0b09] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#11110e] via-[#0b0b09] to-[#0b0b09]" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Let’s Connect
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you’re an NRI seeking Power of Attorney assistance or a property owner looking for seamless documentation and registration support — we’re here to help.
          </p>
        </div>

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4a373]/10 blur-[140px]" />
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 bg-[#fafafa] text-[#0b0b09]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="bg-white shadow-xl rounded-2xl p-10 border border-[#f1f1f1] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e]" />
            <h2 className="font-playfair text-2xl md:text-3xl mb-6 font-semibold">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
              >
                <option value="">Select Service</option>
                <option>Property Documentation</option>
                <option>NRI Services (POA/Embassy Attestation)</option>
                <option>Property Registration</option>
                <option>Title Verification</option>
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your requirement"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e] text-[#0b0b09] py-3 rounded-full font-semibold hover:scale-[1.02] transition-all shadow-md"
              >
                {submitting ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </div>

          {/* Info Card */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-3xl mb-3 font-semibold text-[#0b0b09]">
                Our Office
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Sony Complex, 20, TGIIC Rd, Prashant Nagar, IDA Kukatpally,
                Hyderabad, Telangana 500037
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sony+Complex%2C+Kukatpally%2C+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm border border-[#b8962e] text-[#b8962e] hover:bg-[#b8962e] hover:text-[#0b0b09] transition-all"
                >
                  Open in Google Maps
                </a>
                <a
                  href="tel:+919347031611"
                  className="px-4 py-2 rounded-full text-sm border border-[#b8962e] text-[#b8962e] hover:bg-[#b8962e] hover:text-[#0b0b09] transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[#0b0b09] mb-1">
                  Email
                </h4>
                <a
                  href="mailto:contact@pvrao.legal"
                  className="text-neutral-700 hover:text-[#b8962e]"
                >
                  contact@pvrao.legal
                </a>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0b0b09] mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+919347031611"
                  className="text-neutral-700 hover:text-[#b8962e]"
                >
                  +91 93470 31611
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-playfair text-2xl text-[#0b0b09] mb-3">
                Office Hours
              </h4>
              <ul className="text-neutral-700 space-y-1">
                <li>Mon - Fri: 10 AM – 6 PM</li>
                <li>Saturday: 10 AM – 2 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="bg-[#0b0b09] text-white rounded-2xl p-6 shadow-lg border border-[#1a1a1a] mt-10">
              <h4
                className="text-lg font-semibold mb-2"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Transparency You Can Trust
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                All communication and documentation are securely managed and
                confidential. Your data is used only to provide legal services
                you request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0b0b09] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b09]/60 to-[#0b0b09]" />
        <div className="relative z-10 max-w-[900px] mx-auto px-6">
          <h2
            className="font-playfair text-4xl md:text-5xl mb-6"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Need an urgent consultation?
          </h2>
          <p className="text-neutral-300 mb-8">
            Book a one-on-one call with our legal experts and receive clarity
            on documentation, POA or registration process.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e] text-[#0b0b09] px-10 py-3 rounded-full font-semibold hover:scale-[1.05] transition-all shadow-md"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
