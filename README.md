# Sanvika Handmades

Sanvika Handmades is a static marketing website for a small handmade-crafts business, showcasing hair accessories, rakhis, jewellery, friendship bands, lotus hairpins and custom orders. It includes a landing page (hero, about, products, gallery, testimonials, contact form) and a lightweight admin area for viewing a mock orders dashboard.
customised thread bangles .
## Tech Stack

- Plain HTML, CSS and JavaScript (no build step, no framework)
- Netlify Forms for the contact form submission
- Google Fonts (Playfair Display, Poppins)

## Project Structure

- `index.html`, `style.css`, `script.js` — the public site
- `assets/` — site imagery (hero, about, gallery, customer photos, logo)
- `icons/` — social and contact SVG icons
- `products/` — product photography used on the Products section
- `admin/` — a simple admin login and dashboard demo (`login.html`, `dashboard.html`, `admin.css`, `admin.js`)

## Running Locally

No build tools are required. Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```bash
npx serve .
```

To test the contact form with Netlify Forms emulation, use the Netlify CLI:

```bash
netlify dev
```

## Admin Area

`admin/login.html` and `admin/dashboard.html` provide a demo dashboard mock-up (order stats and a recent-orders table). Access is gated with a client-side session flag only — demo credentials are `admin` / `sanvika123`. This is not real authentication and should not be used to protect sensitive data as-is.
