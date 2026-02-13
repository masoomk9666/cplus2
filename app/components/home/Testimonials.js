"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const testimonials = [
  {
    id: 1,
    name: "Julian Singh",
    designation: "CEO, Boltsoft",
    image: "/images/testimonials/04.png",
    text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights into customer behavior and preferences, helping us make data-driven decisions that fueled our expansion. Their tools are not just innovative but also incredibly user-friendly, ensuring our team could adopt them without a steep learning curve. I wholeheartedly recommend them to anyone looking to stay ahead of the competition.",
  },
  {
    id: 2,
    name: "Anna Williams",
    designation: "CTO, Magnolia",
    image: "/images/testimonials/02.png",
    text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights into customer behavior and preferences, helping us make data-driven decisions that fueled our expansion. Their tools are not just innovative but also incredibly user-friendly, ensuring our team could adopt them without a steep learning curve. I wholeheartedly recommend them to anyone looking to stay ahead of the competition.",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Manager, Magnolia",
    image: "/images/testimonials/03.png",
    text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights into customer behavior and preferences, helping us make data-driven decisions that fueled our expansion. Their tools are not just innovative but also incredibly user-friendly, ensuring our team could adopt them without a steep learning curve. I wholeheartedly recommend them to anyone looking to stay ahead of the competition.",
  },
];

const logos = [
  "/images/testimonials/marquee/01.png",
  "/images/testimonials/marquee/02.png",
  "/images/testimonials/marquee/03.png",
  "/images/testimonials/marquee/04.png",
  "/images/testimonials/marquee/05.png",
  "/images/testimonials/marquee/06.png",
  "/images/testimonials/marquee/01.png",
  "/images/testimonials/marquee/02.png",
  "/images/testimonials/marquee/03.png",
  "/images/testimonials/marquee/04.png",
  "/images/testimonials/marquee/05.png",
  "/images/testimonials/marquee/06.png",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 lg:py-25 px-4 sm:px-6 md:px-8 lg:px-0 space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
      {/* Row 1: Testimonial Carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.2fr] gap-8 sm:gap-12 md:gap-16 lg:gap-18 items-start">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="relative w-full max-w-[280px] sm:max-w-xs h-[250px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] shadow-lg mx-auto md:mx-0">
            {/* Image layer */}
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="relative z-10 w-full h-full object-cover"
            />
          </div>

          <div className="mt-3 sm:mt-4">
            <h3 className="font-semibold text-[14px] sm:text-[15px] md:text-[16px]">
              {testimonials[activeIndex].name}
            </h3>
            <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#3B3B3B]">
              {testimonials[activeIndex].designation}
            </p>
          </div>
        </div>

        <div className="relative">
          <div>
            <h3 className="text-[12px] sm:text-[14px] md:text-[16px] font-[400] mb-1 sm:mb-2 uppercase">
              Testimonials
            </h3>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] leading-tight sm:leading-snug md:leading-normal">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-2 justify-start items-start mt-3 sm:mt-0">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black my-3 sm:my-4 leading-relaxed">
              {testimonials[activeIndex].text}
            </p>
          </div>

          <div className="flex justify-end space-x-2 mt-4 sm:mt-6">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#ffffff] border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
            >
              <LiaAngleLeftSolid className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#D0F94A] shadow flex items-center justify-center hover:bg-[#C0F94A] transition cursor-pointer"
            >
              <LiaAngleRightSolid className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Row 3: Text + Logo Marquee */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-6 sm:gap-8 relative">
        <div>
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-semibold mb-2 leading-tight sm:leading-snug">
            YOUR TRUSTED PARTNER FOR EFFORTLESS SERVICE EXCELLENCE
          </h3>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-10 sm:w-12 md:w-16 rounded-full bg-black opacity-100 blur-sm pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-10 sm:w-12 md:w-16 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent pointer-events-none"></div>

          {/* Framer Motion Infinite Marquee */}
          {/* <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {logos.concat(logos).map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-16 sm:w-20 md:w-24 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`logo-${idx}`}
                  className="object-contain w-full h-auto"
                />
              </div>
            ))}
          </motion.div> */}
          <div className="relative overflow-hidden">
            {/* Left blur overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-15 md:w-20 backdrop-blur-sm z-10" />

            {/* Left gradient fade (optional) */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-15 md:w-20 bg-gradient-to-r from-background to-transparent z-20" />

            {/* Right blur overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-15 md:w-20 backdrop-blur-sm z-10" />

            {/* Right gradient fade (optional) */}
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-15 md:w-20 bg-gradient-to-l from-background to-transparent z-20" />

            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {logos.concat(logos).map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-16 sm:w-20 md:w-24 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`logo-${idx}`}
                    className="object-contain w-full h-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
