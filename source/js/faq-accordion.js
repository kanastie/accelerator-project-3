const accordions = document.querySelectorAll('.faq__list > li');

const createAccordion = () => {
  if (accordions) {

    const openAccordion = (accordion) => {
      const content = accordion.querySelector('p');
      const btnText = accordion.querySelector('.faq__button span');

      accordion.classList.add('faq__item--open');
      content.style.opacity = '100';
      content.style.maxHeight = '100%';
      content.style.paddingTop = '20px';
      btnText.textContent = 'Закрыть';
    };

    const closeAccordion = (accordion) => {
      const content = accordion.querySelector('p');
      const btnText = accordion.querySelector('.faq__button span');

      accordion.classList.remove('faq__item--open');
      content.style.opacity = '0';
      content.style.maxHeight = '0';
      content.style.paddingTop = '0';
      btnText.textContent = 'Открыть';
    };

    openAccordion(accordions[2]);

    accordions.forEach((accordion) => {
      const question = accordion.querySelector('div');
      const answer = accordion.querySelector('p');

      question.addEventListener('click', () => {
        if (answer.style.maxHeight === '100%') {
          closeAccordion(accordion);
        } else {
          openAccordion(accordion);
        }
      });
    });
  }
};

export {createAccordion};
