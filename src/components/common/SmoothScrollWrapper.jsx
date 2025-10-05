// src/components/SmoothScrollWrapper.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll(); // Track scroll position

  // Use spring for natural easing (scroll inertia)
  const smoothY = useSpring(scrollY, {
    stiffness: 100,
    damping: 25,
    mass: 0.2,
  });

  // Apply transform to move content smoothly
  const y = useTransform(smoothY, (value) => -value);

  return (
    <div className="relative w-full overflow-hidden">
      {/* The actual scrollable area */}
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SmoothScrollWrapper;