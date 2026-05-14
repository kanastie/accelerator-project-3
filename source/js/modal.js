const aboutBtnElement = document.querySelector('.link--about');
const modalElement = document.querySelector('.modal');
const crossBtnElement = modalElement.querySelector('.modal__cross');

const openModal = () => {
  aboutBtnElement.addEventListener('click', () => {
    modalElement.style.display = 'flex';
    modalElement.classList.add('modal--open');
  });
};

const closeModal = () => {
  crossBtnElement.addEventListener('click', () => {
    modalElement.style.display = 'none';
    modalElement.classList.remove('modal--open');
  });
};

export {openModal, closeModal};
