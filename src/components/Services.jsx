const SERVICES = [
  {
    mark: 'A',
    title: 'Commercial Build',
    desc: 'Retail centers, offices, and warehouses built to spec, with in-house project management from groundbreak to occupancy.',
  },
  {
    mark: 'B',
    title: 'Residential',
    desc: 'Custom homes and multi-unit residential, coordinated with architects and designers to hold both budget and detail.',
  },
  {
    mark: 'C',
    title: 'Renovation & Fit-Out',
    desc: 'Structural upgrades, additions, and interior fit-outs for occupied buildings, sequenced to limit disruption.',
  },
  {
    mark: 'D',
    title: 'Civil & Infrastructure',
    desc: 'Site work, grading, utilities, and roadwork for municipal and private developments, permitted and inspected end to end.',
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">What we build</div>
            <h2>Four disciplines, one crew of specialists</h2>
          </div>
          <p>
            Every project gets a dedicated superintendent and the same
            estimating and safety standards, regardless of scale.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-mark">{s.mark}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
