const inner = document.querySelector('.carusel-inner');
const slidesCount = inner.querySelectorAll('.comment').length;
let currentSlide = 0;
let widthWindow = window.innerWidth; 
let countSlidesInSlide = widthWindow < 768 ? slidesCount : Math.floor(slidesCount / 2) + slidesCount % 2;

const nextSlide = () => {
  currentSlide = Math.max(currentSlide - 1, (countSlidesInSlide * -1 + 1));
  inner.style.transform = `translateX(${currentSlide * 100}%)`;
}

const prevSlide = () => {
  currentSlide = Math.min(currentSlide + 1, 0);
  inner.style.transform = `translateX(${currentSlide * 100}%)`;
}

window.addEventListener('resize', () => {
  widthWindow = window.innerWidth;
  currentSlide = 0;
  inner.style.transform = `translateX(${currentSlide * 100}%)`;
  countSlidesInSlide = widthWindow < 768 ? slidesCount : Math.floor(slidesCount / 2) + slidesCount % 2;
});