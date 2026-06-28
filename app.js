/* ════════════════════════════════════════════════════════════
   TONY BASKAR Y · PORTFOLIO 2026 · app.js
   Apple-style animations, particles, all interactions
   ════════════════════════════════════════════════════════════ */
'use strict';

/* ── LOADER ──────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('out');
      setTimeout(() => loader.remove(), 800);
    }
    triggerHero();
    initCounters();
    initSkillBars();
  }, 1600);
});

function triggerHero() {
  document.querySelectorAll('#hero .ios-fade-up, #hero .ios-fade-left').forEach(el => {
    el.classList.add('in');
  });
}

/* ── CUSTOM CURSOR ───────────────────────────────────────── */
(function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  if (!window.matchMedia('(pointer:fine)').matches) {
    dot.style.display = ring.style.display = 'none'; return;
  }
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
  }, { passive: true });
  (function trackRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(trackRing);
  })();
  document.querySelectorAll('a,button,.skill-item,.proj-card,.ach-card,.cert-card,.testi-card,.filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
  });
})();

/* ── NAVBAR ──────────────────────────────────────────────── */
const nav = document.getElementById('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  if (nav) nav.classList.toggle('scrolled', sy > 40);
  lastScroll = sy;
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('navDrawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    drawer.classList.remove('open');
    hamburger.classList.remove('open');
  }));
}

/* ── PARTICLE CANVAS ─────────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];
  const C = '0,119,168';

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = canvas.offsetParent ? canvas.offsetParent.offsetHeight : window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildPts(); }, { passive: true });

  class Pt {
    constructor(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : (Math.random() > .5 ? -4 : H + 4);
      this.r = Math.random() * 1.3 + .4;
      this.vx = (Math.random() - .5) * .25;
      this.vy = (Math.random() - .5) * .25;
      this.a = Math.random() * .4 + .08;
    }
    move() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -4 || this.x > W + 4 || this.y < -4 || this.y > H + 4)
        Object.assign(this, new Pt(false));
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${C},${this.a})`;
      ctx.fill();
    }
  }

  function buildPts() {
    const n = Math.min(Math.floor(W * H / 7500), 170);
    pts = Array.from({ length: n }, () => new Pt(true));
  }
  buildPts();

  let mx = W / 2, my = H / 2;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  (function frame() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < pts.length; i++) {
      pts[i].move();
      pts[i].draw();
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 8500) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(${C},${(1 - d2 / 8500) * .07})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
      const mdx = pts[i].x - mx, mdy = pts[i].y - my;
      const md2 = mdx * mdx + mdy * mdy;
      if (md2 < 18000) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(mx, my);
        ctx.strokeStyle = `rgba(${C},${(1 - md2 / 18000) * .2})`;
        ctx.lineWidth = .7;
        ctx.stroke();
      }
    }
    requestAnimationFrame(frame);
  })();
})();

/* ── TYPEWRITER ──────────────────────────────────────────── */
(function initTypewriter() {
  const el = document.getElementById('roleType');
  if (!el) return;
  const roles = [
    'Tech Enthusiast',
    'Technical Trainer',
    'Computer Vision Dev',
    'Full Stack Builder',
    'UI/UX Designer',
    'Gold Medalist 🥇',
  ];
  let ri = 0, ci = 0, deleting = false;
  function tick() {
    const cur = roles[ri];
    if (!deleting) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { setTimeout(() => { deleting = true; tick(); }, 2200); return; }
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 42 : 72);
  }
  setTimeout(tick, 2000);
})();

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
  });
}, { threshold: .1, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.ios-fade-up:not(#hero *), .ios-fade-left:not(#hero *)').forEach(el => revealIO.observe(el));

/* ── STAGGER OBSERVER ────────────────────────────────────── */
function observeStagger() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const si = parseInt(el.style.getPropertyValue('--si') || '0');
      setTimeout(() => el.classList.add('in'), si * 60);
      io.unobserve(el);
    });
  }, { threshold: .1, rootMargin: '0px 0px -28px 0px' });
  document.querySelectorAll('.ios-stagger:not(.in)').forEach(el => io.observe(el));
}
observeStagger();
window.observeStagger = observeStagger;

/* ── SKILL BARS ──────────────────────────────────────────── */
function initSkillBars() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const card = e.target;
      const pct = card.dataset.pct || '80';
      const fill = card.querySelector('.sk-fill');
      if (fill) setTimeout(() => { fill.style.width = pct + '%'; }, 180);
      io.unobserve(card);
    });
  }, { threshold: .25 });
  document.querySelectorAll('.skill-item').forEach(c => io.observe(c));
}

/* ── COUNTERS ────────────────────────────────────────────── */
function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseInt(el.dataset.target) || 0;
  const dur = 1800;
  const step = target / (dur / 16);
  let cur = 0;
  const t = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = Math.floor(cur);
    if (cur >= target) clearInterval(t);
  }, 16);
}

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target); io.unobserve(e.target); }
    });
  }, { threshold: .4 });
  document.querySelectorAll('[data-target]').forEach(el => io.observe(el));
}

// Called by Firebase when profile updates counter values
window._reinitCounters = function () {
  document.querySelectorAll('[data-target]').forEach(el => {
    delete el.dataset.done;
  });
  initCounters();
};

/* ── 3D TILT ─────────────────────────────────────────────── */
function initTilt() {
  document.querySelectorAll('.proj-card, .ach-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      if (window.innerWidth < 768) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
      card.style.transition = 'transform .08s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1)';
    });
  });
}
initTilt();
window.initTilt = initTilt;

/* ── CARD HOVER GLOW ─────────────────────────────────────── */
document.addEventListener('mousemove', e => {
  document.querySelectorAll('.skill-item, .testi-card, .counter-box').forEach(card => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (x > 0 && x < r.width && y > 0 && y < r.height) {
      card.style.setProperty('--gx', x + 'px');
      card.style.setProperty('--gy', y + 'px');
    }
  });
}, { passive: true });

/* ── VIDEO HOVER PLAY ────────────────────────────────────── */
function initVideoHover() {
  document.querySelectorAll('.proj-vid').forEach(v => {
    const card = v.closest('.proj-card');
    if (!card) return;
    card.addEventListener('mouseenter', () => v.play().catch(() => { }));
    card.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
  });
}
initVideoHover();
window.initVideoHover = initVideoHover;

/* ── CERT CAROUSEL ───────────────────────────────────────── */
(function initCarousel() {
  const track = document.getElementById('certTrack');
  const prev = document.getElementById('certPrev');
  const next = document.getElementById('certNext');
  const dotsW = document.getElementById('certDots');
  if (!track) return;

  const cards = () => track.querySelectorAll('.cert-card');
  let idx = 0, auto;

  function buildDots() {
    if (!dotsW) return;
    dotsW.innerHTML = '';
    cards().forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'cert-dot' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', `Certificate ${i + 1}`);
      btn.addEventListener('click', () => goTo(i));
      dotsW.appendChild(btn);
    });
  }

  function syncDots() {
    dotsW && dotsW.querySelectorAll('.cert-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  function goTo(i) {
    const cs = cards();
    if (!cs.length) return;
    idx = ((i % cs.length) + cs.length) % cs.length;
    track.scrollTo({ left: cs[idx].offsetLeft, behavior: 'smooth' });
    syncDots();
  }

  prev && prev.addEventListener('click', () => goTo(idx - 1));
  next && next.addEventListener('click', () => goTo(idx + 1));

  function startAuto() { auto = setInterval(() => goTo(idx + 1), 3800); }
  function stopAuto() { clearInterval(auto); }
  startAuto();
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);

  let st;
  track.addEventListener('scroll', () => {
    clearTimeout(st);
    st = setTimeout(() => {
      const cs = cards();
      let best = 0, minD = Infinity;
      cs.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - track.scrollLeft);
        if (d < minD) { minD = d; best = i; }
      });
      idx = best; syncDots();
    }, 80);
  }, { passive: true });

  buildDots();
})();

/* ── LIGHTBOX ────────────────────────────────────────────── */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  const close = document.getElementById('lbClose');
  if (!lb || !img) return;

  function open(src) {
    img.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 300);
  }

  // Attach to all current lightbox triggers
  document.querySelectorAll('.lightbox-trigger').forEach(el => {
    // Remove old listener to avoid duplicates
    el.replaceWith(el.cloneNode(true));
  });
  document.querySelectorAll('.lightbox-trigger').forEach(el => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => open(el.src));
  });

  close && close.addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
}
initLightbox();
window.initLightbox = initLightbox;

/* ── PROFILE PHOTO FLOAT ─────────────────────────────────── */
(function floatPhoto() {
  const img = document.querySelector('.profile-img');
  if (!img) return;
  let t = 0;
  (function f() {
    t += .011;
    img.style.transform = `translateY(${Math.sin(t) * 7}px)`;
    requestAnimationFrame(f);
  })();
})();

/* ── PARALLAX BLOBS ──────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  document.querySelectorAll('.hero-glow').forEach((g, i) => {
    g.style.transform = `translateY(${sy * (.05 + i * .03)}px)`;
  });
}, { passive: true });

/* ── ACTIVE NAV LINKS ────────────────────────────────────── */
(function initActiveNav() {
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { threshold: .4 });
  secs.forEach(s => io.observe(s));
})();

/* ── SMOOTH ANCHOR SCROLL ────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ── SECTION ENTRANCE — stagger children on scroll ──────── */
(function sectionEntrance() {
  const secIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.ios-stagger:not(.in)').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), i * 55);
      });
      secIO.unobserve(e.target);
    });
  }, { threshold: .08 });
  document.querySelectorAll('.section, #achievements, #projects').forEach(s => secIO.observe(s));
})();

/* ── ABOUT CARDS — stagger on reveal ────────────────────── */
(function aboutStagger() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.about-card').forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }, i * 100 + 200);
      });
      io.unobserve(e.target);
    });
  }, { threshold: .2 });
  const aboutGrid = document.querySelector('.about-grid');
  if (aboutGrid) {
    aboutGrid.querySelectorAll('.about-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .5s ease, transform .5s cubic-bezier(.34,1.56,.64,1)';
    });
    io.observe(aboutGrid);
  }
})();

/* ── FILTER BUTTONS — animate grid items out/in ─────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Brief fade for grid swap
    const grid = document.getElementById('projGrid');
    if (grid) {
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(8px)';
      grid.style.transition = 'opacity .2s ease, transform .2s ease';
      setTimeout(() => {
        grid.style.opacity = '1';
        grid.style.transform = '';
      }, 250);
    }
  });
});

/* ── CERT CARD HOVER — cursor sync ──────────────────────── */
document.querySelectorAll('.cert-card').forEach(c => {
  c.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
  c.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
});

console.log('%c bAsKaR. 2026 ✓ Loaded', 'color:#00b4d8;font-size:13px;font-weight:800;font-family:monospace');