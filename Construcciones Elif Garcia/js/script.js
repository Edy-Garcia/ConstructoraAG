document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");
  const slidesContainer = document.querySelector(".carousel-slides");

  let currentIndex = 0;

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  // Auto-play cada 5 segundos
  setInterval(() => {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }, 5000);

  // Indicadores manuales
  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      showSlide(i);
    });
  });
});
