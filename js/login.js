document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#loginForm");
  const message = document.querySelector("#loginMessage");

  if (!form || !message) return;

  const allowedDestinations = /^(?:index|about|projects|contact)\.html(?:#[a-zA-Z0-9_-]+)?$/;
  const requestedDestination = new URLSearchParams(window.location.search).get("return") || "index.html";
  const destination = allowedDestinations.test(requestedDestination) ? requestedDestination : "index.html";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form.elements.username.value.trim();
    const password = form.elements.password.value;

    if (!username || !password) {
      message.textContent = "Completa el usuario y la contraseña.";
      return;
    }

    if (username !== "user" || password !== "123") {
      message.textContent = "Usuario o contraseña incorrectos.";
      return;
    }

    try {
      sessionStorage.setItem("elif-demo-session", "authenticated");
      window.location.replace(destination);
    } catch {
      message.textContent = "No se pudo iniciar la sesión en este navegador.";
    }
  });

  form.addEventListener("input", () => {
    message.textContent = "";
  });
});