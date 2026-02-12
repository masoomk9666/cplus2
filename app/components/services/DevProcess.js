// "use client";
// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const DevProcess = () => {
//   const mainContainer = useRef(null);
//   const triggerRef = useRef(null);
//   const trackRef = useRef(null);
//   const leaderRef = useRef(null);
//   const hexRefs = useRef([]);
//   const textRefs = useRef([]); // Text labels ke liye new ref

//   const hexagons = [
//     { id: 1, img: "/images/servicesPage/step1.png", text: "Identify opportunities aligned with business goals", pos: "bottom" },
//     { id: 2, img: "/images/servicesPage/step2.png", text: "Design scalable, secure system architectures", pos: "top" },
//     { id: 3, img: "/images/servicesPage/step3.png", text: "Build intelligent platforms and workflows", pos: "bottom" },
//     { id: 4, img: "/images/servicesPage/step4.png", text: "Ensure accuracy performance and reliability", pos: "top" },
//     { id: 5, img: "/images/servicesPage/step5.png", text: "Launch monitor and continuously improve.", pos: "bottom" },
//   ];

//   useLayoutEffect(() => {
//   const mm = gsap.matchMedia();

//   let ctx;

//   mm.add("(min-width: 768px)", () => {
//     // Sirf Tab + Desktop ke liye

//     ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "+=3000",
//           scrub: 1,
//           pin: true,
//           pinSpacing: true,
//         },
//       });

//       const rawDistance =
//         trackRef.current.offsetWidth / 2 -
//         leaderRef.current.offsetWidth / 2;

//       const moveDistance = rawDistance * 0.8;

//       // 1. Leader move
//       tl.to(leaderRef.current, {
//         x: moveDistance,
//         duration: 2,
//         ease: "power2.inOut",
//       });

//       // 2. Reverse animation
//       const reversedHex = [...hexRefs.current].reverse();
//       const reversedText = [...textRefs.current].reverse();

//       reversedHex.forEach((hex, index) => {
//         tl.to(
//           hex,
//           {
//             opacity: 1,
//             x: 0,
//             scale: 1,
//             duration: 1.5,
//             ease: "power2.out",
//           },
//           "+=0.12"
//         );

//         tl.to(
//           reversedText[index],
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "back.out(1.7)",
//           },
//           "<0.5"
//         );
//       });
//     }, mainContainer);

//     // Cleanup for this media query
//     return () => ctx?.revert();
//   });

//   return () => {
//     mm.revert(); // Clean all matchMedia
//   };
// }, []);


//   return (
//     <div ref={mainContainer} className="relative bg-white">
//       <section ref={triggerRef} className="relative  lg:h-screen w-full flex flex-col justify-center items-center z-20 bg-white p-3 ">
//         <div className="text-center mb-12">
//           <p className="text-[#000000] text-[16px] font-regular uppercase ">Engineered for scalable real world impact</p>
//           <h2 className="text-[24px] md:text-[48px] font-medium text-black mb-4 tracking-tighter">
//             Our Software Development Process
//           </h2>
//         </div>

//         <div className="w-full max-w-full lg:max-w-7xl mx-auto px-20">

//           <div ref={trackRef} className="relative hidden md:flex items-center h-[500px] lg:h-[500px]"> {/* Height increased for text */}

//             <div className="flex items-center">
//               {hexagons.map((hex, index) => (
//                 <div
//                   key={hex.id}
//                   ref={(el) => (hexRefs.current[index] = el)}
//                   className="relative opacity-0 translate-x-10 scale-90"
//                   style={{ margin: "0 -28px" }}
//                 >

//                   {/* Text Label Wrapper */}
//                   <div
//                     ref={(el) => (textRefs.current[index] = el)}
//                     className={`absolute left-1/2 -translate-x-1/2 w-[150px] lg:w-[220px] text-center opacity-0 flex flex-col items-center ml-0
//     ${hex.pos === "top" ? "-top-32" : "-bottom-32"}`}
//                   >
//                     {/* TOP POSITION */}
//                     {hex.pos === "top" && (
//                       <>
//                         <p className="text-[13px] font-bold text-gray-900 mb-2">
//                           {hex.text}
//                         </p>
//                         <div className="w-[2px] h-12 bg-[#3CDB9D] relative">
//                           <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3CDB9D] rounded-full"></div>
//                         </div>
//                       </>
//                     )}

//                     {/* BOTTOM POSITION */}
//                     {hex.pos === "bottom" && (
//                       <>
//                         <div className="w-[2px] h-12 bg-[#3CDB9D] relative mb-2">
//                           <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3CDB9D] rounded-full"></div>
//                         </div>
//                         <p className="text-[13px] font-bold text-gray-900 mt-2">
//                           {hex.text} {/* Adjust spacing with mt-2 / mt-3 etc */}
//                         </p>
//                       </>
//                     )}
//                   </div>


//                   <img src={hex.img} alt={hex.id} className="w-20 md:w-35 lg:w-55 h-auto select-none" />
//                 </div>
//               ))}
//             </div>

//             {/* Black Leader Hexagon */}
//             <div
//               ref={leaderRef}
//               className="absolute left-1/2 -translate-x-1/2 z-30"
//             >

//               <img src="/images/servicesPage/blac-hexa.png" alt="Leader" className="w-20 md:w-35 lg:w-55 h-auto select-none" />
//             </div>
//           </div>
//           <div className="block md:hidden h-screen">
//             <img src={"/images/servicesPage/devAnimationMobile.png"} className="w-full h-auto scale-180 translate-y-30" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DevProcess;






"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DevProcess = () => {
  const mainContainer = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const leaderRef = useRef(null);
  const hexRefs = useRef([]);
  const textRefs = useRef([]);

  const hexagons = [
    { id: 1, img: "/images/servicesPage/step1.png", text: "Identify opportunities aligned with business goals", pos: "bottom" },
    { id: 2, img: "/images/servicesPage/step2.png", text: "Design scalable, secure system architectures", pos: "top" },
    { id: 3, img: "/images/servicesPage/step3.png", text: "Build intelligent platforms and workflows", pos: "bottom" },
    { id: 4, img: "/images/servicesPage/step4.png", text: "Ensure accuracy performance and reliability", pos: "top" },
    { id: 5, img: "/images/servicesPage/step5.png", text: "Launch monitor and continuously improve.", pos: "bottom" },
  ];

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    let ctx;

    mm.add("(min-width: 768px)", () => {
      // Force refresh on mount
      ScrollTrigger.refresh();
      
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true, // Important: Recalculate on refresh
            fastScrollEnd: true,
            preventOverlaps: true,
            // Refresh on tab switch
            onRefresh: (self) => {
              console.log("DevProcess ScrollTrigger refreshed");
            }
          },
        });

        const rawDistance =
          trackRef.current.offsetWidth / 2 -
          leaderRef.current.offsetWidth / 2;

        const moveDistance = rawDistance * 0.8;

        tl.to(leaderRef.current, {
          x: moveDistance,
          duration: 2,
          ease: "power2.inOut",
        });

        const reversedHex = [...hexRefs.current].reverse();
        const reversedText = [...textRefs.current].reverse();

        reversedHex.forEach((hex, index) => {
          tl.to(
            hex,
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
            },
            "+=0.12"
          );

          tl.to(
            reversedText[index],
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "back.out(1.7)",
            },
            "<0.5"
          );
        });
      }, mainContainer);

      // Global refresh listener for tab changes
      const handleRefresh = () => {
        ScrollTrigger.refresh(true);
      };

      // Listen for tab switch events
      window.addEventListener('tabswitch', handleRefresh);
      
      // Also watch for any clicks that might be tab switches
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' || mutation.type === 'attributes') {
            // Check if tabs container is changing
            const tabsContainer = document.querySelector('[role="tablist"], .tabs-container, [class*="tab"]');
            if (tabsContainer && mutation.target === tabsContainer || tabsContainer?.contains(mutation.target)) {
              clearTimeout(window.refreshTimeout);
              window.refreshTimeout = setTimeout(() => {
                ScrollTrigger.refresh(true);
              }, 100);
            }
          }
        });
      });

      // Start observing
      setTimeout(() => {
        const tabsContainer = document.querySelector('[role="tablist"], .tabs-container, [class*="tab"]');
        if (tabsContainer) {
          observer.observe(tabsContainer, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'aria-selected', 'data-state']
          });
        }
      }, 1000); // Wait for DOM to be ready

      return () => {
        ctx?.revert();
        window.removeEventListener('tabswitch', handleRefresh);
        observer?.disconnect();
        clearTimeout(window.refreshTimeout);
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainContainer} className="relative bg-white">
      <section ref={triggerRef} className="relative lg:h-screen w-full flex flex-col justify-center items-center z-20 bg-white p-3">
        <div className="text-center mb-12">
          <p className="text-[#000000] text-[16px] font-regular uppercase">Engineered for scalable real world impact</p>
          <h2 className="text-[24px] md:text-[48px] font-medium text-black mb-4 tracking-tighter">
            Our Software Development Process
          </h2>
        </div>

        <div className="w-full max-w-full lg:max-w-7xl mx-auto px-20">
          <div ref={trackRef} className="relative hidden md:flex items-center h-[500px] lg:h-[500px]">
            <div className="flex items-center">
              {hexagons.map((hex, index) => (
                <div
                  key={hex.id}
                  ref={(el) => (hexRefs.current[index] = el)}
                  className="relative opacity-0 translate-x-10 scale-90"
                  style={{ margin: "0 -28px" }}
                >
                  <div
                    ref={(el) => (textRefs.current[index] = el)}
                    className={`absolute left-1/2 -translate-x-1/2 w-[150px] lg:w-[220px] text-center opacity-0 flex flex-col items-center ml-0
                    ${hex.pos === "top" ? "-top-32" : "-bottom-32"}`}
                  >
                    {hex.pos === "top" && (
                      <>
                        <p className="text-[13px] font-bold text-gray-900 mb-2">
                          {hex.text}
                        </p>
                        <div className="w-[2px] h-12 bg-[#3CDB9D] relative">
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3CDB9D] rounded-full"></div>
                        </div>
                      </>
                    )}

                    {hex.pos === "bottom" && (
                      <>
                        <div className="w-[2px] h-12 bg-[#3CDB9D] relative mb-2">
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3CDB9D] rounded-full"></div>
                        </div>
                        <p className="text-[13px] font-bold text-gray-900 mt-2">
                          {hex.text}
                        </p>
                      </>
                    )}
                  </div>

                  <img src={hex.img} alt={hex.id} className="w-20 md:w-35 lg:w-55 h-auto select-none" />
                </div>
              ))}
            </div>

            <div
              ref={leaderRef}
              className="absolute left-1/2 -translate-x-1/2 z-30"
            >
              <img src="/images/servicesPage/blac-hexa.png" alt="Leader" className="w-20 md:w-35 lg:w-55 h-auto select-none" />
            </div>
          </div>
          <div className="block md:hidden h-screen">
            <img src={"/images/servicesPage/devAnimationMobile.png"} className="w-full h-auto scale-180 translate-y-30" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevProcess;









