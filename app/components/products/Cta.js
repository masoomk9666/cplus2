// import React from 'react'
// import SkShadeBtn from '../layout/SkShadeBtn'

// const Cta = () => {
//   return (
//     <div className='max-w-7xl mx-auto'>
//         {/* Background Section */}
//       <div
//         className="w-full bg-black rounded-xl sm:rounded-lg md:rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center relative overflow-hidden bg-cover bg-center mt-6 sm:mt-8 md:mt-10"
//         style={{ backgroundImage: "url('/images/businessModel/bg1.png')" }}
//       >
//         <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] font-[500] text-white mb-3 sm:mb-4 leading-tight sm:leading-snug md:leading-normal">
//           Have a vision? Let's make it real
//         </h3>
//         <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-300 mb-4 sm:mb-5 md:mb-6 max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed">
//           Tell us your goals today and we'll help you build them into powerful, production-ready systems.
//         </p>
//         {/* <button className="bg-[#DDF94A] text-[14px] sm:text-[16px] md:text-[18px] font-[400] text-black px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-transform hover:scale-105 active:scale-95">
//           Lets Talk
//         </button> */}
//         <SkShadeBtn 
//         text="Lets Talk"
//         bgColor="[#D0F94A]"
//         shadeColor="white"
//         shadeWidth="20px"
//         textColor="black"

//         />
//       </div>
//     </div>
//   )
// }

// export default Cta








"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SkShadeBtn from "../layout/SkShadeBtn";

const Cta = () => {
  const containerRef = useRef(null);

  // useScroll track karta hai ke user ne container ke andar kitna scroll kiya
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Hands Movement (Dono taraf se mid mein aana)
  // 0 se 0.7 tak scroll karne par hands move honge
  const leftHandX = useTransform(scrollYProgress, [0, 0.7], ["-100%", "-5%"]);
  const rightHandX = useTransform(scrollYProgress, [0, 0.7], ["100%", "5%"]);

  // 2. Text aur Glow Animation
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const glowScale = useTransform(scrollYProgress, [0.6, 0.8], [0, 1.5]);
  const buttonOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const buttonScale = useTransform(scrollYProgress, [0.75, 0.9], [0.5, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* STICKY WRAPPER: Ye screen ko fix rakhta hai */}
      <div className="sticky top-0 max-w-7xl mx-auto h-[70vh] w-full flex flex-col rounded-2xl items-center justify-center overflow-hidden px-6 bg-black">

        {/* Header Text */}
        <motion.div
          style={{ opacity: headingOpacity }}
          className="text-center z-20 absolute top-20"
        >
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] font-[500] text-white mb-3 sm:mb-4 leading-tight sm:leading-snug md:leading-normal">
            Have a vision? Let's make it real
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-4 sm:mb-5 md:mb-6 max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed">
            Tell us your goals today and we'll help you build them into powerful, production-ready systems.
          </p>
        </motion.div>

        {/* Animation Row (Hands) */}
        <div className="relative w-full max-w-7xl  flex items-center justify-center">

          {/* Left Hand (Digital/Cyan) */}
          <motion.div
            style={{ x: leftHandX }}
            className="absolute left-0 w-1/2 flex justify-end pr-0 md:pr-4"
          >
            <img
              src="/images/products/ai-hand.png"
              alt="Digital Hand"
              className="w-[300px] md:w-full object-contain"
            />
          </motion.div>

          {/* Right Hand (Human) */}
          <motion.div
            style={{ x: rightHandX }}
            className="absolute right-0 w-1/2 flex justify-start pl-0 md:pl-4"
          >
            <img
              src="/images/products/human-hand.png"
              alt="Human Hand"
              className="w-[300px] md:w-full object-contain"
            />
          </motion.div>

          {/* Center Glow & Button */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            {/* The Glow Effect */}
            <motion.div
              style={{ scale: glowScale }}
              className="absolute w-24 h-24 md:w-40 md:h-40 bg-[#DFFF4F] rounded-full blur-[60px] md:blur-[100px] opacity-40"
            />

            {/* The Button */}
            <motion.div
              style={{ opacity: buttonOpacity, scale: buttonScale }}
              className=""
            >
              <SkShadeBtn
                text="Lets Talk"
                bgColor="[#D0F94A]"
                shadeColor="white"
                shadeWidth="20px"
                textColor="black"

              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cta;







// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import SkShadeBtn from "../layout/SkShadeBtn";

// const Cta = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // 1. Hands Movement (0 se 0.7 tak)
//   const leftHandX = useTransform(scrollYProgress, [0, 0.7], ["-100%", "-5%"]);
//   const rightHandX = useTransform(scrollYProgress, [0, 0.7], ["100%", "5%"]);

//   // 2. Text Animations
//   const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

//   // 3. ENHANCED GLOW DURATION
//   // Glow 0.5 se shuru hoga (hands touch hone se pehle hi light mehsoos hogi)
//   // 0.75 par maximum (peak) hoga jab hands touch honge
//   // 0.95 tak dheere dheere khatam hoga (button aane ke baad bhi halka glow rahega)
//   const glowOpacity = useTransform(scrollYProgress, [0.5, 0.75, 0.95], [0, 1, 0]);
//   const glowScale = useTransform(scrollYProgress, [0.5, 0.75, 0.95], [0.5, 2.5, 1.5]);

//   // 4. Button Animation
//   // Button 0.8 par aayega jab glow thoda settle hona shuru ho
//   const buttonOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
//   const buttonScale = useTransform(scrollYProgress, [0.8, 0.9], [0.8, 1]);

//   return (
//     <div ref={containerRef} className="relative h-[320vh]">
//       {/* STICKY WRAPPER */}
//       <div className="sticky top-0 max-w-7xl mx-auto h-[70vh] w-full flex flex-col rounded-2xl items-center justify-center overflow-hidden px-6 bg-black">

//         {/* Header Text */}
//         <motion.div
//           style={{ opacity: headingOpacity }}
//           className="text-center z-20 absolute top-20"
//         >
//           <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] font-[500] text-white mb-3 sm:mb-4 leading-tight sm:leading-snug md:leading-normal">
//             Have a vision? Let's make it real
//           </h3>
//           <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-4 sm:mb-5 md:mb-6 max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed text-opacity-80">
//             Tell us your goals today and we'll help you build them into powerful, production-ready systems.
//           </p>
//         </motion.div>

//         {/* Animation Row (Hands) */}
//         <div className="relative w-full max-w-7xl flex items-center justify-center h-[50vh]">

//           {/* Left Hand (Digital/Cyan) */}
//           <motion.div
//             style={{ x: leftHandX }}
//             className="absolute left-0 w-1/2 flex justify-end pr-0 md:pr-4"
//           >
//             <img
//               src="/images/products/ai-hand.png"
//               alt="Digital Hand"
//               className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-full object-contain"
//             />
//           </motion.div>

//           {/* Right Hand (Human) */}
//           <motion.div
//             style={{ x: rightHandX }}
//             className="absolute right-0 w-1/2 flex justify-start pl-0 md:pl-4"
//           >
//             <img
//               src="/images/products/human-hand.png"
//               alt="Human Hand"
//               className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-full object-contain"
//             />
//           </motion.div>

//           {/* Center Glow & Button */}
//           <div className="absolute inset-0 flex items-center justify-center z-30">
//             {/* The Strong Long-Duration Glow */}
//             <motion.div
//               style={{ opacity: glowOpacity, scale: glowScale }}
//               className="absolute w-40 h-40 md:w-64 md:h-64 bg-[#DFFF4F] rounded-full blur-[90px] md:blur-[140px]"
//             />

//             {/* The Button */}
//             <motion.div
//               style={{ opacity: buttonOpacity, scale: buttonScale }}
//               className="z-40"
//             >
//               <SkShadeBtn
//                 text="Lets Talk"
//                 bgColor="[#D0F94A]"
//                 shadeColor="white"
//                 shadeWidth="20px"
//                 textColor="black"
//               />
//             </motion.div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Cta;