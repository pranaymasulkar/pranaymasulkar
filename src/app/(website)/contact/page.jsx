import HeroContact from './components/HeroContact'
import ScrollTextSectionTwo from '@/components/common/ScrollTextSectionTwo';
import SocialMediaLinks from './components/SocialMediaLinks';
import MainLyaout from '@/layout/MainLyaout';

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
        <MainLyaout>
            <HeroContact />
            <ScrollTextSectionTwo data={data} />
            <SocialMediaLinks />
        </MainLyaout>
    )
}

export default page