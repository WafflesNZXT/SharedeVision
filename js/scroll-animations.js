document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".section-title h2, .feature-icon, .testimonial-card, .client-logo, .service-card, .why-box, .deliver-step"
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  animatedElements.forEach(el => observer.observe(el));
});
