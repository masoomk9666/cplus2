"use client";  
import { motion } from "framer-motion";
import Image from "next/image";
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
    <section className="relative w-full h-auto xl:h-[350vh] overflow-hidden p-5 lg:p-5 sk-company-growth">
      <div className="relative max-w-7xl mx-auto space-y-6">
        <div
          className="block lg:hidden text-center px-4 opacity-100 space-y-4"
        >
          <p className="uppercase tracking-widest text-[12px] md:text-[16px] text-black">
            Company Growth
          </p>
          <h2 className="text-[24px] md:text-[48px] font-medium leading-tight">
            We're Getting Better Every Year
          </h2>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-full">
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


