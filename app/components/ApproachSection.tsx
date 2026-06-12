import type { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

interface DiffItem {
  title: string
  text: string
}
  
interface DiffColumnProps {
  letter: string
  title: ReactNode
  items: DiffItem[]
  cta?: { href: string; label: string }
  delay?: string
}

function DiffColumn({ letter, title, items, cta, delay }: DiffColumnProps) {
  return (
    <div className={`diff-col reveal${delay ? ` ${delay}` : ''}`}>
      <span className="ci">{letter}.</span>
      <h3>{title}</h3>
      {items.map((item) => (
        <div key={item.title} className="diff-item">
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
      {cta && (
        <div className="col-cta">
          <a href={cta.href} className="link-arr">
            {cta.label} <span className="arr">→</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default function ApproachSection() {
  return (
    <section className="diff section-pad" id="approach" data-screen-label="Approach">
      <div className="wrap">
        <SectionHeader index="§ 02">
          <h2 className="sec-title">
            What sets the<br />Academy apart
          </h2>
        </SectionHeader>

        <div className="diff-grid">
          <DiffColumn
            letter="A"
            title={<>Academic &amp;<br />Research Advancement</>}
            items={[
              {
                title: 'Project Placement',
                text: 'Researchers are carefully matched with problems aligned to their interests, strengths, and talents.',
              },
              {
                title: 'Paper Publishing',
                text: 'We support the full research lifecycle — writing, revision, and submission to appropriate venues.',
              },
            ]}
          />
          <DiffColumn
            letter="B"
            title={<>Support<br />&amp; Resources</>}
            items={[
              {
                title: 'Mentorship',
                text: 'Direct guidance and supervision from researchers, postdocs, graduate students, and domain experts.',
              },
              {
                title: 'Talent Development',
                text: 'Beyond intellectual growth, we build mathematical reasoning, research methods, and technical communication.',
              },
            ]}
            delay="d1"
          />
          <DiffColumn
            letter="C"
            title={<>Recognition<br />&amp; Awards</>}
            items={[
              {
                title: 'Research Awards',
                text: 'Awards from $500 to $10,000 for papers that demonstrate originality, rigor, and technical depth.',
              },
              {
                title: 'Annual Recognition',
                text: 'Yearly summer events give researchers a stage to present and share their work with the community.',
              },
            ]}
            cta={{ href: '#', label: 'Learn more' }}
            delay="d2"
          />
        </div>
      </div>
    </section>
  )
}
