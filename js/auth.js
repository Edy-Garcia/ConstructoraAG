document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-logout]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      sessionStorage.removeItem("elif-demo-session");
      window.location.replace("login.html");
    });
  });
});