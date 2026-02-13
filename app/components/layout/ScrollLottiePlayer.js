



// "use client";

// import { useLayoutEffect, useRef } from "react";
// import lottie from "lottie-web";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollLottiePlayer = () => {
//   const containerRef = useRef(null);
//   const lottieRef = useRef(null);
//   const animRef = useRef(null);

//   useLayoutEffect(() => {
//     if (animRef.current) return;

//     const animation = lottie.loadAnimation({
//       container: lottieRef.current,
//       renderer: "svg",
//       loop: false,
//       autoplay: false,
//       path: "/animations/companyGrowth.json",
//     });

//     animRef.current = animation;

//     const onLoad = () => {
//       const total = animation.totalFrames;

//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top +=20%",
//         end: () => `+=${total * 8}`, // 🔥 animation-based length
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
//         anticipatePin: 1,

//         onUpdate: (self) => {
//           const frame = Math.round(self.progress * (total - 1));
//           animation.goToAndStop(frame, true);
//         },
//       });

//       ScrollTrigger.refresh();
//     };

//     animation.addEventListener("DOMLoaded", onLoad);

//     return () => {
//       animation.destroy();
//       animRef.current = null;
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center "
//     >
//       <div
//         ref={lottieRef}
//         className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
//       />
//     </section>
//   );
// };

// export default ScrollLottiePlayer;





// "use client";

// import { useLayoutEffect, useRef } from "react";
// import lottie from "lottie-web";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollLottiePlayer = () => {
//   const containerRef = useRef(null);
//   const lottieRef = useRef(null);
//   const animRef = useRef(null);

//   useLayoutEffect(() => {
//     if (animRef.current) return;

//     const animation = lottie.loadAnimation({
//       container: lottieRef.current,
//       renderer: "svg",
//       loop: false,
//       autoplay: false,
//       path: "/animations/companyGrowth.json",
//     });

//     animRef.current = animation;

//     animation.addEventListener("DOMLoaded", () => {
//       const totalFrames = animation.totalFrames;

//       // Create a virtual scroll height proportional to animation
//       const scrollDistance = totalFrames * 15; // adjust multiplier for speed
//       containerRef.current.style.height = `${scrollDistance + window.innerHeight}px`;

//       // Animation pin + scrub
//       gsap.to(animation, {
//         currentFrame: totalFrames - 1,
//         ease: "none",
//         currentFrame: 0, // dummy, we will control via onUpdate
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top -=10%",
//           end: `+=${scrollDistance}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           pinSpacing: true,
//           onUpdate: (self) => {
//             const frame = Math.round(self.progress * (totalFrames - 1));
//             animation.goToAndStop(frame, true);
//           },
//         },
//       });

//       ScrollTrigger.refresh();
//     });

//     return () => {
//       animation.destroy();
//       animRef.current = null;
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="absolute top-0 left-0 w-screen flex items-center justify-center overflow-hidden h-[60vh]"
//     >
//       {/* 🔹 HEADER */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="text-center pt-20 pb-10 px-4"
//       >
//         <p className="uppercase tracking-widest text-[16px] text-black">
//           Company Growth
//         </p>
//         <h2 className="text-3xl md:text-[48px] font-medium mt-2">
//           We're Getting Better Every Year
//         </h2>
//       </motion.div>
//       <div
//         ref={lottieRef}
//         className=" w-full h-[60vh] md:max-w-6xl"
//       />
//     </section>
//   );
// };

// export default ScrollLottiePlayer;






"use client";

import { useLayoutEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ScrollLottiePlayer = () => {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);
  const animRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (animRef.current) return;

    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/animations/companyGrowth.json",
    });

    animRef.current = animation;

    animation.addEventListener("DOMLoaded", () => {
      const totalFrames = animation.totalFrames;
      const scrollDistance = totalFrames * 15;
      
      // Set container height
      containerRef.current.style.height = `${scrollDistance + window.innerHeight}px`;

      // Pin everything together
      gsap.to(animation, {
        currentFrame: totalFrames - 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          onUpdate: (self) => {
            const frame = Math.round(self.progress * (totalFrames - 1));
            animation.goToAndStop(frame, true);
          },
        },
      });

      // Text remains visible throughout the scroll
      gsap.fromTo(textRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=20%",
            scrub: 1,
          }
        }
      );

      ScrollTrigger.refresh();
    });

    return () => {
      animation.destroy();
      animRef.current = null;
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-screen overflow-hidden mx-auto bg-white"
    >
      {/* PINNED CONTENT - BOTH TEXT AND ANIMATION STICKY TOGETHER */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
        {/* TEXT - STAYS VISIBLE THROUGHOUT ANIMATION */}
        <div
          ref={textRef}
          className="text-center px-4 opacity-0 space-y-4"
        >
          <p className="uppercase tracking-widest text-[16px] text-black">
            Company Growth
          </p>
          <h2 className="text-3xl md:text-[48px] font-medium">
            We're Getting Better Every Year
          </h2>
        </div>

        {/* LOTTIE ANIMATION */}
        <div
          ref={lottieRef}
          className="w-full max-w-4xl mx-auto h-[60vh]"
        />
      </div>
    </section>
  );
};

export default ScrollLottiePlayer;