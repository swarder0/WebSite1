document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.querySelector(".card-login");
    let usernameInput = loginForm.querySelector("input[name='usuario']");
    let passwordInput = loginForm.querySelector("input[name='senha']");
    let btnLogin = loginForm.querySelector(".btn-login");
  
    btnLogin.addEventListener("click", function(event) {
      event.preventDefault();
  
      let username = usernameInput.value;
      let password = passwordInput.value;
      let errorMessage = loginForm.querySelector(".error-message");
  
      errorMessage.textContent = "";
      usernameInput.classList.remove("error");
      passwordInput.classList.remove("error");
  
      if (username === "admin" && password === "senha") {
        window.location.href = "page1.html";
      } else {
        errorMessage.textContent = "Email ou senha incorretos.";
        usernameInput.classList.add("error");
        passwordInput.classList.add("error");
      }
    });
    passwordInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        btnLogin.click();
      }
    });
  });
  