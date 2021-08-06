window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.burger__icon').classList.toggle('active');
    document.querySelector('#menu').classList.toggle('active');
  });

  document.querySelectorAll('.question__subtitle').forEach(function (accordion) {
    accordion.addEventListener('click', function (event) {
      let currentTitle = accordion;

      // document.querySelectorAll('.question__subtitle').forEach(function (item) {
      //   item.classList.remove('active');
      // });

      currentTitle.classList.toggle('active');
    });
  });

  new Swiper('.hero-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },

    simulateTouch: false,

    freeMode: false,

    loop: true,

    watchOverflow: true,

    speed: 1000,
  });
});
