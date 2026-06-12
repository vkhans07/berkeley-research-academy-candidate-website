import SectionHeader from './SectionHeader'

function Pyramid() {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Research supervision levels pyramid"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Top section */}
      <polygon points="160,16 112,99 208,99" fill="rgba(176,130,46,0.18)" />
      {/* Middle section */}
      <polygon points="112,99 208,99 256,181 64,181" fill="rgba(18,34,49,0.07)" />
      {/* Bottom section */}
      <polygon points="64,181 256,181 304,264 16,264" fill="rgba(18,34,49,0.04)" />
      {/* Outer outline */}
      <polygon points="160,16 16,264 304,264" fill="none" stroke="rgba(18,34,49,0.22)" strokeWidth="1.5" />
      {/* Dividers */}
      <line x1="112" y1="99" x2="208" y2="99" stroke="rgba(18,34,49,0.16)" strokeWidth="1" />
      <line x1="64" y1="181" x2="256" y2="181" stroke="rgba(18,34,49,0.16)" strokeWidth="1" />
      {/* Top text */}
      <text x="160" y="53" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Advanced Graduate (PhD):</text>
      <text x="160" y="67" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Core Research Direction</text>
      {/* Middle text */}
      <text x="160" y="131" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Early Graduate (Master's):</text>
      <text x="160" y="145" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Fields related to Core</text>
      <text x="160" y="159" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Research Direction</text>
      {/* Bottom text */}
      <text x="160" y="207" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Undergraduates:</text>
      <text x="160" y="221" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Most Mathematical fields,</text>
      <text x="160" y="235" textAnchor="middle" fontSize="9.5" fill="rgba(18,34,49,0.72)" fontFamily="IBM Plex Sans, system-ui, sans-serif">Broad Mathematical Exploration</text>
    </svg>
  )
}

export default function ResearchDirectionBody() {
  return (
    <section className="section-pad" id="research-direction" data-screen-label="Research Direction">
      <div className="wrap">
        <SectionHeader index="§ 01">
          <h2 className="sec-title">Core Research Direction</h2>
        </SectionHeader>

        <div className="rd-intro reveal">
          <p>
            The <em>Berkeley Research Academy for Mathematical Innovation</em> supports research
            across various academic levels, with supervision structured to match both student
            readiness and research depth.
          </p>
        </div>

        <h3 className="rd-body-head reveal">Core Research Direction</h3>
        <div className="rd-intro reveal" style={{ marginBottom: 32 }}>
          <p>
            At the center of the academy's mission is research in pure mathematics, with a strong
            emphasis on areas such as{' '}
            <strong>homological mirror symmetry, algebra-geometry interactions, and categorical structures</strong>.
          </p>
          <p>
            Alongside this core focus, the academy actively explores applied and computational
            approaches to mathematics, including{' '}
            <strong>Machine Learning and formal verification methods</strong> (such as Lean
            programming).
          </p>
        </div>

        <div className="rd-grid">
          <div className="rd-pyramid reveal">
            <Pyramid />
            <div className="figcap" style={{ marginTop: 16 }}>
              <b>Fig.01</b>
              <span>Supervision levels relative to core research direction.</span>
            </div>
          </div>

          <div className="rd-levels reveal d1">
            <div className="rd-level">
              <h4>Advanced Graduate Level (PhD)</h4>
              <p>
                At the PhD level, supervision is highly focused and closely aligned with our core
                research direction.
              </p>
              <ul>
                <li>Homological mirror symmetry, gentle algebra, perverse schobers, categorical methods.</li>
              </ul>
            </div>

            <div className="rd-level">
              <h4>Early Graduate Level (Master's)</h4>
              <p>
                We supervise most early graduate students, particularly in fields closer to the
                academy's core research direction.
              </p>
              <ul>
                <li>Algebra, geometry, and related mathematical structures.</li>
              </ul>
            </div>

            <div className="rd-level">
              <h4>Undergraduate Level (&amp; Advanced HS)</h4>
              <p>
                We supervise undergraduates across most areas of mathematics and provided projects
                are appropriately scoped to the student's background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
