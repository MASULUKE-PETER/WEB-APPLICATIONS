function BuildingSVG({ variant }) {
  const palettes = {
    1: { bg: '#1c1c1c', win: '#d81e2c' },
    2: { bg: '#000000', win: '#f3f1ee' },
    3: { bg: '#5c5c5c', win: '#d81e2c' },
  }
  const p = palettes[variant] || palettes[1]

  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#e5e2dc" />
      <rect x="0" y="230" width="400" height="70" fill={p.bg} opacity="0.15" />
      {variant === 1 && (
        <>
          <rect x="120" y="60" width="90" height="220" fill={p.bg} />
          <rect x="220" y="110" width="70" height="170" fill={p.bg} opacity="0.75" />
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 2 }).map((_, c) => (
              <rect key={`${r}-${c}`} x={132 + c * 34} y={78 + r * 30} width="18" height="18" fill={p.win} opacity={0.8} />
            ))
          )}
        </>
      )}
      {variant === 2 && (
        <>
          <rect x="90" y="150" width="220" height="130" fill={p.bg} />
          <polygon points="90,150 200,90 310,150" fill={p.bg} />
          <rect x="185" y="200" width="30" height="50" fill={p.win} opacity="0.9" />
          <rect x="120" y="180" width="24" height="24" fill={p.win} opacity="0.6" />
          <rect x="256" y="180" width="24" height="24" fill={p.win} opacity="0.6" />
        </>
      )}
      {variant === 3 && (
        <>
          <rect x="70" y="120" width="60" height="160" fill={p.bg} />
          <rect x="150" y="70" width="60" height="210" fill={p.bg} />
          <rect x="230" y="140" width="60" height="140" fill={p.bg} />
          <rect x="310" y="100" width="60" height="180" fill={p.bg} />
          {[70, 150, 230, 310].map((x, i) => (
            <rect key={i} x={x + 18} y={i === 1 ? 100 : i === 3 ? 130 : x === 70 ? 150 : 170} width="24" height="24" fill={p.win} opacity="0.85" />
          ))}
        </>
      )}
    </svg>
  )
}

const PROJECTS = [
  { variant: 1, cat: 'Commercial', title: 'Polokwane Hospital', loc: 'Polokwane— 88,000 sq ft' },
  { variant: 2, cat: 'Civil', title: 'Midrand Complex', loc: 'Johannesburg — municipal contract' },
  { variant: 3, cat: 'Residential', title: 'Kikuyu Apartments', loc: 'Midrand — 24 units' },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">Recent work</div>
            <h2>Projects on the ground now</h2>
          </div>
          <p>A sample of what's currently under contract or recently closed out.</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((proj) => (
            <div className="project-card" key={proj.title}>
              <div className="project-visual">
                <BuildingSVG variant={proj.variant} />
              </div>
              <div className="project-body">
                <div className="project-cat">{proj.cat}</div>
                <h3>{proj.title}</h3>
                <div className="project-loc">{proj.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
