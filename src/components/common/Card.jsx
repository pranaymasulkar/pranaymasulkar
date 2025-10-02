import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ project }) => {
    const { name, description, link } = project

    return (
        <div className="border-t-2 border-white bg-transparent mb-0">
            <div className="group relative grow py-15">
                <div className='flex items-center justify-between'>
                    <h3 className="w-[40%] mt-3 text-3xl font-meddium text-white group-hover:text-gray-300">
                        <a href={link} target="_blank">
                            <span className="absolute inset-0" />
                            {name}
                        </a>
                    </h3>
                    <div className='w-[60%]'>
                        <p className="mt-5 line-clamp-3 text-lg text-[#acacac]">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card