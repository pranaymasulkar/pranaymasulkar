import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HeroWork from './components/HeroWork'
import ScrollTextSectionTwo from '@/components/common/ScrollTextSectionTwo'
import ProjectCard from './components/ProjectCard'
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaGitSquare, FaHtml5, FaNodeJs, FaReact, FaSass, FaWordpress } from 'react-icons/fa'
import { SiNextdotjs, SiReactbootstrap, SiRedux, SiTailwindcss } from 'react-icons/si'
import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import ScrollTextSectionFour from '@/components/common/ScrollTextSectionFour'
import CallToAction from '@/components/common/CallToAction'
const page = () => {
    const data = [
        "modern",
        "responsive",
        "Clients Approve",
        "E-commerce",
        "Real Estate",
        "Admin Dashboards",
        "Clients Approve",
        "Web3/NFT",
        "Blockchain",
        "EdTech",
        "Clients Approve",
        "HRTech",
        "Fintech",
        "CMS",
    ];
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
            <Header />
            <HeroWork />
            <ScrollTextSectionTwo
                data={data} />
            <ProjectCard />
            <section className="mt-12 pb-0 md:mt-24 md:pb-24">
                <ScrollTextSectionFour data={stack} />
            </section>
            <CallToAction/>
            <Footer />
        </>
    )
}

export default page