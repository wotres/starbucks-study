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
const toTopEl =document.querySelector('#to-top');

// lodash 를 이용 _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    })
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    })
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0 /* plugin 사용 */
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
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
    delay: 2000
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

new Swiper('.awards .swiper', {
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백 30px
  // centeredSlides: true, // 처음 슬라이드가 가운데로
  loop: true,
  autoplay: {
    delay: 1000
  },
  // pagination: {
  //   el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
  //   clickable: true
  // },
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
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

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true, // 왔다리갔다리
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, /* 감시 요소 지정 */
      triggerHook: .8 /* 0 ~ 1 비율중 .8인 시점에 걸리면 수행 */
    })
    .setClassToggle(spyEl, 'show') /* 요소, 추가할 클래스 이름 */
    .addTo(new ScrollMagic.Controller()); /* 내부 컨트롤러에 할당 */
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
