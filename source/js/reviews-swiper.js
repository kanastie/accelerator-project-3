import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperReviews = () => {
  const swiperReviews = new Swiper('.reviews-slider', {
    modules: [Navigation, Scrollbar],

    loop: false,
    slidesPerView: 'auto',

    scrollbar: {
      dragClass: 'reviews__scroll-element',
      draggable: true,
      el: '.reviews__scroll-frame',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 30,
        width: 736,
        slidesOffsetAfter: 45,
        slidesOffsetBefore: 45,
        scrollbar: {
          dragSize: 326,
        }
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          dragSize: 394,
        },
      },
    },

    navigation: {
      nextEl: '.reviews__pag-button--next',
      prevEl: '.reviews__pag-button--prev',
    },
  });

  swiperReviews.init();
};

export { initSwiperReviews };
