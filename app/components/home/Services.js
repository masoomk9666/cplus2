"use client";
import SKButton from "./layout/SKButton";

import { useState } from "react";

const services = [
  {
    title: "AI & AUTOMATION",
    image: "/images/services/ai.png",
    description: "We build and integrate custom AI systems tailored to your specific architecture and security requirements.",
    buttonText: "Learn More",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    image: "/images/services/ai.png",
  },
  {
    title: "DESIGN SERVICES",
    image: "/images/services/ex-ai.png",
  },
  {
    title: "WEB APPS DEVELOPMENT",
    image: "/images/services/ai.png",
  },
  {
    title: "DIGITAL MARKETING",
    image: "/images/services/ai.png",
  },
  {
    title: "CLOUD & DEVOPS",
    image: "/images/services/ai.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Learn more about our cloud & DevOps solutions. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    buttonText: "Learn More",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16 bg-white">
      <div className="full mx-auto px-0">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center mb-10">
          <p className="text-[16px] uppercase tracking-widest text-black">
            Areas of Focus – What We Are Building
          </p>
          <h2 className="w-[40vw] text-center text-[45px] font-semibold leading-tight mb-4">
            Comprehensive AI Development Services offered by Cplusoft
          </h2>
        </div>

        {/* Services Grid with Background Image */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 space-y-0 border border-gray-200 "
          style={{
            backgroundImage: `url(${
              activeIndex !== services.length - 1
                ? services[activeIndex].image
                : services[services.length - 1].image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <div
                key={index}
                onMouseEnter={() => !isLast && setActiveIndex(index)}
                className={`group h-[50vh] flex flex-col justify-start p-10 border border-gray-200 cursor-pointer transition-all duration-500
                  ${
                    activeIndex === index && !isLast
                      ? "bg-white/10 backdrop-blur-xl "
                      : isLast
                      ? "bg-[radial-gradient(circle_at_center,#D0F94A_0%,#1899AF_140%)] text-white"
                      // ? "bg-gradient-to-t from-[#D0F94A] to-[#051C24] text-white"
                      : "bg-black/30  hover:bg-gray-100/70"
                  }
                `}
              >
                <h3 className={`text-[24px]   tracking-wide text-start mb-2
                  ${
                    activeIndex === index && !isLast
                      ? "text-white group-hover:text-[#D0F94A]"
                      : isLast ? "text-black" : "text-white"
                  }
                  `}>
                  {service.title}
                </h3>

                {/* Add description and button only for last box */}
                {!isLast && service.description && (
                  <>
                    {service.description && <p className="mt-2 mb-4 text-[16px] text-white">{service.description}</p>}
                     {service.buttonText && <SKButton text={service.buttonText} />}
                  </>
                )}
                {isLast && service.description && (
                  <>
                    {service.description && <p className="mt-2 mb-4 text-[16px]  text-black">{service.description}</p>}
                     {service.buttonText && <SKButton text={service.buttonText} />}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


