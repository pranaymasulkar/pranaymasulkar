import ButtonFill from '../buttons/ButtonFill'
import DownloadCV from '../buttons/DownloadCV'

const TagLine = () => {
    return (
        <section className='w-full h-auto bg-[#161616] py-12 md:py-24 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13'>
            <div className='w-full md:w-[80%] text-center mx-auto'>
                <h3 className='mb-10 text-2xl md:text-5xl leading-[1.7] tracking-widest text-gray-300'>The world of web design and development is constantly evolving, and I keep pace with the latest trends and technologies. My focus as a frontend developer is to craft digital experiences that combine stunning design with smooth, responsive functionality.</h3>
                <div className='flex flex-col md:flex-row gap-6 md:gap-3 justify-center'>
                    <ButtonFill title="my works" href="/works" />
                    <DownloadCV />
                </div>
            </div>
        </section>
    )
}

export default TagLine