window.addEventListener('load', function(){
    $('.header__menu_link').on('click', function(e){
    $('.header__popup').toggleClass('popup_is_active')
    $('#line2').toggleClass('close__popup_none')
    $('#line1').toggleClass('close__popup_rotete')
    $('#line3').toggleClass('close__popup_rotete_45')
    });


    $('.piramide__foto').slick({
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
              }
            }
        ]

    });
});