"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const ScrollingText = ({
  text,
  speed = 100,
  className,
}: ScrollingTextProps) => {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const repeatedText = Array(20).fill(text).join(" ");

  const moveX = useTransform(baseX, (v) => `${v}px`);

  // Animate the motion value
  useAnimationFrame((_, delta) => {
    const moveBy = (speed * delta) / 1000;
    baseX.set(baseX.get() - moveBy);
  });

  // Reset position smoothly when it's out of bounds
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const scrollAmount = baseX.get();
        const width = containerRef.current.scrollWidth / 2;

        if (-scrollAmount >= width) {
          baseX.set(0); // Reset without jump because there's a 2x repeat
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [baseX]);

  return (
    <div
      className={"overflow-hidden whitespace-nowrap w-full" + " " + className}
    >
      <motion.div
        className="inline-block"
        ref={containerRef}
        style={{ x: moveX }}
      >
        <span>{repeatedText}</span>
      </motion.div>
    </div>
  );
};

export default ScrollingText;
