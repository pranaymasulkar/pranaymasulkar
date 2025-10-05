import React from 'react'
import AboutMeSection from '../components/about/AboutMeSection'
import TeckStack from '../components/about/TeckStack'
import Experties from '../components/about/Experties'
import PhylosophySection from '../components/about/PhylosophySection'
import CallToAction from '../components/common/CallToAction'
import HeroAbout from '../components/about/HeroAbout'

const About = () => {
    return (
        <>
            <HeroAbout />
            <AboutMeSection />
            <TeckStack />
            <Experties />
            <PhylosophySection />
            <CallToAction />
        </>
    )
}

export default About