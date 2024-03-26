'use strict';

const root = document.querySelector('.container');

const header = document.createElement('header');
root.append(header);

const form = document.createElement('form');
form.classList.add('form-container');
root.append(form);

// Create header content

const h1 = '<h1>Create an account</h1>';
root.append(header);
const headerP = '<p>We always keep your name and email address private</p>';
const addHeaderContent = (root.childNodes[0].innerHTML = h1 + headerP);

// Create form content

const inpContainer = document.createElement('div');
inpContainer.classList.add('input-container');
form.append(inpContainer);

const radioContainer = document.createElement('div');
radioContainer.classList.add('radio-container');
form.append(radioContainer);

const checkboxContainer = document.createElement('div');
checkboxContainer.classList.add('checkbox-container');
form.append(checkboxContainer);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
form.append(buttonContainer);

// Add text inputs

const wrapper = document.createElement('div');
const addWrapperClass = wrapper.classList.add('wrapper');
const addWrapper = inpContainer.append(wrapper);
const secondWrappper = inpContainer.append(wrapper.cloneNode());

const inputFn = document.createElement('input');
const setFnName = inputFn.setAttribute('name', 'fn');
const setFnId = inputFn.setAttribute('id', 'fn');
const setFnPlacehold = inputFn.setAttribute('placeholder', 'First name');

const inputDn = document.createElement('input');
const setDnName = inputDn.setAttribute('name', 'dn');
const setDnId = inputDn.setAttribute('id', 'dn');
const setDnPlacehold = inputDn.setAttribute('placeholder', 'Display name');

const inputPassword = document.createElement('input');
const setPasswordName = inputPassword.setAttribute('type', 'password');
const setPasswordId = inputPassword.setAttribute('id', 'password');
const setPasswordPlacehold = inputPassword.setAttribute(
  'placeholder',
  'Password'
);

const addLeftInputs = wrapper.append(inputFn, inputDn, inputPassword);

const inputLn = document.createElement('input');
const setLnName = inputLn.setAttribute('name', 'ln');
const setLnId = inputLn.setAttribute('id', 'ln');
const setLnPlacehold = inputLn.setAttribute('placeholder', 'Last name');

const inputEmail = document.createElement('input');
const setEmailName = inputEmail.setAttribute('type', 'email');
const setEmailId = inputEmail.setAttribute('id', 'email');
const setEmailPlacehold = inputEmail.setAttribute('placeholder', 'Email');

const inputConfPassword = document.createElement('input');
const setConfPasswordName = inputConfPassword.setAttribute('type', 'password');
const setConfPasswordId = inputConfPassword.setAttribute(
  'id',
  'password-confirm'
);
const setConfPasswordPlacehold = inputConfPassword.setAttribute(
  'placeholder',
  'Password confirmation'
);

const addRightInputs = inpContainer.childNodes[1].append(
  inputLn,
  inputEmail,
  inputConfPassword
);

// Add radio contents

const radioInp = document.createElement('input');
radioInp.setAttribute('type', 'radio');
radioInp.setAttribute('name', 'role');
radioInp.setAttribute('id', 'customer');

const radioWrapper = document.createElement('div');
radioWrapper.classList.add('radio-wraper');
radioContainer.append(radioInp, radioWrapper);

const costomerLabel = document.createElement('label');
costomerLabel.setAttribute('for', 'customer');
costomerLabel.innerHTML = 'Join As a Buyer';

const radioP = document.createElement('p');
radioP.innerHTML =
  'I am looking for a Name, Logo or Taglline for my business, brand or product.';
radioWrapper.append(costomerLabel, radioP);

const secondRadioContainer = radioContainer.cloneNode(true);
checkboxContainer.before(secondRadioContainer);
secondRadioContainer.childNodes[0].setAttribute('id', 'creator');
secondRadioContainer.childNodes[1].childNodes[0].setAttribute('for', 'creator');
secondRadioContainer.childNodes[1].childNodes[0].innerHTML =
  'Join As a Creative or Marketplace Seller';
secondRadioContainer.childNodes[1].childNodes[1].innerHTML =
  'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';

// Add checkbox content

const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('name', 'offer');
checkbox.setAttribute('id', 'offer');

const checkboxLabel = document.createElement('label');
checkboxLabel.setAttribute('for', 'offer');
checkboxLabel.innerHTML =
  'Allow Squadhelp to send marketing/promotional offers from time to time';
checkboxContainer.append(checkbox, checkboxLabel);

// Add button content

const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.innerHTML = 'Create account';
buttonContainer.append(button);

// Add checking passwords

const span = document.createElement('span');

function validatePassword() {
  const regEx =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/gi;

  if (!regEx.test(inputPassword.value)) {
    inputPassword.style.border = '2px solid red';
    span.setAttribute('id', 'wrong-password');
    span.innerHTML = 'Password contains invalid symbols!';
    radioContainer.before(span);
  } else if (document.querySelector('#wrong-password')) {
    span.remove();
    inputPassword.style.border = 'initial';
  }
}
inputPassword.addEventListener('change', validatePassword);

function comparePasswords() {
  if (inputPassword.value !== inputConfPassword.value) {
    inputConfPassword.style.border = '2px solid red';
    span.setAttribute('id', 'error-compare-password');
    span.innerHTML = 'Password mismatches!';
    radioContainer.before(span);
  } else if (document.querySelector('#error-compare-password')) {
    span.remove();
    inputConfPassword.style.border = 'initial';
  }
}

inputConfPassword.addEventListener('change', comparePasswords);