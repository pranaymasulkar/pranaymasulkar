import HeaddingWithStar from '@/components/typography/HeaddingWithStar'
import Link from 'next/link'
import React from 'react'
import { GiReturnArrow } from 'react-icons/gi'

const NotFound = () => {
    return (
        <div className='relative'>
            <div className="fixed overflow-y-scroll inset-0 bg-white flex flex-col gap-10 py-12 px-8 md:px-12 items-center justify-center z-50 my-5 mx-5 sm:mx-6 :mmd:mx-10 rounded-4xl">
                <p className="w-full capitalize block text-center text-2xl sm:text-3xl md:text-8xl font-black tracking-widest text-black">
                   😔 Oops! 😔
                </p>
                <div className="">
                   
                    <HeaddingWithStar
                        title="Page Not Found"
                        className=" text-[#161616] text-2xl sm:text-3xl md:text-8xl font-bold tracking-wide text-pretty capitalize transition-colors"
                    />
                </div>
                <p className="w-full md:w-[90%] flex justify-center items-center text-center text-xl font-normal leading-[1.7] tracking-widest text-black">
                    Sorry, the page you’re looking for doesn’t exist. <br /> It might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="flex flex-col justify-start items-center font-bold leading-[1.2] tracking-wide text-pretty text-[#04AA6D] hover:underline mt-0"
                    >
                        <span className="block">
                            <GiReturnArrow size={60} />{" "}
                        </span>{" "}
                        <span className="text-xl"> Back To Home</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound