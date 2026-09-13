const VALUES = [
  {
    title: 'Safety first, on paper and on site',
    desc: 'Our OSHA incident rate has stayed below the national average for eleven consecutive years, backed by weekly toolbox talks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Fixed bids, no change-order surprises',
    desc: 'We scope thoroughly before we sign, so the number you agree to is the number you pay barring approved changes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'One point of contact throughout',
    desc: 'Your project manager stays assigned from bid to walkthrough — no handoffs, no re-explaining the job.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c1-4 4-6 7-6s6 2 7 6" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Values() {
  return (
    <section className="values" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">Why clients rebid with us</div>
            <h2>Built on accountability, not just concrete</h2>
          </div>
        </div>
        <div className="values-grid">
          {VALUES.map((v) => (
            <div className="value-item" key={v.title}>
              <h3>
                {v.icon}
                {v.title}
              </h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
