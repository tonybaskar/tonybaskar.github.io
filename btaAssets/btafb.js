
  const track = document.getElementById('carouselTrack');
  const items = document.querySelectorAll('.carousel-item');
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % items.length;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
  }

  
  setInterval(nextSlide, 5000);

