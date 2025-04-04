document.addEventListener('DOMContentLoaded', () => {
  courseSwiper();
  gallerySwiper();
});
function courseSwiper() {
  const swiper = new Swiper('.courseSwiper', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.courseSwiper .swiper-pagination',
      clickable: true
    }
  });
}
function gallerySwiper() {
  const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: -8,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  });
}
