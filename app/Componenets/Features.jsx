"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "VILLA INTERIOR DESIGN",
    img: "/images/serv1.webp",
    desc: "Luxury villa interior design in Dubai tailored to your lifestyle by experts at WE DO interior design and fitout.",
    link: "/villa-interior-design-dubai",
  },
  {
    title: "APARTMENT INTERIOR DESIGN",
    img: "/images/serv2.webp",
    desc: "Smart, elegant, and space-optimized apartment interior design and fit-out crafted for modern Dubai living.",
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "LANDSCAPE DESIGN",
    img: "/images/serv3.webp",
    desc: "Premier landscape company in Dubai offering bespoke landscape design in Dubai for villas, gardens, and outdoor spaces.",
    link: "/landscape-design-dubai",
  },
  {
    title: "RESTAURANT INTERIOR DESIGN",
    img: "/images/serv3.webp",
    desc: "Customized restaurant interior design services in Dubai, crafting unique dining atmospheres. Experts in restaurants & café interior design.",
    link: "/restaurant-interior-design",
  },
  {
    title: "OFFICE INTERIOR DESIGN",
    img: "/images/serv4.webp",
    desc: "Expert office interior designers in Dubai delivering functional, stylish office fitout solutions that enhance productivity and reflect your brand identity.",
    link: "/office-interior-design-dubai",
  },
  {
    title: "BEAUTY SALON DESIGNS",
    img: "/images/serv5.webp",
    desc: "Stylish and functional beauty salon interior design in Dubai, crafted to elevate client experience and reflect your salon's unique brand and elegance.",
    link: "/beauty-salon-interior-design-dubai",
  },
  {
    title: "CAFE INTERIOR DESIGN",
    img: "/images/serv6.webp",
    desc: "Expert in café interior design in Dubai, WE DO ranks among the top cafe interior designers in the UAE, blending style, comfort, and brand identity.",
    link: "/cafe-interior-design-dubai",
  },
  {
    title: "CLINICS INTERIOR DESIGN",
    img: "/images/serv7.webp",
    desc: "WE DO offers clinic interior design in Dubai that is both stylish & functional, creating healing spaces with comfort and  hygiene.",
    link: "/clinic-interior-design-dubai",
  },
  {
    title: "HOTEL INTERIOR DESIGN",
    img: "/images/serv8.webp",
    desc: "Luxury spaces by a leading hotel interior design company in Dubai, blending style & function in world-class hospitality interior design.",
    link: "/hotel-interior-design-dubai",
  },
  {
    title: "BOUTIQUE DESIGNS",
    img: "/images/serv9.webp",
    desc: "Boutique interior design crafted for luxury retail spaces—blending brand identity, elegance, and customer experience in every detail.",
    link: "/boutique-interior-design-dubai",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-black py-0 md:py-16
     bg-[url('/images/bg-f-m.webp')] 
    sm:bg-[url('/images/bg-f-d.webp')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-white 
    overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <h2 className="text-white mt-6 md:mt-10 mb-10 text-[12px] sm:text-xl tracking-widest font-conthrax text-center">
          INTERIOR DESIGN FEATURES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <Link href={card.link} key={index}>
              <div className="text-left group cursor-pointer">
                {/* Title */}
                <h3 className="text-white text-[12px] md:text-sm font-conthrax uppercase tracking-wide mb-2">
                  {card.title}
                </h3>

                {/* Gradient line */}
                <div className="w-72 h-[2px] bg-gradient-to-r from-[#caa193] to-[#a0624d] mb-4" />

                {/* Image with hover effect */}
                <div className="overflow-hidden mb-4 rounded-lg">
                  <Image
                    src={card.img}
                    alt={card.title}
                    title={card.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Paragraph */}
                <p className="text-gray-300 text-[12px] md:text-sm font-play leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
