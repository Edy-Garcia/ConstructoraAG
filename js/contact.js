document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");

  if (!form || !status) return;

  const fields = [...form.querySelectorAll("input[required], textarea[required]")];

  function validateField(field) {
    const value = field.value.trim();
    field.setCustomValidity(value ? "" : "Este campo es obligatorio.");
  }

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      validateField(field);
      status.textContent = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fields.forEach(validateField);

    if (!form.reportValidity()) return;

    status.textContent = "Mensaje validado. Esta demostración no envía datos a un servidor.";
    form.reset();
  });
});