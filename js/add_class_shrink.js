// shrink header logo .js

$.noConflict();
jQuery(document).ready(function( $ ) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50){
        $("#nav").addClass("shrink");
    }
    else{
        $("#nav").removeClass("shrink");
    }
  });
});
