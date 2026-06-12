import Brand from './Brand'

interface FooterLink {
  href: string
  label: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="fcol">
      <h5>{title}</h5>
      {links.map(({ href, label }) => (
        <a key={label} href={href}>{label}</a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer" id="apply" data-screen-label="Footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Brand href="#top" />
            <p className="fdesc">
              An independent academic initiative for exceptional talent and mathematical
              innovation — advancing the foundations of algebra and geometry.
            </p>
            <div style={{ marginTop: 26 }}>
              <a href="#" className="btn btn-gold">
                Apply Now <span className="arr">→</span>
              </a>
            </div>
          </div>

          <FooterColumn
            title="Academy"
            links={[
              { href: '#mission', label: 'Mission' },
              { href: '#approach', label: 'Approach' },
              { href: '#vision', label: 'Vision' },
              { href: '#roles', label: 'Who We Seek' },
            ]}
          />

          <FooterColumn
            title="Connect"
            links={[
              { href: '#', label: 'Apply' },
              { href: '#', label: 'Contact' },
              { href: '#', label: 'Research' },
              { href: '#', label: 'Newsletter' },
            ]}
          />
        </div>

        <div className="footer-bottom">
          <span className="fine">© 2026 Berkeley Research Academy · Independent academic initiative</span>
          <span className="fine">
            <a href="#">Privacy Policy</a>
            &nbsp;·&nbsp;
            <a href="#">Disclaimers</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
