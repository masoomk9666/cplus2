

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LottiePlayer from "../layout/LottiePlayer";
import ScrollLottiePlayer from "../layout/ScrollLottiePlayer";

/**
 * 🔹 DATA ARRAY
 * Bubble ki POSITION + SIZE + TEXT POSITION yahan se control hogi
 */
const timelineData = [
  {
    year: "2014",
    title: "Foundation",
    desc: "Engineering-first from day one",
    bubbleImg: "/images/about/company-growth/2014.png",
    x: "70px",
    y: "230px",
    width: 50,
    height: 50,
    textSide: "left", // "left" ya "right"
  },
  {
    year: "2017",
    title: "Scale Across Platforms",
    desc: "Expanding delivery capability",
    bubbleImg: "/images/about/company-growth/2017.png",
    x: "450px",
    y: "220px",
    width: 75,
    height: 75,
    textSide: "right", // "left" ya "right"
  },
  {
    year: "2018",
    title: "Product Development",
    desc: "From delivery partner to product builder",
    bubbleImg: "/images/about/company-growth/2018.png",
    x: "70px",
    y: "265px",
    width: 100,
    height: 100,
    textSide: "left", // "left" ya "right"
  },
  {
    year: "2019",
    title: "AI At The Core",
    desc: "Enterprise AI solutions at scale",
    bubbleImg: "/images/about/company-growth/2019.png",
    x: "655px",
    y: "250px",
    width: 150,
    height: 150,
    textSide: "right", // "left" ya "right"
  },
  {
    year: "2025",
    title: "Product-First AI Engineering",
    desc: "Built to enable transformation",
    bubbleImg: "/images/about/company-growth/2025.png",
    x: "190px",
    y: "320px",
    width: 200,
    height: 200,
    textSide: "left", // "left" ya "right"
  },
  {
    year: "2026",
    title: "AI At The Core",
    desc: "Enterprise AI solutions at scale",
    bubbleImg: "/images/about/company-growth/2026.png",
    x: "840px",
    y: "410px",
    width: 250,
    height: 250,
    textSide: "right", // "left" ya "right"
  },
];

export default function CompanyGrowth() {
  return (
    <section className="relative w-full h-auto lg:h-[370vh] overflow-hidden p-5 lg:p-5">

      {/* 🔹 HEADER */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-20 pb-24 px-4"
      >
        <p className="uppercase tracking-widest text-[16px] text-black">
          Company Growth
        </p>
        <h2 className="text-3xl md:text-[48px] font-medium mt-2">
          We're Getting Better Every Year
        </h2>
      </motion.div>

      {/* 🔹 TIMELINE AREA */}
      {/* <div className="relative max-w-7xl mx-auto h-full">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <Image
            src="/images/about/company-growth/world-map-bg.png"
            alt="Company Growth Background"
            fill
            className="object-contain object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 -translate-x-1/2 -top-20 h-full origin-top hidden md:block"
        >
          <Image
            src="/images/about/company-growth/timeline-line.png"
            alt="Timeline Line"
            width={400}
            height={1200}
            className="h-full w-auto object-contain"
          />
        </motion.div>

        <div className="relative h-full">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                position: "absolute",
                left: item.x,
                top: item.y,
              }}
              className={`flex items-center gap-6 ${
                item.textSide === "left" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                style={{
                  width: item.width || 120,
                  height: item.height || 120,
                }}
                className="relative flex-shrink-0"
              >
                <Image
                  src={item.bubbleImg}
                  alt={item.year}
                  fill
                  className="object-contain"
                />
              </div>

              <div className={`max-w-sm ${
                item.textSide === "left" ? "text-right" : "text-left"
              }`}>
                <h3 className="text-[14px] md:text-[18px] font-medium text-[#00687B]">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[14px] text-black mt-0">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:block ">
        <ScrollLottiePlayer />
        </div>
        <div className="hidden md:block lg:hidden ">
        <img src="images/about/company-growth/tabGrowth.png" />
        </div>
        <div className="block md:hidden ">
        <img src="images/about/company-growth/mobGrowth.png" />
        </div>
      </div>
    </section>
  );
}


