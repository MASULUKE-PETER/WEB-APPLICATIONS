function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div>
          <div className="hero-eyebrow">QIBII CONSTRUCTION SERVICES (PTY) LTD</div>
          <h1>
            Building beyond <em>foundation</em>, as one.
          </h1>
          <p className="hero-sub">
            QIBII plans, permits, and builds commercial, residential, and
            civil projects from foundation to final walkthrough — one crew,
            one standard, on budget and on schedule.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a project</a>
            <a href="#projects" className="btn btn-outline">See our work</a>
          </div>
          <div className="hero-license">
            <div><strong>0</strong> projects delivered</div>
            <div><strong>0</strong> OSHA incident rate</div>
            <div><strong>0.7</strong> years operating</div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="180" width="400" height="300" stroke="#8b93a0" strokeWidth="1.5" />
            <line x1="40" y1="230" x2="440" y2="230" stroke="#8b93a0" strokeWidth="1" />
            <line x1="40" y1="290" x2="440" y2="290" stroke="#8b93a0" strokeWidth="1" />
            <line x1="40" y1="350" x2="440" y2="350" stroke="#8b93a0" strokeWidth="1" />
            <line x1="40" y1="410" x2="440" y2="410" stroke="#8b93a0" strokeWidth="1" />
            <line x1="120" y1="180" x2="120" y2="480" stroke="#8b93a0" strokeWidth="1" />
            <line x1="200" y1="180" x2="200" y2="480" stroke="#8b93a0" strokeWidth="1" />
            <line x1="280" y1="180" x2="280" y2="480" stroke="#8b93a0" strokeWidth="1" />
            <line x1="360" y1="180" x2="360" y2="480" stroke="#8b93a0" strokeWidth="1" />

            {/* crane mast */}
            <line x1="120" y1="480" x2="120" y2="40" stroke="#d81e2c" strokeWidth="4" />
            <line x1="120" y1="40" x2="360" y2="40" stroke="#d81e2c" strokeWidth="4" />
            <line x1="120" y1="40" x2="60" y2="70" stroke="#d81e2c" strokeWidth="4" />
            <line x1="120" y1="90" x2="180" y2="40" stroke="#d81e2c" strokeWidth="2.5" />
            <line x1="120" y1="150" x2="240" y2="40" stroke="#d81e2c" strokeWidth="2.5" />
            <line x1="290" y1="40" x2="290" y2="110" stroke="#d81e2c" strokeWidth="3" />
            <circle cx="290" cy="118" r="6" fill="#d81e2c" />

            {/* building block */}
            <rect x="180" y="260" width="180" height="220" fill="#3a3a3a" opacity="0.9" />
            <rect x="200" y="285" width="26" height="34" fill="#d81e2c" opacity="0.9" />
            <rect x="240" y="285" width="26" height="34" fill="#f3f1ee" opacity="0.75" />
            <rect x="280" y="285" width="26" height="34" fill="#f3f1ee" opacity="0.75" />
            <rect x="320" y="285" width="26" height="34" fill="#d81e2c" opacity="0.9" />
            <rect x="200" y="340" width="26" height="34" fill="#f3f1ee" opacity="0.75" />
            <rect x="240" y="340" width="26" height="34" fill="#d81e2c" opacity="0.9" />
            <rect x="280" y="340" width="26" height="34" fill="#f3f1ee" opacity="0.75" />
            <rect x="320" y="340" width="26" height="34" fill="#f3f1ee" opacity="0.75" />
            <rect x="200" y="395" width="26" height="34" fill="#f3f1ee" opacity="0.75" />
            <rect x="240" y="395" width="26" height="34" fill="#f3f1ee" opacity="0.75" />
            <rect x="280" y="395" width="26" height="34" fill="#d81e2c" opacity="0.9" />
            <rect x="320" y="395" width="26" height="34" fill="#f3f1ee" opacity="0.75" />

            <line x1="40" y1="480" x2="440" y2="480" stroke="#d81e2c" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
