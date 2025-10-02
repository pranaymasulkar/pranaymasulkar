import React, { useEffect, useRef, useState } from "react";
import StarImage from "../common/StarImage";

const TextScroll = ({ titles }) => {
    const [offsetX, setOffsetX] = useState(0);
    const scrollDirection = useRef(1); // 1 = right, -1 = left
    const animationFrame = useRef(null);
    const lastScrollY = useRef(0);
    const isScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            scrollDirection.current = currentScrollY > lastScrollY.current ? 1 : -1;
            lastScrollY.current = currentScrollY;

            isScrolling.current = true;

            // Reset timeout on every scroll
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

            scrollTimeout.current = setTimeout(() => {
                isScrolling.current = false; // stop scrolling → switch to auto-scroll
            }, 150); // 150ms after scroll stops
        };

        const animate = () => {
            setOffsetX((prev) => {
                if (isScrolling.current) {
                    // Faster movement while user scrolls
                    return prev + scrollDirection.current * 6;
                } else {
                    // Slow auto movement
                    return prev + scrollDirection.current * 1;
                }
            });

            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrame.current);
        };
    }, []);

    return (
        <div className="relative h-[50vh] bg-[#161616] flex items-center justify-center">
            <div
                className="absolute whitespace-nowrap text-[#2f2f2f] text-[10rem] font-light capitalize flex items-center"
                style={{
                    transform: `translateX(${offsetX}px)`,
                    willChange: "transform",
                }}
            >

                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px" viewBox="0 0 20 20" fill="currentColor">
                    <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                  c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                  c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                  c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                  c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                  c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                  c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
                </svg>
                <span className="px-4">{titles}</span>

            </div>
        </div>
    );
};

export default TextScroll