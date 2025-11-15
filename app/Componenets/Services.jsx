"use client";

import React from "react";
import Image from "next/image";

const services = [
  { title: "Villa Design Dubai", image: "/images/villa-design-dubai.png" },
  { title: "Apartment Design", image: "/images/apartment-interior-design.png" },
  { title: "Penthouse Interior", image: "/images/penthouse-interior-design.png" },
  { title: "Kitchen Design", image: "/images/kitchen-interior-design.png" },
  { title: "Beach Front Design", image: "/images/beach-front-design.png" },
  { title: "Landscape Design", image: "/images/landscape-design.png" },
  { title: "Villa Renovation", image: "/images/villa-renovation.png" },
  { title: "Apartment Renovation", image: "/images/apartment-renovation.png" },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f6f6f6] py-16">
      {/* Title */}
      <h2 className="text-center text-[#c79d63] font-semibold text-2xl sm:text-3xl md:text-4xl mb-10">
        Our Most Demanding Services In Dubai
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] sm:w-[85%] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-default"
          >
            <div className="relative w-full h-48 md:h-56 lg:h-60">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-black font-semibold text-sm md:text-base">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
