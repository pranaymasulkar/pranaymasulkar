"use client"
import React, { useEffect, useState } from "react";

const ScrollProgressCircle = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Circle properties
    const radius = 27;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollProgress / 100) * circumference;

    return (
        <div
            // style={{
            //     position: "fixed",
            //     top: "20px",
            //     right: "34px",
            //     width: "62px",
            //     height: "62px",
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     zIndex: -1,
            // }}
            className="fixed md:top-[20px] right-[20px] md:right-[34px] w-[62px] h-[62px] flex justify-center items-center -z-1"
        >
            <svg width="62" height="62">
                {/* Background Circle */}
                <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke="#ddd"
                    strokeWidth="6"
                    fill="none"
                />
                {/* Progress Circle */}
                <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke="#04AA6D"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.25s ease" }}
                />
                {/* Text percentage */}
                {/* <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="16"
                    fontWeight="bold"
                >
                    {Math.round(scrollProgress)}%
                </text> */}
            </svg>
        </div>
    );
};

export default ScrollProgressCircle;