import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import StartImage from '../common/StarImage';

const RotatingCVButton = () => {
  const controls = useAnimation();
  const [rotation, setRotation] = useState(0);
  const scrollDir = useRef("down");
  const isScrolling = useRef(false);
  const scrollTimeout = useRef();

  // Scroll handler
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      isScrolling.current = true;
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      scrollDir.current = currentScrollY > lastScrollY ? "down" : "up";

      // Update rotation based on scroll direction
      setRotation(prev => prev + (scrollDir.current === "down" ? 20 : -20));

      lastScrollY = currentScrollY;

      // Debounce scroll stop
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate rotation on scroll
  useEffect(() => {
    controls.start({
      rotate: rotation,
      transition: { duration: 0.4, ease: "easeOut" },
    });
  }, [rotation, controls]);

  // Slow rotation when not scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling.current) {
        setRotation(prev => prev + (scrollDir.current === "down" ? 1 : -1));
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <motion.div
        animate={controls}
        className="w-10 h-10 relative rounded-full border-2 border-red-600 flex justify-center items-center cursor-pointer shadow-lg hover:shadow-xl hover:border-[#04AA6D] transition-all duration-300"
        onClick={() => window.open("/Pranay_Masulkar_CV.pdf")}
      >
        <span className="text-6xl text-white">
          <StartImage />
        </span>
      </motion.div>
    </div>
  );
};

export default RotatingCVButton;