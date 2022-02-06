// add class faqs .js

jQuery(document).ready(function( $ ) {
    //  desktop accordian
    $("[class*='faqs_item']").click(function(){
        // $(this).parent().toggleClass("faqs_item_title_active");
        // $(this).toggleClass("faqs_item_title_active");
        $(this).next(".faqs_item_title").toggleClass("faqs_item_title_active");
        $(this).next(".faqs_content").slideToggle();
        // $(this).next("div").slideToggle();        
    });
});