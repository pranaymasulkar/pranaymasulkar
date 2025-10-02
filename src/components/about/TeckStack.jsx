import React from 'react'
import HeaddingWithStar from '../common/HeaddingWithStar'
import TeckLogoCard from '../common/TeckLogoCard'

const TeckStack = () => {
    return (
        <div className="bg-[#161616] pb-12 pt-12 md:pt-30 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="mx-auto">
                <div className="md:flex w-full justify-between items-start mb-12 md:mb-24">
                    <div className='w-full md:w-[30%] mb-15 md:mb-0'>
                        <HeaddingWithStar title="teck stack" className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white" />
                    </div>
                    <div className="w-full md:w-[60%]">
                        <p className="text-2xl font-normal leading-[1.7] tracking-widest text-gray-300">My career has been shaped by a passion for building user-first digital experiences — blending creative design with the technical expertise of my stack.</p>
                    </div>
                </div>
                <div className="w-full">
                    <TeckLogoCard />
                </div>
            </div>
        </div>
    )
}

export default React.memo(TeckStack)