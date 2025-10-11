"use client"
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import ScrollProgressCircle from "../common/ScrollProgressCircle";
import MobileNav from "./MobileNav";
import Link from "next/link";
import StarImage from "../common/StarImage";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const HandleCLoase = () => {
        setIsOpen(prev => prev.false)
    }
    return (
        <header className="relative w-full h-10 flex justify-between items-center text bg-[#161616] text-white z-50 py-13 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            {/* Logo */}
            <div className="text-xl sm:text-2xl md:text-4xl text-white font-black tracking-widest capitalize ">
                <Link href="/" className="flex justify-start"><span>pranay masulkar </span><span className="text-[#04AA6D]"><StarImage /></span></Link>
            </div>
            <Link href="/contact" className="hidden md:block me-20 rounded-full tracking-widest px-6 py-3 text-xl/6 text-gray-300 hover:text-white ring-2 ring-gray-300 hover:ring-white">
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
                    <MobileNav onClick={HandleCLoase} />
                )}
            </AnimatePresence>
        </header >
    );
};

export default Header;




