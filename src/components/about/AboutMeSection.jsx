import React from 'react'
import HeaddingWithStar from '../common/HeaddingWithStar'

import Myimage from "../../../public/pranay_masulkar.png";
const AboutMeSection = () => {
    return (
        <div className="bg-[#161616] pt-12 md:pt-24 pb-10 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="mx-auto">

                <div className="md:flex w-full justify-between items-center mb-15 md:mb-20">
                    <div className='w-full md:w-[40%] mb-20 md:mb-0'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={Myimage} alt="Pranay Masulkar" className="rounded md:rounded-full md:w-100 md:h-100" />
                            <a href="/CV_Pranay_Masulkar.pdf" target="_blank" rel="noopener noreferrer" className='mt-5 uppercase rounded-full tracking-widest px-6 py-3 text-xl/6 text-[#04AA6D] hover:text-white ring-2 ring-gray-300 hover:ring-[#04AA6D]'>download cv</a>
                        </div>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <HeaddingWithStar title="Who I am," className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white mb-12" />
                        <p className="text-xl md:text-2xl font-normal leading-[1.7] tracking-widest text-gray-300">Hi, I’m <span className='font-bold text-[#04AA6D]'> Pranay Ambadas Masulkar</span>, a passionate and results-driven <span className='font-bold italic'> Specialist Frontend Developer </span> with over  <span className='font-bold italic'>6.5 years</span> of experience in crafting responsive, scalable, and high-performance web applications. I specialize in turning creative ideas into interactive, user-centric digital experiences by blending modern frontend technologies with clean, maintainable code.</p>
                    </div>
                </div>
                <div className="w-full">
                    <p className="mb-15 md:mb-20 text-xl md:text-2xl font-normal leading-[1.7] tracking-widest text-gray-300">From the very beginning of my career, I’ve been fascinated by how <span className='font-bold italic'> design, technology, and user experience </span>intersect. This curiosity led me to master <span className='font-bold italic'> JavaScript (ES6+) and TypeScript</span> as core programming languages, along with key libraries like React.js for building dynamic UIs and CSS preprocessors like SASS for maintainable styling.</p>
                    <p className="text-xl md:text-2xl font-normal leading-[1.7] tracking-widest text-gray-300">I also work extensively with frameworks such as <span className='font-bold italic'> Next.js</span> for server-side rendering and scalable application architecture, and I leverage <span className='font-bold italic'>HTML5</span>  and <span className='font-bold italic'>CSS3</span> to create responsive, accessible, and visually engaging user experiences. This combination of libraries and frameworks allows me to deliver solutions that are both <span className='font-bold italic'>aesthetically appealing</span> and <span className='font-bold italic'>technically robust</span>.</p>
                </div>
                <div className=' h-0.25 bg-[#04AA6D] my-30'></div>
                <div className="md:flex w-full justify-between items-start mb-15 md:mb-20">
                    <div className='w-full md:w-[40%] mb-20 md:mb-0'>
                        <HeaddingWithStar title="My Journey," className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white" />
                    </div>
                    <div className="w-full md:w-[60%]">
                        <p className="mb-8 text-xl md:text-2xl leading-[1.7] tracking-widest text-gray-300">Currently, I have served as a Specialist Frontend Developer at Origius System Pvt. Ltd., where I’ve spearheaded the frontend development of high-traffic, enterprise-grade platforms like Allied Market Research and Research Dive. These projects demanded more than just coding—they required revitalizing legacy codebases, enhancing mobile responsiveness, and implementing performance optimizations that translated into faster load times, improved engagement, and a smoother user journey.</p>
                    </div>
                </div>
                <div className='w-full'>
                    <p className="mb-15 md:mb-20 text-xl md:text-2xl leading-[1.7] tracking-widest text-gray-300">Before joining Origius, I brought my expertise to InfoVerse Technologies and Webakruti Software, working across fintech, NFT marketplaces, rental platforms, real estate portals, and e-commerce solutions. Each project was an opportunity to refine my craft—designing pixel-perfect, accessible, and responsive interfaces that maintained consistency across browsers, devices, and platforms.</p>
                    <p className="mb-15 md:mb-20 text-xl md:text-2xl leading-[1.7] tracking-widest text-gray-300">Across every role, I’ve embraced challenges that demanded a balance of technical mastery, creativity, and collaboration—delivering solutions that not only look great but also perform flawlessly at scale.</p>
                    <p className="mb-15 md:mb-20 text-xl md:text-2xl leading-[1.7] tracking-widest text-gray-300">My career has been shaped by a deep passion for creating user-first digital experiences that merge design precision with technical excellence.</p>
                </div>
                <div className=' h-0.25 bg-[#04AA6D] mt-30'></div>
            </div>
        </div>
    )
}

export default AboutMeSection