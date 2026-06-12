import type { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

interface RoleItem {
  title: string
  desc: string
  bullets: string[]
  bestFor: string
}

interface RoleSectionProps {
  index: string
  heading: string
  intro: string
  roles: RoleItem[]
  figureOnLeft?: boolean
  figureLabel: string
  figCaption: string
  figNum: string
  delay?: string
}

function RoleSection({ index, heading, intro, roles, figureOnLeft, figureLabel, figCaption, figNum, delay }: RoleSectionProps) {
  const figure = (
    <div className={`role-figure reveal${delay ? ` ${delay}` : ''}`}>
      <div className="ph wide">
        <span className="ph-tag">{figureLabel}</span>
      </div>
      <div className="figcap">
        <b>{figNum}</b>
        <span>{figCaption}</span>
      </div>
    </div>
  )

  const content = (
    <div className="reveal">
      {roles.map((role) => (
        <div key={role.title} className="role-group">
          <p className="role-group-title">{role.title}</p>
          <p className="role-group-desc">{role.desc}</p>
          <ul className="role-bullets">
            {role.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="role-best">
            <strong>Best suited for:</strong> {role.bestFor}
          </p>
        </div>
      ))}
    </div>
  )

  return (
    <section className="role-section section-pad" data-screen-label={heading}>
      <div className="wrap">
        <SectionHeader index={index}>
          <div>
            <h2 className="sec-title">{heading}</h2>
            <p className="role-section-intro">{intro}</p>
          </div>
        </SectionHeader>

        <div className="role-section-grid">
          {figureOnLeft ? figure : content}
          {figureOnLeft ? content : figure}
        </div>
      </div>
    </section>
  )
}

export default function RolesPageContent() {
  return (
    <>
      <RoleSection
        index="§ 01"
        heading="Mathematical Researcher"
        intro="These roles are for individuals contributing to research."
        figureOnLeft={false}
        figureLabel="[ mathematics / research ]"
        figCaption="Research in pure and applied mathematics."
        figNum="Fig.01"
        delay="d1"
        roles={[
          {
            title: 'Researcher (Pure Mathematics)',
            desc: 'Work on problems in areas such as algebra, geometry, and category theory.',
            bullets: [
              'Develop original theoretical results',
              'Read and synthesize advanced research literature',
              'Produce technical reports or publishable papers',
            ],
            bestFor: 'Strong abstract thinkers with deep mathematical interest',
          },
          {
            title: 'Computational Researcher',
            desc: 'Support mathematical research using computational methods.',
            bullets: [
              'Use tools like machine learning and reinforcement learning to solve conjectures in mathematics.',
              'Study mathematical structures using algorithmic methods',
              'Simulate algebraic structures through coding',
            ],
            bestFor: 'Students with background and experience in programming.',
          },
        ]}
      />

      <RoleSection
        index="§ 02"
        heading="Recruitment & Coordination"
        intro="These roles focus on people, structure, and visibility."
        figureOnLeft={true}
        figureLabel="[ coordination / operations ]"
        figCaption="Operational backbone of the academy."
        figNum="Fig.02"
        roles={[
          {
            title: 'Research Coordinator',
            desc: 'Ensure smooth collaboration across projects and contributors.',
            bullets: [
              'Track ongoing projects and timelines',
              'Coordinate meetings and communication',
              'Support mentors and researchers operationally',
            ],
            bestFor: 'organized individuals with strong follow-through',
          },
          {
            title: 'Outreach Manager',
            desc: "Expand the academy's external network.",
            bullets: [
              'Reach out to faculty, researchers, and institutions',
              'Identify collaboration opportunities',
              'Maintain long-term academic relationships',
            ],
            bestFor: 'confident communicators who excel at networking',
          },
          {
            title: 'Communications & Publications Manager',
            desc: 'Translate research activity into public-facing material.',
            bullets: [
              'Write summaries, articles, or announcements',
              'Maintain the website',
              'Ensure clarity and consistency in messaging',
            ],
            bestFor: 'Strong writers',
          },
        ]}
      />

      <RoleSection
        index="§ 03"
        heading="Strategizing and Negotiation"
        intro="These roles guide long-term direction, funding, and institutional growth."
        figureOnLeft={false}
        figureLabel="[ strategy / planning ]"
        figCaption="Institutional strategy and external partnerships."
        figNum="Fig.03"
        delay="d1"
        roles={[
          {
            title: 'Funding & Grants Lead',
            desc: 'Focus on sustainability and growth.',
            bullets: [
              'Identify grant opportunities (e.g. ERC-style funding)',
              'Draft proposals and supporting materials',
              'Coordinate with researchers on funding narratives',
            ],
            bestFor: 'strategic thinkers comfortable with long-form planning',
          },
          {
            title: 'Partnerships & Negotiation Lead',
            desc: 'Manage high-level external relationships.',
            bullets: [
              'Negotiate partnerships and support agreements',
              'Coordinate with institutions and stakeholders',
              'Turn abstract goals into concrete agreements',
            ],
            bestFor: 'individuals with confidence, judgment, and leadership ability',
          },
        ]}
      />
    </>
  )
}
