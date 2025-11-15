"use client";

import React, { useState } from "react";

const SERVICES = [
  "Full Home Renovation",
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Wardrobe & Cabinets",
  "Villa Extension/Modification",
  "Doors & Window",
  "Flooring",
  "Painting",
  "Swimming Pool",
  "Landscaping",
  "Office Renovation",
  "Joinery",
  "Wall Panels",
  "Wallpapers",
  "Wrapping",
  "TV Wall/Multimedia Walls",
  "Crockery Unit",
  "Curtains",
  "Parquet Flooring",
  "Customized Furniture",
  "Others",
];

const LocationMap = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    otherService: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for required fields
    if (
      !form.firstName.trim() ||
      !form.phone.trim() ||
      !form.service.trim() ||
      (form.service === "Others" && !form.otherService.trim())
    ) {
      setErrorMsg("Please fill in all required fields marked with *.");
      return;
    }

    // ✅ Submit logic (replace this with API)
    console.log("Form submitted:", form);

    setErrorMsg("");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      otherService: "",
    });
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 px-4 md:px-12 lg:px-20 py-10">
        {/* Left: FORM */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-[28px] bg-[#193c38] text-white p-6 sm:p-8 md:p-10">
            <h2 className="text-[16px] leading-tight sm:text-[24px] font-semibold tracking-relaxed uppercase">
              COMMITTED TO SUPERIOR QUALITY & RESULTS.
            </h2>

            <p className="mt-6 text-md sm:text-xl font-medium opacity-90">
              We’d love to meet you in person…
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Error Message */}
              {errorMsg && (
                <p className="text-red-300 text-sm sm:text-base bg-red-900/20 p-3 rounded-lg">
                  {errorMsg}
                </p>
              )}

              {/* Row 1: Name / Last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
              </div>

              {/* Row 2: Email / Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">
                    Mobile No <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
              </div>

              {/* Row 3: Service dropdown */}
              <div className="flex flex-col relative">
                <label className="mb-1 text-sm font-medium">
                  Service Required <span className="text-red-400">*</span>
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="h-12 sm:h-14 rounded-full w-full pl-5 pr-12 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40 appearance-none"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 top-[42px] text-gray-500">
                  ▾
                </span>
              </div>

              {/* If "Others" chosen */}
              {form.service === "Others" && (
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">
                    Please specify <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="otherService"
                    placeholder="Describe the service required"
                    value={form.otherService}
                    onChange={handleChange}
                    className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="h-12 sm:h-14 rounded-full px-10 w-full sm:w-auto border-2 border-white/70 text-white font-medium hover:bg-white/10 transition"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Contact block */}
            <div className="mt-8 sm:mt-10">
              <p className="text-md sm:text-xl opacity-90">For more info call:</p>
              <a
                href="tel:+971586023677"
                className="block text-2xl sm:text-3xl font-extrabold tracking-tight hover:underline underline-offset-4 transition-all"
              >
                +971 58 602 3677
              </a>
            </div>
          </div>
        </div>

        {/* Right: MAP */}
        <div className="w-full lg:w-1/2 h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-xl">
          <iframe
            title="CASAKRAFT Interiors Group Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.3162381061898!2d55.2397317!3d25.158797699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6916b3b487a5%3A0xd0509cac38a7ca6d!2sCasa%20Kraft%20Interiors%20and%20Decoration!5e0!3m2!1sen!2sae!4v1763027338415!5m2!1sen!2sae"


            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
