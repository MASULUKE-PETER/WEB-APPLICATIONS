import { useEffect, useRef, useState } from 'react'

const NEWS = [
  {
    image: '/news/peter.jpg',
    date: 'September 2026',
    category: 'Leadership',
    title: 'Meet Our Director',
    excerpt: 'Meet the Director of QIBII Construction Services (Pty) Ltd, driving the company’s growth with experience, leadership and a commitment to quality construction.',
  },
  {
    image: '/news/thomass.jpg',
    date: 'August 2026',
    category: 'Leadership',
    title: 'Meet Our Managing Director',
    excerpt: 'Our Managing Director provides strategic leadership and direction, driving QIBII Construction Services towards sustainable growth, quality workmanship and successful project delivery.',
  },
  {
    image: '/news/contractor-of-the-year.jpg',
    date: 'August 2026',
    category: 'Leadership',
    title: 'QIBII named Regional Contractor of the Year',
    excerpt: 'The regional builders association recognized QIBII for on-time delivery rates and client satisfaction scores across commercial and civil projects.',
  },
  {
    image: '/news/community-centre-rebuild.jpg',
    date: 'March 2026',
    category: 'Community',
    title: 'Our crews rebuilt the Eastside community centre roof, at cost',
    excerpt: 'After storm damage closed the community centre for six weeks, QIBII volunteered labor and materials at cost to get doors back open before the season changed.',
  },
]

function News() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || prefersReducedMotion) return undefined

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % NEWS.length)
    }, 6000)

    return () => clearInterval(timerRef.current)
  }, [paused])

  function goTo(i) {
    setIndex((i + NEWS.length) % NEWS.length)
  }

  const current = NEWS[index]

  return (
    <section className="news" id="news">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">Latest updates</div>
            <h2>What's happening at QIBII</h2>
          </div>
          <p>Site milestones, safety records, and news from the crews, as it happens.</p>
        </div>

        <div
          className="news-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <button
            className="news-arrow news-arrow-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous update"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="news-slide" aria-live="polite">
            <div className="news-image">
              <img src={current.image} alt={current.title} loading="lazy" />
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-category">{current.category}</span>
                <span className="news-date">{current.date}</span>
              </div>
              <h3>{current.title}</h3>
              <p>{current.excerpt}</p>
            </div>
          </div>

          <button
            className="news-arrow news-arrow-next"
            onClick={() => goTo(index + 1)}
            aria-label="Next update"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="news-dots" role="tablist" aria-label="Select news update">
          {NEWS.map((item, i) => (
            <button
              key={item.title}
              className={`news-dot ${i === index ? 'active' : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Update ${i + 1}: ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
