window.addEventListener('load', function(){
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
   
   
   
