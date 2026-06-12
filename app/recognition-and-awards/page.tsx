import type { Metadata } from 'next'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import SymposiumSection from '../components/SymposiumSection'
import AwardsSection from '../components/AwardsSection'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Recognition and Awards — Berkeley Research Academy',
}

export default function RecognitionAndAwardsPage() {
  return (
    <>
      <Nav />
      <PageHero eyebrow="Recognition & Awards" title="Recognition and Awards" />
      <main>
        <SymposiumSection />
        <AwardsSection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
