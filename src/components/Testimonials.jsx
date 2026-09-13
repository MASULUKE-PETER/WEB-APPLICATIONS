const REVIEWS = [
  {
    quote: 'QIBII caught a drainage issue in the site survey that would have cost us a season of delays. That alone paid for the project management fee.',
    name: 'Marcus Hale',
    role: 'Developer, Hale Property Group',
  },
  {
    quote: 'We got weekly photo updates and a real budget line every Friday. No chasing anyone for status — it just showed up.',
    name: 'Priya Nandan',
    role: 'Facilities Director, Meridian Logistics',
  },
  {
    quote: 'Our townhome build finished nine days ahead of the contracted date, fully inspected. Would sign with them again without a second bid.',
    name: 'Owen Castillo',
    role: 'Homeowner, Ashgrove',
  },
]

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('')
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">Client record</div>
            <h2>What owners say after handover</h2>
          </div>
        </div>
        <div className="testimonial-grid">
          {REVIEWS.map((r) => (
            <div className="testimonial-card" key={r.name}>
              <p className="testimonial-quote">"{r.quote}"</p>
              <div className="testimonial-person">
                <div className="testimonial-avatar">{initials(r.name)}</div>
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
