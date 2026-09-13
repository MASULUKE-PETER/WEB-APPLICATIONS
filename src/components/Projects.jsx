const PROJECTS = [
  {
    image: '/projects/qibii_updates.jpg',
    cat: 'Commercial',
    title: '',
    loc: '',
  },
  {
    image: '/projects/qibii_updates.jpg',
    cat: 'Civil',
    title: '',
    loc: '',
  },
  {
    image: '/projects/qibii_updates.jpg',
    cat: 'Residential',
    title: '',
    loc: '',
  },
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
                <img src={proj.image} alt={proj.title} loading="lazy" />
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
