import Link from 'next/link'

const ButtonOutline = ({ title, href }) => {
    return (
        <Link
            href={href}
            className="rounded-full tracking-widest px-6 py-3 text-xl text-gray-300 hover:text-white ring-2 ring-gray-300 hover:ring-white"
        >
            {title}
        </Link>
    )
}

export default ButtonOutline