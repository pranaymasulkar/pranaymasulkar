import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import React from "react";

const TeckLogoCard = () => {
    // console.log('this is chiled TeckLogoCard');
    const stack = [
        {
            title: "React Js",
            icon: <FaReact className="text-gray-200" />
        },
        {
            title: "Next Js",
            icon: <SiNextdotjs className="text-gray-200" />
        },
        {
            title: "JavaScript",
            icon: <RiJavascriptFill className="text-gray-200" />
        },
        {
            title: "Redux",
            icon: <SiRedux className="text-gray-200" />
        },
        {
            title: "HTML",
            icon: <FaHtml5 className="text-gray-200" />
        },
        {
            title: "CSS",
            icon: <FaCss3Alt className="text-gray-200" />
        },
        {
            title: "SASS",
            icon: <FaSass className="text-gray-200" />
        },
        {
            title: "TypeScript",
            icon: <BiLogoTypescript className="text-gray-200" />
        },
        {
            title: "Tailwind",
            icon: <SiTailwindcss className="text-gray-200" />
        },
        {
            title: "Bootstrap",
            icon: <FaBootstrap className="text-gray-200" />
        },
        {
            title: "React-Bootstrap",
            icon: <SiReactbootstrap className="text-gray-200" />
        },
        {
            title: "WordPress",
            icon: <FaWordpress className="text-gray-200" />
        },
        {
            title: "Node Js",
            icon: <FaNodeJs className="text-gray-200" />
        },
        // {
        //     title: "Mongo DB",
        //     icon: <SiMongodb className="text-gray-200" />
        // },
        // {
        //     title: "Express Js",
        //     icon: <SiExpress className="text-gray-200" />
        // },
        {
            title: "Git",
            icon: <FaGitSquare className="text-gray-200" />
        },
        {
            title: "Github",
            icon: <FaGithub className="text-gray-200" />
        },
        {
            title: "Figma",
            icon: <FaFigma className="text-gray-200" />
        }
    ]

    return (
        <>
            <div className='flex items-center md:items-end justify-center md:justify-end flex-wrap gap-3 md:gap-8'>
                {stack && stack.map((item, index) => (
                    <div key={index} className="h-auto w-auto p-3 md:p-5 bg-[#292929] hover:bg-[#262626] hover:scale-[1.05] rounded-xl flex justify-start items-center transition delay-150 ease-in-out">
                        <div className="bg-[#04AA6D] rounded-xl text-2xl md:text-4xl p-2 md:p-3">
                            {item.icon}
                        </div>
                        <p className="ms-3 md:ms-6 text-lg md:text-lg font-medium tracking-widest capitalize text-white max-lg:text-center">{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default React.memo(TeckLogoCard)