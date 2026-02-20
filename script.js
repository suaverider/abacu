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
    '.value-card, .wedding-feature, .faq-item, .event-amenity, .lake-stat, .timeline-item'
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

  // --- Auto-loading photo galleries ---
  // Loads numbered photos from a folder automatically.
  // Just drop files named "catch-1.jpg", "catch-2.jpg", etc. into photos/catches/
  // or "wedding-1.jpg", "wedding-2.jpg", etc. into photos/weddings/
  // The first photo is always the big featured one.
  function loadGallery(gridId, emptyId, folder, prefix, altText) {
    var grid = document.getElementById(gridId);
    var emptyMsg = document.getElementById(emptyId);
    if (!grid) return;

    var count = 0;

    function tryLoad(num) {
      var img = new Image();
      img.onload = function () {
        count++;
        var card = document.createElement('div');
        card.className = 'gallery-card has-photo';
        if (num === 1) card.className += ' featured';
        var photo = document.createElement('img');
        photo.src = folder + prefix + num + '.jpg';
        photo.alt = altText + ' #' + num;
        card.appendChild(photo);
        grid.appendChild(card);
        tryLoad(num + 1);
      };
      img.onerror = function () {
        if (count === 0 && emptyMsg) {
          emptyMsg.style.display = 'block';
        }
      };
      img.src = folder + prefix + num + '.jpg';
    }

    tryLoad(1);
  }

  // Fishing catches gallery (photos/catches/catch-1.jpg, catch-2.jpg, ...)
  loadGallery('catches-gallery', 'catches-empty', 'photos/catches/', 'catch-', 'Fish caught at Rooster Run');

  // Weddings gallery (photos/weddings/wedding-1.jpg, wedding-2.jpg, ...)
  loadGallery('weddings-gallery', 'weddings-empty', 'photos/weddings/', 'wedding-', 'Wedding at Rooster Run');

  // Auto-show wedding feature photo at top of weddings page
  // Uses wedding-1.jpg from photos/weddings/ if it exists
  var weddingFeatureSlot = document.getElementById('wedding-feature-slot');
  if (weddingFeatureSlot) {
    var testImg = new Image();
    testImg.onload = function () {
      weddingFeatureSlot.classList.add('has-photo');
      weddingFeatureSlot.querySelector('img').src = 'photos/weddings/wedding-1.jpg';
    };
    testImg.src = 'photos/weddings/wedding-1.jpg';
  }

  // Auto-show firepit photo on events page if it exists in photos/ folder
  var firepitSlot = document.getElementById('firepit-slot');
  if (firepitSlot) {
    var firepitImg = new Image();
    firepitImg.onload = function () {
      firepitSlot.classList.add('has-photo');
    };
    firepitImg.src = 'photos/firepit.jpg';
  }

});
