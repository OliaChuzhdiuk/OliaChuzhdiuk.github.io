document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#login-modal");
  const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login");
  const passwordInput = document.querySelector("#password");
  const rememberCheckbox = document.querySelector("#remember-me");
  const closeButton = document.querySelector("#close-modal");
  const cancelButton = document.querySelector("#cancel-login");

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true" ||
    sessionStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    modal.classList.add("hidden");
  }

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  cancelButton.addEventListener("click", () => {
    loginForm.reset();
    modal.classList.add("hidden");
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const login = loginInput.value.trim();
    const password = passwordInput.value;

    if (!login || !password) {
      alert("Заповніть усі поля!");
      return;
    }

    if (password.length < 8) {
      alert("Пароль повинен містити щонайменше 8 символів");
      return;
    }

    if (rememberCheckbox.checked) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      sessionStorage.setItem("isLoggedIn", "true");
    }

    alert("Ви успішно увійшли!");

    modal.classList.add("hidden");
    loginForm.reset();
  });
});
