import React from 'react'
import { useContext } from 'react'
import { myDataContex } from '../../context/MyDataContex'
import HeaddingWithStar from '../common/HeaddingWithStar'

const Experties = () => {
    const { mydata } = useContext(myDataContex)
    const experties = mydata?.pranaymasulkar?.my_expertise

    return (
        <div className="bg-[#161616] pb-12 md:pb-24 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-12 2xl:px-13">
            <div className="mx-auto">
                <div className="md:flex w-full justify-start items-start">
                    <div className='w-full md:w-[40%] md:sticky top-0 pt-24'>
                        <HeaddingWithStar title="What I Do Best" className="text-5xl md:text-6xl font-bold tracking-tight text-pretty capitalize text-white" />
                    </div>
                    <div className="w-full md:w-[60%] relative pt-24 border-b-2 border-white">
                        {
                            experties && experties.map((item, index) => (
                                <div key={index} className="bg-transparent mb-0">
                                    <div className='py-20 border-t-2 border-white'>
                                        <h3 className="text-3xl font-semibold tracking-widest text-white group-hover:text-gray-300">
                                            {item.title}
                                        </h3>
                                        <p className="mt-8 mb-0 text-xl leading-[1.7] tracking-widest text-[#acacac]">{item.description}</p>
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

export default Experties