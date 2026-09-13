const REVIEWS = [
  {
    quote: 'Coming Soon!',
    name: 'Peter Masuluke',
    role: 'Director, Qibii Construction Services',
  },
  {
    quote: 'Coming Soon!',
    name: 'Peter Masuluke',
    role: 'Director, Qibii Construction Services',
  },
  {
    quote: 'Coming Soon!',
    name: 'Peter Masuluke',
    role: 'Director, Qibii Construction Services',
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
