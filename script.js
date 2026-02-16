/* ===========================
   ROOSTER RUN VENUE - SCRIPTS
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

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
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Photo Carousel ---
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (track && prevBtn && nextBtn) {
    var currentSlide = 0;
    var slides = track.querySelectorAll('.carousel-slide');
    var totalSlides = slides.length;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentSlide = index;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    }

    prevBtn.addEventListener('click', function () {
      goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', function () {
      goToSlide(currentSlide + 1);
    });

    // Auto-advance every 5 seconds
    var autoSlide = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, 5000);

    // Pause auto-advance on hover
    track.addEventListener('mouseenter', function () {
      clearInterval(autoSlide);
    });

    track.addEventListener('mouseleave', function () {
      autoSlide = setInterval(function () {
        goToSlide(currentSlide + 1);
      }, 5000);
    });
  }

  // --- Gallery Filter Tabs ---
  var galleryTabs = document.querySelectorAll('.gallery-tab');
  var galleryItems = document.querySelectorAll('.gallery-item');

  galleryTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      // Update active tab
      galleryTabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');

      // Filter gallery items
      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // --- Smooth scroll for anchor links ---
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

  // --- Contact Form Handling ---
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Collect form data
      var formData = new FormData(contactForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      // Show confirmation (replace with actual submission logic)
      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      btn.style.background = '#4a8c62';
      btn.style.borderColor = '#4a8c62';

      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // --- Scroll-in animations ---
  var animateElements = document.querySelectorAll('.amenity-card, .pricing-card, .step-card, .testimonial-card, .split-text, .split-image');

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

});
