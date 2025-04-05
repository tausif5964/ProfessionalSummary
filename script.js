document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

window.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".section");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-show");
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
});
gsap.from(".project-card", {
  scrollTrigger: ".project-card",
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3
});
