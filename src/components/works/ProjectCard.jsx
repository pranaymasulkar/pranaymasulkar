import React, { useContext } from "react";
import { myDataContex } from "../../context/MyDataContex";
import { Link } from "react-router-dom";
import StarImage from "../common/StarImage";

const ProjectCard = () => {
    const { mydata } = useContext(myDataContex);
    const projects = mydata?.pranaymasulkar?.projects || [];
    return (
        <>
            <section className="bg-[#161616] pt-12 pb-12 md:pt-24 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
                <h2 className="mb-15 flex justify-center items-center capitalize text-2xl sm:text-4xl md:text-6xl text-center font-medium leading-[1.1] tracking-wide text-pretty text-white">
                    <StarImage /> <span className="mx-4">Some Major work</span> <StarImage />
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {projects &&
                        projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="mx-auto w-full rounded-3xl bg-[#1c1c1c] border border-[#2a2a2a] shadow-xl transition-all delay-75 duration-300 hover:shadow-[#04AA6D]"
                            >
                                <div className="p-4">
                                    <Link
                                        to={`/detail/${project.id}`}
                                    >
                                        {/* <div className="inset-px rounded-3xl shadow-sm outline outline-white/15">
                                            <img
                                                src={project.image}
                                                alt=""
                                                className="w-[100%] h-75 object-top rounded-3xl border-0"
                                            />
                                        </div> */}
                                        <div
                                            className="relative overflow-hidden rounded-xl shadow-lg group"
                                            style={{ height: '300px' }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="absolute top-0 left-0 w-full h-auto transition-transform duration-[7000ms] ease-linear group-hover:translate-y-[-80%]"
                                            />
                                            <div className="absolute top-0 left-0 bg-[#16161677] hover:bg-[#04aa6d00] h-full w-full">

                                            </div>
                                        </div>
                                        <div className="pt-5">
                                            <h3 className="flex justify-between text-xl font-semibold tracking-wide text-white group-hover:text-gray-300">
                                                <span> {project.name} </span><span className="text-[#04AA6D] text-shadow-lg">/{index <= 9 ? '0' + (index <= 0 ? index + 1 : index + 1) : index}</span>
                                            </h3>
                                        </div>
                                    </Link>
                                </div>



                            </div>

                        ))}
                </div>
            </section>
        </>
    );
};

export default ProjectCard;
