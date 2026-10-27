# Salvanoise — portfolio (React)

React 19 + Vite single-page portfolio for **Nahuel A. Salva (Salvanoise)**. It rebuilds the
layout of the original Canva page and applies the fixes listed in `cosas a revisar.txt`:
same section order and typographic hero, plus a value proposition, showreel and a process
section.

Bilingual (EN / ES), no UI framework, custom CSS, self-hosted optimized media.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

---

## Section order

Hero → Showreel → Clients → My Works (Dynamic reels / Podcast clips / Documentaries) →
Motion flyers → Short films → Process → About → Contact → Footer.

The order mirrors the original page. Only **Showreel** was inserted before *Worked with*,
and the Process / About blocks were added between the work sections and Contact.

---

## What the feedback asked for (and where it lives)

| Feedback | Implemented |
| --- | --- |
| “II’m”, “DINAMIC”, “DOCUMENTALS” | Fixed in `src/copy.js` and `src/data/*`; no legacy strings remain. |
| “Role:” vs “ROLE:” | One source per language: `t.films.role` → `Role:` / `Rol:`, label styled in CSS only. |
| Spanish titles on an English site | Full EN/ES toggle in the header; every UI string and project field is translated. |
| No value proposition / CTA above the fold | Hero headline + one-line pitch + “Let’s work together” and “Watch the showreel” CTAs. |
| About buried at the end | About now sits before Contact and carries the bio, tools, education and availability. |
| Contact was just an email | Email, WhatsApp, 15-min call, socials, timezone, languages, response time and availability. |
| Little social proof | Named client logos (9 real collaborators) + a conservative stats strip; no invented metrics. |
| No showreel | 0:47 vertical showreel (`reel-01`) directly under the hero, with poster and modal player. |
| Too many equal pieces | Grouped work with platform, format, duration, scope and one line of context per piece. |
| Motion flyers mixed with video | Separate labelled “Motion flyers” section, clearly described as design & animation. |
| Mobile video performance | Muted previews play only while a card is in view and pause off-screen; they are disabled for reduced-motion / Save-Data. No background hero video, posters first, full file loads on demand. |
| No prices | Services & packages section removed on request; scope and pricing are discussed on the 15-min call. |
| Needs own domain | Canonical/OG URLs point at `salvanoise.com` — buy it and deploy there (see below). |

---

## Things to replace before going live

### 1. WhatsApp and booking links (required)

`src/data/site.js`:

```js
whatsappUrl: 'https://wa.me/5493511234567',   // full international format, no + or spaces
bookingUrl: 'https://calendly.com/salvanoise/15min',
```

Both are **empty by default**. The buttons still render and fall back to a pre-filled
`mailto:` so nothing is broken — but a real WhatsApp / Calendly link converts better.

### 2. Stats and social proof

`src/copy.js` → `stats` (both `en` and `es`) drives the strip under the client logos.
Keep only numbers you can defend: years editing, clients, selected pieces, turnaround.
There are **no invented testimonials or view counts** anywhere in the site.

When you have real case-study numbers, add them to the `context` / `desc` fields in
`src/data/projects.js` (e.g. “4.2M views · 62% average retention”).

### 3. YouTube channel

`src/data/site.js` → `socials`. Instagram, TikTok and LinkedIn point to the real profiles.
The YouTube entry is currently a **credited short film**, clearly labelled “Film credit”,
because no channel URL exists yet. Replace its `url` and `handle` with the channel when you
create one.

### 4. Domain, canonical URL and social preview

Replace `https://salvanoise.com/` in `index.html`:

- `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`.

Buy the domain, point it at your host, then regenerate the social image if the copy changes
(`public/media/og-image.jpg`, 1200×630).

### 5. Availability

“Available for select projects — Nov 2026” appears in `src/copy.js`
(`hero.meta`, `contact.availability`) and in `src/data/content.js` (`aboutFacts`).
Update the month when it changes, or remove the promise.

---

## Content map

| File | What it controls |
| --- | --- |
| `src/copy.js` | Every UI string in EN and ES (nav, headings, buttons, labels, stats, lightbox). |
| `src/data/site.js` | Name, role, email, location, timezone, languages, socials, WhatsApp/booking links. |
| `src/data/projects.js` | Showreel, reels, podcast clips, documentaries, motion flyers, short films, clients, contact video. |
| `src/data/content.js` | 4 process steps and About facts. |
| `src/components/AutoplayVideo.jsx` | Muted looping card previews: in-view playback, lazy source, autoplay guards. |
| `src/styles.css` | Whole design system (tokens, layout, sections, responsive, reduced motion). |
| `index.html` | Meta/OG tags, Montserrat, JSON-LD, preloads. |

Project titles and descriptions are bilingual objects:

```js
title: { en: 'Documentary — 01', es: 'Documental — 01' },
```

`src/context/LanguageContext.jsx` resolves them with `pick(...)`. Default language is **EN**;
the choice is stored in `localStorage` under `salvanoise:lang` and reflected in `<html lang>`.

### Design tokens

Montserrat only — 900 for display, 800 for section labels, 600 for captions, 500 for body
emphasis, 400 for body. Canvas `#050506` with a blue glow sampled from the original page
(`rgb(75,103,135)`), a 1 px white-alpha grid of rules and a very light fixed noise overlay.
All tokens live at the top of `src/styles.css`.

### Motion

The page uses short, editorial motion instead of decorative effects. Everything lives at the
end of `src/styles.css` under **motion & micro-interactions**:

- Hero load choreography: the display word unmasks upward, then the year, roles, pitch,
  buttons, meta and scroll cue follow in a 1.1 s stagger.
- Blue scroll-progress bar under the header, driven by one `requestAnimationFrame` loop.
- Rising “live” dot, staggered client logos and process steps, plus stat counters that count
  once on entry (`src/components/StatValue.jsx`).
- Motion flyers lift and sweep a light reflection on hover; arrow icons nudge on link hover.
- Mobile menu links cascade in; the lightbox fades in while its panel rises into place.
- The hero scroll line has a slow looping sweep.

To change the tempo, edit the durations/delays in that section. Removing an animation never
hides content because the final state is the visible state. `prefers-reduced-motion` cancels
every animation, delay and hover transform, and keeps all content visible.

---

## Media

All assets live in `public/media` and are referenced with absolute paths (`/media/...`),
so they work on any host.

```
public/media/
  videos/   14 MP4 (H.264, faststart)             ~67 MB
  posters/  14 WebP stills (16:9 and 9:16)        ~0.45 MB
  clients/   9 client logos (WebP, 320×320)       ~0.09 MB
  stills/    5 short-film thumbnails (WebP)       ~0.13 MB
  contact-photo.webp
  og-image.jpg
```

- **Autoplay previews:** like the original page, cards play their video inline, muted and
  looping. A preview only loads when it approaches the viewport and only plays while it is
  visible; it pauses off-screen, behind the lightbox and when the tab is hidden. Autoplay is
  skipped for `prefers-reduced-motion` and `navigator.connection.saveData`. If a browser
  blocks it (e.g. iOS Low Power Mode), the poster and play button stay in place.
  Toggle globally with `site.media.autoplayPreviews` in `src/data/site.js`.
- Clicking any card opens the lightbox with sound and controls; the preview behind it pauses.
- The showreel poster is eager/high priority; every other poster is `loading="lazy"`.
- To swap a video: drop the new MP4 in `public/media/videos/`, its poster in
  `public/media/posters/`, and update the `video` / `poster` path in
  `src/data/projects.js`. Keep 16:9 pieces ≤ 1920×1080 and vertical pieces ≤ 1080×1920,
  H.264 + AAC, `-movflags +faststart`.

There is no `ffmpeg` dependency in the project — media is pre-encoded and committed.

---

## Accessibility & quality notes

- Skip link, visible focus rings, `aria-pressed` language toggle, labelled icon-only buttons.
- Lightbox: `role="dialog"`, focus trap, `Esc` to close, background scroll lock, focus restore.
- Images have intrinsic `width`/`height` or aspect-ratio containers to avoid layout shift.
- `prefers-reduced-motion` cancels reveals, hero/menu/lightbox choreography, hover tilts and
  all autoplay previews; nothing is left hidden.
- Autoplay previews pause when out of view, when the tab is hidden and while the lightbox is open.
- Audited at 1440 / 1280 / 1024 / 768 / 640 / 480 / 390 / 360 / 320 px: no horizontal
  overflow, no broken images, no hidden reveal blocks, no console errors; EN/ES and every
  lightbox path tested.

---

## Deploy

Static output — any host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel).

- Build command: `npm run build`
- Publish directory: `dist`
- No environment variables required.

For GitHub Pages under a subpath, set `base: '/repo-name/'` in `vite.config.js` and change
the media paths accordingly — a custom domain avoids this entirely (recommended).

---

## Known TODOs

- [ ] Add the real WhatsApp number (`site.whatsappUrl`).
- [ ] Add the Calendly / Cal.com link (`site.bookingUrl`).
- [ ] Replace placeholder stats with real metrics you can defend.
- [ ] Create a YouTube channel and link it in `site.socials`.
- [ ] Buy `salvanoise.com`, update canonical/OG URLs, regenerate `og-image.jpg`.
- [ ] Update the availability month when it changes.
- [ ] Set `site.media.autoplayPreviews = false` if you prefer still posters only.
