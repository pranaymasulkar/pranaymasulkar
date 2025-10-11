"use client";
import { useContext, useMemo } from "react";
import Link from "next/link";
import { myDataContex } from "@/context/MyDataContex";
import { useRouter } from "next/navigation";
import { IoArrowUndoSharp } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import HeaddingWithStar from "@/components/typography/HeaddingWithStar";
import StarImage from "@/components/common/StarImage";
import CallToAction from "@/components/common/CallToAction";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "../components/ParallaxSection";
import Header from "@/components/layout/Header";


const DetailPage = ({ params }) => {
    const router = useRouter();
    const { id } = params;
    const { mydata } = useContext(myDataContex);

    const projects = mydata?.pranaymasulkar?.projects || [];
    const currentIndex = projects.findIndex(
        (item) => String(item.id) === String(id)
    );
    const projectData = projects[currentIndex];

    const prevId = currentIndex > 0 ? projects[currentIndex - 1].id : null;
    const nextId =
        currentIndex < projects.length - 1 ? projects[currentIndex + 1].id : null;

    const prevName = projects.find((item) => String(item.id) === String(prevId));
    const nextName = projects.find((item) => String(item.id) === String(nextId));

    const goToPrev = () => {
        if (prevId) router.push(`/works/${prevId}`);
    };

    const goToNext = () => {
        if (nextId) router.push(`/works/${nextId}`);
    };

    if (!projectData) {
        return (
            <div className="text-center text-white py-20 text-2xl">
                Project not found!
            </div>
        );
    }

    return (
        <>
        <Header/>
            <section className="bg-[#161616] py-12 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
                <div className="mx-auto">
                    {/* Back to Works */}
                    <div className="flex justify-start items-center capitalize rounded-full gap-2 px-5 py-1 text-md text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                        <Link
                            href="/works"
                            className="flex justify-start items-center gap-2 text-md font-medium hover:text-white text-[#04AA6D]"
                        >
                            <IoArrowUndoSharp className="text-[#04AA6D]" /> back to works
                        </Link>
                        <span>/</span>
                        <span>{projectData.name}</span>
                    </div>

                    {/* Details */}
                    <section className="mx-auto w-full lg:mx-0 md:flex justify-start items-start py-6 md:py-12">
                        <div className="w-full md:w-[20%] md:sticky top-0 pt-15">
                            <HeaddingWithStar
                                title="Details.."
                                className="text-3xl font-light tracking-wide text-white"
                            />
                        </div>

                        <div className="w-full md:w-[80%] pt-15">
                            <a href={projectData.link} target="_blank">
                                <h1 className="text-6xl md:text-8xl font-medium text-white mb-4 md:mb-15">
                                    {projectData.name}
                                </h1>
                            </a>

                            {/* Info */}
                            <div className="md:flex justify-center items-center">
                                <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
                                    {projectData.progressDetail.map((item, index) => (
                                        <div key={index}>
                                            <p className="text-lg md:text-xl text-stone-500 mb-3">
                                                {item.title}
                                            </p>
                                            <p className="text-xl md:text-2xl font-medium text-white capitalize">
                                                {item.subTitle}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="w-full md:w-[40%] md:border-s border-[#04AA6D] mt-10 md:mt-0">
                                    <p className="text-lg md:text-xl text-[#04AA6D] text-end mb-7">
                                        tech stack
                                    </p>
                                    <div className="flex flex-wrap md:justify-end gap-3">
                                        {projectData.technologies.map((item, index) => (
                                            <button
                                                key={index}
                                                className="rounded-full px-5 py-1 text-md text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="my-10">
                                <a
                                    href={projectData.link}
                                    target="_blank"
                                    className="flex items-center text-3xl md:text-6xl text-[#04AA6D] hover:underline"
                                >
                                    Check Live <LuSquareArrowOutUpRight className="ms-3" />
                                </a>
                            </div>

                            <p className="mb-10 text-lg md:text-xl text-[#acacac]">
                                {projectData.descriptionLong}
                            </p>
                        </div>
                    </section>

                    {/* Image */}
                    <section className="py-12">
                        <ParallaxSection
                            image={projectData.image}
                            ImageAlt={projectData.name}
                        />
                    </section>

                    {/* Role & Responsibility */}
                    <section className="md:flex justify-start gap-20 py-12">
                        <div className="w-full md:w-[30%]">
                            <HeaddingWithStar
                                title="Role And Responsibility.."
                                className="text-5xl font-bold text-white"
                            />
                        </div>
                        <div className="w-full md:w-[70%]">
                            {projectData.roleAndResponsibility?.map((item, index) => (
                                <p
                                    key={index}
                                    className="mb-10 text-xl text-gray-300 flex items-start"
                                >
                                    <span className="text-[#04AA6D] me-5 mt-3">
                                        <StarImage />
                                    </span>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Key Achievements */}
                    <section className="md:flex justify-start gap-20 py-12">
                        <div className="w-full md:w-[30%]">
                            <HeaddingWithStar
                                title="Key Achievements.."
                                className="text-5xl font-bold text-white"
                            />
                        </div>
                        <div className="w-full md:w-[70%]">
                            <ul>
                                {projectData.KeyAchievements?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="mb-10 text-xl text-gray-300 flex items-start"
                                    >
                                        <span className="text-[#04AA6D] me-5 mt-3">
                                            <StarImage />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </section>

            {/* Pagination */}
            <section className="bg-[#161616] py-12 px-10 border-t-2 border-white flex justify-between">
                <button
                    onClick={goToPrev}
                    disabled={!prevId}
                    className="flex flex-col text-start group"
                >
                    <span className="text-stone-500 group-hover:text-white flex items-center gap-2">
                        <GoArrowLeft /> Prev
                    </span>
                    <span className="mt-2 text-xl text-stone-400 group-hover:text-white">
                        {prevName?.name || "First Project"}
                    </span>
                </button>

                <button
                    onClick={goToNext}
                    disabled={!nextId}
                    className="flex flex-col text-end group"
                >
                    <span className="text-stone-500 group-hover:text-white flex items-center gap-2">
                        Next <GoArrowRight />
                    </span>
                    <span className="mt-2 text-xl text-stone-400 group-hover:text-white">
                        {nextName?.name || "Last Project"}
                    </span>
                </button>
            </section>

            <CallToAction />
            <Footer />
        </>
    );
};

export default DetailPage;