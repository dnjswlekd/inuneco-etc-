(function () {
    'use strict';

    // 풀페이지
    new fullpage('#full-page', {
        licenseKey: '',
        navigation: true,
        navigationTooltips: ['MAIN', 'TROUBLE RECOMMEND', 'BEST PRODUCT', 'HOT PLACE', 'SEARCH', 'FOOTER'],
        scrollingSpeed: 1200
    });

    // 맞춤상품 토글
    const prodouctMenuList = document.querySelectorAll('.custom-product .product-title .cursor-pointer');
    const productImgList = document.querySelectorAll('.custom-product .product-item .click-event');

    prodouctMenuList.forEach((item, i) => {
        item.addEventListener('click', e => {
            prodouctMenuList.forEach(subItem => {
                subItem.classList.toggle('title-click-o', e.target === subItem);
            });
            productImgList.forEach((subItem, subI) => {
                subItem.classList.toggle('display-none', i !== subI);
            });
        });
    });

    // 이벤트배너 세로 자동스와이퍼
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // 핫플레이스 가로 슬라이드
    var swiper = new Swiper(".mySwiper-hot", {
        wheel: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
    });

    // 매거진
    
})();