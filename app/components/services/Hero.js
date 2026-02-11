"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  "./Services.css"

import SkShadeBtn from "../layout/SkShadeBtn";

const slides = [
  {
    video: "/videos/servicesPage/slide1.mp4",
    title: "Accelerate Growth with Cplusoft",
    desc1: "We help businesses grow faster by combining strategy, technology, and execution.",
    desc2:
      "Our teams build scalable digital solutions that improve efficiency, reduce costs, and create measurable business impact across global markets.",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide2.mp4",
    title: "AI & Intelligent Systems",
    desc1: "We design AI systems that automate decisions, enhance experiences, and unlock insights from data. From machine learning to GenAI, our solutions are built for real business use, not experiments.",
    desc2:
      "",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide3.mp4",
    title: "Data & Cloud Engineering",
    desc1: "We build secure, scalable cloud and data platforms that support growth.",
    desc2:
      "Our solutions ensure performance, reliability, and real-time insights while enabling businesses to scale without complexity.",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide4.mp4",
    title: "Software development",
    desc1: "We develop production-ready software that works in real environments.",
    desc2:
      "Our systems modernize operations, streamline workflows, and scale smoothly as your business grows.",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide5.mp4",
    title: "IT & Security",
    desc1: "We secure your business with resilient IT infrastructure, advanced threat protection, and compliance solutions that keep operations safe, reliable, and uninterrupted.",
    desc2:
      "",
    button: "Lets Connect",
  },
];

const Hero = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="relative w-full min-h-[60vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          horizontalClass: "swiper-pagination-horizontal",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
              
              {/* Background Video */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-white text-[24px] md:text-[48px] font-medium tracking-wide leading-tight mb-4">
                  {slide.title}
                </h1>

                <p className="text-gray-200 text-[14px]  md:text-[18px] leading-relaxed mb-2">
                  {slide.desc1}
                </p>

                <p className="text-gray-200 text-[14px]  md:text-[18px] leading-relaxed max-w-3xl mb-5">
                  {slide.desc2}
                </p>

                <SkShadeBtn
                  text={slide.button}
                  shadeColor="[#D0F94A]"
                  textColor="black"
                  bgColor="white"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="hidden lg:block">
      <button
        onClick={handlePrev}
        className="swiper-button-prev-custom absolute bottom-6 right-20 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition-all"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="swiper-button-next-custom absolute bottom-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition-all"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
        </div>
    </section>
  );
};

export default Hero;