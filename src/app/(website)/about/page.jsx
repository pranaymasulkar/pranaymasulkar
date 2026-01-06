import HeroAbout from './components/HeroAbout'
import AboutMeSection from './components/AboutMeSection'
import Experties from './components/Experties'
import TechStack from '@/components/home/TechStack'
import PhylosophySection from './components/PhylosophySection'
import CallToAction from '@/components/common/CallToAction'
import MainLyaout from '@/layout/MainLyaout'

const page = () => {
    return (
        <MainLyaout>
            <HeroAbout />
            <AboutMeSection />
            <TechStack />
            <Experties />
            <PhylosophySection />
            <CallToAction />
        </MainLyaout>
    )
}

export default page