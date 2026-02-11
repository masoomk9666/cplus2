"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Counter({
  value = 100,
  suffix = "+",
  title = "Projects",
  increment = 1,
  speed = 20,

  /* Tailwind Classes */
  numberClass = "text-3xl md:text-4xl font-semibold text-white",
  suffixClass = "text-green-400",
  titleClass = "text-sm text-gray-400 mt-1",
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              current = value;
              clearInterval(timer);
            }
            setCount(current);
          }, speed);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, increment, speed]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="flex justify-center items-baseline gap-1">
        <span className={numberClass}>{count}</span>
        {suffix && <span className={suffixClass}>{suffix}</span>}
      </div>

      <p className={titleClass}>{title}</p>
    </motion.div>
  );
}
