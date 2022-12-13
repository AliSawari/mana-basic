const nav = document.querySelector('.header-nav');
const btn = document.querySelector('.btn-mobile-nav');

btn.addEventListener('click', function () {
  nav.classList.toggle('nav-open')
})