// add class to subtotal banner when footer reaches windowheight

jQuery(document).ready(function( $ ) {
            
    $(window).scroll(function(){
        var docHeight = $(document).height();
        var windowTop = $(window).scrollTop();
        var winScrolled = window.innerHeight + windowTop;
        var topBannerHeight = $('.header').height();
        var topPlusBannerHeight = $('.header').height() + $('.production_date_banner').height();
        var mapHeight = $('#primehub #map').height();
        var mapTop = $('#map').offset().top;

        
        if (winScrolled >= mapTop + mapHeight && winScrolled <= mapTop + mapHeight + mapHeight - (100)) {
            // console.log("reached bottom!");
            $('#map').addClass('fixed');
        } else {
            $('#map').removeClass('fixed');
        }        
    });

});