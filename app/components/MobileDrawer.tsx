const drawerLinks = [
  { href: '/#mission', label: 'Mission', num: '01' },
  { href: '/research-direction', label: 'Research Direction', num: '02' },
  { href: '/recognition-and-awards', label: 'Awards', num: '03' },
  { href: '/roles', label: 'Roles', num: '04' },
  { href: '/apply', label: 'Apply Now', num: '→' },
]

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <div className={`drawer${open ? ' open' : ''}`}>
      {drawerLinks.map(({ href, label, num }) => (
        <a key={href} href={href} onClick={onClose}>
          <span>{label}</span>
          <span className="n">{num}</span>
        </a>
      ))}
    </div>
  )
}
