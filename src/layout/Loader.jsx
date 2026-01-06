import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Loader() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 100, { duration: 7 })
        return () => controls.stop()
    }, [])

    return (
        <section className='fixed w-full h-full bg-[#161616] z-50 flex justify-center items-center transition delay-150 duration-300 ease-in-out'>
            <h1 className='text-9xl flex justify-end items-end text-white font-bold tracking-widest text-pretty capitalize transition delay-150 duration-300 ease-in-out'>
                <motion.pre >{rounded}</motion.pre>
                <span>%</span>
            </h1>
        </section>
    )

}




