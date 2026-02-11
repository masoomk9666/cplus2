"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkShadeBtn from "../layout/SkShadeBtn";
import ContactForm from "./ContactForm";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="w-full max-w-7xl mx-auto h-full py-15 md:py-30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        {/* LEFT COLUMN */}
        <div className="px-3 md:px-6 lg:px-0 text-center md:text-start">
          <motion.h2
            variants={itemVariants}
            className="text-[24px] md:text-[48px] text-center md:text-start font-medium text-black mb-4 "
          >
            Let’s Discuss Your Project
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-black text-[14px] md:text-[18px] mb-3"
          >
            Share your requirements with us and our team will design tailored solutions that align with your goals, timelines and scale.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-black text-[14px] md:text-[18px] mb-8"
          >
            We focus on clarity, collaboration and delivering outcomes that move your business forward with confidence.
          </motion.p>

          <motion.h4
            variants={itemVariants}
            className="text-[18px] md:text-[26px] font-medium text-black mb-2"
          >
            Start your consultation today
          </motion.h4>

          <motion.p variants={itemVariants} className="text-[12px] md:text-[16px] mb-6">
            Our experts are ready to connect and guide you forward.
          </motion.p>

          {/* Avatar Section */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start gap-4 mb-6"
          >
            {/* Avatar Wrapper */}
            <div className="relative">
              <img
                src="/images/contact/avatar.png"
                alt="Sales Manager"
                className="rounded-full w-15 h-15 object-cover bg-[#D0F94A]"
              />

              {/* Online Status Dot */}
              <span className="absolute bottom-3 right-0 w-3 h-3 bg-[#3CDB9D] rounded-full border-2 border-white"></span>
            </div>

            <div>
              <p className="text-[16px] font-medium text-black">
                Alexander Kovalev
              </p>
              <p className="text-[16px] text-black">Sales Manager</p>
            </div>
          </motion.div>

          <SkShadeBtn text="Schedule a call" />
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div>
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
