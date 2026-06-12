import SectionHeader from './SectionHeader'

export default function SymposiumSection() {
  return (
    <section className="section-pad" id="symposium" data-screen-label="Symposium">
      <div className="wrap">
        <SectionHeader index="§ 01">
          <h2 className="sec-title">Research Symposium</h2>
        </SectionHeader>

        <div className="symp-grid">
          <div className="symp-body reveal">
            <p className="lead" style={{ marginBottom: 28 }}>
              <strong>Event Date:</strong> Around August 2026 (Exact TBD)<br />
              <strong>Location:</strong> TBD
            </p>

            <p className="symp-sub-head">Overview</p>
            <p>
              Each summer, the Berkeley Research Academy for Mathematical Innovation hosts a
              Research Symposium where all researchers can formally present their work developed
              within the academy.
            </p>

            <p className="symp-sub-head">Purpose of Event</p>
            <p style={{ marginBottom: 10 }}>
              The <em>Research Presentation Event</em> has three goals:
            </p>
            <ol className="symp-goals">
              <li>
                <strong>Student Recognition:</strong> Highlight exceptional research contributions
                through formal presentations.
              </li>
              <li>
                <strong>Research Continuity &amp; Faculty Engagement:</strong> Create opportunities
                for students to continue developing their projects with new researchers. Faculty gain
                early access to motivated research talent and opportunities to mentor or extend
                promising work.
              </li>
              <li>
                <strong>Community Building:</strong> Strengthen connections between students,
                mentors, and the broader academic network while providing students with experience
                presenting research in a professional academic setting.
              </li>
            </ol>

            <p className="symp-sub-head">Who can Participate</p>
            <ul className="symp-who">
              <li>Academy students</li>
              <li>Academy mentors &amp; supervisors</li>
              <li>Interested Researchers</li>
            </ul>
          </div>

          <div className="symp-figure reveal d1">
            <div className="ph tall">
              <span className="ph-tag">[ symposium / research presentation ]</span>
            </div>
            <div className="figcap">
              <b>Fig.01</b>
              <span>Annual research symposium, Berkeley campus.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
