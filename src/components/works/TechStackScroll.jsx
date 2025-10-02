import React from 'react'
import ScrollTextSection from '../common/ScrollTextSection'
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaGitSquare, FaHtml5, FaNodeJs, FaReact, FaSass, FaWordpress } from 'react-icons/fa'
import { SiNextdotjs, SiReactbootstrap, SiRedux, SiTailwindcss } from 'react-icons/si'
import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'

const TechStackScroll = () => {
    const stack = [
        <FaReact className="text-[#04AA6D]" />,
        <SiNextdotjs className="text-[#04AA6D]" />,
        <RiJavascriptFill className="text-[#04AA6D]" />,
        <SiRedux className="text-[#04AA6D]" />,
        <FaHtml5 className="text-[#04AA6D]" />,
        <FaCss3Alt className="text-[#04AA6D]" />,
        <FaSass className="text-[#04AA6D]" />,
        <BiLogoTypescript className="text-[#04AA6D]" />,
        <SiTailwindcss className="text-[#04AA6D]" />,
        <FaBootstrap className="text-[#04AA6D]" />,
        <SiReactbootstrap className="text-[#04AA6D]" />,
        <FaWordpress className="text-[#04AA6D]" />,
        <FaNodeJs className="text-[#04AA6D]" />,
        <FaGitSquare className="text-[#04AA6D]" />,
        <FaGithub className="text-[#04AA6D]" />,
        <FaFigma className="text-[#04AA6D]" />,

    ]
    return (
        <>
            <div className="mt-12 pb-0 md:mt-24 md:pb-24">
                <ScrollTextSection
                    data={stack}
                    parentClassName="h-[10vh] md:h-[40vh]"
                    className="text-6xl md:text-[15rem] text-[#04AA6D] capitalize font-bold mx-20"
                    imageSize={`${"md" === true ? "150" : "80"}`}
                />
            </div>
        </>
    )
}

export default React.memo(TechStackScroll)