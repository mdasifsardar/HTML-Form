// function getFormValue() {
//   const nameInput = document.getElementById("full-name");
//   const nameValue = nameInput.value;
//   const errorText = document.getElementById("error-text");
//   if (nameValue) {
//     console.log(nameValue);
//     errorText.innerHTML = "";
//     nameInput.value = "";
//   } else {
//     errorText.innerHTML = '<p class="text-warning">Please write your name</p>';
//   }
// }

// // addEventListener
// const submitButton = document.getElementById("submit-button");
// console.log(submitButton);
// submitButton.addEventListener("click", getFormValue);

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  // Id
  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email-address");
  const addressInput = document.getElementById("address");
  //Value
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const addressValue = addressInput.value;
  const errorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");

  if (nameValue && emailValue && addressValue) {
    formData.innerHTML = `<p>Form Submited By: ${nameValue},Email Address: ${emailValue},Address: ${addressValue}</p>`;
    errorText.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
  } else {
    errorText.innerHTML =
      '<p class="text-warning">Please fill all input box</p>';
    formData.innerHTML = "";
  }
});
