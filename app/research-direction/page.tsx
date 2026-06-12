import type { Metadata } from 'next'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import ResearchDirectionBody from '../components/ResearchDirectionBody'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Research Direction — Berkeley Research Academy',
}

export default function ResearchDirectionPage() {
  return (
    <>
      <Nav />
      <PageHero eyebrow="Research Direction" title="Research Direction" />
      <main>
        <ResearchDirectionBody />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
