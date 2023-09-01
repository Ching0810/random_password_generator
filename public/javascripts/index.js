const submitButton = document.querySelector('#submitButton')
const form  = document.querySelector('#submitForm')
submitButton.addEventListener('click', function onSubmitButtonClicked(event) {
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
    event.preventDefault();
    event.stopPropagation();
  }
})