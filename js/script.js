window.load = function () {};
$(document).ready(function () {
    new Swiper('.sw-publ', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sw-publ-next",
            prevEl: ".sw-publ-prev",
        },
    });
    new Swiper('.sw-rede', {
        slidesPerView: 1,
        slidesPerGroup: 2,
        spaceBetween: 0,
        pagination: {
            el: ".sw-rede-pg",
            clickable: true,
        },
    });
});