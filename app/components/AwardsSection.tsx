import SectionHeader from './SectionHeader'

const classifications = [
  {
    title: 'Frontier Research Award',
    text: 'Recognizes research that advances or explores problems at the boundary of current understanding, demonstrating originality and forward-looking insight.',
  },
  {
    title: 'Junior Research Award (High School Students)',
    text: 'Recognizes exceptional original research by pre-college students that demonstrates rigor, independence, and depth beyond standard coursework.',
  },
  {
    title: 'Technical Depth & Rigor Recognition',
    text: "Recognizes research that demonstrates exceptional technical mastery, precision, and mathematical rigor relative to the student's level.",
  },
  {
    title: 'Originality Recognition',
    text: 'Recognizes work that introduces genuine new ideas, perspectives, or approaches.',
  },
  {
    title: 'Elegance & Clarity Recognition',
    text: 'Recognizes research distinguished by clear exposition, conceptual simplicity, and thoughtful organization of complex ideas.',
  },
  {
    title: 'Interdisciplinary Connection Recognition',
    text: 'Recognizes work that meaningfully connects mathematical theory with other areas, such as computation, applied methods, or adjacent scientific fields.',
  },
]

export default function AwardsSection() {
  return (
    <section className="diff section-pad" id="awards" data-screen-label="Awards">
      <div className="wrap">
        <SectionHeader index="§ 02">
          <h2 className="sec-title">Awards</h2>
        </SectionHeader>

        <div style={{ maxWidth: '72ch', marginBottom: 52 }}>
          <h3 className="reveal" style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 18, margin: '0 0 12px' }}>
            How awards work
          </h3>
          <p className="reveal" style={{ margin: '0 0 36px', color: 'var(--muted)', fontSize: 16 }}>
            Research awards are awarded by the Berkeley Research Academy to students who produce
            exceptional work of originality, rigor, and contribution. Awards typically range from{' '}
            <strong style={{ color: 'var(--ink)' }}>$500 to $10,000</strong>, depending on the
            scope and impact of the work.
          </p>

          <h3 className="reveal" style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 18, margin: '0 0 12px' }}>
            Eligibility
          </h3>
          <p className="reveal" style={{ margin: '0 0 8px', color: 'var(--muted)', fontSize: 16 }}>
            Students become eligible for awards by:
          </p>
          <ul className="elig-list reveal">
            <li>Completing a research project <strong>under academy mentorship</strong></li>
            <li>Submitting a paper for internal review or external dissemination</li>
            <li>Demonstrating independent reasoning, technical depth, and clarity of exposition.</li>
          </ul>
        </div>

        <h3 className="reveal" style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 18, margin: '0 0 8px' }}>
          Award Classifications
        </h3>
        <p className="reveal" style={{ margin: '0 0 28px', color: 'var(--muted)', fontSize: 16 }}>
          A project may receive <strong style={{ color: 'var(--ink)' }}>one</strong> or more classifications.
        </p>

        <div className="award-grid">
          {classifications.map((c, i) => (
            <div key={c.title} className={`acard reveal${i > 0 ? ` d${Math.min(i, 3) as 1 | 2 | 3}` : ''}`}>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64 }}>
          <h3 className="reveal" style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 18, margin: '0 0 12px' }}>
            Use of Award Funds
          </h3>
          <p className="reveal" style={{ margin: '0 0 8px', color: 'var(--muted)', fontSize: 16 }}>
            Award funds are intended to support continued research and academic development, including:
          </p>
          <ul className="funds-list reveal">
            <li>Conference submissions or presentation costs</li>
            <li>Research materials or software</li>
            <li>Extension or continuation of the awarded project</li>
          </ul>
          <p className="reveal" style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)', marginTop: 20 }}>
            (Funds are allocated to support research progress, not personal compensation.)
          </p>
        </div>
      </div>
    </section>
  )
}
