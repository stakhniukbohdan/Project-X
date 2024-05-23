document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  let currentIndex = 0;

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  setInterval(nextImage, 3000);
});