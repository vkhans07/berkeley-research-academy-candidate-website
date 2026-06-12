'use client'

import { useState, useEffect } from 'react'
import Brand from './Brand'
import MobileDrawer from './MobileDrawer'

const navLinks = [
  { href: '/#mission', label: 'Mission' },
  { href: '/research-direction', label: 'Research' },
  { href: '/recognition-and-awards', label: 'Awards' },
  { href: '/roles', label: 'Roles' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open)
    document.body.style.overflow = open ? 'hidden' : ''
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Brand />
          <div className="nav-links">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
          <div className="nav-right">
            <a href="/apply" className="btn btn-gold">
              Apply Now <span className="arr">→</span>
            </a>
            <button
              className="menu-btn"
              aria-label="Open menu"
              onClick={() => toggleDrawer(!drawerOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <MobileDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  )
}
