const formElement = document.querySelector('.modal form');


const checkValidtion = (el) => {
  let result = true;

  const inputsList = el.querySelectorAll('input');

  inputsList.forEach((input) => {

    //removeError(input);

    if (checkPattern(input) === false) {
      createError(input);
      result = false;
    }

    return result;
  });
  return result;
};

function createError (input) {
  input.style.border = '1px solid red';
  input.style.backgroundColor = 'rgba($color: $error, $alpha: 0.2)';
}

function checkPattern (input) {
  if (!input.validity.valid) {
    return false;
  }
}

checkValidtion(formElement);
