import Swiper from 'swiper';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const initSwiperNews = () => {
  const swiperNews = new Swiper('.news-slider', {
    modules: [Navigation, Grid],

    loop: false,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },

    on: {
      init: function () {

        if (window.screen.width >= 1440) {
          const slides = Array.from(document.querySelectorAll('.news-slider__slide'));
          for (let slide = 0; slide < slides.length; slide = slide + 3) {
            slides[slide].style.width = '604px';
          }

          const currentSlide = document.querySelector('.news-slider .swiper-slide-active');
          if (currentSlide) {
            currentSlide.style.width = '604px';
          } else {
            currentSlide.style.width = '286px';
          }
        } else if (window.screen.width >= 768) {
          const slides = Array.from(document.querySelectorAll('.news-slider__slide'));
          slides.forEach((slide) => {
            slide.style.height = '350px';
          });
        } else if (window.screen.width < 767) {
          const slides = Array.from(document.querySelectorAll('.news-slider__slide'));
          slides.forEach((slide, index) => {
            if (index % 2 === 0) {
              slide.style.height = '330px';
            } else {
              slide.style.height = '240px';
            }
          });

          const currentSlide = document.querySelector('.news-slider .swiper-slide-active');
          if (currentSlide) {
            currentSlide.style.height = '330px';
          } else {
            currentSlide.style.height = '240px';
          }
        }
      },
    },

    navigation: {
      nextEl: '.news__pag-button--next',
      prevEl: '.news__pag-button--prev',
    },
  });

  swiperNews.init();

  window.addEventListener('resize', swiperNews.update());
};

export { initSwiperNews };
