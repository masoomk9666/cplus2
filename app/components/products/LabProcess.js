"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { id: 1, title: "IDEA", icon: "/images/products/gif/idea.gif" },
  { id: 2, title: "DATA", icon: "/images/products/gif/database.gif" },
  { id: 3, title: "MODEL", icon: "/images/products/gif/artificial-intelligence.gif" },
  { id: 4, title: "POC", icon: "/images/products/gif/api.gif" },
  { id: 5, title: "TEST", icon: "/images/products/gif/magnifying-glass-bug.gif" },
  { id: 6, title: "DEPLOY", icon: "/images/products/gif/rocket.gif" },
  { id: 7, title: "SCALE", icon: "/images/products/gif/growth.gif" },
];

export default function LabProcess() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [stepPositions, setStepPositions] = useState([]);

  /* Get SVG Path Length and Step Positions */
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);

      const positions = steps.map((_, i) => {
        const point = pathRef.current.getPointAtLength((length / (steps.length - 1)) * i);
        return { x: point.x, y: point.y };
      });

      setStepPositions(positions);
    }
  }, []);

  /* Scroll Logic */
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section = sectionRef.current;
  //     if (!section) return;

  //     const rect = section.getBoundingClientRect();
  //     const winH = window.innerHeight;

  //     const start = winH * 0.3;
  //     const end = winH * -0.7;

  //     let value = (start - rect.top) / (start - end);
  //     value = Math.min(Math.max(value, 0), 1);

  //     setProgress(value);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
/* Scroll Logic */
useEffect(() => {
  const handleScroll = () => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    
    // rect.top == 0 ka matlab hai section ka top screen ke top par hai.
    // Hum animation tabhi start karenge jab rect.top <= 0 ho.
    
    const totalScrollableDistance = rect.height - window.innerHeight;
    
    // Hum current scroll position nikalenge relative to section top
    // Math.abs(rect.top) humein batayega ke humne section ke andar kitna scroll kiya hai
    let value = Math.abs(rect.top) / totalScrollableDistance;

    // Constraints: 0 jab section top par ho, 1 jab section khatam ho raha ho
    if (rect.top > 0) {
      value = 0; // Abhi section poora screen par nahi aaya
    } else {
      value = Math.min(Math.max(value, 0), 1);
    }

    setProgress(value);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  return (
    <section ref={sectionRef} className="relative min-h-[220vh] bg-white">
      {/* Sticky Area */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6">
        {/* Headings */}
        <p className="text-[12px] md:text-[16px] uppercase tracking-widest text-black mb-3">
          DEVELOPMENT PROCESS
        </p>

        <h2 className="text-[24px] md:text-[48px] font-medium mb-24 text-center">
          How Our AI Lab Works
        </h2>

        {/* ZigZag Container */}
        <div className="relative w-full max-w-7xl h-[280px]">
          {/* SVG Path */}
          <svg viewBox="0 0 1300 200" className="absolute inset-0 w-full h-full" fill="none">
            {/* Background Path */}
            <path
              d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
              stroke="#E5E7EB"
              strokeWidth="15"
              strokeLinecap="round"
            />

            {/* Animated Path */}
            <path
              ref={pathRef}
              d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
              stroke="url(#grad)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - progress)}
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#a3e635" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          {stepPositions.map((pos, i) => {
            const active = progress >= i / (steps.length - 1);
            const step = steps[i];

            return (
              <div
                key={step.id}
                className="absolute flex flex-col items-center space-y-3"
                style={{
                  left: pos.x - 100, // center the 80px width card
                  top: pos.y - 50,  // center the 80px height card
                }}
              >
                {/* Label */}
                <div
                  className={`-mt-10 mb-10 px-3 py-1 text-[16px] rounded-md font-semibold ${
                    active ? "bg-black text-white" : "bg-gray-200 text-black"
                  }`}
                >
                  {step.id}. {step.title}
                </div>

                {/* Card */}
                <div
                  className={`relative w-40 h-40 rounded-xl flex items-center justify-center text-3xl   transition-all duration-300 bg-cover bg-center p-3
                    
                  `}
                  style={{backgroundImage: "url(/images/products/gifBg.png)" }}
                > 
                 
                    <img src={step.icon} className=" absolute top-0 w-10  bg-transparent rounded-lg" />
                
                    
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






