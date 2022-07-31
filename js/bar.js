$(document).ready(function(){

    $('.bar__info-btn').click(function(e){
        $('.bar__info_wrapper').toggleClass('is_active')       
    });

    

    $(document).mouseup(function (e) {
        var container = $(".bar__info_wrapper");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });

});

