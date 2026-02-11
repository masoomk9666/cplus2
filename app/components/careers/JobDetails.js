"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SkShadeBtn from "../layout/SkShadeBtn";
import Application from "./Application";
import { useRef } from "react";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function JobDetails({ job }) {
  const [activeTab, setActiveTab] = useState("overview");
  const applicationRef = useRef(null);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16"
    >
      {/* Sub Heading */}
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-[12px] sm:text-[14px] md:text-[16px] tracking-widest text-black text-center"
      >
        {job.details.subTitle}
      </motion.p>

      {/* Job Title */}
      <motion.h1
        variants={fadeUp}
        custom={1}
        className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-medium text-center mt-1 sm:mt-2 leading-tight sm:leading-normal"
      >
        {job.title}
      </motion.h1>

      {/* Type */}
      <motion.p
        variants={fadeUp}
        custom={2}
        className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black text-center mt-1 sm:mt-2"
      >
        {job.type}
      </motion.p>

      {/* Location */}
      <motion.p
        variants={fadeUp}
        custom={3}
        className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black text-center"
      >
        {job.location}
      </motion.p>

      {/* Tabs */}
      <motion.div
        variants={fadeUp}
        custom={4}
        className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8"
      >
        {[
          { id: "overview", title: "Overview" },
          { id: "application", title: "Application" },
        ].map((tab) => (
          <div
            key={tab.id}
            className={`rounded-full p-[1px] sm:p-[2px] transition-all duration-300  ${activeTab === tab.id
              ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]"
              : "bg-transparent"
              }`}
          >
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full w-full transition-all duration-300 text-[14px] sm:text-[15px] md:text-[16px] cursor-pointer ${activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
                }`}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </motion.div>

      {/* Content Card */}
      {activeTab === "overview" && (
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative bg-[#FBFBFB] rounded-xl sm:rounded-lg md:rounded-2xl p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 md:mt-10 overflow-hidden"
        >
          {/* Absolute centered background image - Responsive */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-140 md:h-140 lg:w-150 lg:h-150 bg-cover bg-center opacity-40 sm:opacity-60 md:opacity-100"
            style={{ backgroundImage: "url('/images/careers/logoIcon.png')" }}
          ></div>

          {/* Description */}
          <motion.h3
            variants={fadeUp}
            custom={1}
            className="font-medium text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px]"
          >
            Description
          </motion.h3>

          {job.details.overview.description.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              custom={i + 2}
              className="text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] mt-2 sm:mt-3 leading-relaxed"
            >
              {para}
            </motion.p>
          ))}

          {/* Requirements - FIXED: Added proper paragraph tags */}
          <motion.h3
            variants={fadeUp}
            custom={5}
            className="font-medium text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] mt-6 sm:mt-8"
          >
            Requirements
          </motion.h3>

          <div className="mt-3 sm:mt-4">
            {job.details.overview.requirements.map((item, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i + 6}
                className="text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] mt-1 sm:mt-2 leading-relaxed"
              >
                {item}
              </motion.p>
            ))}
          </div>

          {/* Qualifications */}
          <motion.h3
            variants={fadeUp}
            custom={10}
            className="font-medium text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] mt-6 sm:mt-8"
          >
            Qualifications
          </motion.h3>

          <ul className="list-disc pl-4 sm:pl-5 mt-2 sm:mt-3 space-y-1 sm:space-y-2">
            {job.details.overview.qualifications.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={i + 11}
                className="text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] ml-2 sm:ml-3 leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Button */}
          <motion.div
            variants={fadeUp}
            custom={15}
            className="flex justify-end mt-6 sm:mt-8"
          >
            <a
              onClick={() => {
                setActiveTab("application");

                setTimeout(() => {
                  applicationRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
              }}
            >
              <SkShadeBtn text="Apply Now" />
            </a>

          </motion.div>
        </motion.div>
      )}
      {activeTab === "application" && (
        <div ref={applicationRef}>
          <Application fadeUp={fadeUp} />
        </div>
      )}

    </motion.section>
  );
}