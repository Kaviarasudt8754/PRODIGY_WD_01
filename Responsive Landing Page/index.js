const navbar = document.getElementById('navbar');

// Add 'scrolled' class when the page is scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
