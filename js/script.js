window.load = function(){};
$(document).ready(function(){
    new Swiper('.sw-publ', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sw-publ-next",
            prevEl: ".sw-publ-prev",
        },
    });
});