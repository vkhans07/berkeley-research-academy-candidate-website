import type { Metadata } from 'next'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import RolesPageContent from '../components/RolesPageContent'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Roles — Berkeley Research Academy',
}

export default function RolesPage() {
  return (
    <>
      <Nav />
      <PageHero eyebrow="Roles" title="Roles" />
      <main>
        <RolesPageContent />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
