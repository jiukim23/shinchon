document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    loop: true,
    speed: 2000,
    effect: 'slide',
    ease: "linear",
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 1,
      },
      986: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 1,
      },
    },
  });
})