//elementi input
const titleField = document.getElementById('title-field');
const nameField = document.getElementById('name-field');
const companyField = document.getElementById('company-field');
const roleField = document.getElementById('role-field');
const emailField = document.getElementById('email-field');
const phoneField = document.getElementById('phone-field');
const picField = document.getElementById('company-pic-field');
const form = document.querySelector('form');

//elementi risultato
const title = document.getElementById('title');
const fullname = document.getElementById('name');
const company = document.getElementById('company');
const role = document.getElementById('role');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const companyPic = document.getElementById('company-pic');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  title.innerHTML = titleField.value;
  fullname.innerHTML = nameField.value;
  company.innerHTML = companyField.value;
  role.innerHTML = roleField.value;
  email.innerHTML = emailField.value;
  phone.innerHTML = phoneField.value;
  companyPic.src = picField.value;
});