window.addEventListener('load', function(){
    $('.header__menu_link').on('click', function(e){
    $('.header__menu').fadeIn()
    $('#line2').toggleClass('close__popup_none')
    $('#line1').toggleClass('close__popup_rotete')
    $('#line3').toggleClass('close__popup_rotete_45')
    });


    $('.menu__burger').click(function(e){
      $('.header__menu').fadeOut()
    })

    $(document).mouseup(function (e) {
      var container = $(".header__menu");
      if (container.has(e.target).length === 0){
          container.fadeOut();
      }
  });

  $('.cocktail__btn-js').on('click', function(e){
    $('.cocktail__popup').fadeOut()
    $(this).parent().find('.cocktail__popup').fadeIn()
  });

  $('.cocktail__popup-btn').on('click', function(e){
    $('.cocktail__popup').fadeOut()
  });

  $(document).mouseup(function (e) {
    var container = $(".cocktail__popup");
    if (container.has(e.target).length === 0){
        container.fadeOut();
    }
  });

  const swiper = new Swiper('.swiper', {
    effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  
});