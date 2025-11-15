"use client";

import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-[#e6e6e6] py-16 px-4 text-center">
      {/* 🔹 Heading */}
      <h2 className="text-[26px] sm:text-[32px] font-bold mb-2">
        <span className="text-black">GET</span>{" "}
        <span className="text-[#c8a56a]">IN TOUCH WITH US</span>
      </h2>

      {/* 🔹 Subtext */}
      <p className="text-black text-base mb-10">
        WE ARE LOCATED ON SHEIKH ZAYED ROAD
      </p>

      {/* 🔹 Buttons Container */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Button 1 - Projects Page */}
        <Link
          href="/gallery"
          className="flex items-center justify-center gap-2 bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition duration-300"
        >
          <FaCheckCircle className="text-white text-lg" />
          See Our Projects
        </Link>

        {/* Button 2 - WhatsApp */}
        <a
          href="https://wa.me/971586023677" // ✅ Replace with your actual WhatsApp number (e.g., 971501234567)
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition duration-300"
        >
          <FaCheckCircle className="text-white text-lg" />
          Request availability by WhatsApp
        </a>

        {/* Button 3 - Email */}
        <a
          href="mailto:info@casakraftinteriors.ae" // ✅ Replace with your business email
          className="flex items-center justify-center gap-2 bg-[#b6935b] hover:bg-[#a2814f] text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition duration-300"
        >
          <FaEnvelope className="text-white text-lg" />
          Request availability by E-mail
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
