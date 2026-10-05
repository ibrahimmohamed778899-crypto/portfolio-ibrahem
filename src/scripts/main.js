/**
 * ==========================================================================
 * PORTFOLIO CLIENT ENGINE — IBRAHEM MOHAMED IBRAHEM
 * Compiled from src/scripts/main.ts (ES2020)
 * Technology: Vanilla JavaScript (ES6+), GSAP 3 + ScrollTrigger
 * ==========================================================================
 */
"use strict";

class PortfolioApp {
  constructor() {
    this.currentTheme = 'dark';
    this.currentLang = 'ar';
    this.testimonialIndex = 0;
    this.testimonialInterval = null;
    this.autoPlayDelay = 5500;
    this.isReducedMotion = false;
    this.goToTestimonialSlide = () => { };
    this.restartTestimonialAutoPlay = () => { };
    this.init();
  }

  /**
   * Initializes all application modules after DOM ready
   */
  init() {
    this.checkReducedMotion();
    this.initLanguageSystem();
    this.initThemeSystem();
    this.initScrollProgress();
    this.initMobileNavigation();
    this.initActiveNavSpy();
    this.initStatsCounters();
    this.initTestimonialsCarousel();
    // FIX: the marquee clone (which changes page layout/height) must run
    // BEFORE GSAP/ScrollTrigger measures section positions, otherwise
    // ScrollTrigger caches stale coordinates and later sections (skills,
    // services, etc.) can end up stuck at opacity:0.
    this.initMarqueePause();
    this.initGsapAnimations();
  }

  /**
   * Checks if user has requested reduced motion in OS preferences
   */
  checkReducedMotion() {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.isReducedMotion = motionQuery.matches;
    motionQuery.addEventListener('change', (e) => {
      this.isReducedMotion = e.matches;
    });
  }

  /* --------------------------------------------------------------------------
     0. BILINGUAL LANGUAGE ENGINE (ARABIC & ENGLISH)
     -------------------------------------------------------------------------- */
  initLanguageSystem() {
    const savedLang = localStorage.getItem('portfolio_lang');
    let initialLang = 'ar';

    if (savedLang === 'ar' || savedLang === 'en') {
      initialLang = savedLang;
    } else {
      // Auto-detect browser language: if Arabic locale, choose 'ar', else 'ar' or 'en'
      const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
      initialLang = browserLang.startsWith('ar') ? 'ar' : 'en';
    }

    this.applyLanguage(initialLang);

    // Navbar Language Toggle Button
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.applyLanguage(nextLang);
      });
    }

    // Mobile Drawer Language Button
    const mobileLangBtn = document.getElementById('mobile-lang-toggle-btn');
    if (mobileLangBtn) {
      mobileLangBtn.addEventListener('click', () => {
        const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.applyLanguage(nextLang);
      });
    }
  }

  /**
   * Applies the selected language across all UI elements, HTML attributes, and metadata
   */
  applyLanguage(lang) {
    this.currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('portfolio_lang', lang);

    // Update Language Toggle Button UI
    const langCodeText = document.getElementById('lang-code-text');
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langCodeText) {
      // Button shows the other language to switch to
      langCodeText.textContent = lang === 'ar' ? 'English' : 'عربي';
    }
    if (langToggleBtn) {
      const ariaText = lang === 'ar' ? 'Switch to English' : 'التبديل إلى اللغة العربية';
      langToggleBtn.setAttribute('aria-label', ariaText);
      langToggleBtn.setAttribute('title', ariaText);
    }

    const mobileLangLabel = document.getElementById('mobile-lang-current-label');
    if (mobileLangLabel) {
      mobileLangLabel.textContent = lang === 'ar' ? 'اللغة: العربية (English)' : 'Language: English (عربي)';
    }

    // Update Theme Toggle Tooltip/Aria based on active language
    this.updateThemeButtonLabels();

    // Check if TRANSLATIONS dictionary is loaded
    if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) {
      return;
    }

    const t = TRANSLATIONS[lang];

    // Update Page Title and Meta Tags
    if (t.meta) {
      document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', t.meta.ogTitle);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', t.meta.ogDesc);
    }

    // Update Text Content on all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const keyPath = el.getAttribute('data-i18n');
      if (!keyPath) return;
      const value = keyPath.split('.').reduce((acc, part) => acc && acc[part], t);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    // Update Accessible Labels on elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const keyPath = el.getAttribute('data-i18n-aria');
      if (!keyPath) return;
      const value = keyPath.split('.').reduce((acc, part) => acc && acc[part], t);
      if (typeof value === 'string') {
        el.setAttribute('aria-label', value);
      }
    });

    // Refresh ScrollTrigger coordinates when layout reflows
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  /**
   * Updates Theme Button tooltip and aria-label according to the current language
   */
  updateThemeButtonLabels() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (!themeToggleBtn) return;
    const isDark = this.currentTheme === 'dark';
    const lang = this.currentLang || 'ar';
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang] && TRANSLATIONS[lang].nav) {
      const dict = TRANSLATIONS[lang].nav;
      const label = isDark ? dict.themeToLight : dict.themeToDark;
      themeToggleBtn.setAttribute('aria-label', label);
      themeToggleBtn.setAttribute('title', label);
    } else {
      const label = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
      themeToggleBtn.setAttribute('aria-label', label);
      themeToggleBtn.setAttribute('title', label);
    }
  }

  /* --------------------------------------------------------------------------
     1. DUAL THEME ENGINE (LIGHT & DARK MODE)
     -------------------------------------------------------------------------- */
  initThemeSystem() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Default to stored theme, or dark mode for cinematic video editor, or system preference
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.applyTheme(initialTheme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
      });
    }

    // Listen to OS theme changes if user has not explicitly chosen
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /**
   * Applies the theme attribute smoothly and updates storage & accessibility
   */
  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeButtonLabels();
  }

  /* --------------------------------------------------------------------------
     2. SCROLL PROGRESS INDICATOR
     -------------------------------------------------------------------------- */
  initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${scrollPercent}%`;
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     3. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  initMobileNavigation() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburgerBtn || !mobileDrawer) return;

    const toggleMenu = (open) => {
      const shouldOpen = open !== undefined ? open : !hamburgerBtn.classList.contains('active');
      hamburgerBtn.classList.toggle('active', shouldOpen);
      mobileDrawer.classList.toggle('open', shouldOpen);
      hamburgerBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    };

    hamburgerBtn.addEventListener('click', () => toggleMenu());

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburgerBtn.classList.contains('active')) {
        toggleMenu(false);
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. ACTIVE NAVIGATION LINK SPY
     -------------------------------------------------------------------------- */
  initActiveNavSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + 160;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     5. DYNAMIC STATS NUMBER COUNTER ANIMATION
     -------------------------------------------------------------------------- */
  initStatsCounters() {
    const counterElements = document.querySelectorAll('.stat-counter');
    if (counterElements.length === 0) return;

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out expo function for sleek counting
        const easeOut = 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeOut * target);

        el.textContent = `${prefix}${currentCount}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      };

      requestAnimationFrame(updateCount);
    };

    // Use IntersectionObserver or ScrollTrigger
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      counterElements.forEach((el) => observer.observe(el));
    } else {
      counterElements.forEach((el) => animateCounter(el));
    }
  }

  /* --------------------------------------------------------------------------
     6. TESTIMONIALS CAROUSEL SLIDER (6 ARABIC REVIEWS)
     -------------------------------------------------------------------------- */
  initTestimonialsCarousel() {
    const track = document.getElementById('testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('testimonial-prev-btn');
    const nextBtn = document.getElementById('testimonial-next-btn');
    const dotsContainer = document.getElementById('testimonial-dots');

    if (!track || slides.length === 0) return;

    const totalSlides = slides.length;

    // Create dot indicators
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
        dot.addEventListener('click', () => {
          this.goToTestimonialSlide(i);
          this.restartTestimonialAutoPlay();
        });
        dotsContainer.appendChild(dot);
      }
    }

    const updateSlider = () => {
      track.style.transform = `translateX(-${this.testimonialIndex * 100}%)`;

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === this.testimonialIndex);
        });
      }
    };

    this.goToTestimonialSlide = (index) => {
      this.testimonialIndex = (index + totalSlides) % totalSlides;
      updateSlider();
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.goToTestimonialSlide(this.testimonialIndex - 1);
        this.restartTestimonialAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.goToTestimonialSlide(this.testimonialIndex + 1);
        this.restartTestimonialAutoPlay();
      });
    }

    // Auto play & pause on hover
    const startAutoPlay = () => {
      if (this.testimonialInterval) clearInterval(this.testimonialInterval);
      this.testimonialInterval = window.setInterval(() => {
        this.goToTestimonialSlide(this.testimonialIndex + 1);
      }, this.autoPlayDelay);
    };

    const stopAutoPlay = () => {
      if (this.testimonialInterval) {
        clearInterval(this.testimonialInterval);
        this.testimonialInterval = null;
      }
    };

    this.restartTestimonialAutoPlay = () => {
      stopAutoPlay();
      startAutoPlay();
    };

    const container = document.getElementById('testimonials-carousel-wrapper');
    if (container) {
      container.addEventListener('mouseenter', stopAutoPlay);
      container.addEventListener('mouseleave', startAutoPlay);
      container.addEventListener('touchstart', stopAutoPlay, { passive: true });
      container.addEventListener('touchend', startAutoPlay, { passive: true });
    }

    // Touch swipe support
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          this.goToTestimonialSlide(this.testimonialIndex + 1);
        } else {
          this.goToTestimonialSlide(this.testimonialIndex - 1);
        }
        this.restartTestimonialAutoPlay();
      }
    }, { passive: true });

    startAutoPlay();
  }

  /* --------------------------------------------------------------------------
     FAIL-SAFE: force every scroll-reveal target to its final visible state.
     This is the real fix for "sections sometimes never appear": those
     sections start at opacity:0 and rely ENTIRELY on GSAP successfully
     running to reveal them. If the visitor has "reduce motion" enabled in
     their OS/browser (this.isReducedMotion), or GSAP fails to load, or any
     unexpected error interrupts initGsapAnimations() partway through, the
     sections that were never reached stay invisible forever. This makes
     sure that can never happen.
     -------------------------------------------------------------------------- */
  forceRevealAllSections() {
    const revealSelectors = [
      '.navbar', '.hero-badge', '.hero-title', '.hero-tagline', '.hero-about-text',
      '.hero-stats-strip', '.hero-education-block', '.hero-cta-wrapper',
      '.profile-frame-container', '.hero-floating-badge', '.section-header',
      '.skill-card', '.timeline-card', '.timeline-node', '.service-card',
      '.testimonials-carousel-wrapper', '.contact-card-box',
    ];
    revealSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. GSAP + SCROLLTRIGGER ANIMATION SUITE
     -------------------------------------------------------------------------- */
  initGsapAnimations() {
    if (typeof gsap === 'undefined' || this.isReducedMotion) {
      console.log('GSAP disabled or prefers-reduced-motion active.');
      // FIX: previously this just returned, leaving every section stuck at
      // opacity:0 forever for any visitor with reduce-motion on. Now we make
      // sure everything is shown immediately, just without the animation.
      this.forceRevealAllSections();
      return;
    }

    try {

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // A. Hero Entrance Timeline
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl.from('.navbar', {
      y: -50,
      opacity: 0,
      duration: 0.9,
    })
      .from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.5')
      .from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4')
      .from('.hero-tagline', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.5')
      .from('.hero-about-text', {
        y: 20,
        opacity: 0,
        duration: 0.7,
      }, '-=0.4')
      .from('.hero-stats-strip', {
        scale: 0.95,
        y: 20,
        opacity: 0,
        duration: 0.7,
      }, '-=0.4')
      .from('.hero-education-block', {
        x: -20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-cta-wrapper', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.4')
      .from('.profile-frame-container', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.4)'
      }, '-=1.2')
      .from('.hero-floating-badge', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6');

    // B. Profile Parallax Float Effect
    const profileContainer = document.querySelector('.profile-frame-container');
    if (profileContainer) {
      window.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 1024) return;
        const xPercent = (e.clientX / window.innerWidth - 0.5) * 16;
        const yPercent = (e.clientY / window.innerHeight - 0.5) * 16;
        gsap.to(profileContainer, {
          x: xPercent,
          y: yPercent,
          duration: 1.2,
          ease: 'power1.out',
        });
      });
    }

    if (typeof ScrollTrigger === 'undefined') return;

    // C. Section Headers Scroll Stagger
    gsap.utils.toArray('.section-header').forEach((header) => {
      gsap.fromTo(header,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: header,
            start: 'top 90%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );
    });

    // D. Skills Cards - Smooth Reveal & Hover Preservation
    gsap.utils.toArray('.skill-card').forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 35 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 93%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: (index % 2) * 0.1,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );
    });

    // E. Timeline Entries Reveal & Node Lighting
    gsap.utils.toArray('.timeline-item').forEach((item) => {
      const card = item.querySelector('.timeline-card');
      const node = item.querySelector('.timeline-node');

      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );
      }

      if (node) {
        gsap.fromTo(node,
          { opacity: 0, scale: 0 },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              once: true,
            },
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            clearProps: 'transform,opacity',
          }
        );
      }
    });

    // F. Services Cards - Smooth Reveal & Hover Preservation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 35 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 93%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: (index % 3) * 0.08,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );
    });

    // G. Testimonials Box Entrance
    gsap.fromTo('.testimonials-carousel-wrapper',
      { opacity: 0, y: 30, scale: 0.98 },
      {
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 85%',
          once: true,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      }
    );

    // H. Contact Section Entrance
    gsap.fromTo('.contact-card-box',
      { opacity: 0, y: 35 },
      {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 85%',
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      }
    );

    // Safety Failsafe: Ensure cards and sections are never stuck at opacity: 0
    const ensureVisible = () => {
      document.querySelectorAll('.skill-card, .service-card, .timeline-card, .section-header, .testimonials-carousel-wrapper, .contact-card-box').forEach((el) => {
        if (window.getComputedStyle(el).opacity === '0') {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
    };

    setTimeout(ensureVisible, 1000);

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
      setTimeout(ensureVisible, 400);
    });

    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        setTimeout(() => {
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
          ensureVisible();
        }, 350);
      });
    });

    } catch (err) {
      console.error('GSAP animation setup failed, revealing content without animation:', err);
      this.forceRevealAllSections();
    }
  }

  /* --------------------------------------------------------------------------
     8. MARQUEE CLONE & HOVER PAUSE
     -------------------------------------------------------------------------- */
  initMarqueePause() {
    const track = document.querySelector('.software-marquee-track');
    if (!track) return;

    // Clone content once to make seamless infinite loop
    const originalChildren = Array.from(track.children);
    originalChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});