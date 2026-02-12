// "use client";

// import { useEffect, useRef, useState } from "react";
// const steps = [
//   { id: 1, title: "IDEA", icon: "/images/products/gif/idea.gif" },
//   { id: 2, title: "DATA", icon: "/images/products/gif/database.gif" },
//   { id: 3, title: "MODEL", icon: "/images/products/gif/artificial-intelligence.gif" },
//   { id: 4, title: "POC", icon: "/images/products/gif/api.gif" },
//   { id: 5, title: "TEST", icon: "/images/products/gif/magnifying-glass-bug.gif" },
//   { id: 6, title: "DEPLOY", icon: "/images/products/gif/rocket.gif" },
//   { id: 7, title: "SCALE", icon: "/images/products/gif/growth.gif" },
// ];
// export default function LabProcess() {
//   const sectionRef = useRef(null);
//   const pathRef = useRef(null);

//   const [progress, setProgress] = useState(0);
//   const [pathLength, setPathLength] = useState(0);
//   const [stepPositions, setStepPositions] = useState([]);

//   const [screenWidth, setScreenWidth] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     handleResize(); // initial run
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* Get SVG Path Length and Step Positions */
//   useEffect(() => {
//     if (pathRef.current) {
//       const length = pathRef.current.getTotalLength();
//       setPathLength(length);

//       const positions = steps.map((_, i) => {
//         let spacingFactor = 1;

//         if (screenWidth < 768) {
//           spacingFactor = 0.3; // Mobile (tight)
//         } else if (screenWidth < 1024) {
//           spacingFactor = 0.5; // Tablet
//         } else {
//           spacingFactor = 1; // Laptop/Desktop
//         }

//         const point = pathRef.current.getPointAtLength(
//           (length / (steps.length - 1)) * i * spacingFactor
//         );

//         // const point = pathRef.current.getPointAtLength((length / (steps.length - 1)) * i);

//         return { x: point.x, y: point.y };
//       });

//       setStepPositions(positions);
//     }
//   }, [[screenWidth]]);

//   /* Scroll Logic */
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       const totalScrollableDistance = rect.height - window.innerHeight;
//       let value = Math.abs(rect.top) / totalScrollableDistance;
//       if (rect.top > 0) {
//         value = 0; // Abhi section poora screen par nahi aaya
//       } else {
//         value = Math.min(Math.max(value, 0), 1);
//       }
//       setProgress(value);
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   return (
//     <section ref={sectionRef} className="relative min-h-[220vh] bg-white">
//       {/* Sticky Area */}
//       <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6">
//         {/* Headings */}
//         <p className="text-[12px] md:text-[16px] uppercase tracking-widest text-black mb-3">
//           DEVELOPMENT PROCESS
//         </p>

//         <h2 className="text-[24px] md:text-[48px] font-medium mb-24 text-center">
//           How Our AI Lab Works
//         </h2>

//         {/* ZigZag Container */}
//         <div className="relative w-full max-w-7xl h-[280px]">
//           {/* SVG Path */}
//           <svg viewBox="0 0 1300 200" className="absolute inset-0 w-full h-full" fill="none">
//             {/* Background Path */}
//             <path
//               d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
//               stroke="#E5E7EB"
//               strokeWidth="15"
//               strokeLinecap="round"
//             />

//             {/* Animated Path */}
//             <path
//               ref={pathRef}
//               d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
//               stroke="url(#grad)"
//               strokeWidth="15"
//               strokeLinecap="round"
//               strokeDasharray={pathLength}
//               strokeDashoffset={pathLength * (1 - progress)}
//             />

//             {/* Gradient */}
//             <defs>
//               <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#4ade80" />
//                 <stop offset="100%" stopColor="#a3e635" />
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* Steps */}
//           {stepPositions.map((pos, i) => {
//             const active = progress >= i / (steps.length - 1);
//             const step = steps[i];

//             return (
//               <div
//                 key={step.id}
//                 className="absolute flex flex-col items-center space-y-3"
//                 style={{
//                   left: pos.x - 100, // center the 80px width card
//                   top: pos.y - 50,  // center the 80px height card
//                 }}
//               >
//                 {/* Label */}
//                 <div
//                   className={`-mt-10 mb-10 px-3 py-1 text-[16px] rounded-md font-semibold ${active ? "bg-black text-white" : "bg-gray-200 text-black"
//                     }`}
//                 >
//                   {step.id}. {step.title}
//                 </div>

//                 {/* Card */}
//                 <div
//                   className={`relative w-40 h-40 rounded-xl flex items-center justify-center text-3xl   transition-all duration-300 bg-cover bg-center p-3

//                   `}
//                   style={{ backgroundImage: "url(/images/products/gifBg.png)" }}
//                 >

//                   <img src={step.icon} className=" absolute top-0 w-10  bg-transparent rounded-lg" />


//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }














// "use client";

// import { useEffect, useRef, useState } from "react";

// const steps = [
//   { id: 1, title: "IDEA", icon: "/images/products/gif/idea.gif" },
//   { id: 2, title: "DATA", icon: "/images/products/gif/database.gif" },
//   { id: 3, title: "MODEL", icon: "/images/products/gif/artificial-intelligence.gif" },
//   { id: 4, title: "POC", icon: "/images/products/gif/api.gif" },
//   { id: 5, title: "TEST", icon: "/images/products/gif/magnifying-glass-bug.gif" },
//   { id: 6, title: "DEPLOY", icon: "/images/products/gif/rocket.gif" },
//   { id: 7, title: "SCALE", icon: "/images/products/gif/growth.gif" },
// ];

// export default function LabProcess() {
//   const sectionRef = useRef(null);
//   const pathRef = useRef(null);

//   const [progress, setProgress] = useState(0);
//   const [pathLength, setPathLength] = useState(0);
//   const [stepPositions, setStepPositions] = useState([]);
//   const [screenWidth, setScreenWidth] = useState(0);

//   /* Detect Screen Width */
//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isDesktop = screenWidth >= 1024;

//   /* Desktop SVG Logic (UNCHANGED) */
//   useEffect(() => {
//     if (!isDesktop || !pathRef.current) return;

//     const length = pathRef.current.getTotalLength();
//     setPathLength(length);

//     const positions = steps.map((_, i) => {
//       const point = pathRef.current.getPointAtLength(
//         (length / (steps.length - 1)) * i
//       );
//       return { x: point.x, y: point.y };
//     });

//     setStepPositions(positions);
//   }, [isDesktop]);

//   /* Scroll Animation */
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const totalScrollableDistance = rect.height - window.innerHeight;

//       let value = Math.abs(rect.top) / totalScrollableDistance;

//       if (rect.top > 0) value = 0;
//       else value = Math.min(Math.max(value, 0), 1);

//       setProgress(value);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative min-h-[220vh] bg-white lg:py-0">
//       <div className="sticky top-0 min-h-screen flex flex-col justify-center items-center px-6">

//         <p className="text-[12px] md:text-[16px] uppercase tracking-widest text-black mb-3">
//           DEVELOPMENT PROCESS
//         </p>

//         <h2 className="text-[24px] md:text-[48px] font-medium mb-16 text-center">
//           How Our AI Lab Works
//         </h2>

//         {/* ================= DESKTOP ZIGZAG ================= */}
//         {isDesktop && (
//           <div className="relative w-full max-w-7xl h-[280px]">
//             <svg
//               viewBox="0 0 1300 200"
//               className="absolute inset-0 w-full h-full"
//               fill="none"
//             >
//               <path
//                 d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
//                 stroke="#E5E7EB"
//                 strokeWidth="15"
//                 strokeLinecap="round"
//               />

//               <path
//                 ref={pathRef}
//                 d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
//                 stroke="url(#grad)"
//                 strokeWidth="15"
//                 strokeLinecap="round"
//                 strokeDasharray={pathLength}
//                 strokeDashoffset={pathLength * (1 - progress)}
//               />

//               <defs>
//                 <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#4ade80" />
//                   <stop offset="100%" stopColor="#a3e635" />
//                 </linearGradient>
//               </defs>
//             </svg>

//             {stepPositions.map((pos, i) => {
//               const active = progress >= i / (steps.length - 1);
//               const step = steps[i];

//               return (
//                 <div
//                   key={step.id}
//                   className="absolute flex flex-col items-center space-y-3"
//                   style={{
//                     left: pos.x - 100,
//                     top: pos.y - 50,
//                   }}
//                 >
//                   <div
//                     className={`-mt-10 mb-10 px-3 py-1 text-[16px] rounded-md font-semibold ${active
//                       ? "bg-black text-white"
//                       : "bg-gray-200 text-black"
//                       }`}
//                   >
//                     {step.id}. {step.title}
//                   </div>

//                   <div
//                     className="relative w-40 h-40 rounded-xl flex items-center justify-center bg-cover bg-center p-3"
//                     style={{
//                       backgroundImage:
//                         "url(/images/products/gifBg.png)",
//                     }}
//                   >
//                     <img
//                       src={step.icon}
//                       className="absolute top-0 w-10"
//                       alt={step.title}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* ================= MOBILE + TABLET PREMIUM VERTICAL ================= */}
//         {!isDesktop && (
//           <div className="relative w-full max-w-3xl mx-auto py-10">

//             {/* Background Center Line */}
//             <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-gray-200 rounded-full" />

//             {/* Gradient Fill Line */}
//             <div
//               className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] rounded-full transition-all duration-300"
//               style={{
//                 height: `${progress * 100}%`,
//                 background: "linear-gradient(to bottom, #4ade80, #a3e635)",
//               }}
//             />

//             <div className="flex flex-col space-y-20">
//               {steps.map((step, i) => {
//                 const active = progress >= i / (steps.length - 1);
//                 const isLeft = i % 2 === 0;

//                 return (
//                   <div key={step.id} className="grid grid-cols-3 items-start">

//                     {/* LEFT COLUMN */}
//                     <div className="flex justify-end">
//                       {isLeft && (
//                         <div className="text-center ">
//                           <div
//                             className={`md:inline-block w-full md:w-auto px-3 py-1 text-[14px] rounded-md font-semibold mb-8 ml-3 md:ml-10 ${active
//                                 ? "bg-black text-white"
//                                 : "bg-gray-200 text-black"
//                               }`}
//                           >
//                             {step.id}. {step.title}
//                           </div>

//                           <div
//                             className= "w-30 h-30 md:w-50 md:h-50 rounded-xl flex items-center justify-center bg-cover bg-center p-3 -mr-5 md:-mr-13"
//                             style={{
//                               backgroundImage:
//                                 "url(/images/products/gifBg.png)",
//                             }}
//                           >
//                             <img
//                               src={step.icon}
//                               className="w-15 md:w-20 -mt-30 rounded-2xl"
//                               alt={step.title}
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* CENTER COLUMN (Circle exactly on line) */}
//                     <div className="flex justify-center">
//                       <div
//                         className={`w-6 h-6 rounded-full border-4 mt-1 ${active
//                             ? "bg-green-500 border-green-200"
//                             : "bg-white border-gray-300"
//                           }`}
//                       />
//                     </div>

//                     {/* RIGHT COLUMN */}
//                     <div className="flex justify-start md:pl-5 ">
//                       {!isLeft && (
//                         <div>
//                           <div
//                             className={`md:inline-block  md:w-auto px-3 py-1 text-[14px] rounded-md font-semibold mb-8  md:mr-0 ${active
//                                 ? "bg-black text-white"
//                                 : "bg-gray-200 text-black"
//                               }`}
//                           >
//                             {step.id}. {step.title}
//                           </div>

//                           <div
//                             className="w-30 h-30 md:w-50 md:h-50 rounded-xl flex items-center justify-center bg-cover bg-center p-3  -ml-5 md:-ml-13"
//                             style={{
//                               backgroundImage:
//                                 "url(/images/products/gifBg.png)",
//                             }}
//                           >
//                             <img
//                               src={step.icon}
//                               className="w-15 md:w-20 -mt-30 rounded-2xl"
//                               alt={step.title}
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}


//       </div>
//     </section>
//   );
// }






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
  const [screenWidth, setScreenWidth] = useState(0);

  /* Detect Screen Width */
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = screenWidth >= 1024;

  /* Desktop SVG Logic */
  useEffect(() => {
    if (!isDesktop || !pathRef.current) return;

    const length = pathRef.current.getTotalLength();
    setPathLength(length);

    const positions = steps.map((_, i) => {
      const point = pathRef.current.getPointAtLength(
        (length / (steps.length - 1)) * i
      );
      return { x: point.x, y: point.y };
    });

    setStepPositions(positions);
  }, [isDesktop]);

  /* Scroll Animation */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScrollableDistance = rect.height - window.innerHeight;

      let value = Math.abs(rect.top) / totalScrollableDistance;

      if (rect.top > 0) value = 0;
      else value = Math.min(Math.max(value, 0), 1);

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[220vh] bg-white lg:py-0">
      <div className="sticky top-0 min-h-screen flex flex-col justify-center items-center px-6">

        <p className="text-[12px] md:text-[16px] uppercase tracking-widest text-black mb-3">
          DEVELOPMENT PROCESS
        </p>

        <h2 className="text-[24px] md:text-[48px] font-medium mb-16 text-center">
          How Our AI Lab Works
        </h2>

        {/* ================= DESKTOP ZIGZAG ================= */}
        {isDesktop && (
          <div className="relative w-full max-w-7xl h-[280px]">
            <svg
              viewBox="0 0 1300 200"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <path
                d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
                stroke="#E5E7EB"
                strokeWidth="15"
                strokeLinecap="round"
              />

              <path
                ref={pathRef}
                d="M 50 200 L 180 60 L 400 160 L 600 60 L 800 160 L 1000 80 L 1200 180"
                stroke="url(#grad)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={pathLength * (1 - progress)}
              />

              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#a3e635" />
                </linearGradient>
              </defs>
            </svg>

            {stepPositions.map((pos, i) => {
              const active = progress >= i / (steps.length - 1);
              const step = steps[i];

              return (
                <div
                  key={step.id}
                  className="absolute flex flex-col items-center space-y-3"
                  style={{
                    left: pos.x - 100,
                    top: pos.y - 50,
                  }}
                >
                  <div
                    className={`-mt-10 mb-10 px-3 py-1 text-[16px] rounded-md font-semibold ${
                      active
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {step.id}. {step.title}
                  </div>

                  <div
                    className="relative w-40 h-40 rounded-xl flex items-center justify-center bg-cover bg-center p-3"
                    style={{
                      backgroundImage:
                        "url(/images/products/gifBg.png)",
                    }}
                  >
                    <img
                      src={step.icon}
                      className="absolute top-0 w-10"
                      alt={step.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= MOBILE + TABLET PREMIUM VERTICAL ================= */}
        {!isDesktop && (
          <div className="relative w-full max-w-3xl mx-auto py-10">
            
            {/* Background Gray Line - Starts from first circle, ends at last circle */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[85%] bg-gray-200 rounded-full -mt-10"
              style={{
                top: '100px', // Start from first circle
                // height: `calc(100% - 200px)`, // End before last circle
              }}
            />

            {/* Gradient Fill Line - Starts from first circle, grows with scroll */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[8px] rounded-full transition-all duration-300 -mt-10"
              style={{
                top: '100px', // Start from first circle
                height: `${progress * (100-15)}%`, // Proportional fill
                // height: "calc(100% - 260px)",
                background: "linear-gradient(to bottom, #4ade80, #a3e635)",
              }}
            />

            <div className="flex flex-col space-y-20 relative">
              {steps.map((step, i) => {
                const active = progress >= i / (steps.length - 1);
                const isLeft = i % 2 === 0;
                const isLast = i === steps.length - 1;

                return (
                  <div key={step.id} className="grid grid-cols-3 items-start relative">
                    
                    {/* LEFT COLUMN */}
                    <div className="flex justify-end">
                      {isLeft && (
                        <div className="text-center">
                          <div
                            className={`md:inline-block w-full md:w-auto px-3 py-1 text-[14px] rounded-md font-semibold mb-8 ml-3 md:ml-10 ${
                              active
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            {step.id}. {step.title}
                          </div>

                          <div
                            className="w-30 h-30 md:w-50 md:h-50 rounded-xl flex items-center justify-center bg-cover bg-center p-3 -mr-5 md:-mr-13"
                            style={{
                              backgroundImage:
                                "url(/images/products/gifBg.png)",
                            }}
                          >
                            <img
                              src={step.icon}
                              className="w-15 md:w-20 -mt-30 rounded-2xl"
                              alt={step.title}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CENTER COLUMN - Circle exactly on line */}
                    <div className="flex justify-center">
                      <div
                        className={`w-6 h-6 rounded-full border-4 mt-1 ${
                          active
                            ? "bg-green-500 border-green-200"
                            : "bg-white border-gray-300"
                        }`}
                      />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex justify-start md:pl-5">
                      {!isLeft && (
                        <div>
                          <div
                            className={`md:inline-block md:w-auto px-3 py-1 text-[14px] rounded-md font-semibold mb-8 md:mr-0 ${
                              active
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            {step.id}. {step.title}
                          </div>

                          <div
                            className="w-30 h-30 md:w-50 md:h-50 rounded-xl flex items-center justify-center bg-cover bg-center p-3 -ml-5 md:-ml-13"
                            style={{
                              backgroundImage:
                                "url(/images/products/gifBg.png)",
                            }}
                          >
                            <img
                              src={step.icon}
                              className="w-15 md:w-20 -mt-30 rounded-2xl"
                              alt={step.title}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}