// Hamburger toggle animation
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.navbar-toggler');
  const icon = document.getElementById('toggleIcon');

  toggle.addEventListener('click', () => {
    icon.classList.toggle('open');
  });
});
document.getElementById('searchToggle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('searchBar').classList.toggle('show');
});
document.getElementById('modeToggle').addEventListener('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
});
ScrollReveal().reveal('.hero', { 
  delay: 200,
  origin: 'top',
  distance: '50px',
  duration: 1000,
  reset: true
});
ScrollReveal().reveal('.hero', { delay: 100, distance: '40px', origin: 'top' });
ScrollReveal().reveal('.category-card', { interval: 200, distance: '30px', origin: 'bottom' });
ScrollReveal().reveal('.p-4', { interval: 200, distance: '30px', origin: 'bottom' });
ScrollReveal().reveal('.reveal-box', {
  interval: 200,
  distance: '30px',
  origin: 'bottom',
  duration: 800,
  easing: 'ease-in-out',
  reset: true
});


