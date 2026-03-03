/* =========================================================
   N&N Poultry Palace — main.js
   Premium interactions: Scroll sequences, Custom Cursor, Magnetic Buttons
   ========================================================= */
'use strict';

/**
 * ── Custom Cursor ──
 * Magnetic movement for the cursor and a follower element.
 */
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // Smooth follower movement
  function render() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(render);
  }
  render();

  // Hover states
  document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/**
 * ── Magnetic Buttons ──
 * Buttons that subtly pull towards the cursor.
 */
function initMagneticButtons() {
  const btns = document.querySelectorAll('.btn-magnetic');
  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

/**
 * ── Background Image Sequence (Canvas Optimized) ──
 * Renders a sequence of 26 images to a fixed canvas for maximum performance.
 */
function initBackgroundSequence() {
  const canvas = document.getElementById('hero-sequence-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const frameCount = 26;
  const images = [];
  let currentFrame = 1;
  let imagesLoaded = 0;

  // Preload frames
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const frameNum = String(i).padStart(3, '0');
    img.src = `images/hero-sequence/ezgif-frame-${frameNum}.jpg`;
    img.onload = () => {
      imagesLoaded++;
      if (i === 1) renderFrame(1); // Show first frame immediately once loaded
    };
    images[i] = img;
  }

  function renderFrame(index) {
    if (!images[index] || images[index].naturalWidth === 0) return;

    // Cover logic
    const img = images[index];
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, newWidth, newHeight);
  }

  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderFrame(currentFrame);
  }

  function handleScroll() {
    const scrollPos = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollPos / totalHeight, 1);
    const frameIndex = Math.max(1, Math.min(Math.floor(progress * frameCount), frameCount));

    if (frameIndex !== currentFrame) {
      currentFrame = frameIndex;
      requestAnimationFrame(() => renderFrame(currentFrame));
    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initial setup
  handleResize();
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Header scroll behaviour ── */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile hamburger ── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      btn.classList.remove('open');
      mobileNav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80; // fixed header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ── WhatsApp link builder ── */
function initWhatsApp() {
  const WHATSAPP_NUMBER = '254700000000';
  const btns = document.querySelectorAll('[data-whatsapp]');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = btn.dataset.product || 'Eggs';
      const msg = encodeURIComponent(`Hi N&N Poultry Palace — I'd like to order: ${product}. Please get in touch!`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
    });
  });
}

/* ── Init everything on DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initMagneticButtons();
  initBackgroundSequence();
  initHeader();
  initHamburger();
  initSmoothScroll();
  initScrollReveal();
  initWhatsApp();

  // Set year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
