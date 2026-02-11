"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CultureCarousel() {
  const cultureData = [
    {
      id: 1,
      image: "/images/about/cultureCarousel/01.png",
      title: "About the achievement",
      description:
        "Most companies struggle to turn AI ideas into production-ready systems.",
    },
    {
      id: 2,
      image: "/images/about/cultureCarousel/02.png",
      title: "Team Recognition",
      description: "Celebrating milestones achieved by our global teams.",
    },
    {
      id: 3,
      image: "/images/about/cultureCarousel/02.png",
      title: "Innovation Award",
      description: "Recognizing excellence in AI-driven innovation.",
    },
    {
      id: 4,
      image: "/images/about/cultureCarousel/02.png",
      title: "Global Culture",
      description: "Diverse teams working together worldwide.",
    },
    {
      id: 5,
      image: "/images/about/cultureCarousel/02.png",
      title: "Global Culture",
      description: "Diverse teams working together worldwide.",
    },
    {
      id: 6,
      image: "/images/about/cultureCarousel/02.png",
      title: "Global Culture",
      description: "Diverse teams working together worldwide.",
    },
  ];

  const [items, setItems] = useState(cultureData);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        newArr.push(first);
        return newArr;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-10 md:mt-20 flex justify-center items-center overflow-hidden">
      <div className="flex items-center gap-6">
        {items.slice(0, 5).map((item, index) => {
          const isActive = index === 2;

          return (
            <motion.div
              key={item.id}
              layout
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`relative rounded-2xl overflow-hidden bg-gray-300
                ${isActive ? "w-[320px] h-[420px] opacity-100" : "w-[260px] h-[320px] "}
                ${index === 0 || index === 4 ? " scale-90" : ""}
              `}
            >
              {(index === 0 || index === 4) ? (
                <div className="absolute inset-0 bg-black/70 pointer-events-none rounded-2xl z-10" />
              ) : !isActive && (
                <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-2xl z-10" />
              )}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                    // className="absolute bottom-0 w-full bg-gradient-to-b from-white/10 to-[#42DC99] p-6 text-white"
                    className="absolute bottom-0 w-full bg-gradient-to-b from-[#BAF2F31A] to-[#42DC99] backdrop-blur-sm backdrop-saturate-100 p-6 text-white text-start"

                  >
                    <h3 className="text-[18px] md:text-[24px] font-medium">{item.title}</h3>
                    <p className="text-[14px] md:text-[18px] mt-2">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

