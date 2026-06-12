interface BrandProps {
  href?: string
}

export default function Brand({ href = '#top' }: BrandProps) {
  return (
    <a href={href} className="brand">
      <span className="mark">B</span>
      <span className="name">
        Berkeley Research Academy
        <small>Mathematical Innovation</small>
      </span>
    </a>
  )
}
