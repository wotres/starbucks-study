const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// focus & blur 쌍
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// lodash 를 이용 _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    })
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    })
  }
}, 300));
