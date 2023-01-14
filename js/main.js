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

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  })
})

// css 에서 띄워쓰기는 후손 선택자
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: {
    delay: 2500
  },
  loop: true // 4 -> 1 번 슬라이드 반복 가능
});

new Swiper('.promotion .swiper', {
  direction: 'horizontal', // default 라 삭제 가능
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백 10px
  centeredSlides: true, // 처음 슬라이드가 가운데로
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleBtnText = promotionToggleBtn.querySelector('.material-symbols-outlined')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
    promotionToggleBtnText.textContent = 'download';
  } else {
    promotionEl.classList.remove('hide');
    promotionToggleBtnText.textContent = 'upload';
  }
})
