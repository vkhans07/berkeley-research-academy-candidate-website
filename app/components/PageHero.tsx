interface PageHeroProps {
  eyebrow: string
  title: string
}

export default function PageHero({ eyebrow, title }: PageHeroProps) {
  return (
    <header className="page-hero" id="top">
      <div className="hero-grid" />
      <div className="hero-overlay" />
      <div className="wrap">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal d1">{title}</h1>
      </div>
    </header>
  )
}
