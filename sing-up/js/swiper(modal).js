(function () {
  "use strict";

  const swiper = new Swiper(".modal-container", {
    // Optional parameters
    touchRatio: 0,//드래그 금지
    speed: 500,
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".modalNextBtn",
    },
  });
})();
