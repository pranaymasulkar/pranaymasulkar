import React from 'react'
import HeaddingWithStar from '../common/HeaddingWithStar'
import { Link } from 'react-router-dom'

const AboutSection = () => {
    return (
        <div className="bg-[#161616] pt-12 md:pt-24 pb-12 md:pb-12 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="flex w-full justify-between items-start">
                <div className="w-full md:w-[85%] text-center mx-auto">
                    <p className="mb-0 text-xl md:text-4xl leading-[1.7] tracking-widest text-gray-300">
                        👋 Hey! </p>
                    <p className="mb-10 text-xl md:text-4xl leading-[1.7] tracking-widest text-gray-300">
                        I am Pranay Masulkar, a passionate and results-driven Specialist Frontend Developer with over 6.5 years of experience in crafting responsive, scalable, and high-performance web applications. I specialize in turning creative ideas into interactive, user-centric digital experiences by blending modern frontend technologies with clean, maintainable code.</p>

                    <div className='flex gap-3 justify-center'>
                        <Link to="/about" className="rounded-full tracking-widest capitalize font-bold px-6 py-3 text-xl/6 text-[#161616] hover:bg-white ring-1 ring-gray-300 bg-gray-300 hover:ring-white me-3">
                            Read More
                        </Link>
                        <a href="/CV_Pranay_Masulkar.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full tracking-widest px-6 py-3 text-xl/6 text-gray-300 hover:text-white ring-2 ring-gray-300 hover:ring-white">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection







