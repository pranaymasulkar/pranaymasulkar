
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import AboutSection from '@/components/home/AboutSection'
import ScrollTextSectionTwo from '@/components/common/ScrollTextSectionTwo'
import Hero from '@/components/home/Hero'
import WorkSection from '@/components/home/WorkSection'
import TagLine from '@/components/home/TagLine'
import Experience from '@/components/home/Experience'
import TechStack from '@/components/home/TechStack'
import CallToAction from '@/components/common/CallToAction'

const page = () => {
  const data = [
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
  ];
  const stack = [
    "React Js",
    "Next Js",
    "JavaScript",
    "Redux",
    "HTML",
    "CSS",
    "SASS",
    "TypeScript",
    "Tailwind",
    "Bootstrap",
    "React-Bootstrap",
    "WordPress",
    "Node Js",
    "Mongo DB",
    "Express Js",
    "Git",
    "Github",
    "Figma",
  ];
  return (
    <>
      <Header />
      <Hero />
      <ScrollTextSectionTwo data={data} />
      <AboutSection />
      <WorkSection />
      <TagLine />
      <Experience />
      <ScrollTextSectionTwo data={stack} />
      <TechStack />
      <CallToAction/>
      <Footer />
    </>
  )
}

export default page