// add / remove field

// jQuery(document).ready(function( $ ) {
//     $( ".add_asset" ).click(function(){
//        var $clone = $( ".assets_outer" ).first().clone();
//        $clone.append( "<button class='remove_asset'>-</button>" );
//        $clone.insertBefore( ".add-row" );
//     });
   
//     $( "#form_02" ).on("click", ".remove_asset", function(){
//        $(this).parent().remove();
//     });
//  });
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

// need to add the file name of the upload to field after successful upload


// jQuery(document).ready(function( $ ) {
//     $('[data-toggle="popover"]').popover({
//        placement: 'top',
//        trigger: 'hover'
//     });
//  });