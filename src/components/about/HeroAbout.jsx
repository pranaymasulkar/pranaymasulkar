import React from "react";
import HeaddingWithStar from "../common/HeaddingWithStar";
import ScrollTextSection from "../common/ScrollTextSection";

const HeroAbout = () => {
    const stack = [
        "Creative",
        "Modern",
        "Interactive",
        "Frontend Developer",
        "Responsive",
        "Pixel Perfect",
    ];
    return (
        <section className="bg-[#161616] py-12 relative px-5 sm:px-6 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="mx-auto ">
                <div className="mx-auto w-full lg:mx-0 md:flex justify-start items-start">
                    <div className="w-full md:w-[20%] md:sticky top-0 pt-15">
                        <HeaddingWithStar
                            title="About Me.."
                            className="text-3xl font-light tracking-wide text-pretty capitalize text-white"
                        />
                    </div>
                    <div className="w-full pt-15">
                        <p className="w-full md:w-[80%] text-7xl md:text-8xl font-medium leading-[1.1] tracking-wide text-pretty text-white mb-8 md:mb-0">
                            Driven by ideas and innovation.
                        </p>

                        <div className="border-white rounded-full mt-15 border-b-2 pb-6">
                            <ScrollTextSection
                                data={stack}
                                parentClassName="h-[10vh] md:h-[20vh] bg-white border-4 border-white rounded-full"
                                className="text-6xl md:text-[6rem] text-[#161616] capitalize font-bold"
                                imageSize={`${"md" === true ? "150" : "80"}`}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAbout;
