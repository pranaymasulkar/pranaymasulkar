import ButtonFill from '../buttons/ButtonFill'
import DownloadCV from '../buttons/DownloadCV'

const AboutSection = () => {
    return (
        <div className="bg-[#161616] pt-12 md:pt-24 pb-12 md:pb-12 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="flex w-full justify-between items-start">
                <div className="w-full md:w-[85%] text-center mx-auto">
                    <p className="mb-0 text-xl md:text-4xl leading-[1.7] tracking-widest text-gray-300">
                        👋 Hey! </p>
                    <p className="mb-10 text-xl md:text-4xl leading-[1.7] tracking-widest text-gray-300">
                        I am Pranay Masulkar, a passionate and results-driven Specialist Frontend Developer with over 6.5 years of experience in crafting responsive, scalable, and high-performance web applications. I specialize in turning creative ideas into interactive, user-centric digital experiences by blending modern frontend technologies with clean, maintainable code.</p>

                    <div className='flex flex-col md:flex-row gap-6 md:gap-3 justify-center'>
                        <ButtonFill title="Read more" href="/about" />
                        <DownloadCV />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection







