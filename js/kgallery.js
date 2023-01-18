$(document).ready(function(){
    // открыть первую фотографию
    $('.k-gallery__mini-link').on('click', function(e){
        $('.k-gallery__big').fadeIn()
        $('.k-gallery__big img').attr('src', $(this).attr('href'))
        e.preventDefault() 
    }); 

    // закрыть фото
    
    $('.k-gallery__btn-close').on('click', function(e){
        $('.k-gallery__big').hide()
    });

    // закрыть если кликнуть на пустое место

    $(document).mouseup(function (e) {
        var container = $(".k-gallery__enner");
        if (container.has(e.target).length === 0){
            $('.k-gallery__big').fadeOut();
        }
    })

   // стрелка влево

    $('.k-gallery__row-left').click(function(e){
        var href= $(this).parent().find('img').attr('src')
        var link =$('.k-gallery__mini-link[href$="'+href+'"]')
        if(link.prev().length != 0){
            $('.k-gallery__big img').attr('src', $(link.prev()).attr('href'))
        }else{
            $('.k-gallery__big img').attr('src', $('.k-gallery__mini-link').last().attr('href'))
        }
        
    })

    // стрелка вправо
    
    $('.k-gallery__row-right').click(function(e){
        var href= $(this).parent().find('img').attr('src')
        var link =$('.k-gallery__mini-link[href$="'+href+'"]')
        if(link.next().length != 0){
            $('.k-gallery__big img').attr('src', $(link.next()).attr('href'))
        }else{
            $('.k-gallery__big img').attr('src', $('.k-gallery__mini-link').first().attr('href'))
        }
    })


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            var href= $('.k-gallery__row-right').parent().find('img').attr('src')
            var link =$('.k-gallery__mini-link[href$="'+href+'"]')
            if(link.next().length != 0){
                $('.k-gallery__big img').attr('src', $(link.next()).attr('href'))
            }else{
                $('.k-gallery__big img').attr('src', $('.k-gallery__mini-link').first().attr('href'))
            }
        } else {
            var href= $('.k-gallery__row-left').parent().find('img').attr('src')
            var link =$('.k-gallery__mini-link[href$="'+href+'"]')
            if(link.prev().length != 0){
                $('.k-gallery__big img').attr('src', $(link.prev()).attr('href'))
            }else{
                $('.k-gallery__big img').attr('src', $('.k-gallery__mini-link').last().attr('href'))
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
    

});