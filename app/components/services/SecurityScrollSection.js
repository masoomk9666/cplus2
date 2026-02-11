"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    subheading: "BUILT TO WITHSTAND SCALE AND THREATS",
    title: "Secure Cloud Foundation",
    description:
      "This is the underlying infrastructure that supports all digital operations and workloads. It provides scalable computing resources, redundant protection, and performs at all times.",
    image: "/images/servicesPage/layer1.png",
    xPosition: 5, // Horizontal position
    yPosition: 0, // Vertical position
  },
  {
    subheading: "BUILT FOR INTEGRITY AND RELIABILITY",
    title: "Trusted Data Core",
    description:
      "This is the central repository that manages all information flows across your infrastructure. It ensures data integrity, encryption at rest and in transit, and maintains accessibility at all times.",
    image: "/images/servicesPage/layer2.png",
    xPosition: 4, // Horizontal position
    yPosition: -10, // Vertical position
  },
  {
    subheading : "MANAGED AUTOMATION, NOT RUNAWAY AI",
    title: "Intelligent Control Plane",
    description:
      "The Intelligent Control Plane orchestrates your AI and automation workflows with precision. It ensures decisions are controlled, predictable, and aligned with business objectives, while continuously optimizing performance across systems.",
    image: "/images/servicesPage/layer3.png",
    xPosition: 5, // Horizontal position
    yPosition: -20, // Vertical position
  },
  {
    subheading : "DESIGNED FOR UNIVERSAL CONNECTIVITY",
    title: "Digital Interaction Surface",
    description:
      "This is the underlying interface that supports all user touchpoints across devices and platforms. It ensures seamless interaction, responsive design, and performs at all times.",
    image: "/images/servicesPage/layer4.png",
    xPosition: 2, // Horizontal position
    yPosition: -33, // Vertical position
  },
];

/* ---------------- IMAGE LAYER ---------------- */
function ImageLayer({ 
  scrollYProgress, 
  index, 
  image, 
  total, 
  isActive, 
  xPosition = 0,
  yPosition = 0 
}) {
  const start = index * 0.25;
  const end = start + 0.15;
  
  // First layer - always visible from start
  if (index === 0) {
    return (
      <motion.img
        src={image}
        alt=""
        style={{
          x: xPosition, // X position from array
          y: yPosition, // Y position from array
          zIndex: total,
          transformStyle: "preserve-3d",
        }}
        className="absolute w-[260px] md:w-[300px] lg:w-[500px] rounded-xl drop-shadow-2xl"
      />
    );
  }
  
  // For subsequent layers, they come from top and settle at their position
  const y = useTransform(
    scrollYProgress, 
    [start - 0.05, start, end], 
    [-500, yPosition, yPosition] // Animate to yPosition from array
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start],
    [0, 1]
  );

  return (
    <motion.img
      src={image}
      alt=""
      style={{
        x: xPosition, // X position from array
        y,
        opacity,
        zIndex: total + index, // Newer layers have higher z-index
        transformStyle: "preserve-3d",
      }}
      className="absolute w-[260px] md:w-[300px] lg:w-[520px] rounded-xl drop-shadow-2xl"
    />
  );
}

/* ---------------- TEXT LAYER ---------------- */
function TextLayer({ scrollYProgress, index, title, description,subheading, isActive }) {
  const start = index * 0.25;
  const end = start + 0.15;

  // For active layer - show with animation
  if (isActive) {
    const opacity = useTransform(
      scrollYProgress,
      [start - 0.1, start, end - 0.1],
      [0, 1, 1]
    );

    const y = useTransform(
      scrollYProgress,
      [start - 0.1, start],
      [40, 0]
    );

    return (
      <motion.div 
        style={{ opacity, y }} 
        className="absolute text-center lg:text-start"
      >
        <p className="text-[12px] md:text-[16px] uppercase tracking-widest text-black mb-3">
          {subheading}
        </p>
        <h2 className="text-[20px] md:text-[32px] font-medium mb-4">
          {title}
        </h2>
        <p className="text-[14px] md:text-[18px] text-black max-w-lg">{description}</p>
      </motion.div>
    );
  }

  // For inactive layers - don't render anything
  return null;
}

/* ---------------- MAIN SECTION ---------------- */
export default function SecurityScrollSection() {
  const sectionRef = useRef(null);
  const [currentActiveLayer, setCurrentActiveLayer] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Determine active layer index
  const activeLayer = useTransform(
    scrollYProgress,
    steps.map((_, i) => i * 0.25),
    steps.map((_, i) => i)
  );

  // Update current active layer when scroll changes
  useEffect(() => {
    const unsubscribe = activeLayer.on("change", (latest) => {
      setCurrentActiveLayer(Math.floor(latest));
    });
    return unsubscribe;
  }, [activeLayer]);

  return (
    <section ref={sectionRef} className="relative h-[200vh] md:h-[300vh] py-50 p-3 md:p-6 lg:p-0">
      
      <div className="sticky top-10 md:top-20 lg:top-20 h-[70vh] md:h-[100vh] lg:h-[100vh] flex flex-col items-center gap-30">
        <div className="flex flex-col items-center justify-center text-center lg:text-start">
        <p className="text-[12px] md:text-[16px] uppercase">Trust, Built in Every Layer</p>
        <h2 className="text-[24px] md:text-[48px] font-medium">Enterprise-Level Protection by Design</h2>
      </div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — IMAGE STACK */}
          <div className="relative h-[10vh] md:h-[20vh] lg:h-[420px] flex justify-center items-center ">
            <motion.div
              className="relative w-full h-full flex justify-center items-center"
            >
              {steps.map((step, index) => (
                <ImageLayer
                  key={index}
                  index={index}
                  image={step.image}
                  total={steps.length}
                  scrollYProgress={scrollYProgress}
                  isActive={currentActiveLayer >= index}
                  xPosition={step.xPosition} // Pass X position from array
                  yPosition={step.yPosition} // Pass Y position from array
                />
              ))}
            </motion.div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="relative h-[300px] flex flex-col justify-center items-center  overflow-visible">
            {steps.map((step, index) => (
              <TextLayer
                key={index}
                index={index}
                title={step.title}
                subheading={step.subheading}
                description={step.description}
                scrollYProgress={scrollYProgress}
                isActive={currentActiveLayer === index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}