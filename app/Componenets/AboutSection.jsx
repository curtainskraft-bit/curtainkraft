"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-10 sm:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/about-us.png"
            alt="Interior Design Dubai"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#c68b4e] text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
            We Design Your Space Within Your Budget
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
            At CasaKraft, we offer interior designing services to give your place a unique look.
            Whether a residential setting or a commercial place, we choose color schemes
            and furnishing accordingly to create your desired environment.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
            As a team of designers, we are experienced in creating a modern, traditional,
            minimal, and industrial look for your place. We never exceed your budget and
            always craft a draft before starting our services.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-8">
            We are the leading interior masters in Dubai serving customers with all their
            desired needs. Hiring our professional designer for embellishing your interior
            will surely be the best decision.
          </p>

          {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
  <Link href="/gallery">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      See Our Projects
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      Free Consultation
    </button>
  </Link>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
