"use client";
import SkShadeBtn from "../layout/SkShadeBtn";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cards = [
  {
    title: "Meeting Point Collection",
    imgSrc: "/images/preBuiltModelsSection/01.png",
    backTitle: "Meeting Point Collection",
    backDescription:
      "Automatically detects and extracts key meeting locations from images or video to improve mapping and navigation accuracy.",
  },
  {
    title: "Body Tracking System",
    imgSrc: "/images/preBuiltModelsSection/02.png",
    backTitle: "Body Tracking System",
    backDescription:
      "Tracks human movement in real time for fitness applications, AR experiences, and intelligent monitoring systems.",
  },
  {
    title: "Roof Detection System",
    imgSrc: "/images/preBuiltModelsSection/03.png",
    backTitle: "Roof Detection System",
    backDescription:
      " Identifies roofs in aerial imagery to accelerate insurance assessments, solar planning, and urban analysis.",
  },
  {
    title: "Voice Classification System",
    imgSrc: "/images/preBuiltModelsSection/04.png",
    backTitle: "Voice Classification System",
    backDescription:
      "Analyzes audio to detect speaker identity, intent, and emotional tone ideal for call centers and intelligent assistants.",
  },
  {
    title: "Human Activity Recognition",
    imgSrc: "/images/preBuiltModelsSection/05.png",
    backTitle: "Human Activity Recognition",
    backDescription:
      " Accurately counts people in physical spaces for retail analytics, events, and safety planning.",
  },
  {
    title: "PDF Fields Extraction",
    imgSrc: "/images/preBuiltModelsSection/06.png",
    backTitle: "PDF Fields Extraction",
    backDescription:
      "Interprets emotional cues from images and video to support UX research, feedback systems, and wellbeing tools.",
  },
  {
    title: "Facial Expression Detection",
    imgSrc: "/images/preBuiltModelsSection/07.png",
    backTitle: "Facial Expression Detection",
    backDescription:
      " Automatically extracts structured data from PDFs, saving time on contracts, invoices, and reports.",
  },
  {
    title: "Human Counting System",
    imgSrc: "/images/preBuiltModelsSection/08.png",
    backTitle: "Human Counting System",
    backDescription:
      "Detects activities like working, idle time, resting, or sleeping in closed environments using video data for monitoring, productivity and safety.",
  },
];

export default function PrebuiltModelsSection() {
  // State to track flipped cards by index
  const [flippedCards, setFlippedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Toggle card flip on mobile (click) and maintain hover on desktop
  const toggleCardFlip = (index) => {
    // On mobile only, toggle flip state
    if (isMobile) {
      setFlippedCards((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/images/preBuiltModelsSection/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto">
        {/* ===== ROW 1 : CONTENT ===== */}
        <div className="w-full max-w-4xl mb-10 sm:mb-12 md:mb-16">
          <motion.p className="text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-wide text-black mb-2 sm:mb-3"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
            Prebuilt Models
          </motion.p>

          <motion.h2 className="max-w-3xl text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] text-black leading-tight mb-4 sm:mb-5 md:mb-6 "
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay:0.3 }}
          >
            Ready to Deploy AI Models for Real World Use 
          </motion.h2>

          <motion.p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black mb-6 sm:mb-7 md:mb-8 max-w-xl w-full leading-relaxed"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}>
            Pre-built models that cut development time and reduce manual effort, helping teams move faster with reliable real-world solutions that are easy to integrate, scale smoothly, and deliver results without starting from scratch or adding complexity.
          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          >
          <SkShadeBtn text="Learn More" />
          </motion.div>
          
        </div>
        
        {/* Cards Grid - Responsive */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:ml-25"
        initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative h-60 sm:h-64 md:h-72 lg:h-80
                ${index % 4 === 0 ? "mt-0" : ""}
                ${index % 4 === 1 ? "lg:-mt-20" : ""}
                ${index % 4 === 2 ? "lg:-mt-40" : ""}
                ${index % 4 === 3 ? "lg:-mt-60" : ""}
                ${!isMobile ? 'group' : ''} // Only add group class on desktop
              `}
              // Smooth Floating Animation - UNCHANGED
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.15,
              }}
              style={{
                willChange: "transform",
              }}
              // Add click handler for mobile
              onClick={() => toggleCardFlip(index)}
            >
              {/* Flip Container */}
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] 
                  ${flippedCards.includes(index) ? 'rotate-y-180' : ''}
                  ${!isMobile ? 'group-hover:rotate-y-180' : ''}`}
              >
                {/* ================= FRONT ================= */}
                <div
                  className="absolute inset-0 p-2 rounded-xl sm:rounded-2xl backdrop-blur-lg bg-white/20 shadow-lg overflow-hidden [backface-visibility:hidden]"
                >
                  <img
                    src="/images/preBuiltModelsSection/cardBg.png"
                    alt="card background"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />

                  <div className="relative p-4 sm:p-5 h-full flex flex-col justify-between">
                    <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-black uppercase">
                      {card.title}
                    </h3>

                    <img
                      src={card.imgSrc}
                      alt="ai model"
                      className="absolute -bottom-4 sm:-bottom-6 -right-8 sm:-right-12 w-40 sm:w-48 md:w-52 lg:w-60 h-40 sm:h-48 md:h-52 lg:h-60 object-cover"
                    />
                  </div>
                </div>

                {/* ================= BACK ================= */}
                <div
                  className="absolute inset-0 p-2 rounded-xl sm:rounded-2xl bg-white/20 shadow-lg overflow-hidden rotate-y-180 [backface-visibility:hidden]"
                >
                  <img
                    src="/images/preBuiltModelsSection/cardBg.png"
                    alt="back image"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />

                  <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col justify-center items-start text-start">
                    <h4 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[500] uppercase mb-2 sm:mb-3">
                      {card.backTitle}
                    </h4>

                    <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
                      {card.backDescription}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}