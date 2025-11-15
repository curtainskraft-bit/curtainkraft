"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DesignProjects = () => {
  return (
    <section id="designs" className="bg-black text-white overflow-hidden
    bg-[url('/images/bg-dt-m.webp')] 
    sm:bg-[url('/images/bg-dt-d.webp')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-white 
    overflow-hidden">
      <div className="px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 max-w-7xl mx-auto">

        {/* Arrow image */}
        <div className="mt-0 sm:mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-32 sm:w-64"
          />
        </div>

        {/* Section Heading */}
        <h2 className="text-white mt-4 md:mt-10 mb-10 text-[12px] sm:text-xl tracking-widest font-conthrax text-center">
          INTERIOR DESIGN TYPES
        </h2>

        {/* RESIDENTIAL Block */}
        <div className="relative md:mt-8 transition-transform duration-500 hover:scale-105">
          
            <div className="block">
              <Image
              src="/images/sec3-img01.webp"
              alt="Residential Interior Design"
              width={1400}
              height={600}
              className="object-cover w-full h-[200px] sm:h-[320px]"
              />
              {/* Overlay */}
              <div className="absolute inset-y-0 left-0 text-start w-1/2 md:w-1/3 bg-black/70 p-2 sm:p-10 flex flex-col justify-center">
                <h3 className="text-[10px] sm:text-lg tracking-widest font-conthrax uppercase">
                  RESIDENTIAL
                </h3>
                <h2 className="text-[10px] sm:text-lg text-[#c38d90] font-conthrax uppercase">
                  INTERIOR DESIGN
                </h2>
                <p className="text-[8px] sm:text-[12px] leading-relaxed text-gray-300 font-play overflow-hidden max-h-30 md:max-h-none transition-all duration-300 ease-in-out">
                  WE DO Interior Design & Fit-Out specializes in residential interior design Dubai. As a trusted interior design company in Dubai, our expert residential interior designers deliver bespoke solutions for villa designs, modern apartments, and penthouse interiors. Whether you're renovating or building from scratch, WE DO transform your vision into elegant, functional spaces.
                </p>
              </div>
            </div>
          

          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
        </div>

        {/* COMMERCIAL Block */}
        <div className="relative mt-12 transition-transform duration-500 hover:scale-105">
        
            <div className="block">
              <Image
                src="/images/sec3-img02.webp"
              alt="Residential Interior Design"
              width={1400}
              height={600}
              className="object-cover w-full h-[200px] sm:h-[330px]"
              />
              {/* Overlay */}
              <div className="absolute inset-y-0 text-start right-0 w-1/2 md:w-1/3 bg-black/70 p-2 sm:p-10 flex flex-col justify-center">
                <h3 className="text-[10px] sm:text-lg tracking-widest font-conthrax uppercase">
                  COMMERCIAL
                </h3>
                <h2 className="text-[10px] sm:text-lg text-[#c38d90] font-conthrax uppercase">
                  INTERIOR DESIGN
                </h2>
                <p className="text-[8px] sm:text-[12px] leading-relaxed text-gray-300 font-play overflow-hidden max-h-30 md:max-h-none transition-all duration-300 ease-in-out">
                 WE DO Interior Design & Fit-Out is a leading commercial interior design company in Dubai, delivering tailored solutions for offices, retail stores, showrooms, cafes, and restaurants. Our commercial interior design services in Dubai blend functionality with aesthetics—ensuring each space supports business growth while reflecting your brand. From concept to execution, WE DO transforms commercial spaces into impactful, professional environments.
                </p>
              </div>
            </div>
          
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
        </div>
      </div>
    </section>
  );
};

export default DesignProjects;
