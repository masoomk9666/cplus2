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







// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const testimonials = [
//   { id: 1, name: "Salman Jaseem", role: "CEO, Ceburu", text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
//   { id: 2, name: "Ayesha Khan", role: "Director, FinTech", text: "Working with this team was a game changer for our operations. The seamless integration and end-to-end support ensured that our transition was smooth.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
//   { id: 3, name: "Michael Chen", role: "Product Manager, TechFlow", text: "The design-driven engineering approach of Cplus Soft is evident in every module they delivered. Our engagement metrics improved by 40%.", image: "https://randomuser.me/api/portraits/men/3.jpg" },
// ];

// const ClientReviews = () => {
//   const extendedTestimonials = Array(10).fill(testimonials).flat();

//   const [currentIndex, setCurrentIndex] = useState(
//     Math.floor(extendedTestimonials.length / 2)
//   );
//   const [isPaused, setIsPaused] = useState(false);
//   const [cardWidth, setCardWidth] = useState(320);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [dragOffset, setDragOffset] = useState(0);
//   const [dragStartIndex, setDragStartIndex] = useState(0);

//   const containerRef = useRef(null);
//   const gap = 24;

//   // Responsive card width
//   useEffect(() => {
//     const updateCardWidth = () => {
//       const w = window.innerWidth;
//       if (w < 640) setCardWidth(320);
//       else if (w < 1024) setCardWidth(600);
//       else setCardWidth(750);
//     };

//     updateCardWidth();
//     window.addEventListener("resize", updateCardWidth);
//     return () => window.removeEventListener("resize", updateCardWidth);
//   }, []);

//   // Auto slide - jab drag nahi ho raha aur pause nahi hai
//   useEffect(() => {
//     if (isPaused || isDragging) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => prev + 1);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isPaused, isDragging]);

//   // Mouse/Touch Drag Handlers
//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     setIsPaused(true);
//     setStartX(e.clientX || e.touches[0].clientX);
//     setDragStartIndex(currentIndex);
//     setDragOffset(0);
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;
    
//     const currentX = e.clientX || e.touches[0].clientX;
//     const diff = currentX - startX;
//     setDragOffset(diff);
//   };

//   const handleDragEnd = (e) => {
//     if (!isDragging) return;

//     const endX = e.clientX || e.changedTouches[0].clientX;
//     const diff = endX - startX;
    
//     // Decide how many cards to move based on drag distance
//     const cardMoveThreshold = cardWidth * 0.3; // 30% of card width
//     const cardsMoved = Math.round(diff / (cardWidth + gap));
    
//     let newIndex = dragStartIndex - cardsMoved; // Left drag = negative diff = increase index
    
//     // Clamp the index to valid range
//     newIndex = Math.max(2, Math.min(newIndex, extendedTestimonials.length - 3));
    
//     setCurrentIndex(newIndex);
    
//     // Reset drag states
//     setIsDragging(false);
//     setIsPaused(false);
//     setDragOffset(0);
//   };

//   // Handle mouse leave while dragging
//   useEffect(() => {
//     const handleMouseLeave = () => {
//       if (isDragging) {
//         setIsDragging(false);
//         setIsPaused(false);
//         setDragOffset(0);
//       }
//     };

//     window.addEventListener("mouseleave", handleMouseLeave);
//     return () => window.removeEventListener("mouseleave", handleMouseLeave);
//   }, [isDragging]);

//   return (
//     <section className="py-16 md:py-20 bg-white overflow-hidden w-full">
//       <h2 className="text-[24px] md:text-[48px] font-medium text-center mb-12">
//         What Our Clients Say
//       </h2>

//       <div
//         ref={containerRef}
//         className="relative flex justify-center overflow-hidden cursor-grab active:cursor-grabbing"
//         onMouseEnter={() => !isDragging && setIsPaused(true)}
//         onMouseLeave={() => {
//           if (!isDragging) setIsPaused(false);
//         }}
//         onMouseDown={handleDragStart}
//         onMouseMove={handleDragMove}
//         onMouseUp={handleDragEnd}
//         onTouchStart={handleDragStart}
//         onTouchMove={handleDragMove}
//         onTouchEnd={handleDragEnd}
//       >
//         <motion.div
//           className="flex gap-6 py-10"
//           animate={{
//             x: `calc(50% - ${currentIndex * (cardWidth + gap)}px - ${cardWidth / 2}px + ${dragOffset}px)`
//           }}
//           transition={{ 
//             duration: isDragging ? 0 : 0.8, 
//             ease: [0.45, 0, 0.55, 1] 
//           }}
//           style={{ width: "max-content" }}
//         >
//           {extendedTestimonials.map((item, index) => {
//             const isActive = index === currentIndex;

//             return (
//               <div
//                 key={index}
//                 className={`w-[320px] md:w-[600px] lg:w-[750px] flex-shrink-0 p-[2px] rounded-[32px] transition-all duration-700
//                 ${isActive ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]" : "opacity-50"}`}
//               >
//                 <div className={`p-8 md:p-12 rounded-[30px] text-center transition-all duration-700 h-full
//                   ${isActive ? "bg-[#F8FFE6]" : "bg-[#F7F7F7]"}`}>
                  
//                   <div className="w-20 h-20 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-[#D0F94A] to-[#3CDB9D]">
//                     <img src={item.image} className="w-full h-full rounded-full object-cover" alt={item.name} />
//                   </div>

//                   <h3 className="text-sm md:text-base font-semibold">{item.name}</h3>
//                   <p className="text-xs md:text-sm mb-4">{item.role}</p>
//                   <p className="text-sm md:text-lg italic">"{item.text}"</p>
//                 </div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ClientReviews;









"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Salman Jaseem", role: "CEO, Ceburu", text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Ayesha Khan", role: "Director, FinTech", text: "Working with this team was a game changer for our operations. The seamless integration and end-to-end support ensured that our transition was smooth.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Michael Chen", role: "Product Manager, TechFlow", text: "The design-driven engineering approach of Cplus Soft is evident in every module they delivered. Our engagement metrics improved by 40%.", image: "https://randomuser.me/api/portraits/men/3.jpg" },
];

const ClientReviews = () => {
  // INFINITE COPIES - 20 copies for true infinite scroll
  const extendedTestimonials = Array(20).fill(testimonials).flat();
  const totalCards = extendedTestimonials.length;

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(totalCards / 2)
  );
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragStartIndex, setDragStartIndex] = useState(0);

  const containerRef = useRef(null);
  const gap = 24;

  // Responsive card width
  useEffect(() => {
    const updateCardWidth = () => {
      const w = window.innerWidth;
      if (w < 640) setCardWidth(320);
      else if (w < 1024) setCardWidth(600);
      else setCardWidth(750);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // AUTO SLIDE - INFINITE RIGHT TO LEFT - KABHI KHATAM NAHI HOGA
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Wrapping - jab end tak pahunche, wapas middle pe aao
        if (prev >= totalCards - 5) {
          return Math.floor(totalCards / 2); // Middle pe reset
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, totalCards]);

  // Mouse/Touch Drag Handlers with INFINITE WRAPPING
  const handleDragStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.clientX || e.touches[0].clientX);
    setDragStartIndex(currentIndex);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX || e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;

    const endX = e.clientX || e.changedTouches[0].clientX;
    const diff = endX - startX;
    
    const cardsMoved = Math.round(diff / (cardWidth + gap));
    let newIndex = dragStartIndex - cardsMoved;
    
    // INFINITE WRAPPING - kabhi bhi bahar nahi jayega
    if (newIndex < 3) {
      newIndex = totalCards - 6; // End se 6 pe aao
    } else if (newIndex > totalCards - 6) {
      newIndex = 3; // Start se 3 pe aao
    }
    
    setCurrentIndex(newIndex);
    
    setIsDragging(false);
    setIsPaused(false);
    setDragOffset(0);
  };

  // Handle mouse leave while dragging
  useEffect(() => {
    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        setIsPaused(false);
        setDragOffset(0);
      }
    };

    window.addEventListener("mouseleave", handleMouseLeave);
    return () => window.removeEventListener("mouseleave", handleMouseLeave);
  }, [isDragging]);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden w-full">
      <h2 className="text-[24px] md:text-[48px] font-medium text-center mb-12">
        What Our Clients Say
      </h2>

      <div
        ref={containerRef}
        className="relative flex justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => !isDragging && setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging) setIsPaused(false);
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <motion.div
          className="flex gap-6 py-10"
          animate={{
            x: `calc(50% - ${currentIndex * (cardWidth + gap)}px - ${cardWidth / 2}px + ${dragOffset}px)`
          }}
          transition={{ 
            duration: isDragging ? 0 : 0.8, 
            ease: [0.45, 0, 0.55, 1] 
          }}
          style={{ width: "max-content" }}
        >
          {extendedTestimonials.map((item, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                className={`w-[320px] md:w-[600px] lg:w-[750px] flex-shrink-0 p-[2px] rounded-[32px] transition-all duration-700
                ${isActive ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]" : "opacity-50"}`}
              >
                <div className={`p-8 md:p-12 rounded-[30px] text-center transition-all duration-700 h-full
                  ${isActive ? "bg-[#F8FFE6]" : "bg-[#F7F7F7]"}`}>
                  
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-[#D0F94A] to-[#3CDB9D]">
                    <img src={item.image} className="w-full h-full rounded-full object-cover" alt={item.name} />
                  </div>

                  <h3 className="text-sm md:text-base font-semibold">{item.name}</h3>
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