"use client";

import { useState } from "react";
import Image from "next/image";

/* =========================
   Dynamic Slider Data
========================= */
const SLIDES = [
  {
    id: 1,
    title: "Our Global Presence:",
    subtitle: "Global Presence",
    description1:
      "Cplus Soft partners with businesses across the globe, delivering scalable and future-ready digital solutions to diverse industries. Our experience working with international clients enables us to understand global business standards while adapting solutions to meet local and regional needs.",
    description2:
      "Through strong collaboration, modern technologies, and a client-first approach, we support organizations worldwide in building, scaling, and optimizing digital products that drive long-term success.",
    image: "/images/about/carouselImg1.png",
  },
  {
    id: 2,
    title: "Worldwide Collaboration",
    subtitle: "Global Presence",
    description1:
      "Through strong collaboration and modern technologies, we empower organizations to scale efficiently across international markets.",
    description2:
      "Our client-first approach ensures long-term digital success through innovation and reliability.",
    image: "/images/about/carouselImg1.png",
  },
];

/* =========================
   Component
========================= */
export default function GlobalPresence() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full  bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/images/global-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto relative rounded-2xl  bg-cover bg-center overflow-hidden">
        {/* Card */}
        <div
          className="relative rounded-2xl bg-black backdrop-blur-md overflow-hidden  bg-start"
          // style={{ backgroundImage: "url('/images/about/carouselBg.jpg')" }}
        >
          <div
            className="absolute inset-0 -left-60 -z-10"
            style={{
              backgroundImage: "url('/images/about/carouselBg.jpg')",
              backgroundSize: "contain",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              transform: "rotate(10deg)", // ONLY image layer rotated
              transformOrigin: "bottom left", // rotate around bottom-left
              maskImage: `linear-gradient(to right,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,1) 40%,
        rgba(0,0,0,0) 70%,
        rgba(0,0,0,0) 100%
      )`,
              WebkitMaskImage: `linear-gradient(to right,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,1) 40%,
        rgba(0,0,0,0) 70%,
        rgba(0,0,0,0) 100%
      )`,
            }}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center p-3 lg:py-14 px-4 lg:px-10">
            {/* LEFT – IMAGE */}
            <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] rounded-xl overflow-hidden">
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
            </div>

            {/* RIGHT – CONTENT */}
            <div className="text-white transition-all duration-500">
              {/* <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                {slide.subtitle}
              </p> */}

              <h2 className="text-[24px] md:text-[48px] font-medium mb-5">
                {slide.title}
              </h2>

              <p className="text-white text-[14px] md:text-[18px] leading-relaxed mb-4">
                {slide.description1}
              </p>

              <p className="text-white text-[14px] md:text-[18px] leading-relaxed">
                {slide.description2}
              </p>

              {/* NAVIGATION */}
              <div className="flex gap-3 mt-8 float-right">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="w-10 h-10 rounded-full bg-white text-black border border-gray-500 text-[20px]  flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
                >
                  ‹
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="w-10 h-10 rounded-full bg-[#3CDB9D] text-black text-[20px] flex items-center justify-center hover:bg-emerald-400 transition cursor-pointer"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
