import React from 'react'
import { Link } from 'react-router-dom'

const TagLine = () => {
    return (
        <section className='w-full h-auto bg-[#161616] py-12 md:py-24 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13'>
            <div className='w-full md:w-[80%] text-center mx-auto'>
                <h3 className='mb-10 text-2xl md:text-5xl leading-[1.7] tracking-widest text-gray-300'>The world of web design and development is constantly evolving, and I keep pace with the latest trends and technologies. My focus as a frontend developer is to craft digital experiences that combine stunning design with smooth, responsive functionality.</h3>

                <div className='flex flex-col md:flex-row gap-8 md:gap-3 justify-center'>
                    <Link to="/works" className="block md:inline-block rounded-full tracking-widest capitalize font-bold px-6 py-3 text-xl md:text-xl/6 text-[#161616] hover:bg-white ring-1 ring-gray-300 bg-gray-300 hover:ring-white md:me-3">
                        My Works
                    </Link>
                    <a href="/CV_Pranay_Masulkar.pdf" target="_blank" rel="noopener noreferrer" className="block md:inline-block rounded-full tracking-widest px-6 py-3 text-xl md:text-xl/6 text-gray-300 hover:text-white ring-2 ring-gray-300 hover:ring-white">
                        Download CV
                    </a>
                </div>
            </div>
        </section >
    )
}

export default TagLine