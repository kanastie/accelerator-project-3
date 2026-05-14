const headerElement = document.querySelector('.header');
const headerNavElement = headerElement.querySelector('.header__nav');
const navBtnElement = headerElement.querySelector('.header__nav-toggle');
const navListElement = headerElement.querySelector('.header__nav-list');
const navLinksElements = headerElement.querySelectorAll('.header__nav-link');
const subBtnElements = headerElement.querySelectorAll('.header__nav-link--dropdown');

navBtnElement.addEventListener('click', () => {
  navBtnElement.classList.toggle('nav-opened');
  headerNavElement.classList.toggle('header__nav--opened');
  changeText();
  setAssistiveTech(navBtnElement, 'nav-opened', navListElement, navLinksElements);
});

function changeText () {
  if (navBtnElement.classList.contains('nav-opened')) {
    navBtnElement.querySelector('span').textContent = 'Закрыть меню';
  } else {
    navBtnElement.querySelector('span').textContent = 'Открыть меню';
  }
}

function setAssistiveTech (btn, className, list, linksList) {
  if (btn.classList.contains(className)) {
    btn.setAttribute('aria-expanded', 'true');
    list.setAttribute('aria-hidden', 'false');
    linksList.forEach((link) => link.setAttribute('tabindex', '0'));
  } else {
    btn.setAttribute('aria-expanded', 'false');
    list.setAttribute('aria-hidden', 'true');
    linksList.forEach((link) => link.setAttribute('tabindex', '-1'));
  }
}

subBtnElements.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    if (evt.target.closest('.header__nav-link--dropdown')) {
      evt.target.classList.toggle('subnav-opened');

      //setAssistiveTech(evt.target, 'subnav-opened', evt.target.parentNode.querySelector('.header__subnav-list'), evt.target.parentNode.querySelector('.header__subnav-list'), evt.target.parentNode.querySelectorAll('.header__subnav-link'));
    }
  });
});

