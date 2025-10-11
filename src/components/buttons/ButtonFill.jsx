import Link from 'next/link'

const ButtonFill = ({ title, href }) => {
    return (
        <Link href={href} className="block md:inline-block rounded-full tracking-widest capitalize font-bold px-6 py-3 text-xl md:text-xl/6 text-[#161616] hover:bg-white ring-1 ring-gray-300 bg-gray-300 hover:ring-white md:me-3">
            {title}
        </Link>
    )
}

export default ButtonFill