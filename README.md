# Dempster Designs — static site prototype

Five-page marketing site for Dempster Designs (Bloomfield Hills, MI). Plain HTML, CSS and vanilla JS. No build step, no bundler, no npm. The home hero is black; sections then alternate white and near-black the way thesigngroup.co.uk does, and the header re-themes itself to whatever section is under it. Every word of copy comes from dempsterdesigns.com; the research trail is in [NOTES.md](NOTES.md).

```
index.html            Home: black word-stack hero + marquee, white three-line overview, black featured work, video band, white six decades, black CTA
what-we-offer.html    Services: full-bleed photo hero with bottom-aligned word stack, intro + two-image band, seven services as a text-link grid (black), work strip
about.html            About: photo hero, Meet the Artist (sticky portrait + bio + Read More + timeline), parallax Gentherm band, Our History (black), CTA
gallery.html          Gallery: photo hero, 36-photo masonry with lightbox (<dialog>), CTA band (black)
contact.html          Contact: photo hero, phone / address / hours / social, form (Netlify Forms), CTA band (black)
assets/css/style.css  one stylesheet for all pages (mobile first; breakpoints 640 / 900 / 1200)
assets/js/main.js     hero fitter (word stack sized to fill the viewport width, capped by height), intro + scroll reveals, header re-theming, nav, marquee, video, lightbox, parallax, fixed CTA pill
assets/fonts/         Big Shoulders Display + Instrument Sans (Google Fonts, SIL OFL, self-hosted variable woff2)
assets/img/           every original upload from the live site (original filenames)
assets/img/original/  untouched copies of the files that were re-encoded because they were over 300 KB
assets/img/w900/      900px webp variants used in srcset, plus a 96px logo
assets/img/w450/      450px webp variants for phones (srcset)
assets/img/cutouts/   tight crops of sign faces for the hero collages (800px and 400px)
assets/video/         the mp4 from the live homepage
NOTES.md              research: copy inventory, asset list, palette, processing log, verification
```

## Run it locally

Double-click `index.html`. Everything works from `file://`, including fonts, the video and page-to-page links.

For a server (needed only to reproduce the Lighthouse numbers):

```
python -m http.server 8123
# then open http://localhost:8123/
```

## Deploy to GitHub Pages

1. Create a repository and push this folder as-is (`index.html` at the repo root).
2. Repo → **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`. Save.
3. The site is live at `https://<user>.github.io/<repo>/` in about a minute. All links and asset paths are relative, so it works in a sub-path without changes.
4. Custom domain: add a `CNAME` file containing `dempsterdesigns.com` (or a subdomain such as `new.dempsterdesigns.com`), point DNS at GitHub Pages (`A` records 185.199.108-111.153, or a `CNAME` to `<user>.github.io` for a subdomain) and tick *Enforce HTTPS*.

No Actions workflow is required. GitHub Pages serves everything gzipped with long cache headers; the Lighthouse numbers below were measured through a local server configured the same way.

## Recommended hosting stack for the real site

The prototype is deliberately host-agnostic. When it moves past a demo:

| Layer | Recommendation | Why |
|---|---|---|
| Hosting | **Cloudflare Pages** (first choice) or **Netlify**. GitHub Pages is fine for the prototype and for a static site with no forms. | Free tier, global CDN, automatic HTTPS, deploy previews per branch, custom domain in minutes. Cloudflare also gives Brotli, HTTP/3, image polish and a free WAF in front of the site. |
| DNS / domain | Move `dempsterdesigns.com` DNS to **Cloudflare** (registrar can stay at GoDaddy). | Free, fast, lets you do redirects (`www` → apex) and later add email routing without touching the host. |
| Contact form | **Formspree** (free tier: 50 submissions/month) or **Netlify Forms** / **Cloudflare Pages Functions + Resend** if you want no third-party branding. | **Currently: Netlify Forms.** The form in `contact.html` carries `data-netlify="true"`; with form detection enabled, Netlify registers it as "contact" on deploy and stores every submission in the dashboard. **Recipient:** Netlify → Forms → Form submission notifications → Add notification → Email notification (one per recipient; editable any time, no redeploy). The form only works on the deployed Netlify site, not on a local server. The `bot-field` honeypot is present; Netlify also runs its own spam filter. If the site moves off Netlify, swap to one of the options on the left. |
| Analytics | **Cloudflare Web Analytics** or **Plausible**. | Cookie-free, no consent banner needed, one script tag. |
| Content editing | Keep it as static HTML while the site is five pages. If the client wants to edit the gallery themselves, the lightest option is **Decap CMS** on top of the repo (no server), or move to **Astro** later and keep this markup as components. Do not go back to WordPress + a page builder for a site this size. | Static = no plugin updates, no hosting bill, nothing to hack. |
| Images | Keep local assets. If the gallery grows past ~50 images, put them behind **Cloudflare Images** or Netlify's image CDN for on-the-fly resizing. | Current site is 3.3 MB of `w900` variants, all lazy-loaded; fine as-is. |
| Video | Re-encode the 1.8 MB mp4 with ffmpeg (`-crf 28 -preset slow`, plus a webm) and generate a real poster frame. If more videos are added, host them on **Cloudflare Stream** or Bunny.net instead of the repo. | Git is a poor home for video. |
| Repo / CI | GitHub, `main` auto-deploys. Optional: a Lighthouse CI Action to fail a PR below 90. | Keeps the performance budget honest. |

Total running cost with that stack: $0 apart from the domain.

## What is still missing

Assets: **none**. All 45 files under `/wp-content/uploads/2026/05/` downloaded with HTTP 200 (list in NOTES.md §2.2). Two were not placed on any live page (`IMG_1424.jpeg`, `highlight-13-v3_highlight-13-v3_image.webp`) and are kept in `assets/img/` unused.

Not obtainable: `rgdempster.com/bio` did not resolve (DNS failure), so the timeline is built only from dates already on dempsterdesigns.com.

## Every TODO in the code

1. **`TODO: confirm dates with client`** — [about.html](about.html), timeline. The about page says "founding in 1969", the brief's bio says 1991, and "Our History" says "more than 30 years". Artwear (1975), Studio D (2010) and the Key to the City for the Woodward Avenue entrance signs are not on the live site and are left out.
2. **`TODO: no poster frame`** — [index.html](index.html), video band. The mp4 has no still in the media library; the "Vintage van painted with colorful flowers" gallery image is used as the poster.
3. **`TODO: social profile URLs`** — [contact.html](contact.html). The contact section shows LinkedIn, Instagram, Facebook, X (Twitter) and TikTok icons (Spotify was dropped). Each `href` is `#` and the icon is rendered disabled until the client supplies the profile URLs.
4. **`TODO: submit button label`** — [contact.html](contact.html). The live Gravity Form has no visible submit label in its markup. "Start the Conversation" (from the homepage CTA) is reused.

## Checks performed

| Check | Result |
|---|---|
| Lighthouse 12, mobile, simulated throttling, gzip server | Home **96**, What We Offer **100**, About **95**, Gallery **90**, Contact **100** performance. Accessibility, Best Practices and SEO **100** on every page. CLS 0 everywhere. |
| Image 404s | none on any page (headless Chrome network log at 360 / 768 / 1440 px) |
| Console / JS errors | none |
| External requests | none (fonts are self-hosted; the Google Fonts `<link>` equivalent is in a comment in each page head) |
| `prefers-reduced-motion` | marquee stops, video does not autoplay, smooth scroll off (verified with emulated media) |
| Copy trace | every visible string on all five pages is on dempsterdesigns.com (or is a gallery alt text) or is flagged `TODO:` (scripted check) |
| Headings | one `h1` per page, `h2` per section, `h3` inside; every `img` has `alt` |
| Layout | screenshots of all five pages at 360 and 1440 px, plus the home hero at 820 / 1024 / 1280 / 1366 / 1440×800 / 1920×1080, no clipping or horizontal overflow |
| Motion | intro, scroll reveals, sticker idle loops, parallax and page transitions all switch off under `prefers-reduced-motion` (verified with emulated media: zero hidden elements, marquee and stickers `animation: none`, video paused) |
