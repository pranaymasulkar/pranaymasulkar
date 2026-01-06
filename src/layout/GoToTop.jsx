"use client"
import React, { useEffect, useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";

export default function GoToTop({
    threshold = 300,
    bottom = "2rem",
    right = "2rem",
}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // guard for SSR
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setVisible(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    const scrollToTop = () => {
        // Smooth scroll if supported
        if ("scrollBehavior" in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        // Fallback smooth scroll using requestAnimationFrame
        const start = window.scrollY;
        const duration = 400;
        let startTime = null;

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function animate(time) {
            if (!startTime) startTime = time;
            const timeElapsed = time - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const eased = easeInOutQuad(progress);
            window.scrollTo(0, Math.round(start * (1 - eased)));

            if (timeElapsed < duration) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Go to top"
            className="h-[50px] w-[50px] text-2xl fixed right-8 bottom-9 flex justify-center items-center space-y-1 cursor-pointer border-4 border-[#535151] hover:border-white bg-[#161616] hover:bg-[#04AA6D] hover:text-[#161616] text-white font-black rounded-full"


        >
            <TiArrowUpThick />
        </button>
    );
}