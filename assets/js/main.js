const header = document.querySelector('#site-header');
const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileLinks = document.querySelectorAll('#mobile-menu a');
const currentYear = document.querySelector('#current-year');
const revealElements = document.querySelectorAll('[data-reveal]');

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 18);
};

const closeMobileMenu = () => {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.add('hidden');
  menuToggle.setAttribute('aria-expanded', 'false');
};

const toggleMobileMenu = () => {
  if (!mobileMenu || !menuToggle) return;

  const isHidden = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', !isHidden);
  menuToggle.setAttribute('aria-expanded', String(isHidden));
};

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMobileMenu);
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.1
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add('is-visible');
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMobileMenu();
  }
});
