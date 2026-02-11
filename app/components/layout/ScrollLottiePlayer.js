



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





"use client";

import { useLayoutEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLottiePlayer = () => {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);
  const animRef = useRef(null);

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

      // Create a virtual scroll height proportional to animation
      const scrollDistance = totalFrames * 15; // adjust multiplier for speed
      containerRef.current.style.height = `${scrollDistance + window.innerHeight}px`;

      // Animation pin + scrub
      gsap.to(animation, {
        currentFrame: totalFrames - 1,
        ease: "none",
        currentFrame: 0, // dummy, we will control via onUpdate
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top -=10%",
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
      className="relative w-screen flex items-center justify-center overflow-hidden h-screen"
    >
      <div
        ref={lottieRef}
        className="absolute top-0 left-0 w-full h-screen md:max-w-6xl"
      />
    </section>
  );
};

export default ScrollLottiePlayer;
