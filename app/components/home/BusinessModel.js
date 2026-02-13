
"use client";
import { useState } from "react";
import LottiePlayer from "../layout/LottiePlayer";
import SkShadeBtn from "../layout/SkShadeBtn";
import { motion } from "framer-motion"

const tabs = [
  {
    id: 1,
    title: "Staff Augmentation",
    gif: "businessModelAnimation1",
    speed: 1.5,
    desc: "Add skilled professionals quickly to your team close gaps without long hiring cycles",
  },
  {
    id: 2,
    title: "Dedicated Teams",
    gif: "businessModelAnimation2",
    speed: 1.5,
    desc: "A dedicated team works exclusively on your product ensuring stability ownership aim!",
  },
  {
    id: 3,
    title: "Software Development Outsourcing",
    gif: "businessModelAnimation3",
    speed: 1.5,
    desc: "We handle full software delivery so you scale faster without managing projects.",
  },
];

export default function BusinessModel({ title, description }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full max-w-7xl flex flex-col items-center py-10 sm:py-12 md:py-14 lg:py-16 mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Subheading */}
      <motion.p className="text-[12px] sm:text-[14px] md:text-[16px] text-black uppercase mb-2 text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        BUSINESS MODELS
      </motion.p>

      {/* Main Heading */}
      <motion.h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] mb-4 sm:mb-5 md:mb-6 text-center leading-tight md:leading-normal"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        How We Partner With You
      </motion.h2>

      {/* Tabs - Responsive */}
      <motion.div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 w-full max-w-4xl justify-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`rounded-full p-[1px] sm:p-[2px] transition-all duration-300 w-full sm:w-auto ${activeTab === tab.id
              ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]"
              : "bg-transparent"
              }`}
          >
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full w-full transition-all duration-300 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] cursor-pointer
      ${activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
                }`}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </motion.div>

      {/* Tab Description */}
      <motion.p className="text-[14px] sm:text-[16px] md:text-[18px] text-center text-black max-w-3xl mb-5 sm:mb-5 md:mb-5 px-2 sm:px-0 leading-relaxed"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.desc}
      </motion.p>

      {/* Image Row */}

      <motion.div className="w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      >
        {/* Top Flow Section */}
        <div className="flex items-center justify-center w-full h-full max-w-7xl px-2">

          {/* FIXED HEIGHT WRAPPER */}
          <div className="w-full h-[100px] md:h-[250px]  flex items-center justify-center">
            <LottiePlayer
              name={tabs.find((tab) => tab.id === activeTab)?.gif}
              className="w-full h-auto max-w-[80%] object-contain"
              speed={tabs.find((tab) => tab.id === activeTab)?.speed}
            />
          </div>

        </div>

        {/* Labels */}
        <div className="flex items-center justify-between w-full max-w-5xl sm:max-w-5xl text-center mt-0 lg:mt-3">
          <h3 className="w-1/4 md:w-1/3 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] uppercase lg:text-start ml-2 md:ml-0 lg:ml-10">
            US
          </h3>
          <h3 className="w-1/3 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] uppercase">
            Your Project
          </h3>
          <h3 className="w-1/4 md:w-1/3 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] uppercase lg:text-end lg:mr-5">
            You
          </h3>
        </div>
      </motion.div>

      {/* Background Section */}
      <div
        className="w-full bg-black rounded-xl sm:rounded-lg md:rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center relative overflow-hidden bg-cover bg-center mt-6 sm:mt-8 md:mt-10"
        style={{ backgroundImage: "url('/images/businessModel/bg1.png')" }}
      >
        <motion.h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] font-[500] text-white mb-3 sm:mb-4 leading-tight sm:leading-snug md:leading-normal"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}>
          {title && title}
        </motion.h3>
        <motion.p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-300 mb-4 sm:mb-5 md:mb-6 max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          {description && description}
        </motion.p>
        {/* <button className="bg-[#DDF94A] text-[14px] sm:text-[16px] md:text-[18px] font-[400] text-black px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-transform hover:scale-105 active:scale-95">
          Lets Talk
        </button> */}
        <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <SkShadeBtn
          text="Lets Connect"
          bgColor="[#D0F94A]"
          shadeColor="white"
          shadeWidth="20px"
          textColor="black"

        />
        </motion.div>
        
      </div>
    </div>
  );
}
