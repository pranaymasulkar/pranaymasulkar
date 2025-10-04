import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-[#161616] text-white min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-20 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center z-10 relative">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <p className="uppercase text-gray-400 tracking-[4px] text-sm mb-4">
            Hi, I’m
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Pranay <span className="text-[#00D4FF]">Masulkar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Frontend Developer
          </h2>

          <p className="text-gray-400 max-w-lg leading-relaxed mb-8">
            Passionate about crafting elegant user interfaces and delivering
            seamless web experiences. Driven by <span className="text-[#00D4FF]">ideas</span> and{" "}
            <span className="text-[#00D4FF]">innovation</span>.
          </p>

          <a
            href="#My_Work"
            className="inline-block bg-[#00D4FF] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#00BBD4] transition duration-300"
          >
            View My Work
          </a>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Image */}
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-gray-700">
            <img
              src="/images/pranay.png"
              alt="Pranay Masulkar"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/20 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-sm text-gray-300">💻 50+ Projects</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/20 shadow-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-sm text-gray-300">🔥 5+ Years Experience</p>
          </motion.div>
        </motion.div>
      </div>

      {/* BACKGROUND BLUR CIRCLES */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#00D4FF]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00D4FF]/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Hero;