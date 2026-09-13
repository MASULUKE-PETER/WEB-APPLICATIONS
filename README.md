# QIBII Construction Services — Website

A modern, responsive construction company website built with **Vite + React** (no UI framework/library — hand-written CSS with design tokens), in QIBII's black-and-red brand palette.

## ⚠️ Add your logo first
The site expects your logo file at:
```
public/logo.png
```
Drop your logo file into the `public/` folder and name it exactly `logo.png` (or update the `src="/logo.png"` paths in `src/components/Navbar.jsx` and `src/components/Footer.jsx` to match your filename). It's referenced with a plain `<img>` tag, so any PNG, SVG, or WebP works — just keep the filename consistent.
- Navbar logo renders at 42px tall — a wide horizontal logo works best there.
- Footer logo renders at 38px tall on a black background — make sure your logo file has a transparent background or reads well on black.

## Stack
- React 18
- Vite 5
- Plain CSS (custom properties / design tokens, no Tailwind or CSS-in-JS needed)

## Structure
```
src/
  components/
    Navbar.jsx        sticky nav + mobile menu
    Hero.jsx           hero with SVG line-art illustration
    Stats.jsx          stats band
    Services.jsx       4 service offerings
    Process.jsx        4-step project process
    Projects.jsx       featured project gallery (SVG visuals)
    News.jsx            auto-advancing news/updates slideshow
    Values.jsx          why-choose-us section
    Testimonials.jsx    client quotes
    CTA.jsx              call-to-action banner
    Contact.jsx          working contact form with validation
    Footer.jsx
  App.jsx
  main.jsx
  index.css            all design tokens + component styles
index.html
package.json
vite.config.js
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
npm run preview   # preview the production build locally
```

## Connecting the quote form to your company email

The site itself has no backend server, so the contact form uses **[Formspree](https://formspree.io)** — a free service that receives the form submission and forwards it straight to your inbox as an email. Setup takes about two minutes:

1. Go to **https://formspree.io** and create a free account using your company email (e.g. `projects@qibiiconstruction.com`) — that's the inbox submissions will land in.
2. Click **New Form**, give it a name like "QIBII Website Quotes," and confirm the recipient email is your company address.
3. Formspree will show you an endpoint URL that looks like:
   ```
   https://formspree.io/f/abcd1234
   ```
4. Open `src/components/Contact.jsx` and paste that URL into the constant near the top of the file:
   ```js
   const FORM_ENDPOINT = 'https://formspree.io/f/abcd1234'
   ```
5. Run the site, fill out the form once yourself, and submit it. Formspree sends a one-time confirmation email — click the link in it to activate the form. After that, every real submission is delivered automatically.

From then on, whenever a client submits the quote form, you'll receive an email containing their name, email, phone, project type, and message — no further setup needed. The free Formspree tier covers 50 submissions/month; paid tiers raise that limit if you outgrow it.

If a submission fails to send for any reason (network issue, Formspree outage), the form shows an error message and points the visitor to your email address directly, so no request gets silently lost.

## Customizing
- **Colors / fonts**: edit the `:root` variables at the top of `src/index.css`. The core brand tokens are `--red` (accent), `--charcoal` / `--charcoal-deep` (blacks), and `--paper` (light background).
- **Copy**: all section content (services, projects, testimonials, stats) lives in small arrays at the top of each component file in `src/components/` — edit those arrays to swap in your real project data.
- **Contact form**: `Contact.jsx` currently validates and shows a success message client-side only. Wire the `handleSubmit` function up to your email service or backend endpoint (e.g. Formspree, Resend, or your own API route) to actually send submissions.
- **News section**: `News.jsx` is a slideshow — edit the `NEWS` array at the top of the file to add, remove, or reorder updates (each needs an `image` path, category, date, title, and short excerpt). It auto-advances every 6 seconds, pauses on hover/focus, and always includes working arrow and dot controls. Add as many entries as you like; the slideshow handles any number.
  - **Adding your images**: drop your photos into `public/news/` and reference them as `/news/your-file-name.jpg` in the `image` field (the leading `/news/` maps straight to that folder — no `public` in the path). JPG, PNG, or WebP all work. For best results use a roughly 4:3 or landscape photo — the slideshow crops to fill the frame automatically.
- **Fonts**: loaded from Google Fonts in `index.html` (Barlow Condensed for headings, Inter for body). Swap the `<link>` tags and CSS variables if you want different typefaces.

## Notes
- The hero and project cards use hand-drawn inline SVG, so those work immediately with zero image assets needed. Swap in real photography by replacing the `<BuildingSVG />` usage in `Projects.jsx` and the SVG in `Hero.jsx` with `<img>` tags if you'd like.
- The **News section requires real images** — see "Adding your images" above. Until you add files to `public/news/`, those four slides will show broken-image icons; add your photos there to fix it.
- The site uses a light theme throughout (white/off-white backgrounds) with black and red as accent and text colors, so your black-and-red logo stays clearly visible in the navbar and footer.
- Fully responsive down to small mobile widths, with a working hamburger menu.
- Keyboard-focus styles, `prefers-reduced-motion` support, and semantic form labelling are built in.
