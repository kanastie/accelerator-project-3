import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const calculateHeight = () => {
  const content = Array.from(document.querySelectorAll('.hero-slider__content'));

  content.forEach((el) => {
    el.dataset.height = el.offsetHeight;
  });
};

const initSwiperHero = () => {
  const swiperHero = new Swiper('.hero-slider', {
    modules: [Pagination],

    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },

    pagination: {
      el: '.hero-slider__bullets',
      bulletClass: 'bullets__button',
      bulletActiveClass: 'bullets__button--active',
      currentClass: 'hero__slider-slide--current',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" aria-label="Слайд ${index + 1}"></button>`;
      },
      bulletElement: 'button',
    },

    on: {
      slideChangeTransitionStart: function () {
        const pagination = document.querySelector('.hero-slider__bullets');
        const currentSlide = document.querySelector('.hero-slider__slide.swiper-slide-active');
        const slideContant = currentSlide.querySelector('.hero-slider__content');

        const currentHeight = slideContant.dataset.height;

        const mobHeigth = Number(currentHeight) + Number(20);
        const tabHeight = Number(currentHeight) + Number(60);

        if (window.screen.width >= 768) {
          pagination.style.bottom = `${tabHeight}px`;
        } else if (window.screen.width > 0) {
          pagination.style.bottom = `${mobHeigth}px`;
        }
      },
    },
  });

  swiperHero.init();

  window.addEventListener('resize', swiperHero.update());
};

export {initSwiperHero, calculateHeight };
