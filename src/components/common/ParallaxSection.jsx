import React from "react";

const ParallaxSection = ({ image, ImageAlt, height = "600px" }) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg group"
      style={{ height }}
    >
      <img
        src={image}
        alt={ImageAlt}
        className="absolute top-0 left-0 w-full h-auto transition-transform duration-[10000ms] ease-linear group-hover:translate-y-[-89%]"
      />
      <div className="absolute top-0 left-0 bg-[#16161677] hover:bg-[#04aa6d00] h-full w-full">

      </div>
    </div>
  );
};

export default ParallaxSection;