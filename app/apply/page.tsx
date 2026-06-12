import type { Metadata } from 'next'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeader from '../components/SectionHeader'

export const metadata: Metadata = {
  title: 'Apply Now — Berkeley Research Academy',
}

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <PageHero eyebrow="Apply Now" title="Interested in Joining?" />
      <main>
        <section className="section-pad" id="application" data-screen-label="Application">
          <div className="wrap">
            <SectionHeader index="§ 01">
              <h2 className="sec-title">Application Form</h2>
            </SectionHeader>

            <div className="apply-grid">
              <div className="apply-meta reveal">
                <p>
                  After you fill out the application form, we will reach out to you within 3–5 days
                  to schedule a meeting to get to know you better and understand your talents and
                  interests.
                </p>

                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 16, margin: '0 0 12px', color: 'var(--ink)' }}>
                  Eligibility
                </h3>
                <ul className="apply-elig">
                  <li>18 years old or older</li>
                </ul>

                <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>
                  If form doesn't work, use this link:{' '}
                  <a
                    href="https://forms.gle/KHE91AkwgMWDcts18"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--gold)', textDecoration: 'underline' }}
                  >
                    https://forms.gle/KHE91AkwgMWDcts18
                  </a>
                </p>

                <div style={{ marginTop: 32 }}>
                  <a
                    href="https://forms.gle/KHE91AkwgMWDcts18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Open Application Form <span className="arr">→</span>
                  </a>
                </div>
              </div>

              <div className="apply-form-wrap reveal d1">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfKHE91AkwgMWDcts18/viewform?embedded=true"
                  title="Berkeley Research Academy Application Form"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
