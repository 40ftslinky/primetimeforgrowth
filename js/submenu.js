// add class submenu is-visible .js

jQuery(document).ready(function( $ ) {
    // 
    $(".has-sub").parent().mouseenter(function(){
        $(".menu-list").addClass("is-triggered");
        // $(".menu-list").addClass("is-triggered");
        $(".sub_menu-dropdown").addClass("is-visible");
    });  
    // for mobile
    $(".no_scroll").child().click(function() {
        $(".sub_menu-dropdown.is-visible").removeClass("is-visible");
    });
});