$(document).ready(function(){

    $('.barUp').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow:3,
        responsive: [
            {
              breakpoint: 920,
              settings: {
                slidesToShow:2,
              }
            },
            {
                breakpoint: 620,
                settings: {
                  slidesToShow:1,
                }
              }
        ]
    });

});

