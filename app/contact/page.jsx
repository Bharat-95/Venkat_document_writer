"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const GOLD_FROM = "#f5e7c5";
const GOLD_VIA = "#d4af37";
const GOLD_TO = "#b8962e";

const heroVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

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
      {/* HERO */}
      <motion.section
        className="relative py-24 lg:py-32 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={heroVariant}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#11110e] via-[#0b0b09] to-[#0b0b09]" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            style={{
              background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.6 }}
          >
            Let’s Connect
          </motion.h1>

          <motion.p
            className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.6, delay: 0.15 }}
          >
            Whether you’re an NRI seeking Power of Attorney assistance or a property owner looking for seamless documentation and registration support — we’re here to help.
          </motion.p>
        </div>

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4a373]/10 blur-[140px]" />
      </motion.section>

      {/* Contact Form Section */}
      <section className="relative py-20 bg-[#fafafa] text-[#0b0b09]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <motion.div
            className="bg-white shadow-xl rounded-2xl p-10 border border-[#f1f1f1] relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.18 }}
            variants={cardVariant}
            transition={{ duration: 1.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e]" />
            <h2 className="font-playfair text-2xl md:text-3xl mb-6 font-semibold">Send us a message</h2>

            <motion.form onSubmit={handleSubmit} className="space-y-5" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
              <motion.input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.2 }}
              />

              <motion.input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.2, delay: 0.06 }}
              />

              <motion.input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.2, delay: 0.12 }}
              />

              <motion.select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.2, delay: 0.18 }}
              >
                <option value="">Select Service</option>
                <option>Property Documentation</option>
                <option>NRI Services (POA/Embassy Attestation)</option>
                <option>Property Registration</option>
                <option>Title Verification</option>
              </motion.select>

              <motion.textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your requirement"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none resize-none"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.2, delay: 0.24 }}
              />

              <motion.button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[#f5e7c5] via-[#d4af37] to-[#b8962e] text-[#0b0b09] py-3 rounded-full font-semibold hover:scale-[1.02] transition-all shadow-md"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.4, delay: 0.3 }}
              >
                {submitting ? "Sending..." : "Submit Message"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Info Card */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideLeft}
            transition={{ duration: 1.6 }}
          >
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.4 }}>
              <h3 className="font-playfair text-3xl mb-3 font-semibold text-[#0b0b09]">Our Office</h3>
              <p className="text-neutral-700 leading-relaxed">
                Sony Complex, 20, TGIIC Rd, Prashant Nagar, IDA Kukatpally,
                Hyderabad, Telangana 500037
              </p>

              {/* Embedded responsive Google Map */}
              <div className="mt-4">
                <div className="w-full h-56 md:h-64 rounded-lg overflow-hidden border border-[#eaeaea]">
                  <iframe
                    title="P Venkat Rao Associates - Sony Complex, Kukatpally"
                    src={`https://www.google.com/maps?q=Sony+Complex,+Kukatpally,+Hyderabad&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Call button below the map */}
                <div className="mt-4 flex gap-3">
                  <a
                    href="tel:+919347031611"
                    className="px-4 py-2 rounded-full text-sm border border-[#b8962e] text-[#b8962e] hover:bg-[#b8962e] hover:text-[#0b0b09] transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.5 }}>
              <div>
                <h4 className="text-lg font-semibold text-[#0b0b09] mb-1">Email</h4>
                <a href="mailto:contact@pvrao.legal" className="text-neutral-700 hover:text-[#b8962e]">contact@pvrao.legal</a>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0b0b09] mb-1">Phone</h4>
                <a href="tel:+919347031611" className="text-neutral-700 hover:text-[#b8962e]">+91 93470 31611</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.6 }}>
              <h4 className="font-playfair text-2xl text-[#0b0b09] mb-3">Office Hours</h4>
              <ul className="text-neutral-700 space-y-1">
                <li>Mon - Fri: 10 AM – 6 PM</li>
                <li>Saturday: 10 AM – 2 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </motion.div>

            <motion.div className="bg-[#0b0b09] text-white rounded-2xl p-6 shadow-lg border border-[#1a1a1a] mt-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.6 }}>
              <h4 className="text-lg font-semibold mb-2" style={{ background: `linear-gradient(90deg, ${GOLD_FROM}, ${GOLD_VIA}, ${GOLD_TO})`, WebkitBackgroundClip: "text", color: "transparent" }}>
                Transparency You Can Trust
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                All communication and documentation are securely managed and
                confidential. Your data is used only to provide legal services
                you request.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
}
