import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Marquee({ text = "We are ochi" }) {
  const [duration, setDuration] = useState(10);
  const [isPaused, setIsPaused] = useState(false);

  // Adjust speed based on screen size
  useEffect(() => {
    const updateSpeed = () => {
      setDuration(window.innerWidth < 768 ? 15 : 10);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="border-t-2 border-b-2 border-zinc-400 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-10"
          animate={isPaused ? {} : { x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: duration,
            repeat: Infinity,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="text-[10vw] leading-none font-semibold uppercase font-heading"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
