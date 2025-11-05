const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLink = document.getElementById("navLink");

// Toggle navbar for mobile
hamburger.addEventListener("click", () => {
  navLink.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== Slider Logic =====
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const cards = document.querySelectorAll(".service-card");

let index = 0;
const cardsPerView = 3;
const totalCards = cards.length;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20;
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index = Math.min(index + 1, totalCards - cardsPerView);
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index = Math.max(index - 1, 0);
  updateSlider();
});

setInterval(() => {
  index = (index + 1) > (totalCards - cardsPerView) ? 0 : index + 1;
  updateSlider();
}, 5000);

// ===== Gallery Lightbox =====
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".lightbox .close");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});