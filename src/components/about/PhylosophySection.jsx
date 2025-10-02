
import HeaddingWithStar from '../common/HeaddingWithStar'
import StarImage from '../common/StarImage'

const PhylosophySection = () => {
    return (
        <div className="bg-[#161616] pb-6 md:pb-24 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="mx-auto">
                <div className="md:flex w-full justify-start items-start">
                    <div className='w-full md:w-[40%] md:sticky top-0 pt-24'>
                        <HeaddingWithStar title="Approach and philosophy" className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white" />
                    </div>
                    <div className="w-full md:w-[60%] relative pt-24">
                        <h3 className="mb-3 text-3xl font-bold tracking-widest text-[#04AA6D] group-hover:text-gray-300">
                            My Philosophy
                        </h3>
                        <div className='w-[10%] h-0.25 bg-[#04AA6D] mb-10'></div>
                        <p className="mb-20 text-xl leading-[1.5] tracking-widest text-gray-300">I believe that good design is obvious, but great design is transparent. My approach is to deeply understand user needs, align them with business goals, and create solutions that are intuitive, efficient, and delightful to use. Collaboration is at the heart of my work—I thrive when working closely with designers, backend teams, and stakeholders to ensure that every feature is thoughtfully built and flawlessly executed.</p>
                        <h3 className="mb-3 text-3xl font-bold tracking-widest text-[#04AA6D] group-hover:text-gray-300">
                            My Approach
                        </h3>
                        <div className='w-[10%] h-0.25 bg-[#04AA6D] mb-10'></div>
                        <ul className='mb-20 text-xl leading-[1.5] tracking-widest text-gray-300'>
                            <li className='mb-7'><span className='font-bold'>Perfection</span> – From pixel-perfect designs to clean, scalable code, I ensure the highest quality in every project.</li>
                            <li className='mb-7'><span className='font-bold'>Innovation</span> – Leveraging the latest frontend trends, animations, and mobile-first strategies for modern user experiences.</li>
                            <li className='mb-7'><span className='font-bold'>Expertise</span> – Over 6 years of experience in architecting and developing complex applications.</li>
                            <li className='mb-7'><span className='font-bold'>Full-Cycle Frontend</span> – From concept to deployment, I cover UI development, optimization, and maintenance.</li>
                            <li className='mb-7'><span className='font-bold'>Client Success</span> – Projects that drive user engagement, higher conversion rates, and measurable business growth.</li>
                        </ul>
                        <h3 className="mb-3 text-3xl font-bold tracking-widest text-[#04AA6D] group-hover:text-gray-300">
                            Beyond Code
                        </h3>
                        <div className='w-[10%] h-0.25 bg-[#04AA6D] mb-10'></div>
                        <p className="mb-10 text-xl leading-[1.5] tracking-widest text-gray-300">While my main focus is on development, I’m equally passionate about mentorship and knowledge sharing. I enjoy guiding junior developers, conducting code reviews, and encouraging best practices within teams to improve overall code quality.</p>
                        <p className="mb-20 text-xl leading-[1.5] tracking-widest text-gray-300">When I’m not coding, you might find me exploring new tech trends, refining my personal projects, or brainstorming innovative ideas for the next big web solution.</p>
                        <p className='mb-20 text-2xl font-bold leading-[1.7] tracking-widest text-gray-300'>I’m always open to exciting collaborations and new opportunities to push the boundaries of what’s possible in frontend development. Let’s create something amazing—one line of clean, scalable code at a time.</p>


                    </div>
                </div>

            </div>
        </div >
    )
}

export default PhylosophySection