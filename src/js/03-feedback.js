const throttle = require('lodash.throttle');

const form = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submitButton = document.querySelector('button');
let count = 0;

const change = throttle(() => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}, 500);

email.value = form.email;
message.value = form.message;

email.value;

submitButton.addEventListener('click', event => {
  event.preventDefault();

  let data = {
    email: email.value,
    message: message.value,
  };
  localStorage.clear();
  email.value = '';
  message.value = '';
  console.log(data);
});

email.addEventListener('input', change);
message.addEventListener('input', change);
