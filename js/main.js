const slides = document.querySelectorAll(".carousel-slide");
const dotsContainer = document.getElementById("carouselDots");
let current = 0;

slides.forEach((slide, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function goToSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

function nextSlide() {
  goToSlide((current + 1) % slides.length);
}

function prevSlide() {
  goToSlide((current - 1 + slides.length) % slides.length);
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);

// mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
      this.setAttribute("aria-expanded", "false");
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.width = "100%";
      navLinks.style.padding = "16px 0";
      this.setAttribute("aria-expanded", "true");
    }
  });
}

// navbar scroll effect
window.addEventListener("scroll", function () {
  const nav = document.getElementById("siteNav");
  if (nav) {
    if (window.scrollY > 100) {
      nav.style.backdropFilter = "blur(10px)";
      nav.style.backgroundColor = "rgba(12, 12, 12, 0.95)";
    } else {
      nav.style.backdropFilter = "none";
      nav.style.backgroundColor = "#0C0C0C";
    }
  }
});
