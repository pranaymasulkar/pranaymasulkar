import { motion } from "framer-motion";
import StarImage from "../components/common/StarImage";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import PranayMasulkar from "../../src/assets/pranay_masulkar.png";
import { IoClose } from "react-icons/io5";

const MobileNav = ({ onClick }) => {
    // full screen overlay animation variants
    const overlayVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
        },
        exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
    };

    // individual nav item animation
    const navItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
        }),
    };

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About Me", to: "/about" },
        { name: "Works", to: "/works" },
        { name: "Contact", to: "/contact" },
    ];

    return (
        <motion.div
            className="fixed inset-0 bg-[#161616] z-50 flex flex-col ov overflow-hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="bg-white rounded-4xl my-5 mx-5 sm:mx-6 md:mx-8 overflow-y-auto">
                {/* ✅ Use absolute position inside container (no layout shift) */}
                <button
                    onClick={onClick}
                    className="fixed md:absolute z-50 top-2 right-2 text-white bg-[#161616] hover:bg-[#04AA6D] rounded-full p-3 transition-colors duration-200 border-6 border-white"
                >
                    <IoClose size={30} />
                </button>

                <div className="relative w-full pt-15 pb-15 px-8 md:px-12 rounded-4xl">
                    {/* Tagline */}
                    <div className="w-full pt-0 pb-10 md:pb-7">
                        <p className="text-center md:text-start text-xl font-normal leading-[1.7] tracking-widest text-black">
                            🦄 Innovative design <br />
                            and cutting-edge development
                        </p>
                    </div>

                    {/* Navigation & Profile */}
                    <div className="md:flex justify-between items-end w-full">
                        {/* Left Section – Navigation */}
                        <div className="w-full md:w-[50%]">
                            <nav className="w-full flex flex-col gap-8 text-3xl font-semibold tracking-wide py-7 md:py-0">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.to}
                                        custom={i}
                                        variants={navItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        <Link
                                            to={link.to}
                                            onClick={onClick}
                                            className="flex justify-between items-center hover:text-[#04AA6D] text-[#161616] text-4xl md:text-6xl font-bold tracking-wide capitalize transition-colors"
                                        >
                                            {link.name} <StarImage />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <p className="hidden md:flex justify-start items-start text-start text-sm tracking-widest text-[#161616] mt-12">
                                With <FaHeart color="red" className="mx-1" /> By{" "}
                                <span className="text-black mx-1 font-semibold">
                                    Pranay Masulkar.
                                </span>
                            </p>
                        </div>

                        {/* Right Section – Image & Info */}
                        <div className="w-full md:w-[40%] mt-10 md:mt-0 text-center md:text-right">
                            <h4 className="text-xl font-normal leading-[1.7] tracking-widest text-black">
                                👋 Nice to see you! <br />
                                I'm Pranay Masulkar, <br />
                                Specialist frontend developer <br />
                                based in Nagpur, India
                            </h4>

                            <div className="flex flex-col items-center md:items-end my-5">
                                <img
                                    src={PranayMasulkar}
                                    alt="Pranay Masulkar"
                                    className="rounded-xl md:w-60 md:h-60 object-cover"
                                />
                            </div>

                            <p className="hidden md:block text-end text-sm tracking-widest text-[#161616]">
                                © 2025
                            </p>

                            <p className="block md:hidden text-center text-sm tracking-widest text-[#161616]">
                                <span className="flex justify-center items-center">
                                    With <FaHeart color="red" className="mx-1" />
                                </span>
                                Designed & Developed By{" "}
                                <span className="text-[#161616] font-bold mx-1">
                                    Pranay Masulkar
                                </span>
                                . Copyright © 2025.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MobileNav;