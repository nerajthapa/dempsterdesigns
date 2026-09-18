# NOTES — Dempster Designs rebuild research

Written before any code. Sources fetched 2026-09-17.

## 1. Design reference: thesigngroup.co.uk

Fetched: `/` (homepage), `/about`, `/services/built-ups`, plus the compiled Webflow stylesheet.

What the hero actually is (from the raw markup):

- Three `div.flex-h-all` rows on desktop. Each row is a flex line mixing `<h1 class="h-xlargecaps inline">` word blocks with `<img class="graphic">` stickers and product cutouts. Line 1: `[starman.png] Signage [aster.svg] [LED.svg] [hello.png]`. Line 2: `[neonp.png] And Lighting [left-arrows.svg] [np.png]`. Line 3: `[flash.svg] For The [Mask Group 2.png] Trade [Mask Group 3.png]`.
- A **separate mobile composition** (`.home-proposition-mob`) with fewer words per line ("Signage And" / "Lighting For" / "THE Trade") and the stickers moved into their own rows between word rows. They do not just shrink the desktop hero; they re-author it.
- Stickers are a mix of SVG (asterisk, LED, arrows, flash) and PNG photo cutouts (neon sign, "hello" neon).
- Display face: `ff-good-web-pro-extra-conden` (FF Good Extra Condensed, all caps, very tight leading). Body: `Graphik web`.
- Colours in CSS: near-black `#00070d`, off-white `#fafafa`, greys, plus accent `#e2840a` (orange), `#5b8106` (green), `#ffdede` (pink tint). Stickers on the page are yellow, pink, green.
- Section order on the homepage: nav → word-stack hero → one-line overview → "What do you need for your next project?" (a Splide slider of service pills with thumbnails) → "All your signage needs covered" → "Delivering for the trade time and time again" → "Where the magic happens" (six-image asymmetric workshop collage) → brochure form → "Work with Us" CTA ringed by `.cta-graphic` arrows (`arrow`, `point`, `arrows`, `pink-arrow`, `yellow-arrow`, `pointer`) with separate mobile variants.
- `/about`: alternating full-width image + text blocks, no stickers. Headings: "Delivering for the Sign & Display Trades", "A team of specialists", "We've got all your signage needs covered", "Where the magic happens", "A passion for innovation".
- `/services/...`: same hero treatment, the services list is a grid of image cards (Neonplus, Neon flex, Flat cut lettering, Built Ups, Illuminated Signage, CNC/Laser, Bespoke Lighting, Sign Trays, Alphascreens, Fabrications, LED Components, Digital Print).

Note: the brief asks for services as plain text links, not cards, and no marquee was found in their markup (the brief asks for one anyway). Both are deliberate departures.

## 2. Content source: dempsterdesigns.com

All five pages fetched raw (`/`, `/what-we-offer/`, `/about/`, `/gallery/`, `/contact/`). Site is WordPress + Beaver Builder, GoDaddy-built. Lazy-loaded images expose full-size URLs through `data-src` / `srcset` / lightbox `href`; all were parsed from raw HTML.

### 2.1 Copy inventory — verbatim

**Global nav:** Home · What We Offer · About · Gallery · Contact. Skip link: "Skip to content".

**Footer (every page):** `P.O. Box 831 Bloomfield Hills, MI 48304` · `(248) 398-9999` (tel:+12483989999) · `designsbydempster@gmail.com` · Spotify link `https://open.spotify.com/user/zh3u3zuiuxfped3nkp1fp7khp` · a second social icon linking to `#` (no destination) · `© 2026, Dempster Designs. All Rights Reserved.` · GoDaddy badge · "Scroll To Top".

**Home `/`** (title: "Custom Signage Design | Dempster Designs")
- H1: `We Create Award Winning Signs`
- P: `We Transform Visions Into Compelling Visual Solutions That Capture Attention and Inspire Action` (rendered title-case on the live site; the brief gives it sentence-case; used sentence-case per brief)
- Buttons: `What We Offer` · `View Gallery` · `Contact`
- Image-as-text (hero-4-v2_h2_title1-1.png, alt "Sixty years of experience announcement"): reads **"60 YEARS OF EXPERIENCE"** in outlined caps.
- H2: `Comprehensive Solutions That Amplify Your Message`
  - H3 `Strategic Brand Development` / `Integrating research, creativity, and precision for impact.`
  - H3 `Expert Fabrication Capabilities` / `Utilizing cutting-edge materials and proven construction methods.`
  - H3 `Full-Spectrum Creative Services` / `Delivering integrated campaigns with consistent, compelling messaging.`
  - Button: `Learn More About Us`
- H2: `Six Decades of Crafting Visual Excellence`
  - P1: `For over 60 years, Dempster Designs has led the signage and design industry by blending evolving technology with timeless visual communication principles. Our reputation is built on quality craftsmanship and a deep respect for every client's vision, investment, and brand.`
  - P2: `We deliver everything from brand identity and promotional materials to event and campaign design with precision and professionalism. Using durable materials and expert installation, we ensure every piece achieves maximum impact.`
  - P3 (same `<p>` after a `<br>`): `Our strength lies in integrating visual, print, and audio elements to create cohesive, engaging brand experiences. From custom illustrations and photography to music and radio support, we provide end-to-end creative solutions-helping businesses communicate clearly, stand out, and grow.`
- H2: `Let's Start Your Project`
  - P1: `Have a project in mind or need expert guidance? We’re here to help bring your ideas to life with thoughtful design and reliable execution.`
  - P2: `Reach out to discuss your goals, request a quote, or learn more about our services. Our team will respond promptly and guide you through the next steps.`
  - Button: `Start the Conversation`

**What We Offer `/what-we-offer/`** (title: "What We Offer | Brand Identity Services for Dempster Designs")
- H1: `Creative Solutions for Every Brand Need`
- P: `Discover tailored design, signage, and media services built to elevate your brand.`
- H2: `Comprehensive Creative Solutions for Every Vision`
  - P: `For over 60 years, we've transformed ideas into reality through diverse creative services. Blending craftsmanship with innovation, we deliver solutions that engage audiences and strengthen brands. From visual design and audio production to custom fabrication, every project benefits from our expertise, precision, and commitment to impactful, effective communication.`
- H2: `Signature Services That Bring Brands to Life` — seven bullets:
  1. `Develop cohesive brand identities that stand out`
  2. `Design logos, color palettes, and typography systems`
  3. `Create style guides for consistent brand use`
  4. `Ensure designs work across digital and print platforms`
  5. `Produce brochures, flyers, posters, and catalogs`
  6. `Maintain high standards in print quality and finishing`
  7. `Deliver materials that communicate clearly and professionally`
  - Button: `View Portfolio`
- H2: `Our Work, Your Vision`
  - P: `For over six decades, we have delivered standout creative for clients nationwide, backed by steady expertise. Connect with us today.`
  - Button: `Contact Us`

**About `/about/`** (title: "About | Signs and Branding at Dempster Designs")
- H1: `Decades of Craftsmanship and Creative Expertise`
- P: `Learn about our journey, values, and the experience behind every project we deliver.`
- H2: `Meet the Artist`
- H3: `The Art of Design, Signs & Branding`
  - P: `Since its founding in 1969, Dempster Designs has been a leader in creating exceptional visual solutions for businesses, events, and charities across America and internationally . With a deep commitment to creativity and community, our studio specializes in crafting captivating images that strengthen brand identity and celebrate meaningful occasions.`
  - P: `Robert Dempster is the eldest of nine children. He began his artistic journey watching his father hand-paint signs as his third job while supporting the family.`
  - "Read More" toggle, then:
  - P: `In 1971, after a serious car accident and a period of healing, Robert founded The Renaissance Art Gallery in Detroit’s historic Greektown. He later moved to Birmingham, Michigan, where he built a successful painting company and began creating large-scale murals on buildings throughout the city.`
  - P: `Robert truly hit his stride when he founded Artwear , a sportswear printing company right here in Birmingham. The timing was perfect for custom T-shirt designs and community branding. After eleven highly successful years, he sold Artwear and launched Speedy Tees , a franchise T-shirt company that quickly grew to seven stores in the Birmingham area.`
  - P: `Driven by his entrepreneurial spirit, Robert next expanded into a full range of creative services: fine art, painting, signs, sportswear, and posters. He has also pursued his passion for music as an on-air radio personality while remaining a dedicated community and church advocate.`
- H2: `Our History`
  - P: `For more than 30 years, Dempster Designs has specialized in high-impact signs, vehicle wraps, and complete branding solutions for radio stations, automotive companies, healthcare providers, and many other industries.`
  - P: `We pride ourselves on building strong local partnerships and truly understanding each client’s unique vision and values. From vibrant promotional materials to elegant signs, banners, and landscapes, our work is defined by artistry, meticulous attention to detail, and an unwavering commitment to excellence.`
  - P: `At Dempster Designs, we believe in the power of visual storytelling. We are passionate about creating lasting connections through our creative services. Let us help bring your ideas to life.`

**Gallery `/gallery/`** (title: "Gallery | Signage Portfolio for Dempster Designs")
- H1: `Showcasing Over Six Decades of Creative Excellence`
- P: `Explore our portfolio of signage, branding, and creative projects in action.`
- 29 lightbox images (alt text listed in §2.2).

**Contact `/contact/`** (title: "Contact | Contact Form for Dempster Designs")
- H1: `Connect With Experts Ready to Help`
- P: `Reach out today to discuss your project and take the next step forward.`
- H2: `Contact Our Creative Team`
- Address / phone / email as footer, plus hours: `Mon - Fri: 9:00 AM - 5:00 PM Sat & Sun: Closed`
- Social: `Instagram` (icon label; no URL in markup) and the Spotify link.
- Form (Gravity Forms): `" * " indicates required fields` · `First Name *` · `Last Name *` · `Company` · `Email *` · `Phone *` · `Message`.

### 2.2 Asset inventory — every full-size file under /wp-content/uploads/2026/05/

Resized WordPress variants (`-300x…`, `-768x…`, `-1536x…`) exist for most and were skipped; only originals were downloaded.

| File | Where used on live site | Alt text | Native px |
|---|---|---|---|
| 22331347-C706-4925-BFA9-24A09E7CF0DD-1.jpeg | gallery | Bar interior with neon hammer wall art | 880×1168 |
| 306C2B1A-38FF-4867-A65D-66F2F5C58524.jpeg | gallery | Transport van in motion near entrance | 960×1072 |
| 5F89F123-AE0E-4151-B992-38B72527E865.jpeg | gallery | Entrance of Lazy Lizard Cantina with planters | 1056×976 |
| 69fb486433ff2__users_…_generated_video-1.mp4 | home (background video) | — | 1.8 MB mp4 |
| 69fb49124e9c8_0D68BEE2-954B-40B3-8E95-3A30449027D7-1.jpeg | about | Smiling older man in front of city skyline | 944×1088 |
| benefit-12-v3_benefit-12-v3_background_image.webp | gallery (section bg) | — | — |
| benefit-12-v3_image1-1-1.png | gallery | Colorful Birmingham mural with rainbow design | 1107×769 |
| benefit-12-v3_image1-2-1.png | gallery | Farm market storefront with giant apple decoration | 1098×768 |
| benefit-4-v3_feature_image-4-1.png | what-we-offer | Honoring the best nurses banner | 1736×1600 |
| figma_1_260.png | favicon/site icon | (chrome "D" monogram) | 260×260 |
| footer-17_footer-17_logo_image-1-e1777634353783.webp | header/footer logo | Dempster Designs | 192×176 |
| Frame-1-1.png | home | Black background with white text (actually a near-empty strip with two grey dots — decorative divider) | 1413×64 |
| hero-4-v2_background_image-4-1.png | gallery | Vintage van painted with colorful flowers | 1920×985 |
| hero-4-v2_h2_title1-1.png | home | Sixty years of experience announcement ("60 YEARS OF EXPERIENCE" outlined text) | 3276×151 |
| highlight-13-v3_highlight-13-v3_image.webp | (referenced in markup, not visibly placed) | — | — |
| highlight-16_image-5-1.png | home | Modern office building with blue sky | 1920×2058 |
| highlight-16-v1_highlight-16-v1_image.webp | what-we-offer | Modern physical therapy building exterior. (OMPT Physical Therapy monument sign) | 1920×1734 |
| highlight-16-v2_image-15-1.png | home | IT Disposal USA truck on street | 1920×1502 |
| highlight-16-v3_image-4-1.png | home | Medical van in urban setting (Henry Ford Health) | 1920×1842 |
| IMG_1207.jpeg | gallery | Studio D promotional image | 960×960 |
| IMG_1316.jpeg | gallery | Hickory Creek sign and clubhouse | 1320×1311 |
| IMG_1424.jpeg | (uploads, not placed on any page) | — | — |
| IMG_1523.jpeg | gallery | Modern mobile clinic on road | 976×976 |
| IMG_1554.jpeg | gallery | Blueprint of The Franklin signage design | 1008×1008 |
| IMG_1591.jpeg | gallery | Vintage radio station blueprint design | 1320×1850 |
| IMG_1613.jpeg | gallery | Henry Ford Health mobile clinic van in city | 1136×912 |
| IMG_1648-7dbafe63-eb0a-4456-a7ea-f9d11c6a7da4.jpeg | gallery | Bloomfield Hills sign with colorful flowerbed | 1320×1688 |
| IMG_1660.jpeg | gallery | Group viewing Detroit Press Club mural (captioned in-image "Detroit Press Club Mural 1978") | 1320×1484 |
| IMG_1731.jpeg | home | Kawasaki Robotics North American Training Center sign | 1040×992 |
| IMG_1734.jpeg | gallery | Kroger supermarket exterior with drive-thru sign | 880×1168 |
| IMG_1737.jpeg | gallery | Two men shaking hands by red wood chipper | 1168×880 |
| IMG_1743.jpeg | gallery | Royal Oak Lanes bowling alley storefront at dusk | 880×1168 |
| IMG_1782.jpeg | gallery | WeightWatchers storefront with colorful flower planters | 992×1040 |
| IMG_1905.jpeg | about | Gentherm corporate sign with orange purple logo | 1008×1024 |
| IMG_1913.jpeg | gallery | Statue of Mary on hospital lawn | 1008×1024 |
| rsw_1440h_1440-10.webp | gallery | Henry Ford Health building with large banner | 1025×1440 |
| rsw_1440h_1440-11.webp | gallery | Corner brick cafe with colorful tree mural | 1024×1008 |
| rsw_1440h_1440-2.webp | home | City of Bloomfield Hills entrance sign with flowers | 1056×976 |
| rsw_1440h_1440-3.webp | gallery | Silverman real estate sign with landscaping | 1040×992 |
| rsw_1440h_1440-4.webp | gallery | Man in sunglasses pointing at signage collage ("SIGNS THAT WORK" poster) | 784×1312 |
| rsw_1440h_1440-5.webp | gallery | People queuing outside illuminated hotel at night | 880×1168 |
| rsw_1440h_1440-6.webp | gallery | Smiling man in blue blazer on city street | 832×1248 |
| rsw_1440h_1440-7.webp | gallery | Greystone Pickleball Club building, Dempster Designs logo | 880×1184 |
| rsw_1440h_1440-8.webp | gallery | Dempster Designs logo on grassy storefront | 976×1056 |
| rsw_1440h_1440-9.webp | gallery | Wabeek South stone sign with festive greenery | 1071×1440 |

Not under /uploads/ (third-party): `godaddy-design-services-logo.png` — ignored on purpose.

### 2.3 Download results

All 45 files returned HTTP 200 and were saved to `assets/img/` (the mp4 to `assets/video/`). **No failures.** Files over 300 KB were re-encoded (see §4).

### 2.4 Owner bio — rgdempster.com/bio

`http://www.rgdempster.com/bio` did not resolve (DNS `ENOTFOUND`) on 2026-09-17. The optional timeline therefore uses only dates already on dempsterdesigns.com/about and in the gallery images:

- 1969 — "Since its founding in 1969" (about page). **Conflicts** with the brief's "Dempster Designs founded 1991" from the bio, and with "For more than 30 years" in Our History.
- 1971 — Renaissance Art Gallery, Greektown (about page).
- 1978 — Detroit Press Club Mural (caption inside IMG_1660).
- Artwear (no date on site; brief says 1975), sold after eleven years → Speedy Tees.
- Studio D (IMG_1207 alt text; brief says 2010), Key to the City — not on the site.

Whole timeline block is wrapped in `TODO: confirm dates with client`.

## 3. Palette sampled from the photography

| Role | Hex | Sampled from |
|---|---|---|
| Ground | `#ffffff` / `#f6f6f3` | — |
| Ink | `#111111` | Bloomfield Hills sign face |
| Accent: cobalt | `#1d5fb4` | Henry Ford Health van / nurses banner |
| Accent: signal red | `#d8272c` | Kawasaki sign, IT Disposal truck |
| Accent: lime | `#8fd400` | OMPT Physical Therapy channel letters |
| Support: gold | `#c9a23a` | Bloomfield Hills gilded lettering (one sticker only) |

## 4. Image processing log

Re-encoded with Pillow (max 1600 px, webp q80). Originals kept in `assets/img/original/`.

| Original | KB | Replacement | KB |
|---|---|---|---|
| IMG_1591.jpeg | 352 | IMG_1591.webp | 156 |
| IMG_1648-7dbafe63-eb0a-4456-a7ea-f9d11c6a7da4.jpeg | 402 | IMG_1648-….webp | 236 |
| benefit-12-v3_image1-2-1.png | 343 | benefit-12-v3_image1-2-1.webp | 107 |
| benefit-4-v3_feature_image-4-1.png | 688 | benefit-4-v3_feature_image-4-1.webp | 86 |
| hero-4-v2_background_image-4-1.png | 819 | hero-4-v2_background_image-4-1.webp | 194 |
| highlight-16-v2_image-15-1.png | 1089 | highlight-16-v2_image-15-1.webp | 275 |
| highlight-16-v3_image-4-1.png | 1051 | highlight-16-v3_image-4-1.webp | 180 |
| highlight-16_image-5-1.png | 1168 | highlight-16_image-5-1.webp | 91 |
| rsw_1440h_1440-10.webp | 202 | same name, black band cropped off the bottom (1025×1440 → 1025×1089) | 150 |

Derived files:

- `assets/img/w900/` — 900 px webp of every photo (q78) for `srcset`, plus `logo-96.webp`.
- `assets/img/w450/` — 450 px webp of every photo (q76) so phones never download more than ~30 KB per gallery tile.
- `assets/img/cutouts/` — tight crops of sign faces for the hero collage, 800 px and 400 px: bloomfield-hills-sign, kawasaki-sign, ompt-sign, henry-ford-van, royal-oak-lanes-sign, gentherm-sign, it-disposal-truck.

The mp4 (1.8 MB) could not be re-encoded (no ffmpeg on this machine). It is `preload="none"` and only loads when the band scrolls into view, so it does not affect LCP.

## 5. Fonts

Big Shoulders Display (900, headline word-stack) and Instrument Sans (400/600/700, body). Both are Google Fonts; the latin variable woff2 files were downloaded from Google's CSS endpoint and self-hosted in `assets/fonts/` so the page makes no external request at all and nothing render-blocking leaves the origin. Fallback faces (`Impact`, `Arial`) are `size-adjust`ed to the measured widths of the web fonts (95% / 104%) so the swap does not shift layout — Lighthouse CLS went from 0.20 to 0 with this change.

## 6. Verification

- Headless Chrome (CDP, real device-metrics override) screenshots of all five pages at 360 and 1440 px (768 px for the first build); no 404s, no console errors, no horizontal overflow.
- Lighthouse 12 mobile, simulated throttling, through a local server that gzips text and sets long cache headers (what GitHub Pages / Cloudflare Pages do). Performance: Home 96, What We Offer 100, About 95, Gallery 90 (LCP is the first image in the second masonry column; the column-top images are eager with fetchpriority=high and a 450 px variant), Contact 100. Accessibility / Best Practices / SEO 100 on every page. CLS 0 everywhere.
- Lighthouse's simulated LCP for the home hero text is a Lantern model estimate; the real observed LCP in the trace is 336 ms (same as first paint).
- `prefers-reduced-motion: reduce` emulated: marquee animation `none`, video stays paused.
- Scripted copy trace on every page: each visible text node matches dempsterdesigns.com text or gallery alt text, or is flagged `TODO:`.

## 7. Second-round changes (client feedback)

- **Dark theme.** The live site is black-grounded (its hero text images are white-on-transparent, "Black background with white text" alt). Ground `#0b0b0c`, bands `#141416`, ink `#f4f4f1`. Accents lifted for dark ground: blue `#2f7bff`, red `#ff3b3f`, lime `#b4ff2a`, gold `#e2bd57`. Sticker outlines are off-white so they read as die-cut stickers on black.
- **Five pages** instead of one: home kept short (hero, three-line overview, four featured projects, video band, six decades, CTA). Each inner page has its own stacked-word hero with different stickers/cutouts, breadcrumb, and a distinct body structure (see README).
- **Video band overflow** fixed: the caption is now a full-height flex overlay with a smaller heading (max 78 px, 11ch) instead of an absolutely-positioned bottom bar, so five lines never leave the band.
- **Sticker `<svg><use>` bug** found on mobile: an `<svg>` without a viewBox has no intrinsic ratio and defaults to 150 px tall, which opened gaps between hero lines. Fixed with `aspect-ratio` rules keyed on the `use` target.
- Pages are assembled from shared header/footer/sprite by an authoring-time script (kept outside the repo); the output is plain HTML with no runtime dependency.

## 8. Third-round changes (client feedback: hero clipping, black/white alternation, inner-page heroes, motion)

**How thesigngroup.co.uk actually animates** (read from their Webflow markup and stylesheet, not guessed):
- Initial states are inline: `transform: translate3d(0, 40px, 0)` + `opacity: 0` on sections, `translate3d(90px, 0, 0)` on the service slider, `scale3d(1.06, 1.06, 1)` + `opacity: 0` on hero backdrops (desktop only, `@media (min-width: 992px)`). Webflow IX2 then tweens them to identity when they scroll into view.
- Stickers: the asterisk in the hero carries a `rotateZ` transform (it spins); the pointer hand and arrows have `data-w-id` hover/loop interactions.
- Inner pages (`/services/*`): `.section.align-bottom` with a full-bleed `.bg-product` photo backdrop, a small pre-heading (`.t-small.h-pre`), the H1 in `.h-xl-largecaps` aligned to the bottom of the viewport, a cutout product image floating top-right (`.neon-flex-img1`), and a fixed "Enquire Now" pill (`.button.is-fixedcta`). Body sections then alternate `.bg-is-white` and dark.
- `/about` is a plain page (H1 + text + alternating image/text blocks), no word stack.

**What was built to match:**
- `assets/css/style.css` has two theme scopes (`.t-light`, `.t-dark`) driven by CSS variables; every section declares one, and `data-theme` lets the header switch between light and dark chrome as you scroll.
- Home hero is black (client request), then Amplify white, Work black, video, Six Decades white, CTA black. Inner pages: photo hero (dark) then alternate from white.
- Inner pages use the service-page pattern: full-bleed photo backdrop from the live site's own images (OMPT, office tower, Birmingham mural, flower van), gradient to black, breadcrumb, bottom-aligned word stack, floating cutout top-right, lede.
- Motion: intro sequence on the word stack (words rise 70 ms apart, stickers pop with a spring, cutouts drop in keeping their tilt), scroll reveals (`translateY(40px)` → 0, staggered via `--i`), backdrop scale-in on inner heroes, idle loops on stickers (asterisk spin, star wobble, hand nudge, arrow wiggle, bolt flicker, burst pulse), image zoom on hover, parallax on full-bleed photos, fixed "Start the Conversation" pill after 60 vh, cross-page fade via the View Transitions API where supported. All motion is off under `prefers-reduced-motion`.
- **Hero clipping fix:** the old hero used `clamp(…, 15.5vw, …)` for the word size, which ignores viewport height, so on short/wide screens (1440×800, most laptops) the stack ran below the fold and the right-hand cutouts were pushed off. Now every size inside a stack is in `em`, lines are centred and never wrap, and `main.js` sets one variable (`--hf`) per stack after fonts load: first so the widest line (words + stickers + cutouts) spans the container width, then capped so the stack fits within a fraction of the viewport height (`data-fit`, 0.86 on the home hero). Because everything is em-based the scaling is exact. The first attempt fitted height-first at 60 %, which left the collage in the top-left corner on wide, short laptop screens; the client flagged it and it was replaced with width-first fitting. Verified at 360, 1024, 1366×768, 1440×800, 1900×880, 1920×1080 and 1440×2400. Re-run on resize, ignoring mobile address-bar height jitter.
- The sticker sprite uses `currentColor` and theme variables so the same symbols read correctly on white and black.

## 9. Fourth round (client: "make it look like this", with the thesigngroup hero screenshot, and "use a similar font")

- **Font.** Their display face is FF Good Extra Condensed (Typekit, not free). Anton is the nearest Google face: single weight, extra-condensed, tall x-height, squared counters. Downloaded from Google's CSS endpoint and self-hosted (`assets/fonts/Anton-400.woff2`, 18 KB). Declared `font-weight: 100 900` so headings never get synthetic bold. Fallback Impact measured at 108 % of Anton's width, so the `BSD Fallback` face is `size-adjust: 92.4%`.
- **Hero composition** rebuilt to match the screenshot: three centred lines, solid white type (no outline word), photo pills (`.stk.pill`, rounded-rect crops of the real sign photos at cap height) and coloured discs (`.stk.disc`: lime star, blue "dots" lozenge, red bolt, gold dot-matrix arrow) sitting inline with the words. The whole group is vertically centred in one viewport with the lede and buttons pinned below. Phones wrap to "We Create / Award / Winning / Signs" with the fitter sizing by the widest word, so the type stays huge.
- **Old cutouts** (tilted white-bordered prints) are still used on the inner-page heroes as the floating top-right image.
- Lighthouse mobile after the change: Home 95, About 99, Gallery 88–90, CLS ≤ 0.05 on every page (the residual shift is the hero fitter setting its final size after the fonts resolve).

## 10. Fifth round: rolled back

The client preferred the previous hero and page design, so round 9 was reverted in full: Big Shoulders Display is the display face again, the hero is the tilted-cutout + sticker collage on black, the marquee matches it, and the Anton file was removed. The section alternation, header re-theming, motion system and width-first hero fitter from rounds 8 and 8a remain.

## 11. Header at page top

Client saw a grey bar above the black hero. Two causes: the bar's 78 % black was sitting over the white page ground, and the theme sampler looked at a point inside the bar itself, where no section exists, so it stayed light. Now the bar samples the section 1 px below it, and while unscrolled it is fully opaque in that section's colour (solid black on the home and inner pages, seamless with the hero). Once scrolled it returns to the translucent blurred bar that follows the section underneath.
