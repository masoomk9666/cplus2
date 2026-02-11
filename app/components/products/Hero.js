"use client";

import React from "react";
import SkShadeBtn from "../layout/SkShadeBtn";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/products/01.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto min-h-[70vh]">
        <h1 className="text-white text-[24px] md:text-[48px] font-medium tracking-wide leading-tight mb-4">
          Designed. Built. Owned by Cplusoft.
        </h1>

        <p className="text-gray-200 text-[14px] md:text-[18px] leading-relaxed mb-2">
          A handpicked portfolio of powerful AI, SaaS, and automation solutions developed in-house, proven through everyday use, and designed to expand as you grow.
        </p>

        <SkShadeBtn
          text="Lets Connect"
          shadeColor="[#D0F94A]"
          textColor="black"
          bgColor="white"
        />
      </div>
    </section>
  );
};

export default Hero;
