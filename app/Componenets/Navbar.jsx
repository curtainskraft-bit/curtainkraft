"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

// ========================
// NavLink Component
// ========================
const NavLink = ({ href, title }) => (
  <Link
    href={href}
    className="block py-0 text-white text-sm rounded md:p-0 hover:text-[#193c38] transition-colors duration-300"
  >
    {title}
  </Link>
);

// ========================
// MenuOverlay Component
// ========================
const MenuOverlay = ({ links, children }) => (
  <div>
    <ul className="flex flex-col py-4 items-center space-y-6 text-white text-xl">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
    <div className="flex justify-center items-center py-4">{children}</div>
  </div>
);

// ========================
// Navbar Component
// ========================
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "About Us", path: "/about-us" },
    { title: "Services", path: "/#services" },
    { title: "Gallery", path: "/gallery" },
    { title: "Our Blogs", path: "/blogs" },
    { title: "Client Reviews", path: "/#testimonials" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/",
      hoverColor: "hover:text-pink-500",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <FaPinterest />,
      href: "https://www.pinterest.com/",
      hoverColor: "hover:text-red-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || navbarOpen ? "bg-black/40 shadow-md" : "bg-black/70 shadow-md"
      }`}
    >
      <div className="text-white px-4 md:px-10">
        {/* === Desktop Header (Logo + Nav + Social) === */}
        <div className="hidden md:flex items-center justify-between py-4">
          {/* Logo Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Casa Kraft Logo"
              width={200}
              height={40}
              className="w-20 lg:w-24"
            />
          </Link>

          {/* Nav Links Center */}
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="pb-1">
                <NavLink href={link.path} title={link.title} />
              </div>
            ))}
          </div>

          {/* Social Icons Right */}
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.hoverColor} transition-colors`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* === Mobile Header === */}
        <div className="md:hidden flex items-center justify-between py-2">
          {/* Logo Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Casa Kraft Logo"
              width={180}
              height={40}
              className="w-14"
            />
          </Link>

          {/* Hamburger Right */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white"
          >
            {!navbarOpen ? (
              <Image
                src="/images/bars.svg"
                alt="Menu Bars"
                width={80}
                height={10}
                className="w-8 h-6"
              />
            ) : (
              <IoMdCloseCircleOutline className="text-4xl" />
            )}
          </button>
        </div>
      </div>

      {/* === Mobile Menu Overlay === */}
      {navbarOpen && (
        <MenuOverlay links={navLinks}>
          <div className="mt-6 flex justify-center space-x-5 text-white">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.hoverColor} transition-colors text-sm`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </MenuOverlay>
      )}
    </nav>
  );
};

export default Navbar;
