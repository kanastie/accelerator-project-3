import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperProgramms = () => {
  const swiperProgramms = new Swiper('.prog-slider', {
    modules: [Navigation, Scrollbar],

    loop: false,
    slidesPerView: 'auto',

    scrollbar: {
      dragClass: 'programms__scroll-element',
      draggable: true,
      el: '.programms__scroll-frame',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.13,
        spaceBetween: 30,
        width: 723,
        slidesOffsetAfter: 45,
        slidesOffsetBefore: 45,
        scrollbar: {
          dragSize: 326,
        }
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          dragSize: 394,
        }
      },
    },

    navigation: {
      nextEl: '.programms__pag-button--next',
      prevEl: '.programms__pag-button--prev',
    },
  });

  swiperProgramms.init();
};

export { initSwiperProgramms };
