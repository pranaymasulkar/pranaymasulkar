import React from "react";
import HeaddingWithStar from "./HeaddingWithStar";
import { Link } from "react-router-dom";
import ScrollTextSection from "./ScrollTextSection";

const CallToAction = () => {
    const data = [
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
    ];
    return (
        <section className="bg-[#161616] py-20 md:py-24 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="w-full bg-[#ffffff] rounded-4xl backdrop-blur-[3px] px-0">
                {/* <HeaddingWithStar title="Get in touch!" className="text-9xl font-black tracking-tight text-pretty capitalize text-[#161616] bg-white" /> */}
                <div className="flex justify-center">
                    <h2 className="transition-all w-64 md:w-75 text-center rounded-0 tracking-widest capitalize font-bold px-7 md:px-10 py-5 text-5xl md:text-6xl text-white bg-[#161616]">
                        Let's
                    </h2>
                </div>
                <ScrollTextSection
                    data={data}
                    parentClassName="h-[30vh] bg-[#161616]"
                    className="text-8xl md:text-[10rem] text-[#535151] capitalize"
                    imageSize={`${"md" === true ? "150" : "80"}`}
                />

                <div className="flex justify-center">
                    <Link
                        to="/contact"
                        className="transition-all w-64 md:w-75 text-center rounded-0 tracking-widest capitalize font-bold px-7 md:px-10 py-7 text-3xl text-white hover:bg-[#04AA6D] ring-1 ring-[#161616] bg-[#161616] hover:ring-[#04AA6D]"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
