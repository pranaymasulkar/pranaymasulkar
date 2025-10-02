import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-[#0f172a] text-white px-4">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">
        Hey! I’m <span className="text-blue-400">Pranay</span>
      </h1>

      <h2 className="text-2xl sm:text-4xl font-semibold">
        I build{" "}
        <TypeAnimation
          sequence={[
            "Fast Websites 🚀",
            2000,
            "Responsive Designs 📱",
            2000,
            "Modern Web Experiences 💡",
            2000,
            "Interactive Interfaces 🎨",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-blue-400"
        />
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        A Frontend Developer specializing in <span className="font-semibold">React.js</span>,{" "}
        <span className="font-semibold">Next.js</span>, and{" "}
        <span className="font-semibold">UI/UX Design</span>. Passionate about creating
        pixel-perfect, performance-optimized, and user-friendly applications.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl shadow-lg font-semibold transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-400 hover:bg-blue-500 hover:text-white rounded-2xl shadow-lg font-semibold transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;