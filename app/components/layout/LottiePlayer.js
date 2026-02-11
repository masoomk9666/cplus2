"use client";

import Lottie from "lottie-react";
import { animations } from "@/data/animations";
import { useRef, useEffect } from "react";

export default function LottiePlayer({
  name,            // animation key
  loop = true,
  speed = 1,
  autoplay = true,
  className = "",
}) {
  const animationData = animations[name];

  if (!animationData) {
    console.error(`Lottie animation "${name}" not found`);
    return null;
  }
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed); // 👈 2x fast
    }
  }, []);

  return (
    <div className={className}>
      <Lottie
      lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        speed={2}
      />
    </div>
  );
}
