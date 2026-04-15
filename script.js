/* ============================================
   Ateliê Doce Encanto — Interactions & Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.querySelector('.navbar');
  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll);

  // ---------- Mobile Menu Toggle ----------
  const toggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-nav');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      toggle.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }

  // ---------- Scroll Animations (Intersection Observer) ----------
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- Staggered animation for gallery items ----------
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  // ---------- Staggered animation for testimonial cards ----------
  const cards = document.querySelectorAll('.depoimento-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });

});
