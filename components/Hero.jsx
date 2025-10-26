"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#0b0b09] text-white py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: Headline + image */}
        <div className="flex flex-col">
          {/* Headline area */}
          <div className="mb-8">
            <h1 className="font-playfair text-5xl md:text-5xl lg:text-[4.25rem] leading-tight md:leading-tight tracking-tight mb-4">
              Your Trusted
              <br />
              Property Legal Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-serif max-w-xl">
              Expert Legal Guidance for Property, NRI, and Real Estate Services
            </p>
          </div>

          {/* Image block */}
          <div className="bg-transparent w-full overflow-hidden rounded-sm shadow">
            <div className="w-full h-[350px] border border-transparent">
              <Image
                src="/Hero.jpg"
                alt="Lawyers reviewing documents"
                width={1100}
                height={650}
                priority
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Contact form card */}
        <aside className="flex justify-center lg:justify-end">
          <div
            className="bg-[#d8dcd7] text-black w-full max-w-md lg:max-w-xl p-10 md:p-12 rounded-md"
            style={{ boxSizing: "border-box" }}
          >
            <h2 className="font-playfair text-2xl md:text-3xl text-[#0b0b09] mb-8">
              Contact Us
            </h2>

            <form className="space-y-6 text-sm" onSubmit={(e) => e.preventDefault()}>
              {/* First + Last name */}
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
                <label className="block mb-2 font-medium text-[#0b0b09]">Email *</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="w-full border-b border-[#0b0b09] bg-transparent py-2 focus:outline-none"
                />
              </div>

              {/* Practice area */}
              <div>
                <label className="block mb-2 font-medium text-[#0b0b09]">
                  Choose Service Area
                </label>
                <select className="w-full border-b border-[#0b0b09] bg-transparent py-2 focus:outline-none">
                  <option value="">Select a service</option>
                  <option>Property Report (Title Search, EC, Litigation Check)</option>
                  <option>Agreement to Sale</option>
                  <option>Sale Deed</option>
                  <option>Loan Settlement</option>
                  <option>Property Searching</option>
                  <option>Property Registration</option>
                  <option>Property Mutation</option>
                  <option>First Time Property Buyer</option>
                  <option>Relinquishment Deed</option>
                  <option>Gift Deed</option>
                  <option>Certified True Copy</option>
                  <option>Will & Trust</option>
                  <option>Birth / Marriage Certificate</option>
                  <option>NRI Legal Services</option>
                  <option>Developer / Builder Legal Services</option>
                  <option>Rental Agreement</option>
                  <option>Development Agreement</option>
                  <option>POA (Power of Attorney) Execution</option>
                  <option>Property Valuation</option>
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

              {/* Submit */}
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
};

export default HeroSection;
