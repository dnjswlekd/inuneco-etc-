(function () {
  "use strict";

  const swiper = new Swiper(".swiper-container", {
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
      nextEl: ".Q1-btn",
    },
  });

  swiper.on("activeIndexChange", (s) => {
    console.log(s.activeIndex);
    $qnaProgressBar.className = `progress-bar qna-level-${s.activeIndex}`;

    $questionLevel.innerText = `${s.activeIndex + 1}`;

    $qnaBtnList.forEach((subItem, subIdx) => {
      if (subIdx <= s.activeIndex) {
        subItem.classList.remove("btn-secondary");
        subItem.classList.add("btn-primary");
      } else {
        subItem.classList.remove("btn-primary");
        subItem.classList.add("btn-secondary");
      }
    });
  });

  const $qnaProgressBar = document.querySelector("#qna-progress-bar");
  const $questionLevel = document.querySelector(".qna-top  span#question-level");
  const $qnaBtnList = document.querySelectorAll(".qna-top .btn");
  $qnaBtnList.forEach((item, idx) => {
    item.addEventListener("click", () => {
      swiper.slideToLoop(idx);
    });
  });
})();
