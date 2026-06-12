export default function VisionSection() {
  return (
    <section className="vision section-pad" id="vision" data-screen-label="Vision">
      <div className="vision-eq" aria-hidden="true">∫∂</div>
      <div className="wrap">
        <div className="vision-grid">
          <div className="reveal figorder">
            <div className="ph wide">
              <span className="ph-tag">[ research / mathematics imagery ]</span>
            </div>
            <div className="figcap">
              <b>Fig.02</b>
              <span>Formal proof, computed and verified.</span>
            </div>
          </div>

          <div className="reveal d1">
            <span className="eyebrow">§ 03 — Our Vision</span>
            <h2>
              A stable, long-term platform for fundamental mathematics — at scale.
            </h2>
            <div className="v-body" style={{ marginTop: 26 }}>
              <p>
                The Academy aims to become a durable platform for doing fundamental mathematics.
                Using machine learning, formal verification, and computational tools, we work to
                reduce structural bottlenecks in research and resolve long-standing problems.
              </p>
              <p>
                Our goal is a framework that is cumulative, verifiable, and designed to persist
                beyond individual projects, positions, or institutions.
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <a href="#apply" className="btn btn-ghost-light">
                Join the effort <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
