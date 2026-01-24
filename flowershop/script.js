const carousel = document.querySelector(".catalog-list");
let cards = document.querySelectorAll(".product-card");

let index = 0;
const gap = 32;
const cardWidth = cards[0].offsetWidth + gap;

// FEJK LOOP – kloniramo sve kartice da se carousel beskonačno vrti
cards.forEach(card => {
  carousel.appendChild(card.cloneNode(true));
});

// uzimamo sve kartice (original + klonovi)
cards = document.querySelectorAll(".product-card");

carousel.style.transition = "transform 0.5s ease"; // animacija pomjeranja

function updateCarousel() {
  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
}

// DESNO
function nextSlide() {
  index++;
  updateCarousel();

  // ako smo na polovini (original + klon), resetujemo
  if (index === cards.length / 2) {
    setTimeout(() => {
      carousel.style.transition = "none";
      index = 0;
      updateCarousel();
      carousel.offsetHeight; // force reflow
      carousel.style.transition = "transform 0.5s ease";
    }, 500);
  }
}

// LIJEVO
function prevSlide() {
  if (index === 0) {
    carousel.style.transition = "none";
    index = cards.length / 2;
    updateCarousel();
    carousel.offsetHeight;
    carousel.style.transition = "transform 0.5s ease";
  }

  index--;
  updateCarousel();
}