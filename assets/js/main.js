/* Dempster Designs prototype — vanilla JS, no dependencies.
   1. Hero fitter: sizes each word-stack so it fits the viewport width AND height (no cut-off hero)
   2. Intro + scroll reveals (IntersectionObserver), staggered
   3. Header theme follows the section under it (light / dark)
   4. Mobile nav, marquee pause, video play/pause, lightbox, fixed CTA pill, parallax, contact form
   Everything motion-related is skipped under prefers-reduced-motion.
*/
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var headH = 72;
  var head = document.querySelector('.site-head');
  var raf = function (fn) { var t = false; return function () { if (t) return; t = true; requestAnimationFrame(function () { t = false; fn(); }); }; };

  /* 1. Hero fitter ------------------------------------------------------ */
  var stacks = Array.prototype.slice.call(document.querySelectorAll('.stack[data-fit]'));
  function fitStack(stack) {
    var frac = parseFloat(stack.getAttribute('data-fit')) || 0.9;
    stack.style.removeProperty('--hf');
    var base = parseFloat(getComputedStyle(stack).fontSize);
    // 1. width: measure the widest line at the base size (lines shrink to content while measuring)
    var prevAlign = stack.style.alignItems;
    stack.style.alignItems = 'flex-start';
    var lines = stack.querySelectorAll('.line'), widest = 0;
    for (var i = 0; i < lines.length; i++) widest = Math.max(widest, lines[i].getBoundingClientRect().width);
    stack.style.alignItems = prevAlign;
    var box = stack.clientWidth;
    var hf = widest > 0 ? base * (box / widest) * 0.985 : base;
    // 2. height: everything in the stack is em-based, so height scales linearly with font size
    stack.style.setProperty('--hf', hf + 'px');
    var availH = (window.innerHeight - headH) * frac;
    var h = stack.offsetHeight;
    if (h > availH) hf = hf * (availH / h);
    hf = Math.max(hf, 44);
    stack.style.setProperty('--hf', Math.round(hf * 10) / 10 + 'px');
  }
  var lastW = 0, lastH = 0;
  function fitAll(force) {
    var w = window.innerWidth, h = window.innerHeight;
    if (!force && w === lastW && Math.abs(h - lastH) < 140) return; // ignore mobile address-bar jitter
    lastW = w; lastH = h;
    stacks.forEach(fitStack);
  }
  fitAll(true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitAll(true); start(); }); else start();
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { fitAll(false); }, 120); });

  /* 2. Intro + reveals --------------------------------------------------- */
  function stagger(container, selector) {
    var kids = container.querySelectorAll(selector);
    for (var i = 0; i < kids.length; i++) kids[i].style.setProperty('--i', i);
  }
  var started = false;
  function start() {
    if (started) return; started = true;
    document.querySelectorAll('.intro').forEach(function (el) {
      stagger(el, '.w'); stagger(el, '.stk'); stagger(el, '.hero-foot > *');
      requestAnimationFrame(function () { el.classList.add('is-in'); });
    });
    document.querySelectorAll('.page-hero').forEach(function (el) { requestAnimationFrame(function () { el.classList.add('is-in'); }); });
  }
  document.querySelectorAll('[data-stagger]').forEach(function (c) {
    var sel = c.getAttribute('data-stagger') || ':scope > *';
    var kids = c.querySelectorAll(sel), n = parseInt(c.getAttribute('data-stagger-mod') || '0', 10);
    for (var i = 0; i < kids.length; i++) kids[i].style.setProperty('--i', n ? i % n : i);
  });
  var revealEls = document.querySelectorAll('.reveal, .reveal-x, .reveal-scale');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    // safety: never leave content hidden
    setTimeout(function () { revealEls.forEach(function (el) { var r = el.getBoundingClientRect(); if (r.top < window.innerHeight) el.classList.add('is-in'); }); }, 2500);
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* 3. Header theme + stuck state --------------------------------------- */
  var themed = Array.prototype.slice.call(document.querySelectorAll('[data-theme]'));
  var onScroll = raf(function () {
    if (!head) return;
    head.classList.toggle('is-stuck', window.scrollY > 8);
    var y = headH + 1; // sample just below the bar: the section touching it decides the bar's theme
    var cur = null;
    for (var i = 0; i < themed.length; i++) {
      var r = themed[i].getBoundingClientRect();
      if (r.top <= y && r.bottom > y) { cur = themed[i]; break; }
    }
    if (cur) head.classList.toggle('on-dark', cur.getAttribute('data-theme') === 'dark');
    if (fab) fab.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.6);
    parallax();
  });
  // fallback, run on every scroll event (not throttled): anything already scrolled past is revealed even if the observer missed it
  function revealPassed() {
    var vh = window.innerHeight;
    for (var k = 0; k < revealEls.length; k++) {
      if (!revealEls[k].classList.contains('is-in') && revealEls[k].getBoundingClientRect().top < vh * 0.92) revealEls[k].classList.add('is-in');
    }
  }
  window.addEventListener('scroll', function () { onScroll(); revealPassed(); }, { passive: true });

  /* 4a. Nav --------------------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('.lbl').textContent = open ? 'Close' : 'Menu';
    };
    toggle.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); toggle.focus(); } });
  }

  /* 4b. Marquee ----------------------------------------------------------- */
  var marquee = document.querySelector('.marquee');
  var mBtn = marquee && marquee.querySelector('.marquee-btn');
  if (marquee && mBtn) {
    if (reduceMotion) marquee.classList.add('is-paused');
    mBtn.addEventListener('click', function () {
      var paused = marquee.classList.toggle('is-paused');
      mBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      mBtn.setAttribute('aria-label', paused ? 'Play marquee' : 'Pause marquee');
    });
  }

  /* 4c. Video ------------------------------------------------------------- */
  var band = document.querySelector('.video-band');
  var video = band && band.querySelector('video');
  var vBtn = band && band.querySelector('.vid-btn');
  if (band && video && vBtn) {
    var setState = function (playing) { vBtn.setAttribute('aria-pressed', playing ? 'true' : 'false'); vBtn.setAttribute('aria-label', playing ? 'Pause video' : 'Play video'); };
    var tryPlay = function () { var p = video.play(); if (p && p.catch) p.catch(function () { setState(false); }); };
    video.addEventListener('play', function () { setState(true); });
    video.addEventListener('pause', function () { setState(false); });
    var userPaused = false;
    vBtn.addEventListener('click', function () { if (video.paused) { userPaused = false; tryPlay(); } else { userPaused = true; video.pause(); } });
    if (!reduceMotion && 'IntersectionObserver' in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { if (video.preload === 'none') video.preload = 'auto'; if (!userPaused) tryPlay(); }
          else if (!video.paused) video.pause();
        });
      }, { threshold: 0.35 });
      vio.observe(band);
    } else { setState(false); }
  }

  /* 4d. Lightbox ---------------------------------------------------------- */
  var lb = document.querySelector('dialog.lb');
  if (lb && typeof lb.showModal === 'function') {
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption'), lbClose = lb.querySelector('.lb-close'), opener = null;
    document.querySelectorAll('.masonry button[data-full]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        opener = btn; lbImg.src = btn.getAttribute('data-full'); lbImg.alt = btn.querySelector('img').alt;
        lbCap.textContent = btn.getAttribute('data-caption') || lbImg.alt; lb.showModal();
      });
    });
    lbClose.addEventListener('click', function () { lb.close(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener('close', function () { lbImg.removeAttribute('src'); if (opener) opener.focus(); });
  }

  /* 4e. Fixed CTA pill ---------------------------------------------------- */
  var fab = document.querySelector('.fab');

  /* 4f. Parallax (backdrops + full-bleed photos) -------------------------- */
  var px = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  function parallax() {
    if (reduceMotion || window.innerWidth < 640) return;
    var vh = window.innerHeight;
    px.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var f = parseFloat(el.getAttribute('data-parallax')) || 0.15;
      var centre = r.top + r.height / 2 - vh / 2;
      el.style.setProperty('--py', Math.round(-centre * f) + 'px');
    });
  }

  /* 4g. Contact form -------------------------------------------------------- */
  // Netlify Forms: a URL-encoded POST to the site itself, including the hidden form-name field.
  // Who gets emailed is set in the Netlify dashboard (Forms → Form submission notifications).
  // Select by name, not [data-netlify]: Netlify strips that attribute from the deployed HTML.
  var form = document.querySelector('form[name="contact"]');
  var fStatus = form && form.querySelector('.form-status');
  var fBtn = form && form.querySelector('button[type="submit"]');
  if (form && fStatus && fBtn && window.fetch && window.FormData && window.URLSearchParams) {
    var fLabel = fBtn.textContent;
    var say = function (msg, state) { fStatus.textContent = msg; fStatus.className = 'form-status' + (state ? ' is-' + state : ''); };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      fBtn.disabled = true; fBtn.textContent = 'Sending…'; say('', '');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          form.reset();
          say('Thanks! Your message has been sent. We’ll be in touch shortly.', 'ok');
        })
        .catch(function () { say('Sorry, your message could not be sent. Please try again, or call us at (248) 398-9999.', 'err'); })
        .then(function () { fBtn.disabled = false; fBtn.textContent = fLabel; });
    });
  }

  /* 5. Year --------------------------------------------------------------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = String(new Date().getFullYear());

  onScroll();
})();
