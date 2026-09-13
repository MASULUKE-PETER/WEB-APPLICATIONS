import { useState } from 'react'

// ---------------------------------------------------------------
// Where quote requests get delivered.
// This form posts to Formspree, which forwards every submission
// straight to your company inbox — no backend server required.
//
// Setup (one-time, ~2 minutes):
//   1. Go to https://formspree.io and create a free account.
//   2. Create a new form and set its recipient to your company
//      email (e.g. projects@qibiiconstruction.com).
//   3. Formspree gives you an endpoint that looks like:
//      https://formspree.io/f/xxxxxxxx
//   4. Paste that full URL below, replacing the placeholder.
//   5. Submit the form once yourself and click the confirmation
//      link Formspree emails you — this activates the form.
//
// See the README for the full walkthrough.
// ---------------------------------------------------------------
const FORM_ENDPOINT = 'https://formspree.io/f/mkjnlonr'

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Commercial',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!form.email.trim()) {
      next.email = 'Enter your email.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Enter a valid email.'
    }
    if (!form.message.trim()) next.message = 'Tell us a bit about the project.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('submitting')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          message: form.message,
          _subject: `New quote request from ${form.name} — ${form.projectType}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <div className="contact-info">
          <div className="section-tag">Get a quote</div>
          <h2>Tell us about your site</h2>
          <p>
            Send the basics and a project manager will follow up within one
            business day with next steps and a rough timeline.
          </p>

          <div className="contact-detail-list">
            <div className="contact-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 5h16v14H4z" /><path d="M4 6l8 7 8-7" />
              </svg>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">qibiiconstruction@gmail.com</div>
              </div>
            </div>
            <div className="contact-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 5c0 8 7 15 15 15l2-4-6-2-2 2c-2-1-5-4-6-6l2-2-2-6-4 1z" />
              </svg>
              <div>
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">064 764-9305</div>
              </div>
            </div>
            <div className="contact-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <div>
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">55 King Edward, Lombardy East, Johannesburg 2090</div>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {status === 'success' && (
            <div className="form-success" role="status">
              Thanks — your request is in. A project manager will reach out within one business day.
            </div>
          )}

          {status === 'error' && (
            <div className="form-error" role="alert">
              Something went wrong sending your request. Please try again, or email us directly at{' '}
              <a href="mailto:projects@qibiiconstruction.com">projects@qibiiconstruction.com</a>.
            </div>
          )}

          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className="form-note">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="form-note">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="projectType">Project type</label>
            <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}>
              <option>Commercial</option>
              <option>Residential</option>
              <option>Renovation & Fit-Out</option>
              <option>Civil & Infrastructure</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Site location, rough square footage, target start date..."
            />
            {errors.message && <span id="message-error" className="form-note">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : 'Send request'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
