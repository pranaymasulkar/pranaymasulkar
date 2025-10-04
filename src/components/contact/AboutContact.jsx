import React from 'react'
import HeaddingWithStar from '../common/HeaddingWithStar'
import ContactForm from './ContactForm'

const AboutContact = () => {
    return (
        <section className="bg-[#161616] py-12 relative px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="mx-auto">
                <div className="mx-auto w-full lg:mx-0 md:flex justify-start items-start">
                    <div className='w-full md:w-[20%] md:sticky top-0 pt-15'>
                        <HeaddingWithStar title="Contact.." className="text-3xl font-light tracking-wide text-pretty capitalize text-white" />
                    </div>
                    <div className='w-full md:w-[80%] pt-15'>
                        <p className="text-6xl md:text-8xl font-medium leading-[1.1] tracking-wide text-pretty text-white mb-8 md:mb-0">
                            Let's talk <br />
                            about your <br /> project!
                        </p>
                        <a href="to:pranaymasulkar@gmail.com" className="text-xl sm:text-2xl md:text-6xl font-medium leading-[1.2] tracking-wide text-pretty text-[#04AA6D] sm:text-[#04AA6D] md:text-stone-600 md:hover:text-[#04AA6D] mt-0 block">
                            pranaymasulkar@gmail.com
                        </a>
                        <p className="text-xl md:text-3xl leading-[1.4] tracking-widest text-gray-300 mt-20 mb-10">
                            Looking for a Frontend or React Developer? I’m open to new opportunities and would love to connect.
                            If you have questions about my experience, projects, or availability, feel free to reach out. <br />
                            📩 You can fill out the contact form below or email me directly at pranaymasulkar@gmail.com also you </p>
                        <a href="/CV_Pranay_Masulkar.pdf" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-wide text-pretty uppercase text-[#04AA6D] hover:text-white hover:bg-[#04AA6D] mb-20 inline-block justify-start items-center backdrop-blur-[10px] md:backdrop-blur-[5px]  border border-[#c2adbb] rounded-full bg-[#00000069] py-3 px-12 shadow-lg shadow-[#d7bdd1aa]">
                            Download CV
                        </a>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContact