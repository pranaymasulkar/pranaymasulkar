import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainRoutes from '../routes/MainRoutes'
import StarImage from "../components/common/StarImage";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Myimage from "../../public/pranay_masulkar.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";
import ScrollProgressCircle from "../components/common/ScrollProgressCircle";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // full screen overlay animation variants
    const overlayVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
        }),
    };

    const navLinks2 = ["Home", "About", "Services", "Portfolio", "Contact"];
    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About Me', to: '/about' },
        { name: 'Contact', to: '/contact' },
        { name: 'Works', to: '/works' },
    ]
    return (
        <>
            <header className="relative w-full h-10 flex justify-between items-center text bg-[#161616] text-white z-50 py-13 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
                {/* Logo */}
                <div className=" text-3xl md:text-4xl font-black tracking-widest text-white capitalize ">
                    <Link to="/" className="flex justify-start"><span>pranay masulkar </span><span className="text-[#04AA6D]"><StarImage /></span></Link>
                </div>
                <Link to="/contact" className="hidden md:block me-20 rounded-full tracking-widest px-6 py-3 text-xl/6 text-gray-300 hover:text-white ring-2 ring-gray-300 hover:ring-white">
                    Say Hello
                </Link>
                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="h-[44px] w-[44px] text-3xl fixed right-7.5 top-7.5 md:right-11 md:top-7 flex justify-center items-center space-y-1 cursor-pointer bg-[#161616] hover:bg-white hover:text-[#161616] text-white font-black rounded-full"
                >
                    <HiOutlineMenuAlt4 />
                </button>
                <ScrollProgressCircle />
                {/* Fullscreen Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed overflow-y-scroll inset-0 bg-white flex flex-col gap-10 items-center justify-center z-50 my-5 mx-5 sm:mx-6 :mmd:mx-10 rounded-4xl"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >

                            {/* Close Button */}

                            {/* Navigation Links */}
                            <div className="relative w-full pt-12 md:pt-12 pb-12 px-8 md:px-12">
                                <div className="w-full flex justify-end">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className=" fixed top-7 right-7 cursor-pointer  text-white hover:bg-[#04AA6D] bg-[#161616] font-black rounded-full p-4"
                                    >
                                        <IoClose size={30} />
                                    </button>
                                </div>
                                <div className="w-full pt-24 pb-10 md:pt-0 md:pb-12">
                                    <p className="hidden md:block text-start text-xl font-normal leading-[1.7] tracking-widest text-black ">🦄 Innovative design <br />
                                        and cutting-edge development</p>
                                </div>

                                <div className="md:flex justify-between items-end w-full">
                                    <div className="w-full md:w-[50%]">
                                        <nav className="w-full flex flex-col gap-8 text-3xl font-semibold tracking-wide">
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
                                                        className="flex justify-between items-center hover:text-[#04AA6D] text-[#161616] text-6xl font-bold tracking-wide text-pretty capitalize transition-colors"
                                                        onClick={() => setIsOpen(false)} // close after click
                                                    >
                                                        {link.name} <StarImage />
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </nav>
                                        <p className="hidden md:flex justify-start items-start text-start text-sm tracking-widest text-[#161616] mt-12">With <FaHeart color="red" className="mx-1" /> By <span className="text-Black mx-1">Pranay Masulkar.</span></p>

                                    </div>

                                    <div className="w-full md:w-[40%] mt-10 md:mt-0" >
                                        <h4 className="text-center md:text-end text-xl font-normal leading-[1.7] tracking-widest text-black">👋 Nice to see you! <br />
                                            I'm Pranay Masulkar, <br /> Specialist frontend developer <br /> based in Nagpur, India</h4>
                                        <div className="flex flex-col items-end justify-end my-5">
                                            <img src={Myimage} alt="Pranay Masulkar" className="rounded md:w-60 md:h-60" />
                                            {/* <a href="/CV_Pranay_Masulkar.pdf" target="_blank" rel="noopener noreferrer" className=' text-center inline-block mt-5 uppercase rounded-full tracking-widest px-6 py-3 text-xl/6 text-[#04AA6D] ring-2 ring-[#04AA6D]'>download cv</a> */}

                                        </div>
                                        <p className="hidden md:block text-end text-sm tracking-widest text-[#161616]">© 2025</p>
                                        <p className="block md:hidden justify-center items-center text-center text-sm tracking-widest text-[#161616]"><span className="flex justify-center">With <FaHeart color="red" className="mx-1" /></span> Designed & Developed By <span className="text-[#16161] font-bold mx-1">Pranay Masulkar.</span> Copyright © 2025.</p>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header >
            <MainRoutes />
        </>
    );
};

export default Header;




