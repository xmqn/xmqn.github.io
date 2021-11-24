window.load = function () {};
$(document).ready(function () {
        
    $("body").niceScroll({
        zindex: 9999,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#0030ff",
        cursorwidth: "1rem",
        scrollspeed: 80,
        hidecursordelay: 3000
    });

    new Swiper('.sw-publ', {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sw-publ-next",
            prevEl: ".sw-publ-prev",
        },
        loop: true
    });
    new Swiper('.sw-rede', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sw-rede-next",
            prevEl: ".sw-rede-prev",
        },
        pagination: {
            el: ".sw-rede-pg",
            clickable: true,
        },
        loop: true
    });
});