document.addEventListener('DOMContentLoaded',()=>{
    var swiper = new Swiper(".mobile_swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        // loop: true, 이거 살리면 바닐라스크립트 작동 안됨.. 왜?!
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return `
            <div class="custom_fraction">
                <img src="/gongcha/images/fraction_left.svg" class="fraction_icon">
                <span class="pagination-text">
                    ${current} / ${total}
                </span>
                <img src="/gongcha/images/fraction_right.svg" class="fraction_icon">
            </div>
            `;
          },
        },
        effect:"Slide"
      });
})