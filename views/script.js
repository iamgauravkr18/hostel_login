document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const signupButton = document.getElementById("signupButton");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  function showLoginForm() {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginButton.classList.add("active");
    signupButton.classList.remove("active");
  }

  function showSignupForm() {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupButton.classList.add("active");
    loginButton.classList.remove("active");
  }

  loginButton.addEventListener("click", showLoginForm);
  signupButton.addEventListener("click", showSignupForm);

  // Initial load: show login form
  showLoginForm();
});
