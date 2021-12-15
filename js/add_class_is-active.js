// add class is-active .js

jQuery(document).ready(function( $ ) {
    //  desktop accordian
    $("[class*='_list_title']").click(function(){
        $(this).parent().toggleClass("is-active");
        $(this).next("p").slideToggle();
        $(this).next("div").slideToggle();
        
    });


    $("#burger-check").change(function(){
        if($(this).is(":checked")) {
            $("#nav").addClass("is-active");
            $(".pre-scrim").addClass("is-active");
            $("body").addClass("no_scroll");
        } else {
            $("#nav").removeClass("is-active");
            $("body").removeClass("no_scroll");
            $(".menu_dropdown").removeClass("is-active");
            $(".menu-link").removeClass("is-active");
        }
    }); 

    // for mobile
    $(".menu-list .menu-link").click(function() {
        $(this).next(".sub_menu-dropdown").slideToggle();
        $(this).toggleClass("is-active");
        
		var count_active = 0;			
		// loops through all a links in menu
		var list_links = $("#nav .menu-list .menu-item .menu-link");
		list_links.each(function(id, a_link) {
			 // if this menus open? is- active
			if ($(a_link).hasClass("is-active")){
                // add to counter
                count_active++;	 
			}
		});	   
	   // if all are closed remove is-active class
	   if(count_active==0){
		   $(".menu-icons").removeClass("is-active");
	   } else {
		// else add is-active class
		 $(".menu-icons").addClass("is-active");
	   }
    });

    $('.menu-link.has-sub').hover(function(){     
        $(this).addClass('is-rotated');
        $('.sub_menu-dropdown').addClass('is-visible');     
 
      },function(){    
        //  $('#responsive-menu-container').removeClass('is-active');     
        $(this).removeClass('is-rotated'); 
        $('.sub_menu-dropdown').removeClass('is-visible');     
    
    });

    // Show the first "tab" and hide the rest
    $('.sub_menu-item .sub_menu-link:first-child').addClass('is-start');
    $('.sub_menu-item_row').addClass('is-hidden').hide();
    $('.sub_menu-item_row:first').addClass('is-shown').show();

    // Click function
    $('.sub_menu-link').mouseenter(function(){
        // $('.sub_menu-item .sub_menu-link').removeClass('is-start');
        // $(this).removeClass('is-start');
        // track
        // $(this).addClass('is-active');
        $('.sub_menu-item_row').removeClass('is-hidden');
        // $('.sub_menu-item_row').removeClass('is-shown');

        // $(this).addClass('active');
        $('.sub_menu-item_row').hide();
        
        //use href to locate & fade tab
        var activeTab = $(this).find('.sub_menu-item_row');
        $(activeTab).fadeIn();
        $(activeTab).removeClass('is-hidden');

        return false;
    });

});

// if ($( "#foo" ).hasClass('className')) {
// 	$( "#foo" ).removeClass( 'className');
// } else {
//   $( "#foo" ).addClass( 'className');
// }

