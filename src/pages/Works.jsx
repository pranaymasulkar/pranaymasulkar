import React from "react";
import AboutWork from "../components/works/AboutWork";
import ProjectCard from "../components/works/ProjectCard";
import Footer from "../layout/Footer";
import CallToAction from "../components/common/CallToAction";
import ScrollTextSection from "../components/common/ScrollTextSection";
import TechStackScroll from "../components/works/TechStackScroll";
const Works = () => {
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
    return (
        <>
            <AboutWork />
            <ScrollTextSection
                data={data}
                parentClassName="h-[30vh] bg-[#161616]"
                className="text-9xl md:text-[10rem] text-[#535151] capitalize"
                imageSize={`${"md" === true ? "150" : "80"}`}
            />
            <ProjectCard />
            <TechStackScroll />
            <CallToAction />
            <Footer />
        </>
    );
};

export default Works;
