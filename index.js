
const header = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

// Carousel Functionality
const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = document.querySelector(".carousel-item").clientWidth;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".carousel-item");

  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);
