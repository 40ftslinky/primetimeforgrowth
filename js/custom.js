
 jQuery(document).ready(function( $ ) {

    $(".add_asset").click(function(event) {
        event.preventDefault();
        var $assets_label_html = $("label.file").html();
        $(".assets_outer").append("<div class='asset_group'><label class='file'>"+$assets_label_html+"</label> <button class='remove_asset'>-</button></div>" );
    });
   
    $( "#form_02" ).on("click", ".remove_asset", function(){
       $(this).parent().remove();
    });
   
});



jQuery(document).ready(function( $ ) {
    $('.sub_menu-link').hover(
        // if ($( ".sub_menu-item_row" ).hasClass('is-hidden')) {
        //     $( ".sub_menu-item_row" ).removeClass( 'is-hidden');
        // } else {
        //   $( ".sub_menu-item_row" ).addClass( 'is-hidden');
        // }
    )
 });