window.onload = function () {
    AOS.init();
};
$(document).ready(function () {

    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 900) {
            $('.gotop').addClass('gotop-active');
        } else {
            $('.gotop').removeClass('gotop-active');
        }
    });
    
// 주메뉴이동
    var moveEl = $('.move');
    $.each(moveEl, function () {
        $(this).click(function (e) {
            e.preventDefault();
            var tg = $(this).attr('href');
            var num;
            if (tg == '#') {
                num = 0;
            } else {
                num = $(tg).offset().top;
            }
            $('html, body').stop().animate({
                scrollTop: num
            }, 800);
        });
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
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true
    });
});