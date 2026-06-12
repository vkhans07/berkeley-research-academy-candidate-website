import SectionHeader from './SectionHeader'

export default function MissionSection() {
  return (
    <section className="section-pad" id="mission" data-screen-label="Mission">
      <div className="wrap">
        <SectionHeader index="§ 01">
          <h2 className="sec-title">Our Mission</h2>
        </SectionHeader>

        <div className="mission-grid">
          <div className="mission-body reveal">
            <p className="lead" style={{ marginBottom: 28 }}>
              The Academy is dedicated to{' '}
              <strong>advancing the foundations of algebra and geometry</strong> — uncovering
              the categorical structures that govern modern mirror symmetry.
            </p>
            <p>
              Building on the insight that deep geometric phenomena, such as homological mirror
              symmetry, can be presented through purely algebraic and categorical operations, we
              develop new frameworks for modeling, decomposing, and reconstructing these
              mathematical objects.
            </p>
            <p>
              At the heart of our work lies the study of{' '}
              <strong>A∞-categories, Fukaya categories, and perverse schobers</strong>. By
              computing decisive examples and expanding the underlying theory in a coordinated
              way, we transform powerful abstractions into reliable working structures that can
              be shared, verified, and extended.
            </p>
            <p>
              Looking forward, the Academy integrates{' '}
              <strong>formal verification and artificial intelligence</strong> into its research
              program — designing theories compatible with proof assistants and AI-assisted
              exploration, not only to solve long-standing problems but to shape how mathematics
              itself is practiced.
            </p>
            <p>
              We invite exceptional researchers and students to join us: to push the boundaries
              of algebra and geometry, build new bridges between theory and computation, and
              contribute to a lasting infrastructure for fundamental mathematics.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="#" className="link-arr">
                Learn more about our research <span className="arr">→</span>
              </a>
            </div>
          </div>

          <div className="mission-figure reveal d1">
            <div className="ph tall">
              <img src="/evans-hall.jpg" alt="Evans Hall, the home of our mathematics department at Berkeley" />
            </div>
            <div className="figcap">
              <span>Evans Hall: The home of our mathematics department at Berkeley.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
