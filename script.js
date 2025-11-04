const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navLink = document.getElementById("navLink")

const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;
const totalCards = document.querySelectorAll('.service-card').length;
const cardsPerView = 3;
  
hamburger.addEventListener("click", ()=>{
  navLink.classList.toggle("active")
  hamburger.classList.toggle("active")
})
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 200){
    navbar.classList.add("scrolled")
    
  }else{
    navbar.classList.remove("scrolled")
  }
})

  // Slide function
  function updateSlider() {
    const offset = index * (100 / cardsPerView);
    slider.style.transform = `translateX(-${offset}%)`;
  }

  // Next button
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % Math.ceil(totalCards / cardsPerView);
    updateSlider();
  });

  // Prev button
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + Math.ceil(totalCards / cardsPerView)) % Math.ceil(totalCards / cardsPerView);
    updateSlider();
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    index = (index + 1) % Math.ceil(totalCards / cardsPerView);
    updateSlider();
  }, 5000)
  
  
  // Select elements
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".lightbox .close");

  // When an image is clicked
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = item.src;
    });
  });

  // Close when clicking the "×" button
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
