"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Counter from "../layout/Counter";
import SkShadeBtn from "../layout/SkShadeBtn";

export default function Hero() {
  const MILESTONES = [
    {
      value: 10,
      suffix: "+",
      title: "Years of Expertise",
      increment: 1,
    },
    {
      value: 800,
      suffix: "+",
      title: "Projects Completed",
      increment: 5,
    },
    {
      value: 500,
      suffix: "+",
      title: "Clients Served Worldwide",
      increment: 10,
    },
    {
      value: 98,
      suffix: "+",
      title: "Positive Reviews",
      increment: 1,
    },
  ];

  /* Typing animation */
  const text =
    "To empower organizations with intelligent, end-to-end digital and AI solutions that streamline operations, accelerate growth, and enable innovation at scale. We aim to turn complex challenges into simple, powerful, and future-ready systems that drive real business impact.";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div>
      <section className="w-full bg-[#061c1f] text-white py-20 md:py-30">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center ">
          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[28px] md:text-4xl lg:text-[48px] font-medium"
          >
            About{" "}
            <span className="bg-gradient-to-b from-[#D0F94A] to-[#3CDB9D] bg-clip-text text-transparent">
              Cplus soft
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-4xl mx-auto text-[14px] md:text-[18px] text-white"
          >
            Cplusoft is a software and web development company building secure and scalable digital products. We design web and mobile applications automate workflows and modernize systems to help businesses work faster reduce manual effort and grow with confidence using smart data driven technology.
          </motion.p>
        </div>
      </section>
      <section>
      

        <div className="max-w-7xl mx-auto  -mt-40">
          {/* Our Milestones */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 md:mt-14 text-[12px] md:text-[16px] tracking-widest text-white uppercase text-center"
          >
            Our Milestones
          </motion.h4>

          {/* Counters Box */}
          <div className="mt-6 rounded-xl border border-transparent bg-gradient-to-r from-[#3CDB9D] to-[#D0F94A] p-[1px]">
            <div className="bg-[#041417] rounded-xl grid grid-cols-4 md:grid-cols-4 gap-1 py-8">
              {MILESTONES.map((item, i) => (
                <Counter
                  key={i}
                  value={item.value}
                  suffix={item.suffix}
                  title={item.title}
                  increment={item.increment}
                  /* Tailwind customization */
                  numberClass="text-2xl md:text-[48px] font-medium text-white"
                  suffixClass="text-white text-[24px] md:text-[48px]"
                  titleClass="mt-1 text-[12px] md:text-[16px] text-white"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white text-black py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className=" text-[12px] md:text-[16px] tracking-widest uppercase text-black"
            >
              Our Vision
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[18px] md:text-[36px]  font-normal mb-4"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>

            <SkShadeBtn text="Access Our Code Of Business Conduct" shadeWidth="70" />
          </div>
        </div>
      </section>
    </div>
  );
}
