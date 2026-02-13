"use client";

import React from "react";
import { Instagram, Facebook, Linkedin, X } from "lucide-react";
import Link from "next/link";


const FooterB = () => {
  return (
    <footer className="bg-[#051C24] text-white pt-10">
      {/* Heading & Subheading */}
      <div className="text-center mb-6">
        <h2 className="text-[20px] md:text-[35px] font-medium mb-2">Early Access to Exciting Careers!</h2>
        <p className="text-white text-[12px] md:text-[16px]">Stay Ahead of the curve - Join Our Job Alert Network</p>
      </div>

      {/* Resume Button */}
      <div className="flex justify-center mb-6">
        <button className="group relative bg-[#D0F94A] text-[14px] md:text-[18px] text-black py-2 px-6 md:py-3 rounded-full  transition cursor-pointer overflow-hidden">
          Drop your Resume
          <span className={`absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-3 sm:h-4 md:h-5 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100`}></span>
        </button>
      </div>

      {/* Center Logo/Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/careers/footer-logo.png" // replace with your actual logo path
          alt="CPlusSoft"
          className="h-auto"
        />
      </div>

      {/* Two Buttons Inline */}
      <div className="flex justify-center gap-4 mb-6">
        <Link href="/" >
        <button className="px-5 py-2 text-[#D0F94A] text-[12px] md:text-[16px] flex items-center gap-2 transition cursor-pointer">
          View Website
        </button>
        </Link>
        <button className="px-5 py-2 text-[#D0F94A] flex text-[12px] md:text-[16px] items-center gap-2 transition cursor-pointer">
          {/* SVG as an image */}
          <img src="/images/careers/svg-help.png" alt="Help Icon" className="w-3 h-3 md:w-4 md:h-4" />
          Help
        </button>
      </div>


      {/* Divider Line */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 pb-6">
        {/* Left: Social + Copyright */}
        <div className="flex items-center gap-4 mb-4 md:mb-0 ">
          <div className="flex gap-3">
            <Instagram size={20} color="#FFFFFF" />
            <Facebook size={20} color="#FFFFFF" />
            <Linkedin size={20} color="#FFFFFF" />
            <X size={20} color="#FFFFFF" />
          </div>

          <span className="text-[#D0F94A] text-center md:text-start text-[14px] md:text-[18px]">© 2026 Copyright. All rights reserved.</span>
        </div>

        {/* Right: Footer Links */}
        <div className="flex gap-6 text-white text-[14px] md:text-[18px]">
          <a href="/about">About us</a>
          <a href="/industries">Industries</a>
          <a href="/career">Career</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterB;
