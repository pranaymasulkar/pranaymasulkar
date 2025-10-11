"use client"
import React, { useContext, useState } from "react";
import { myDataContex } from "../../context/MyDataContex";
import ButtonOutline from "../buttons/ButtonOutline";
import HeaddingWithStar from "../typography/HeaddingWithStar";
import Image from "next/image";

const WorkSection = () => {
    const { mydata } = useContext(myDataContex);
    const projects = mydata?.pranaymasulkar?.projects || [];

    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: null, y: null });

    const handleMouseEnter = (project) => setHoveredProject(project);
    const handleMouseLeave = () => setHoveredProject(null);
    const handleMouseMove = (e) => {
        requestAnimationFrame(() => {
            setMousePos({ x: e.clientX, y: e.clientY });
        });
    };


    return (
        <div
            id="My_Work"
            className="bg-[#161616] py-24 sm:py-32 relative px-5 sm:px-6 md:px-10 lg:px-12"
        >
            <div className="mx-auto">
                <div className="w-full md:flex justify-between items-center">
                    <HeaddingWithStar
                        title="My work.."
                        className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white"
                    />
                    <p className="w-full md:w-[40%] mt-10 md:mt-2 mb-10 md:mb-0 text-lg text-gray-300">
                        A collection of my professional work, focused on frontend development and modern web applications. All projects are tested, delivered, and approved by the client.
                    </p>

                    <ButtonOutline title="All Works" href="/works" />
                </div>

                <div className="mt-10 border-b-2 border-white pt-10 sm:mt-16 sm:pt-16">
                    {
                        projects.slice(0, 6).map((project, index) => (
                            <div
                                key={project.id || index}
                                onMouseEnter={() => handleMouseEnter(project)}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                className="relative"
                            >
                                <a href={project.link} target="_blank">
                                    <div className="border-t-2 border-white bg-transparent mb-0">
                                        <div className="group relative grow py-10 md:py-15">
                                            <div className='md:flex items-center justify-between'>
                                                <div className="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden w-full mb-7">
                                                    <h2 className="text-4xl font-meddium tracking-widest text-[#04AA6D] text-shadow-lg mb-3">{index <= 9 ? '0' + (index <= 0 ? index + 1 : index + 1) : index}. </h2>
                                                    <div
                                                        className="relative overflow-hidden rounded-xl shadow-lg group"
                                                        style={{ height: '300px' }}
                                                    >
                                                        <Image
                                                            src={project.image}
                                                            alt=""
                                                            className="absolute top-0 left-0 w-full h-auto transition-transform duration-[7000ms] ease-linear group-hover:translate-y-[-80%]"
                                                        />
                                                        <div className="absolute top-0 left-0 bg-[#1616163a] focus:bg-[#04aa6d00] h-full w-full">

                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="w-full md:w-[40%] md:mt-3 text-4xl font-meddium text-white tracking-widest group-hover:text-gray-300">
                                                    <span className="hidden md:inline-block text-4xl font-meddium tracking-widest text-[#04AA6D] text-shadow-lg mb-3">{index <= 9 ? '0' + (index <= 0 ? index + 1 : index + 1) : index}. </span>
                                                    {project.name}

                                                </h3>
                                                <div className="w-full md:w-[60%]">
                                                    <p className="mt-5 line-clamp-3 text-lg text-[#acacac]">{project.descriptionLong}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                </div>
            </div>

            {/* Floating data preview */}
            {
                hoveredProject && (
                    <div
                        className="hidden md:block fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
                        style={{
                            top: mousePos.y,
                            left: mousePos.x,
                        }}
                    >
                        <div className="w-100 h-full rounded-xl overflow-hidden shadow-xl bg-white animate-fadeIn">
                            {hoveredProject.image && (
                                <div className="relative overflow-hidden rounded-xl shadow-lg group h-[400px]">
                                    <Image
                                        src={hoveredProject.image}
                                        alt=""
                                        className="absolute top-0 left-0 w-full h-auto transition-transform duration-[7000ms] ease-linear group-hover:-translate-y-[80%]"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default WorkSection;