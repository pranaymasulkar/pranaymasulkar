import React from 'react'
import { useContext } from 'react'
import { myDataContex } from '../../context/MyDataContex'
import HeaddingWithStar from '../common/HeaddingWithStar'

const Education = () => {
    const { mydata } = useContext(myDataContex)
    const education = mydata?.pranaymasulkar?.education
    return (
        <div className="bg-[#161616] pb-24">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="flex w-full justify-start items-start mb-30">
                    <div className='w-[40%] sticky top-0 pt-24'>
                        <HeaddingWithStar title="My education.." className="text-6xl font-bold tracking-tight text-pretty capitalize text-white" />
                    </div>
                    <div className="relative w-[60%] pt-24 border-b-2 border-white">
                        {
                            education && education.map((item, index) => (
                                <div key={index} className="bg-transparent mb-0">
                                    <div className='py-20 border-t-2 border-white'>
                                        <h3 className="text-3xl font-semibold tracking-widest text-white group-hover:text-gray-300">
                                            {item.degree}
                                        </h3>
                                        <p className="mt-8 mb-0 text-xl leading-[1.7] tracking-widest text-[#acacac]">{item.institute}</p>
                                        <p className="mt-8 mb-0 text-xl leading-[1.7] tracking-widest text-[#acacac]">{item.year}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Education