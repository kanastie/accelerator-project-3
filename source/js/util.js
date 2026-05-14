const ProgSliderElement = document.querySelector('.prog-slider');
const containerFirst = ProgSliderElement.querySelector('.prog-slider__container');
const slidesListFirst = ProgSliderElement.querySelectorAll('.prog-slider__slide');
const NewSliderElement = document.querySelector('.news-slider');
const containerSecond = NewSliderElement.querySelector('.news-slider__container');
const slidesListSecond = NewSliderElement.querySelectorAll('.news-slider__slide');
const ReviewsSliderElement = document.querySelector('.reviews-slider');
const containerThird = ReviewsSliderElement.querySelector('.reviews-slider__container');
const slidesListThird = ReviewsSliderElement.querySelectorAll('.reviews-slider__slide');

const addSlides = () => {

  if (ProgSliderElement) {
    slidesListFirst.forEach((slide) => {
      const newSlide = slide.cloneNode(true);
      containerFirst.appendChild(newSlide);
    });
  }

  if (NewSliderElement) {
    slidesListSecond.forEach((slide) => {
      const newSlide = slide.cloneNode(true);
      containerSecond.appendChild(newSlide);
    });
  }

  if (ReviewsSliderElement) {
    slidesListThird.forEach((slide) => {
      const newSlide = slide.cloneNode(true);
      containerThird.appendChild(newSlide);
    });
  }
};

export { addSlides };
