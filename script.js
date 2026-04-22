const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach((item) => observer.observe(item));

const spinBtn = document.getElementById('logoSpinBtn');
const heroLogo = document.getElementById('heroLogo');

if (spinBtn && heroLogo) {
  spinBtn.addEventListener('click', () => {
    heroLogo.classList.remove('spin-3d');
    void heroLogo.offsetWidth;
    heroLogo.classList.add('spin-3d');
  });

  heroLogo.addEventListener('animationend', () => {
    heroLogo.classList.remove('spin-3d');
  });
}
