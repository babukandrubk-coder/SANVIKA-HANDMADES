# AGENTS.md

## Project Overview

Sanvika Handmades is a static, no-build website for a handmade-crafts small business, plus a demo admin dashboard. There is no bundler, framework, or package.json — files are served as-is.

## Architecture

- `index.html` is the single public page, split into sections by id (`#home`, `#about`, `#products`, `#gallery`, `#testimonials`, `#contact`). Navigation links scroll to these anchors.
- `style.css` uses CSS custom properties defined in `:root` (colors, radius, shadow) for the public site's terracotta/cream palette. Keep new UI consistent with these variables rather than hardcoding colors.
- `script.js` handles the mobile nav toggle, header shadow on scroll, and the contact form's AJAX submission to Netlify Forms.
- `admin/` is a separate, self-contained mini-app (its own CSS/JS) simulating an admin dashboard:
  - `admin/login.html` posts to a hardcoded demo credential check in `admin/admin.js` and sets a `sessionStorage` flag.
  - `admin/dashboard.html` checks that flag on load and redirects to login if absent.
  - This is a client-side-only demo gate, not real authentication — there is no server-side session or database-backed user store. If real auth or persisted order/product data is ever needed, introduce Netlify Identity and Netlify Database rather than expanding this client-side check.
- `assets/`, `icons/`, `products/` hold static imagery/SVGs referenced by relative path from both the root pages and `admin/` pages (which use `../assets/...`).

## Conventions

- No comments in HTML/CSS/JS beyond what's already there; keep additions consistent with the existing terse style.
- Section markup pattern: `<section id="..." class="... section">` wrapping a `.container`, with an optional `.eyebrow` label above each `h2`.
- Reuse existing `.btn`, `.btn-primary`, `.btn-outline`, `.card`-style panel patterns instead of introducing new button/card variants.

## Non-Obvious Decisions

- The contact form uses Netlify Forms (`data-netlify="true"` + hidden `form-name` field) with a plain full-page-detectable static form — no SPA/skeleton file was needed since this is a static HTML site.
- Gallery, product, and customer-testimonial images are generated placeholders (ImageMagick gradients/labels), not real product photography — swap them for real photos before this goes live for an actual business.
