import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HeroContact from './components/HeroContact'
import ScrollTextSectionTwo from '@/components/common/ScrollTextSectionTwo';
import SocialMediaLinks from './components/SocialMediaLinks';

const page = () => {
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
            <Header />
            <HeroContact />
            <ScrollTextSectionTwo data={data} />
            <SocialMediaLinks/>
            <Footer />
        </>
    )
}

export default page