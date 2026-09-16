# Elmar Builders — Website

A two-page, responsive site built with plain HTML, CSS and JavaScript (no
frameworks, no build step). Open `index.html` directly in a browser, or serve
the folder with any static host.

## Adding your images

All images are hard-coded to load from `/assets/` — just drop files in with
the exact names below and they'll appear on the site. Nothing else needs to
change.

```
assets/
├── logo/
│   ├── elmar-builders-logo.svg        ← logo for light backgrounds (nav)
│   └── elmar-builders-logo-light.svg  ← logo for dark backgrounds (footer)
│
├── images/
│   ├── hero/
│   │   └── hero-1.jpg                 ← large hero photo (landscape, 1800px+ wide)
│   │
│   ├── projects/
│   │   ├── project-01.jpg
│   │   ├── project-02.jpg
│   │   ├── project-03.jpg
│   │   └── project-04.jpg
│   │
│   └── team/
│       ├── founder.jpg                ← square crop
│       └── project-manager.jpg        ← square crop
│
└── icons/
    └── favicon.svg                    ← placeholder "E" mark — swap for your logo mark
```

If a logo file is missing, the nav and footer automatically fall back to the
text "Elmar Builders" instead of a broken image, so the site never looks
broken while you're adding assets.

## Updating project information

Open `js/projects-data.js`. Every project card on both pages (home page
"Selected projects" and the full Projects page) is generated from this one
list — edit the name, location, type, status and image path for each entry.
Set `featured: true` on exactly two projects to control which ones appear on
the home page.

## Updating text content

- Company description, phone numbers, email and address: edit directly in
  `index.html` (Who We Are and Contact sections) and the footer of both pages.
- Team names/roles: edit the "Our team" section in `index.html` — the
  placeholder text "Add founder name" / "Add manager name" should be replaced.
- Tagline, address and contact details currently reflect the details from the
  company profile provided (Elmar Builders, Thiruvankulam, Ernakulam).

## What's already built in

- Responsive layout (desktop / tablet / mobile), tested down to small phones.
- Sticky navigation that becomes solid + blurred on scroll.
- Mobile hamburger menu, closes on link click or Escape key.
- Hero image load animation (slow zoom-settle + staged text reveal).
- Scroll-reveal animations via Intersection Observer, with staggered project
  and team cards.
- Full `prefers-reduced-motion` support — all animation is disabled when a
  visitor has reduced motion turned on.
- Subtle image zoom on project card hover.
- Basic on-page SEO: unique titles, meta descriptions, Open Graph tags,
  canonical URLs, semantic headings, `robots.txt`, `sitemap.xml`.
- Visible keyboard focus states and a "skip to content" link.

## Before launch

- [ ] Add real photography (see asset list above).
- [ ] Replace the placeholder favicon with a mark based on your logo.
- [ ] Replace team names.
- [ ] Confirm project list and statuses in `js/projects-data.js`.
- [ ] Point the Privacy Policy / Terms links in the footer somewhere real, or
      remove them if not needed yet.
- [ ] Update `sitemap.xml` / `robots.txt` if the final domain differs.
