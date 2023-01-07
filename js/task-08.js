const formRef = document.querySelector(".login-form");
console.log(formRef.elements.email.value);

formRef.addEventListener("submit", onFormSubmitClick);

function onFormSubmitClick(event) {
  event.preventDefault();

  let elements = event.currentTarget.elements;
  let email = elements.email.value;
  let password = elements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("All form fields should contain information ");
  } else {
    let formData = {
      email,
      password,
    };
    formRef.reset();
    console.log(formData);
    return formData;
  }
}
