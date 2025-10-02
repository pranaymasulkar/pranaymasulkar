import ScrollTextSection from "./ScrollTextSection";
import Myimage from "../../../public/pranay_masulkar.png";
import { motion } from "motion/react";
import { FaArrowTurnDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import StarImage from "./StarImage";

const Hero = () => {
    const tags = [
        "Frontend",
        "React Js",
        "Web Development",
        "Next Js",
        "JavaScript",
    ];
    const data = [
        "Development",
        "Expert",
        "Enthusiast",
        "passionate",
        "Frontend Developer",
        "UI/UX Focused",
        "Responsive Design",
        "Pixel Perfect",
        "Clean & Maintainable Code",
        "Performance Optimized",
        "Tailwind CSS Lover",
        "Creative Problem Solver",
        "Modern Web Experiences",
        "Reusable Components",
        "Cross-Browser Compatible",
        "Interactive Interfaces",
    ];
    return (
        <div className="relative bg-[#161616]">
            <ScrollTextSection
                data={data}
                parentClassName="h-[20vh] md:h-[30vh] bg-[#161616]"
                className="text-6xl md:text-[6rem] text-white capitalize font-bold"
                imageSize={`${'md' === true ? '100' : '80'}`}
            />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
            <div className="pt-0 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
                <div className="mx-auto w-full block md:flex justify-around items-center pt-0 pb-0 md:pb-10">
                    <div className="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                        <h1 className="text-center md:text-start text-2xl font-light leading-[1.7] tracking-wide text-balance text-white mb-20 md:mb-15 capitalize">
                            Hey! I'm <span className="font-bold">Pranay Masulkar</span>. <br />
                            {/* Specialist Frontend developer. */}
                            <TypeAnimation
                                sequence={[
                                    "Frontend Developer",
                                    2000,
                                    "React.js Developer",
                                    2000,
                                    "Frontend Engineer",
                                    2000,
                                    "Next.js Developer",
                                    2000,
                                    "Web Developer",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />.
                        </h1>
                        <div className="hidden md:flex flex-col items-start justify-start gap-3">
                            {tags.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className="relative rounded-full inline-block px-5 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="h-full w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}

                            className="backdrop-blur-[10px] md:backdrop-blur-[5px] w-[45%] md:w-[160px] absolute bottom-16 left-3 md:bottom-auto md:top-60 md:-left-20 border border-[#c2adbb] rounded-xl md:rounded-2xl bg-[#d3bccd3b] md:bg-[#00000069] inline-block p-3 md:p-5 shadow-lg md:shadow-[#d7bdd1aa]">
                            <h3 className="text-3xl md:text-5xl leading-[1.7] font-semibold text-balance text-white">
                                50+
                                <p className="text-sm md:text-lg mt-0 font-light">
                                    Successful <br />
                                    projects
                                </p>
                            </h3>
                        </motion.div>
                        <div className="mb-30 md:mb-0">
                            <img src={Myimage} alt="Pranay Masulkar" className="rounded-2xl md:rounded-full" />
                        </div>
                        <motion.div
                            animate={{ opacity: 1, scale: 1, y: [-7, 7, -7], }}
                            transition={{
                                delay: 1,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                duration: 2,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                            className="flex justify-start items-center backdrop-blur-[10px] md:backdrop-blur-[5px] w-75 md:w-50 absolute -top-5 transform translate-[-50%] left-[50%] md:left-auto right-auto md:top-20 md:-right-10 border border-[#c2adbb] rounded-xl md:rounded-2xl bg-[#d3bccd3b] md:bg-[#00000069] p-2 md:p-3 shadow-lg shadow-[#d7bdd1aa]">
                            <span className="text-[#04AA6D] me-3"> <StarImage /></span>
                            <p className="text-white leading-[1.7] text-sm md:text-lg font-bold uppercase">
                                Open to Work
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                            className="backdrop-blur-[10px] md:backdrop-blur-[5px] w-[45%] md:w-[160px] absolute bottom-16 md:bottom-auto right-3 md:top-70 md:-right-20 border border-[#c2adbb] rounded-xl md:rounded-2xl bg-[#d3bccd3b] md:bg-[#00000069] inline-block p-3 md:p-5 shadow-lg md:shadow-[#d7bdd1aa]">
                            <h3 className="text-3xl md:text-5xl leading-[1.7] font-semibold text-balance text-white">
                                6+
                                <p className="text-sm md:text-lg mt-0 font-light">
                                    Years of <br />
                                    experience
                                </p>
                            </h3>
                        </motion.div>
                    </div>
                    <div className="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] text-center">

                        <div className="flex flex-row flex-wrap items-center justify-center md:flex md:flex-col md:items-end md:justify-end gap-3">
                            {tags.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className="relative rounded-full inline-block px-5 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex md:hidden flex-row flex-wrap items-center justify-center gap-3 mt-5">
                            {tags.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className="relative rounded-full inline-block px-5 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                        <a href="#My_Work" className="hidden md:flex justify-end items-center gap-4 capitalize text-lg font-light tracking-tight text-balance text-white mt-15">
                            scroll for more <FaArrowTurnDown />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;
