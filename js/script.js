document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");
  const previousButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  const carousel = document.querySelector(".carousel-container");

  if (!slides.length || !carousel) return;

  let currentIndex = 0;
  let autoplay;
  let touchStartX = 0;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentIndex;
      slide.classList.toggle("active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    indicators.forEach((indicator, i) => {
      const isActive = i === currentIndex;
      indicator.classList.toggle("active", isActive);
      indicator.setAttribute("aria-current", String(isActive));
    });
  }

  function startAutoplay() {
    window.clearInterval(autoplay);
    autoplay = window.setInterval(() => showSlide(currentIndex + 1), 5000);
  }

  previousButton?.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton?.addEventListener("click", () => showSlide(currentIndex + 1));
  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => showSlide(i));
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(autoplay));
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  carousel.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) > 50) showSlide(currentIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  showSlide(0);
  startAutoplay();
});
