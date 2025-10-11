import Link from "next/link";
import ScrollTextSectionTwo from "./ScrollTextSectionTwo";

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
                <div className="flex justify-center">
                    <h2 className="transition-all w-64 md:w-75 text-center rounded-0 tracking-widest capitalize font-bold px-7 md:px-10 py-5 text-5xl md:text-6xl text-white bg-[#161616]">
                        Let's
                    </h2>
                </div>
                <ScrollTextSectionTwo data={data} />

                <div className="flex justify-center">
                    <Link
                        href="/contact"
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
