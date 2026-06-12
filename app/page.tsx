import Nav from './components/Nav'
import Hero from './components/Hero'
import MissionSection from './components/MissionSection'
import ApproachSection from './components/ApproachSection'
import VisionSection from './components/VisionSection'
import RolesSection from './components/RolesSection'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <MissionSection />
        <ApproachSection />
        <VisionSection />
        <RolesSection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
