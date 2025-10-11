import withScrollTextSection from "./withScrollTextSection";

const ScrollTextSectionOne = withScrollTextSection({
    parentClassName: "h-[20vh] md:h-[30vh] bg-[#161616]",
    className: "text-6xl md:text-[6rem] text-white tracking-wide capitalize font-bold",
    imageSize: "large",
});

export default ScrollTextSectionOne;