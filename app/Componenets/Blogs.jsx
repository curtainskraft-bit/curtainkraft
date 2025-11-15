"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blog data
const blogPosts = [
  {
    title: "5 Modern Apartment Interior Design",
    date: "June 11, 2025",
    image: "/images/blog-1.png",
    link: "/modern-apartment-interior-design",
  },
  {
    title: "6 Interior Design Styles Dubai 2025",
    date: "September 23, 2025",
    image: "/images/blog-2.png",
    link: "/modern-apartment-interior-design",
  },
  {
    title: "Bohemian Interior Design in Dubai",
    date: "May 25, 2025",
    image: "/images/blog-3.png",
    link: "/modern-apartment-interior-design",
  },
];

// Helper to split title onto two lines (optional)
const splitTitle = (title) => {
  const words = title.split(" ");
  return (
    <>
      {words.slice(0, 3).join(" ")} <br />
      {words.slice(3).join(" ")}
    </>
  );
};

const Blogs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-[#caa193] font-conthrax tracking-widest text-lg sm:text-xl mb-12">
          OUR BLOGS
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Blog Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Blog Info */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Blog Tag */}
                  <span className="bg-[#193c38] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                    BLOG
                  </span>

                  {/* Title */}
                  <h3 className="text-[#caa193] font-semibold text-lg mb-3 leading-snug group-hover:underline">
                    {splitTitle(post.title)}
                  </h3>

                  {/* Date */}
                  <p className="text-gray-600 text-sm mt-auto">
                    Published on {post.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center">
          <Link href="/blogs">
            <button className="bg-gradient-to-br from-[#193c38] to-[#22524d] text-white font-conthrax px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 uppercase tracking-wide">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
