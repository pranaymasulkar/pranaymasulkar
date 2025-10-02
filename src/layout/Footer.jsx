import React from "react";
import StarImage from "../components/common/StarImage";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import GoToTop from "../components/common/GoToTop";
const Footer = () => {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Me", href: "/about" },
        { label: "Works", href: "/works", counter: 10 },
        { label: "Contact", href: "/contact" },
    ];


    const socials = [
        {
            name: "Linkedin",
            icon: <FaLinkedinIn />,
            href: 'https://www.linkedin.com/in/pranay-masulkar/'
        },
        {
            name: "Github",
            icon: <FaGithub />,
            href: 'https://github.com/pranaymasulkar'
        }
        , {
            name: "Instagram",
            icon: <BsInstagram />,
            href: 'https://www.linkedin.com/in/pranay-masulkar/'
        },
        {
            name: "X / Twitter",
            icon: <FaSquareXTwitter />,
            href: 'https://github.com/pranaymasulkar'
        }
    ]

    return (
        <footer className="py-12 md:py-24 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="grid md:grid-cols-3 gap-10 mx-auto w-full">
                {/* Column 1 - Navigation */}
                <div className=" bg-[#1c1c1c] px-8 py-10 rounded-2xl">
                    <ul className="">
                        {navLinks.map((link, idx) => (
                            <li key={idx} className="group">
                                <Link
                                    to={link.href}
                                    className="text-3xl md:text-5xl font-medium tracking-wider text-white hover:text-[#04AA6D] transition-all flex items-center justify-start py-6"
                                >
                                    <StarImage />
                                    <span className="ms-5"> {link.label}</span>
                                    {link.counter && (
                                        <span className="flex items-center gap-1 text-sm/6 text-white p-1 px-3 font-bold rounded-full bg-[#04AA6D] ms-4">
                                            <StarImage />
                                            {link.counter}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2 - Contact + Subscribe */}
                <div className="flex flex-col gap-8">
                    <div className="bg-[#1c1c1c] px-6 py-6 rounded-2xl">
                        <p className="flex items-center gap-3 text-gray-200  py-7 text-2xl">
                            <StarImage />
                            <a
                                href="mailto:pranaymasulkar@gmail.com"
                                className="hover:text-white"
                            >
                                pranaymasulkar@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="bg-[#1c1c1c] px-6 py-6 rounded-2xl">
                        <p className="flex items-center gap-3 text-gray-200 py-7 text-2xl">
                            <StarImage />
                            <a href="tel:+918624043380" className="hover:text-white">
                                +91 73858 00363
                            </a>
                        </p>
                    </div>

                    <div className="bg-[#1c1c1c] px-6 pt-6 pb-10 rounded-2xl">
                        {/* <p className="text-5xl font-medium tracking-wider text-white mb-4 pb-5 border-b-2 border-white">
                            Subscribe to our insights:
                        </p> */}
                        <form className="">
                            <p className="text-sm font-normal leading-[1.7] tracking-widest text-[#04AA6D]">Say Hi!</p>
                            <div className="flex justify-between items-center gap-0">
                                <div className="w-[80%]">
                                    <input
                                        placeholder='Email'
                                        type="text"
                                        autoComplete="address-level1"
                                        className="block w-full border-b-2 tracking-widest border-white py-5 text-white outline-0 placeholder:text-white focus:border-[#04AA6D] hover:border-[#04AA6D] text-2xl font-light"
                                    />
                                </div>
                                <button className="w-[20%] h-[74px] tracking-widest font-bold flex justify-center items-center text-4xl text-white hover:text-[#04AA6D] border-b-2">
                                    <FaArrowUpRightFromSquare />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Column 3 - Socials */}
                <div className="flex flex-col justify-between bg-[#1c1c1c] px-8 py-10 rounded-2xl">
                    <div>
                        <p className="text-5xl font-medium tracking-wider text-white mb-4 pb-5 border-b-2 border-white">Connect</p>
                        <ul className="space-y-2">
                            {socials.map((social, idx) => (
                                <li key={idx}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex justify-between items-center text-2xl pt-8 tracking-widest text-white hover:text-[#04AA6D]"
                                    >
                                        <span> {social.name}</span> <span>{social.icon}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-span-full flex flex-col gap-6 bg-[#1c1c1c] p-4 rounded-2xl">
                    <p className="md:flex justify-center items-center text-center text-lg tracking-widest text-gray-400"><span className="flex justify-center">With <FaHeart color="red" className="mx-1" /></span> Designed & Developed By <span className="text-white mx-1">Pranay Masulkar.</span> Copyright © 2025.</p>
                </div>
            </div>

            <GoToTop threshold={250} bottom="1.5rem" right="1rem" />
        </footer>
    );
};

export default Footer;