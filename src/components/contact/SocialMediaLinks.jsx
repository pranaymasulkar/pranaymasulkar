import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
    const socialLinks = [
        {
            name: "Linkedin",
            icon: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/in/pranay-masulkar/'
        },
        {
            name: "Github",
            icon: <FaGithub />,
            link: 'https://github.com/pranaymasulkar'
        }
        , {
            name: "Instagram",
            icon: <BsInstagram />,
            link: 'https://www.linkedin.com/in/pranay-masulkar/'
        },
        {
            name: "X / Twitter",
            icon: <FaSquareXTwitter />,
            link: 'https://github.com/pranaymasulkar'
        }
    ]
    return (
        <section className='bg-[#161616] pt-0 md:pt-12 pb-12 md:pb-24 px-4 sm:px-5 md:px-10 lg:px-12 xl:px-12 2xl:px-13'>
            <div className='mx-auto'>
                <div className="border-b-2 pt-10">
                    {socialLinks &&
                        socialLinks.map((item, index) => (
                            <a href={item.link} target="_blank ">
                                <div
                                    key={index}
                                    className="group"
                                >
                                    <div className="border-t-1 border-b-1 border-[#535151] group-hover:border-white bg-transparent mb-0 transition-all delay-100 duration-300 ease-in-out">
                                        <div className="grow py-8">
                                            <div className='flex items-center justify-between px-0 group-hover:px-5 transition-all delay-100 duration-300 ease-in-out'>
                                                <h3 className="mt-3 text-3xl font-meddium text-[#535151] tracking-widest group-hover:text-white transition-all delay-100 duration-300 ease-in-out">
                                                    {item.name}
                                                </h3>
                                                <div className='flex justify-end'>
                                                    <p className="mt-5 line-clamp-3 block-inline text-3xl text-[#535151] group-hover:text-[#04AA6D] transition-all delay-100 duration-300 ease-in-out">{item.icon}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default SocialMediaLinks