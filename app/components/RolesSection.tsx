import type { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

interface TargetCardProps {
  num: string
  title: ReactNode
  text: string
  keywords: string
  delay?: string
}

function TargetCard({ num, title, text, keywords, delay }: TargetCardProps) {
  return (
    <div className={`tcard reveal${delay ? ` ${delay}` : ''}`}>
      <span className="tnum">{num}</span>
      <h3>{title}</h3>
      <div className="trule" />
      <p>{text}</p>
      <div className="tkey">{keywords}</div>
    </div>
  )
}

export default function RolesSection() {
  return (
    <section className="section-pad" id="roles" data-screen-label="Roles">
      <div className="wrap">
        <SectionHeader index="§ 04">
          <div>
            <h2 className="sec-title">Who We Seek</h2>
            <p className="lead" style={{ marginTop: 14, maxWidth: '52ch' }}>
              We actively seek individuals with diverse talents and skills across several domains.
            </p>
          </div>
        </SectionHeader>

        <div className="target-grid">
          <TargetCard
            num="01"
            title="Mathematics"
            text="Engage directly with open research problems in pure and applied mathematics. Contribute theoretical results, computational work, or formal proofs, and develop research toward technical reports or publications."
            keywords="Theory · Proofs · Publication"
          />
          <TargetCard
            num="02"
            title={<>Computer Science<br />&amp; Technology</>}
            text="Support mathematical research through computation, machine-learning tools, and formal verification (e.g. Lean). Work at the interface between theory and implementation to enable new research directions."
            keywords="Lean · ML · Computation"
            delay="d1"
          />
          <TargetCard
            num="03"
            title="Business &amp; Law"
            text="Help build the institutional, legal, and strategic foundations of the Academy. Contribute to funding strategy, partnerships, and long-term sustainability alongside active researchers."
            keywords="Strategy · Partnerships · Funding"
            delay="d2"
          />
        </div>

        <div className="target-cta">
          <a href="#apply" className="btn btn-ink">
            Discover what role suits you <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
