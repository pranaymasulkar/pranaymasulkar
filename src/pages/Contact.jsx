import ScrollTextSection from "../components/common/ScrollTextSection";
import SocialMediaLinks from "../components/contact/SocialMediaLinks";
import AboutContact from "../components/contact/AboutContact";

const Contact = () => {
    const data = [
        "Conect",
        "Conect",
        "Conect",
        "Conect",
        "Conect",
        "Conect",
        "Conect",
        "Conect",
        "Conect",
        "Conect",
    ];
    return (
        <>
            <AboutContact />
            <ScrollTextSection
                data={data}
                parentClassName="h-[30vh] bg-[#161616]"
                className="text-9xl md:text-[10rem] text-[#535151]"
                imageSize={`${"md" === true ? "150" : "80"}`}
            />
            <SocialMediaLinks />
        </>
    );
};

export default Contact;
