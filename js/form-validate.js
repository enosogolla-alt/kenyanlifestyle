document.getElementById("requestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // clear previous errors
  document
    .querySelectorAll(".error-msg")
    .forEach((el) => (el.textContent = ""));
  document.getElementById("reqSuccess").textContent = "";

  // name
  const name = document.getElementById("reqName").value.trim();
  if (name === "") {
    document.getElementById("reqNameError").textContent =
      "Full name is required.";
    valid = false;
  }

  // email
  const email = document.getElementById("reqEmail").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("reqEmailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("reqEmailError").textContent =
      "Enter a valid email address.";
    valid = false;
  }

  // phone
  const phone = document.getElementById("reqPhone").value.trim();
  if (phone === "") {
    document.getElementById("reqPhoneError").textContent =
      "Phone number is required.";
    valid = false;
  }

  // service
  const service = document.getElementById("reqService").value;
  if (service === "") {
    document.getElementById("reqServiceError").textContent =
      "Please select a service.";
    valid = false;
  }

  // message
  const message = document.getElementById("reqMessage").value.trim();
  if (message === "") {
    document.getElementById("reqMessageError").textContent =
      "Please describe your request.";
    valid = false;
  }

  // if all valid
  if (valid) {
    document.getElementById("reqSuccess").textContent =
      "Request submitted! We will get back to you within 24 hours.";
    document.getElementById("requestForm").reset();
  }
});
