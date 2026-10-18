# New Horizon Special School — Green & Yellow Website Preview

An eight-page, **responsive HTML/CSS/JavaScript website** inspired by the interaction patterns of the Dallas ISD website and tailored to New Horizon Special School's identity. Created as a management-review concept. **No Wix, hosting, or domain changes have been made.**

## Quick start

Open `index.html` in your browser, or run a local server in this folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

No packages, build tools, API keys, or backend are required. CSS and JavaScript live in `assets/styles.css` and `assets/site.js`.

## Upload to GitHub Pages

1. Create a GitHub repository, e.g. `new-horizon-website-preview`.
2. Upload the **contents** of this folder to the repository root (ensure `index.html` is at the root alongside the `assets` folder).
3. Open **Settings > Pages** and choose **Deploy from a branch**.
4. Select **main** and **/(root)**, then click **Save**.
5. Share the generated `https://YOUR-USERNAME.github.io/new-horizon-website-preview/` URL with management.

The preview includes `noindex` tags to discourage search indexing, **but GitHub Pages is still publicly accessible**. Use access-controlled hosting instead if confidential review is required.

## Functional features

- **Eight linked pages:** Home, About, Programs, Admissions, Events, Gallery, Get Involved, Contact.
- **Split-screen animated navigation:** available on mobile and desktop, with expandable submenus, close button, keyboard focus containment, Escape to close, and page links.
- **Homepage events selector:** 3×3 clickable date cards styled after the supplied reference, with a highlighted selected date, 9-day navigation and event details updated in place.
- **Full month calendar:** events page has a clickable monthly grid, previous/next month buttons, selected-day details, and automatic rendering for every month.
- **Responsible real calendar data:** the current school's *Wednesday Open House, 9 AM–12 PM* is displayed on its recurring dates. All other days show **no confirmed public events** rather than made-up activities. The school lists weekly social programmes without specific public dates.
- **FAQ:** expandable question and answer sections on the homepage and admissions page, with a single expanded answer per group.
- **Search:** functional local site-index search modal.
- **Gallery:** functional categories, image viewer, next/previous, keyboard control, and Escape to close.
- **School photography:** New Horizon images restored across the site and in the animated menu, with bundled illustration fallbacks.
- **Animations:** subtle scroll entrances, hover transitions, image movement, and animated menu. Reduced-motion system preferences are respected.
- **Contact:** basic validation, email-app draft (`mailto:`), telephone and maps links.
- **Responsive layout:** tuned for phones, tablets, and desktops; uses New Horizon green and yellow, including the user-supplied school crest.

## What is / is not live

This is a **fully interactive front-end preview** — not a backend administration system. GitHub Pages cannot process server-side contact forms or store events. The contact form opens the visitor's email client; sending must be completed there. There are no live event-management, payments, admin login, or admissions-submission APIs. These require backend services or a CMS in a production phase.

Real school photographs have been **restored** from New Horizon’s existing public Wix media URLs, including the homepage hero, split-screen menu, programme cards, gallery, events, and inner-page banners. **The photos are linked remotely**, not bundled in this ZIP: visitors need internet access and Wix must continue serving those photos. If an image fails, a bundled illustration appears instead. Confirm that school management authorizes continued display and public GitHub Pages sharing, especially where students appear. The provided school logo is bundled locally. Tuition figures and published school information should be confirmed with the school before public launch.

## Edit the website

- **Branding, images and site content:** `assets/site.js`, at the beginning of the file and in each page's template function.
- **Colors, layout, responsiveness, animation:** `assets/styles.css` (new design overrides are appended at the bottom).
- **Upcoming event logic:** `setupHomeCalendar`, `setupMonthCalendar` and `dateDetail` in `assets/site.js`. Currently only publicly documented recurring Wednesday Open House is considered dated; replace/expand using a verified event data set when dates are approved.
- **FAQ text:** `home()` and `admissions()` in `assets/site.js`.
- **Page titles and metadata:** each of the eight `.html` files.

## Sources and original work

Content source: https://www.newhorizonspecialschool.com/

Design inspiration: https://www.dallasisd.org/

The visuals, HTML, CSS, and JS were authored for this demonstration. The Dallas ISD proprietary code, logos, source imagery, and copyrighted copy were **not** copied. The current live New Horizon Wix site remains unchanged.
