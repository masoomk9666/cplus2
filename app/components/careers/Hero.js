"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/careers/careers-bg.png')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white text-[24px] md:text-[48px] font-medium tracking-wide mb-4">
          Infinite Possibilities. One Team
        </h1>

        <p className="text-gray-200 text-[14px] md:text-[18px] font-normal leading-relaxed">
          Whether you’re a Data Scientist, App Engineer, Tester or Developer —
          your ideas matter here. At Indium, growth is continuous, curiosity is
          celebrated, and innovation never stops. You’ll build with people who
          question everything, prototype fast, and see beyond what exists.
        </p>
      </div>
    </section>
  );
};

export default Hero;
