import HeaddingWithStar from "@/components/typography/HeaddingWithStar"


const HeroWork = () => {
    return (
        <section className="bg-[#161616] py-12 md:py-24 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="mx-auto">
                <div className="mx-auto w-full lg:mx-0 md:flex justify-start items-start">
                    <div className='w-full md:w-[20%] md:sticky top-0 pt-15'>
                        <HeaddingWithStar title="works.." className="text-3xl font-light tracking-wide text-pretty capitalize text-white" />
                    </div>
                    <div className='w-full md:w-[75%] pt-15'>
                        <h1 className="text-6xl md:text-8xl font-medium leading-[1.1] tracking-wide text-pretty text-white">
                            Where bold ideas take shape.
                        </h1>
                        <p className='mt-10 md:mt-15 text-xl md:text-3xl leading-[1.4] tracking-widest text-gray-300'>As a Frontend Developer, I’ve delivered modern, responsive solutions across various domains such as E-commerce, Real Estate, Admin Dashboards, Web3/NFT, Blockchain, EdTech, HRTech, Fintech, and CMS, adapting to different user needs and business models.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroWork