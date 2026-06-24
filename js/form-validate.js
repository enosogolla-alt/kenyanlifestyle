// Request Service Form
const requestForm = document.getElementById("requestForm");
if (requestForm) {
  requestForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    document
      .querySelectorAll(".error-msg")
      .forEach((el) => (el.textContent = ""));
    document.getElementById("reqSuccess").textContent = "";

    const name = document.getElementById("reqName").value.trim();
    if (name === "") {
      document.getElementById("reqNameError").textContent =
        "Full name is required.";
      valid = false;
    }

    const email = document.getElementById("reqEmail").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("reqEmailError").textContent =
        "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("reqEmailError").textContent =
        "Enter a valid email.";
      valid = false;
    }

    const phone = document.getElementById("reqPhone").value.trim();
    if (phone === "") {
      document.getElementById("reqPhoneError").textContent =
        "Phone number is required.";
      valid = false;
    }

    const service = document.getElementById("reqService").value;
    if (service === "") {
      document.getElementById("reqServiceError").textContent =
        "Please select a service.";
      valid = false;
    }

    const message = document.getElementById("reqMessage").value.trim();
    if (message === "") {
      document.getElementById("reqMessageError").textContent =
        "Please describe your request.";
      valid = false;
    }

    if (valid) {
      document.getElementById("reqSuccess").textContent =
        "Request submitted! We will get back to you within 24 hours.";
      requestForm.reset();
    }
  });
}

// Login Form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    document
      .querySelectorAll(".error-msg")
      .forEach((el) => (el.textContent = ""));
    document.getElementById("loginSuccess").textContent = "";

    const email = document.getElementById("loginEmail").value.trim();
    if (email === "") {
      document.getElementById("loginEmailError").textContent =
        "Email or phone is required.";
      valid = false;
    }

    const password = document.getElementById("loginPassword").value.trim();
    if (password === "") {
      document.getElementById("loginPasswordError").textContent =
        "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      document.getElementById("loginPasswordError").textContent =
        "Password must be at least 6 characters.";
      valid = false;
    }

    if (valid) {
      document.getElementById("loginSuccess").textContent =
        "Logged in successfully!";
      loginForm.reset();
    }
  });
}

// Signup Form
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    document
      .querySelectorAll(".error-msg")
      .forEach((el) => (el.textContent = ""));
    document.getElementById("signupSuccess").textContent = "";

    const name = document.getElementById("signupName").value.trim();
    if (name === "") {
      document.getElementById("signupNameError").textContent =
        "Full name is required.";
      valid = false;
    }

    const phone = document.getElementById("signupPhone").value.trim();
    if (phone === "") {
      document.getElementById("signupPhoneError").textContent =
        "Phone number is required.";
      valid = false;
    }

    const email = document.getElementById("signupEmail").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("signupEmailError").textContent =
        "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("signupEmailError").textContent =
        "Enter a valid email.";
      valid = false;
    }

    const password = document.getElementById("signupPassword").value.trim();
    if (password === "") {
      document.getElementById("signupPasswordError").textContent =
        "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      document.getElementById("signupPasswordError").textContent =
        "Password must be at least 6 characters.";
      valid = false;
    }

    const confirm = document.getElementById("signupConfirm").value.trim();
    if (confirm === "") {
      document.getElementById("signupConfirmError").textContent =
        "Please confirm your password.";
      valid = false;
    } else if (confirm !== password) {
      document.getElementById("signupConfirmError").textContent =
        "Passwords do not match.";
      valid = false;
    }

    if (valid) {
      document.getElementById("signupSuccess").textContent =
        "Account created successfully! Welcome to Kenyan Lifestyle.";
      signupForm.reset();
    }
  });
}
