import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

getDataFromStorage();

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(formData);
  formData = {};
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getDataFromStorage() {
  try {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    Object.entries(savedData).forEach(([key, value]) => {
      form.elements[key].value = value;
      formData[key] = value;
    });
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
