const STEPS = [
  {
    num: '01',
    title: 'Consultation & site review',
    desc: 'We walk the site, review your goals and budget, and scope what is buildable within your timeline.',
  },
  {
    num: '02',
    title: 'Design & permitting',
    desc: 'Our estimators and your architect finalize drawings while we handle permitting and inspections scheduling.',
  },
  {
    num: '03',
    title: 'Construction',
    desc: 'A dedicated superintendent runs the site daily, with weekly progress reports sent directly to you.',
  },
  {
    num: '04',
    title: 'Walkthrough & handover',
    desc: 'Punch list, final inspections, and a full documentation package before you take occupancy.',
  },
]

function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">How a project runs</div>
            <h2>From first walk to final key</h2>
          </div>
          <p>
            The same four-stage sequence for every job, so you always know
            what's next and who owns it.
          </p>
        </div>

        <div className="process-list">
          {STEPS.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="process-step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
