const STATS = [
  { num: '0', label: 'Projects completed since 2026' },
  { num: 'ZAR0', label: 'Total construction value delivered' },
  { num: '0', label: 'Projects finished on or ahead of schedule' },
  { num: '0/0', label: 'Average client satisfaction rating' },
]

function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-inner">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
