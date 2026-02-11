
"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/careers/careers-bg.png')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[45px] font-medium tracking-wide mb-3 sm:mb-4 leading-tight sm:leading-normal">
          Infinite Possibilities. One Team
        </h1>

        <p className="text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed px-2 sm:px-0">
          Whether you're a Data Scientist, App Engineer, Tester or Developer —
          your ideas matter here. At Indium, growth is continuous, curiosity is
          celebrated, and innovation never stops. You'll build with people who
          question everything, prototype fast, and see beyond what exists.
        </p>
      </div>
    </section>
  );
};

export default Hero;