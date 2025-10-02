import React, { Suspense } from "react";
import TeckStack from "../components/about/TeckStack";
import Hero from "../components/common/Hero";
import AboutSection from "../components/home/AboutSection";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import Footer from "../layout/Footer";
import ScrollTextSection from "../components/common/ScrollTextSection";
import TagLine from "../components/home/TagLine";
import CallToAction from "../components/common/CallToAction";

// import WorkSection from "../components/home/WorkSection";
const WorkSection = React.lazy(() => import("../components/home/WorkSection"))

const Home = () => {
    console.log("this is chiled Home");
    const data = [
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
        "About Me",
    ];
    const stack = [
        "React Js",
        "Next Js",
        "JavaScript",
        "Redux",
        "HTML",
        "CSS",
        "SASS",
        "TypeScript",
        "Tailwind",
        "Bootstrap",
        "React-Bootstrap",
        "WordPress",
        "Node Js",
        "Mongo DB",
        "Express Js",
        "Git",
        "Github",
        "Figma",
    ];
    return (
        <>
            <Hero />
            <ScrollTextSection
                data={data}
                parentClassName="h-[30vh] bg-[#161616]"
                className="text-9xl md:text-[10rem] text-[#535151]"
                imageSize={`${"md" === true ? "150" : "80"}`}
            />
            <AboutSection />
            <Suspense fallback={<p className="text-3xl text-white">Loadding...</p>}>
                <WorkSection />
            </Suspense>
            <TagLine />
            <Experience />
            <ScrollTextSection
                data={stack}
                parentClassName="h-[30vh] bg-[#161616]"
                className="text-9xl md:text-[10rem] text-[#535151] capitalize"
                imageSize={`${"md" === true ? "150" : "80"}`}
            />
            <TeckStack />
            {/* <Education /> */}
            <CallToAction />
            <Footer />
        </>
    );
};

export default React.memo(Home);
