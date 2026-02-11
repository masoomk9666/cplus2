"use client"

import React, { useEffect, useRef, useState } from "react"
import { CircleChevronRight } from "lucide-react"
import * as THREE from "three"

const Hero = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  return (
    <section
      ref={vantaRef}
      className="relative w-full min-h-[60vh] md:min-h-screen px-4 sm:px-6 md:px-8 lg:px-30 overflow-hidden bg-[#051C24] homeHeroSection"
    >
      <video
                key="Home Bg Video"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="videos/home/01.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/30 h-full" />
      {/* Optional Radial Overlay - Responsive */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_left,_#1e5a66_0%,_transparent_25%)] md:bg-[radial-gradient(circle_at_center_left,_#1e5a66_0%,_transparent_30%)] lg:bg-[radial-gradient(circle_at_center_left,_#1e5a66_0%,_transparent_25%)]"></div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto pt-20 md:pt-28 lg:pt-40 px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Heading - Responsive */}
        <h1 className="text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-extrabold tracking-wide mb-2 md:mb-4 uppercase leading-tight sm:leading-snug md:leading-normal max-w-5xl">
          Turn ideas into impact with intelligent AI
        </h1>

        {/* Sub Heading - Responsive */}
        <h2 className="max-w-4xl text-gray-200 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-wider mb-4 md:mb-6 leading-relaxed">
          Global AI & Software Specialists Turning Ideas into Real-World Impact
        </h2>

        {/* Description - Responsive */}
        <div className="flex items-start gap-4 md:gap-6 max-w-4xl mb-8 md:mb-10">
          <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed md:leading-loose w-full">
            Cplusoft is an AI development company helping ambitious businesses move faster with enterprise grade software, intelligent automation, and advanced AI systems built to deliver measurable growth, clarity at scale, and long term value.
          </p>
        </div>

        {/* Button - Responsive */}
        <button className="flex items-center justify-center md:justify-start gap-2 md:gap-3 bg-white/15 border border-gray-300 text-white px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-[400] hover:bg-[#D0F94A] hover:text-[#051C24] hover:border-[#D0F94A] transition w-full md:w-auto">
          Learn More
          <CircleChevronRight size={isMobile ? 18 : 24} />
        </button>

        {/* Additional spacing for mobile */}
        <div className="h-16 md:h-0"></div>
      </div>

    </section>
  )
}

export default Hero