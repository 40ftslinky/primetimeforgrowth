// add class to subtotal banner when footer reaches windowheight

jQuery(document).ready(function( $ ) {
            
    $(window).scroll(function(){
        var docHeight = $(document).height();
        var winScrolled = window.innerHeight + $(window).scrollTop();
        var topBannerHeight = $('.header').height();
        var topPlusBannerHeight = $('.header').height() + $('.production_date_banner').height();
        var mapHeight = $('#primehub #map').height();
        
        if (winScrolled > docHeight - topBannerHeight - mapHeight) {
            // console.log("reached bottom!");
            $('#map').addClass('fixed');
        } else {
            $('#map').removeClass('fixed');
        }        
    });

});