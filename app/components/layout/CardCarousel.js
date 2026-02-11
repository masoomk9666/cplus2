
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CardCarousel = () => {
  const images = [
    "/images/carousel/01.png",
    "/images/carousel/02.png",
    "/images/carousel/03.png",
    "/images/carousel/04.png",
    "/images/carousel/05.png",
    "/images/carousel/06.png",
    "/images/carousel/07.png",
    "/images/carousel/08.png",
    "/images/carousel/09.png",
    "/images/carousel/10.png",
    "/images/carousel/11.png",
    "/images/carousel/12.png",
    "/images/carousel/13.png",
    "/images/carousel/14.png",
    "/images/carousel/15.png",
    "/images/carousel/16.png",
    "/images/carousel/17.png",
    "/images/carousel/18.png",
  ];

  // Screen size detect karne ke liye
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden pt-10 md:pt-15 lg:pt-25 ">
      <style>
        {`
          @keyframes bounceHover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-50px); }
          }
          
          @keyframes bounceHoverMobile {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>

      {/* Mobile (small screens) ke liye gradient width kam karenge */}
      <div className="absolute left-0 top-0 h-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, white 0%, transparent 100%)",
          width: isMobile ? "32px" : isTablet ? "48px" : "256px"
        }}
      />

      <div className="absolute right-0 top-0 h-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, white 0%, transparent 100%)",
          width: isMobile ? "32px" : isTablet ? "48px" : "256px"
        }}
      />

      {/* Responsive height for different devices */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[300px] flex items-end">
        <motion.div
          className="relative flex gap-0 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: isMobile ? 15 : isTablet ? 20 : 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              // Responsive width for different devices
              className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-50 h-full flex-shrink-0 px-1 sm:px-2 "
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-[220px] md:h-[350px] rounded-lg md:rounded-xl transition-transform cursor-pointer"
                onMouseEnter={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.animation =
                      "bounceHoverMobile 0.5s ease-out";
                  } else {
                    e.currentTarget.style.animation =
                      "bounceHover 0.5s ease-out";
                  }
                }}
                onAnimationEnd={(e) => {
                  e.currentTarget.style.animation = "";
                }}
                // Mobile ke liye touch events
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.animation =
                      "bounceHoverMobile 0.5s ease-out";
                  }
                }}
                onTouchEnd={(e) => {
                  setTimeout(() => {
                    e.currentTarget.style.animation = "";
                  }, 500);
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CardCarousel;


