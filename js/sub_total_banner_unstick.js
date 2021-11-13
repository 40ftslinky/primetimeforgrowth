// add class to subtotal banner when footer reaches windowheight

jQuery(document).ready(function( $ ) {
        
    $(window).scroll(function(){
        var docHeight = $(document).height();
        var winScrolled = window.innerHeight + $(window).scrollTop();
        var footHeight = $('.footer').height();
        var subfootHeight = $('.subtotal_banner_sect').height();
        
        if (winScrolled > docHeight - footHeight - subfootHeight) {
            console.log("reached bottom!");
            $('.subtotal_banner_sect').addClass('unfixed');
            $('.footer').css('margin-top','0');
        } else {
            $('.subtotal_banner_sect').removeClass('unfixed');
            $('.footer').css('margin-top','5rem');

        }        
    });

});