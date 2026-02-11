// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     id: 1,
//     name: "Salman Jaseem",
//     role: "CEO, Ceburu",
//     text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights into customer behavior and preferences, helping us make data-driven decisions that fueled our expansion.",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Ayesha Khan",
//     role: "Director, FinTech",
//     text: "Working with this team was a game changer for our operations. The seamless integration and end-to-end support ensured that our transition to digital was smooth and without any steep learning curve.",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Michael Chen",
//     role: "Product Manager, TechFlow",
//     text: "The design-driven engineering approach of Cplus Soft is evident in every module they delivered. Our engagement metrics improved by 40% within the first quarter of deployment. Professional, scalable solutions.",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
// ];

// const ClientReviews = () => {
//   const [isPaused, setIsPaused] = useState(false);

//   // Triple the array for infinite scroll
//   const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

//   return (
//     <section className="py-20 bg-white overflow-hidden w-full">
//       <div className="w-full">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-[48px] font-medium text-center text-gray-900 mb-16">
//           What Our Clients Say
//         </h2>

//         {/* Outer Container for Carousel */}
//         <div 
//           className="relative flex overflow-hidden group"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {/* Moving Track - items-stretch ensures all cards take same height */}
//           <motion.div
//             className="flex gap-6 items-stretch py-4"
//             animate={{
//               x: isPaused ? undefined : ["0%", "-33.33%"],
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 25,
//                 ease: "linear",
//               },
//             }}
//             style={{ width: "max-content" }}
//           >
//             {extendedTestimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-[320px] md:w-[650px] lg:w-[750px]flex-shrink-0 p-[2px] rounded-[32px] transition-all duration-500
//                 bg-transparent group hover:bg-gradient-to-r hover:from-[#D0F94A] hover:via-[#D0F94A] hover:to-[#00879F]"
//               >
//                 {/* Inner Card - h-full and flex center items */}
//                 <div className="w-full h-full flex flex-col items-center text-center p-8 md:p-12 rounded-[30px] bg-[#FBFBFB] text-gray-600 transition-all duration-500
//                   hover:bg-[#F8FFE6] hover:text-gray-900">
                  
//                   {/* Image with Gradient Border */}
//                   <div className="w-20 h-20 rounded-full mb-6 p-1 bg-gradient-to-tr from-[#D0F94A] to-[#3CDB9D] flex-shrink-0">
//                     <img 
//                       src={item.image} 
//                       alt={item.name} 
//                       className="w-full h-full object-cover rounded-full border-2 border-white" 
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col items-center">
//                     <h3 className="font-medium text-[16px] text-black">{item.name}</h3>
//                     <p className="text-[16px] font-medium text-[#3B3B3B] mb-6">{item.role}</p>

//                     <p className="text-[18px] md:text-lg leading-relaxed italic text-center">
//                       "{item.text}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Left & Right Fade Gradients */}
//           <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientReviews;








"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Salman Jaseem", role: "CEO, Ceburu", text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Ayesha Khan", role: "Director, FinTech", text: "Working with this team was a game changer for our operations. The seamless integration and end-to-end support ensured that our transition was smooth.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Michael Chen", role: "Product Manager, TechFlow", text: "The design-driven engineering approach of Cplus Soft is evident in every module they delivered. Our engagement metrics improved by 40%.", image: "https://randomuser.me/api/portraits/men/3.jpg" },
];

const ClientReviews = () => {
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(extendedTestimonials.length / 2)
  );
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);

  const gap = 24;

  // 🔹 Responsive card width
  useEffect(() => {
    const updateCardWidth = () => {
      const w = window.innerWidth;

      if (w < 640) setCardWidth(320);       // Mobile
      else if (w < 1024) setCardWidth(600); // Tablet
      else setCardWidth(750);               // Desktop
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // 🔹 Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // 🔹 Infinite reset
  useEffect(() => {
    if (currentIndex >= extendedTestimonials.length - 3) {
      setTimeout(() => {
        setCurrentIndex(Math.floor(extendedTestimonials.length / 2));
      }, 800);
    }
  }, [currentIndex, extendedTestimonials.length]);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden w-full">
      <h2 className="text-[24px] md:text-[48px] font-medium text-center mb-12">
        What Our Clients Say
      </h2>

      <div
        className="relative flex justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 py-10"
          animate={{
            x: `calc(50% - ${currentIndex * (cardWidth + gap)}px - ${cardWidth / 2}px)`
          }}
          transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
          style={{ width: "max-content" }}
        >
          {extendedTestimonials.map((item, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                className={`w-[320px] md:w-[600px] lg:w-[750px] flex-shrink-0 p-[2px] rounded-[32px] transition-all duration-700
                ${isActive ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]" : "opacity-80"}`}
              >
                <div className={`p-8 md:p-12 rounded-[30px] text-center transition-all duration-700 h-full
                  ${isActive ? "bg-[#F8FFE6]" : "bg-[#F7F7F7] text-gray-400"}`}>
                  
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-[#D0F94A] to-[#3CDB9D]">
                    <img src={item.image} className="w-full h-full rounded-full object-cover" />
                  </div>

                  <h3 className="text-sm md:text-base">{item.name}</h3>
                  <p className="text-xs md:text-sm mb-4">{item.role}</p>
                  <p className="text-sm md:text-lg italic">"{item.text}"</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReviews;




// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// const testimonials = [
//   { id: 1, name: "Salman Jaseem", role: "CEO, Ceburu", text: "Cplus Soft has completely transformed how we approach business growth and customer engagement.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
//   { id: 2, name: "Ayesha Khan", role: "Director, FinTech", text: "Working with this team was a game changer for our operations. The seamless integration was smooth.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
//   { id: 3, name: "Michael Chen", role: "Product Manager, TechFlow", text: "The design-driven engineering approach of Cplus Soft is evident in every module they delivered.", image: "https://randomuser.me/api/portraits/men/3.jpg" },
// ];

// const ClientReviews = () => {
//   // Triple the array for seamless looping
//   const items = [...testimonials, ...testimonials, ...testimonials];
  
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const controls = useAnimation();

//   const cardWidth = 700; 
//   const gap = 24;
//   const totalStep = cardWidth + gap;

//   useEffect(() => {
//     let interval;
//     if (!isPaused) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 3000);
//     }
//     return () => clearInterval(interval);
//   }, [activeIndex, isPaused]);

//   const handleNext = async () => {
//     const nextIndex = activeIndex + 1;
    
//     // Move to next card
//     await controls.start({
//       x: -(nextIndex * totalStep),
//       transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
//     });

//     // Agar hum second set ke end par hain, to bina animation ke first set par jump karein
//     if (nextIndex >= testimonials.length) {
//       controls.set({ x: 0 });
//       setActiveIndex(0);
//     } else {
//       setActiveIndex(nextIndex);
//     }
//   };

//   return (
//     <section className="py-20 bg-white overflow-hidden w-full">
//       <div className="w-full">
//         <h2 className="text-4xl md:text-[48px] font-medium text-center text-gray-900 mb-16">
//           What Our Clients Say
//         </h2>

//         <div 
//           className="relative flex justify-center items-center h-[500px]"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {/* Centering Wrapper */}
//           <div className="relative w-[700px] flex justify-center items-center">
//             <motion.div
//               className="flex gap-6 absolute left-0"
//               animate={controls}
//               initial={{ x: 0 }}
//             >
//               {items.map((item, index) => {
//                 // Active logic: check against original array length
//                 const isActive = (index % testimonials.length) === (activeIndex % testimonials.length);
                
//                 return (
//                   <div
//                     key={index}
//                     style={{ width: cardWidth }}
//                     className={`flex-shrink-0 p-[2px] rounded-[32px] transition-all duration-700
//                     ${isActive 
//                       ? "bg-gradient-to-r from-[#D0F94A] via-[#D0F94A] to-[#00879F] scale-105 shadow-2xl z-20" 
//                       : "bg-transparent scale-90 opacity-30 blur-[1px] z-10"
//                     }`}
//                   >
//                     <div className={`w-full h-full flex flex-col items-center text-center p-8 md:p-12 rounded-[30px] transition-all duration-700
//                       ${isActive ? "bg-[#F8FFE6] text-gray-900" : "bg-[#FBFBFB] text-gray-400"}`}>
                      
//                       <div className="w-20 h-20 rounded-full mb-6 p-1 bg-gradient-to-tr from-[#D0F94A] to-[#3CDB9D] flex-shrink-0">
//                         <img 
//                           src={item.image} 
//                           alt={item.name} 
//                           className="w-full h-full object-cover rounded-full border-2 border-white" 
//                         />
//                       </div>

//                       <div className="flex flex-col items-center">
//                         <h3 className={`font-bold text-[20px] ${isActive ? "text-black" : "text-gray-400"}`}>{item.name}</h3>
//                         <p className="text-[16px] font-medium mb-6">{item.role}</p>
//                         <p className="text-[18px] md:text-[22px] leading-relaxed italic px-4">
//                           "{item.text}"
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </div>

//           {/* Fade Gradients */}
//           <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientReviews;




