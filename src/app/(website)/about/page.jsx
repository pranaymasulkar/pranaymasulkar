import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HeroAbout from './components/HeroAbout'
import AboutMeSection from './components/AboutMeSection'
import Experties from './components/Experties'
import TechStack from '@/components/home/TechStack'
import PhylosophySection from './components/PhylosophySection'
import CallToAction from '@/components/common/CallToAction'

const page = () => {
    return (
        <>
            <Header />
            <HeroAbout />
            <AboutMeSection />
            <TechStack />
            <Experties />
            <PhylosophySection />
            <CallToAction />
            <Footer />
        </>
    )
}

export default page