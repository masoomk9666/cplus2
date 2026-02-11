"use client";
import { motion } from "framer-motion";
import CultureCarousel from "../layout/CultureCarousel";

export default function CultureSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-[12px] md:text-[16px] text-black"
        >
          Our Culture
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[24px] md:text-[48px] font-medium mt-2 md:mt-4"
        >
          Life At Cplusoft
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-2 md:mt-6 max-w-3xl mx-auto text-black text-[14px] md:text-[18px] px-6  md:px-0"
        >
          At Cplusoft life is more than work it is about learning growing and enjoying the journey. We are a global team of thinkers, problem solvers, and technologists building AI driven products and digital solutions that help businesses grow worldwide every day with purpose, meaningfully together always
        </motion.p>

        {/* Carousel */}
        <CultureCarousel />
      </div>
    </section>
  );
}
