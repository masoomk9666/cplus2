"use client"
import React from 'react';
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "AI-FIRST & FUTURE-READY SOLUTIONS",
      img: "/images/industries/icon-3.png",
      bgColor: "bg-[#FBFBFB]",
      offset: "lg:translate-y-0"
    },
    {
      id: 2,
      title: "PROVEN DELIVERY, REAL IMPACT",
      img: "/images/industries/icon-2.png",
      bgColor: "bg-[#FBFBFB]",
      offset: "lg:-translate-y-10"
    },
    {
      id: 3,
      title: "DESIGN-DRIVEN ENGINEERING",
      img: "/images/industries/icon-4.png",
      bgColor: "bg-[#FBFBFB]",
      offset: "lg:translate-y-0"
    },
    {
      id: 4,
      title: "END-TO-END PARTNERSHIP",
      img: "/images/industries/icon-1.png",
      bgColor: "bg-[#FBFBFB]",
      offset: "lg:-translate-y-10"
    }
  ];


  return (
    <section className="flex flex-col justify-center bg-white py-20 px-6 md:px-12 lg:px-24 h-auto md:h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-center">

        {/* Left Side Content */}
        <div className="space-y-6">
          <p className="text-black uppercase tracking-tight text-[12px] md:text-[16px] mb-4">
            COMPETITIVE ADVANTAGE
          </p>
          <h2 className="text-[24px] md:text-[48px] font-medium text-black leading-tight">
            Why choose Cplusoft?
          </h2>
          <p className="text-gray-800 text-lg md:text-[18px] leading-relaxed ">
            We Build Intelligent, Secure, And Scalable Digital Solutions Tailored To
            The Unique Challenges Of Every Industry We Serve. By Combining
            Deep Domain Knowledge With Advanced Engineering And AI-Driven
            Innovation, We Help Organizations Modernize Operations, Accelerate
            Growth, And Stay Competitive In A Rapidly Evolving Digital Landscape.
          </p>
        </div>

        {/* Right Side Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((item) => (
            <div
              key={item.id}
              className={`
                ${item.bgColor} ${item.offset}
                p-10 rounded-[16px] flex flex-col items-center justify-center text-center
               border border-gray-50
               transition-all duration-500 min-h-[100px]
              `}
            >
              {/* Icon Container with Gradient Effect */}
              <div className="mb-6 p-4 rounded-2xl  relative group">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />

                </div>
              </div>

              {/* Text */}
              <h3 className="text-[12px] md:text-[16px text-black leading-snug tracking-wide uppercase max-w-[160px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;