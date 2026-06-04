const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => observer.observe(el));

function submitForm() {
  const btn = document.querySelector(".form-submit");
  btn.textContent = "✓ Request Received!";
  btn.style.background = "var(--sage)";
  setTimeout(() => {
    btn.textContent = "Send Appointment Request";
    btn.style.background = "";
  }, 3500);
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
