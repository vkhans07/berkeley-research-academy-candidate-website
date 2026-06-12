export default function Hero() {
  return (
    <header className="hero" id="top" data-screen-label="Hero">
      <div className="hero-photo">
        <span className="ph-label">[ hero photograph — research library ]</span>
      </div>
      <div className="hero-grid" />
      <div className="hero-overlay" />

      <div className="wrap">
        <span className="eyebrow reveal">Independent Academic Initiative · Est. 2026</span>
        <h1 className="reveal d1">
          Berkeley<br />Research <em>Academy</em>
        </h1>
        <p className="sub reveal d2">
          For exceptional talent and mathematical innovation.
        </p>
        <div className="hero-actions reveal d2">
          <a href="#apply" className="btn btn-gold">Apply Now <span className="arr">→</span></a>
          <a href="#mission" className="btn btn-ghost-light">Explore the Academy</a>
        </div>

        <div className="hero-meta reveal d3">
          <div className="item">
            <div className="k">Algebra &amp; Geometry</div>
            <div className="l">Core research focus</div>
          </div>
          <div className="item">
            <div className="k">$500–$10K</div>
            <div className="l">Research awards per paper</div>
          </div>
          <div className="item">
            <div className="k">Lean · AI</div>
            <div className="l">Formal verification toolkit</div>
          </div>
        </div>
      </div>
    </header>
  )
}
