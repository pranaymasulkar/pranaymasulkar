import React from 'react'

const LineCard = ({ project }) => {
    const { name, description, descriptionLong, link } = project
    // console.log('this is chiled LineCard');

    return (
        <div className="border-t-2 border-white bg-transparent mb-0">
            <div className="group relative grow py-10 md:py-15">
                <div className='md:flex items-center justify-between'>
                    <h3 className="w-full md:w-[40%] md:mt-3 text-4xl font-meddium text-white tracking-widest group-hover:text-gray-300">
                        <a href={link} target="_blank">
                            <span className="absolute inset-0" />
                            {name}
                        </a>
                    </h3>
                    <div className="w-full md:w-[60%]">
                        {/* <p className="mt-5 line-clamp-3 text-lg text-[#acacac]">{description}</p> */}
                        <p className="mt-5 line-clamp-3 text-lg text-[#acacac]">{descriptionLong}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LineCard)