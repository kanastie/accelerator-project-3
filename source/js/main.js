import './header';
import { initSwiperHero, calculateHeight } from './swiper-hero';
import { openModal, closeModal } from './modal';
import './validate-modal-form';
import { initSwiperProgramms } from './swiper-programms';
import { initSwiperNews } from './swiper-news';
import { createAccordion } from './faq-accordion';
import { initSwiperReviews } from './reviews-swiper';
import { addSlides } from './util';

calculateHeight();
initSwiperHero();
openModal();
closeModal();
addSlides();
initSwiperProgramms();
initSwiperNews();
createAccordion();
initSwiperReviews();
