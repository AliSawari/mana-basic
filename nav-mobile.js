// mobile nav
const nav = document.querySelector('.header-nav');
const btn = document.querySelector('.btn-mobile-nav');

btn.addEventListener('click', function () {
  nav.classList.toggle('nav-open')
})

// search
const search = document.querySelector('.search')
const btnSearch = document.querySelector('.btnSearch')
const input = document.querySelector('.inputSearch')
const socialLinkW = document.querySelector('.social-link-W')
const socialLinkI = document.querySelector('.social-link-i')

btnSearch.addEventListener('click', () => {
  search.classList.toggle('active')
  socialLinkW.classList.toggle('active-socialLink')
  socialLinkI.classList.toggle('active-socialLink')
  input.focus()
})