document.addEventListener('DOMContentLoaded', () => {
  const aliceImages = document.querySelectorAll('#alice-container img');

  function animateImage(index) {
    if (index < aliceImages.length) {
      aliceImages[index].classList.add('rotate-and-fade-out');
      aliceImages[index].addEventListener('animationend', () => {
        aliceImages[index].classList.remove('rotate-and-fade-out');
        animateImage(index + 1);
      });
    }
  }
  function replayAnimation() {
  aliceImages.forEach(img => {
    img.classList.remove('rotate-and-fade-out');
    img.style.opacity = 1;
    img.style.transform = `translate(${img.dataset.x}px,${img.dataset.y}px)`;
  });

  animateImage(0);
}

document.getElementById('replayButton').addEventListener('click', replayAnimation);
  
  animateImage(0);
});
