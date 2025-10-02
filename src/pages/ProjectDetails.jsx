import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { myDataContex } from "../context/MyDataContex";
import HeaddingWithStar from '../components/common/HeaddingWithStar';
import ParallaxSection from '../components/common/ParallaxSection';
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import CallToAction from '../components/common/CallToAction';
import Footer from '../layout/Footer';
import { IoArrowUndoSharp } from "react-icons/io5";
import StarImage from '../components/common/StarImage';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const ProjectDetails = () => {
    const { mydata } = useContext(myDataContex)
    const { id } = useParams()
    const navigate = useNavigate();

    const projects = mydata?.pranaymasulkar?.projects || [];
    const currentIndex = projects.findIndex(
        (item) => String(item.id) === String(id)
    );

    const projectData = projects[currentIndex]


    console.log(projectData.progressDetail, 'this is singledata');

    const prevId = currentIndex > 0 ? projects[currentIndex - 1].id : null;
    const nextId =
        currentIndex < projects.length - 1 ? projects[currentIndex + 1].id : null;


    // const projectData = mydata?.pranaymasulkar?.projects.find(
    //     (item) => String(item.id) === String(id)
    // )


    // console.log(projects.prevId, "This will get Id");

    const PreviusName = projects.find((item) =>
        String(item.id) === String(prevId)
    )
    const NextName = projects.find((item) =>
        String(item.id) === String(nextId)
    )
    const goToPrev = () => {
        if (prevId) navigate(`/detail/${prevId}`);
    };

    const goToNext = () => {
        if (nextId) navigate(`/detail/${nextId}`);
    };

    // console.log(PrevName.name, 'Prev next Id is')


    return (
        <>

            <section className="bg-[#161616] py-12 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
                <div className="mx-auto">
                    <div className="flex justify-start items-center capitalize rounded-full gap-2 px-5 py-1 text-md text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                        <Link to="/works"
                            className="flex justify-start items-center capitalize gap-2 py-1 text-md font-medium hover:text-white text-[#04AA6D]"
                        >
                            <IoArrowUndoSharp className='text-[#04AA6D]' /> back to  works
                        </Link>
                        <span>/</span>
                        <span>{projectData.name}</span>
                    </div>
                    <section className="mx-auto w-full lg:mx-0 md:flex justify-start items-start py-6 md:py-12">
                        <div className='w-full md:w-[20%] md:sticky top-0 pt-15'>
                            <HeaddingWithStar title="Details.." className="text-3xl font-light tracking-wide text-pretty capitalize text-white" />
                        </div>
                        <div className='w-full md:w-[80%] pt-15'>
                            <a href={projectData.link} target='blank' >
                                <h1 className="text-6xl md:text-8xl font-medium leading-[1.1] tracking-wide text-pretty text-white mb-4 md:mb-15">
                                    {projectData.name}
                                </h1>
                            </a>


                            <div className='md:flex justify-center items-center'>
                                <div className='w-fll md:w-[60%] grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-10 py-5'>
                                    {
                                        projectData.progressDetail.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <p className="text-lg md:text-xl leading-[1.4] tracking-widest text-stone-500 capitalize mb-3">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-xl md:text-2xl font-medium leading-[1.2] tracking-wide text-pretty text-white capitalize">
                                                        {item.subTitle}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='w-full md:w-[40%] md:border-s-1 border-[#04AA6D] mt-10 md:mt-0'>
                                    <p className="text-lg md:text-xl md:text-end leading-[1.4] tracking-widest text-[#04AA6D] capitalize mb-7">
                                        tech stack
                                    </p>
                                    <div className="flex flex-wrap md:items-end md:justify-end gap-3">

                                        {projectData.technologies.map((item, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    className="relative rounded-full inline-block px-5 py-1 text-md text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
                                                >
                                                    {item}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className='my-10 md:my-15'>
                                <a href={projectData.link} target='blank' className="flex justify-start items-center text-3xl md:text-6xl font-medium leading-[1.2] tracking-wide text-pretty text-[#04AA6D] hover:underline mt-0">
                                    Check Live <LuSquareArrowOutUpRight className='ms-3' />
                                </a>
                            </div>
                            <p className="mb-10 text-lg md:text-xl leading-[1.4] tracking-widest text-[#acacac]">
                                {projectData.descriptionLong}
                            </p>
                        </div>
                    </section>
                    <section className='py-12 px-0 sm:px-0 md:px-10 lg:px-12 xl:px-12 2xl:px-13'>
                        {/* <div className='flex justify-end mb-10'>
                            <a href={projectData.link} target='blank' className="inline-block rounded-full tracking-widest capitalize font-bold px-10 py-5 text-3xl text-[#161616] hover:bg-white ring-1 ring-gray-300 bg-gray-300 hover:ring-white ">
                                Live
                            </a>
                        </div> */}
                        <ParallaxSection image={projectData.image} children="sdfghjkl" ImageAlt={projectData.name} />
                    </section>
                    {/* Role And Responsibility */}
                    <section className='mx-auto w-full lg:mx-0 md:flex justify-start items-start gap-20 py-3 md:py-12'>
                        <div className='w-full md:w-[30%] md:sticky top-0 pt-15'>
                            <HeaddingWithStar title="role And Responsibility.." className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white" />
                        </div>
                        <div className='w-full md:w-[70%] pt-15'>
                            {projectData.roleAndResponsibility && projectData.roleAndResponsibility.map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='mb-15 md:mb-20 text-xl md:text-xl font-normal leading-[1.7] tracking-widest text-gray-300 flex justify-start items-start'
                                    >
                                        <span className="text-[#04AA6D] block me-5 mt-3"> <StarImage /> </span> <span>{item}</span>
                                    </p>
                                );
                            })}
                        </div>
                    </section>
                    {/* Key Achievements */}
                    <section className='mx-auto w-full lg:mx-0 md:flex justify-start items-start gap-20 py-0 md:py-12'>
                        <div className='w-full md:w-[30%] md:sticky top-0 pt-15'>
                            <HeaddingWithStar title="Key Achievements.." className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white" />

                        </div>
                        <div className='w-full md:w-[70%] pt-15'>
                            <ul>

                                {projectData.KeyAchievements && projectData.KeyAchievements.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='mb-15 md:mb-10 text-xl md:text-xl font-normal leading-[1.7] tracking-widest text-gray-300 flex justify-start items-start'
                                        >
                                            <span className="text-[#04AA6D] block me-5 mt-3"> <StarImage /> </span> <p>{item}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </section>

                </div >
            </section >
            {/* Pagination */}
            <section className="bg-[#161616] py-12 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13 ">

                <div className='py-10 flex justify-between items-center border-t-2 border-white'>
                    <button className='cursor-pointer tracking-wider flex items-start flex-col group' onClick={goToPrev}>
                        <span className='text-start flex justify-center group-hover:text-white items-center gap-3 text-xl font-light capitalize text-stone-500'> <GoArrowLeft /> prev</span>
                        <span className='mt-2 block text-stone-500 capitalize group-hover:text-white text-xl md:text-3xl'>{PreviusName === 0 ? projectData.name : PreviusName?.name ? PreviusName.name : "first one"}</span>
                    </button>
                    <button className='cursor-pointer tracking-wider flex items-end flex-col group' onClick={goToNext}>
                        <span className='text-end flex justify-center group-hover:text-white items-center gap-3 text-xl font-light capitalize text-stone-500'>Next <GoArrowRight /></span>
                        <span className='mt-2 block text-stone-500 capitalize group-hover:text-white text-xl md:text-3xl '>{NextName === 0 ? projectData.name : NextName?.name ? NextName.name : "Last One."}</span>
                    </button>
                </div>
            </section>
            <CallToAction />
            <Footer />
        </>
    )
}

export default ProjectDetails