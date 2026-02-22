/* ===========================
   ROOSTER RUN VENUE - SCRIPTS
   Multi-page support
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  var mobileToggle = document.getElementById('mobileToggle');
  var mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // --- Header scroll effect ---
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Smooth scroll for same-page anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = document.getElementById('header').offsetHeight;
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // --- Scroll-in animations ---
  var animateElements = document.querySelectorAll(
    '.amenity-card, .area-card, .event-card, .event-showcase-card, .step-card, .intro-card, ' +
    '.split-text, .split-image, .cabin-feature, .offering-card, .schedule-card, .rule-card, ' +
    '.value-card, .wedding-feature, .faq-item, .event-amenity, .lake-stat, .timeline-item, ' +
    '.gallery-category-section .photo-gallery-grid'
  );

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animateElements.forEach(function (el) {
      el.classList.add('animate-ready');
      observer.observe(el);
    });
  }

  // --- Handle hash navigation from other pages ---
  if (window.location.hash) {
    setTimeout(function () {
      var target = document.querySelector(window.location.hash);
      if (target) {
        var headerHeight = document.getElementById('header').offsetHeight;
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    }, 100);
  }

  // --- Photo galleries and photo slots ---
  // Photos are now handled directly in the HTML with onload/onerror attributes.
  // No JavaScript needed — just drop correctly named .jpg files into the photos/ folder.
  // See the HTML comments in each page for the exact filenames.

});
