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

    $('.menu-link.has-sub').mouseenter(function(){     
        $(this).addClass('is-rotated');
        $('.sub_menu-dropdown').addClass('is-visible');     
 
      },function(){    
        $(this).removeClass('is-rotated'); 
        $('.sub_menu-dropdown').removeClass('is-visible');     
    
    });

    $('.sub_menu-item_row').mouseenter(function(){     
        $('.menu-link.has-sub').addClass('is-rotated');
        $('.sub_menu-dropdown').addClass('is-visible');     
      },function(){    
        $('.menu-link.has-sub').removeClass('is-rotated');
        $('.sub_menu-dropdown').removeClass('is-visible');         
    });
    

    /* 
    
    ROSS TO DO:

    need a function / argument that if 
    ".sub_menu-item_row" is shown 
    
    $('.menu-link.has-sub').addClass('is-rotated');
    $('.sub_menu-dropdown').addClass('is-visible'); 

    & 
    when is-rotated is not active, 
    .sub_menu-dropdown, 
    .sub_menu-item_row,
    .sub_menu-item_row_wrap,
    
    is hidden

    */

    
    // Show the first tab and hide the rest
    $('.sub_menu-dropdown-wrap .sub_menu-item:first .sub_menu-link').addClass('is-tabbed');
    $('.sub_menu-item_row').hide();
    $('.sub_menu-item_row_wrap').hide();
    $('.sub_menu-item_row:first').show();

    // mouseenter function
    $('.sub_menu-link').mouseenter(function(){          
        // Check for active
        $('.sub_menu-link').removeClass('is-tabbed');
        $(this).addClass('is-tabbed');
        $('.sub_menu-item_row').show();
 
        // Display active tab
        let currentTab = $(this).attr('data-id');
        $('.sub_menu-item_row_wrap').hide();
        $(currentTab).fadeIn();

        return false;
    });
});

// if ($( "#foo" ).hasClass('className')) {
// 	$( "#foo" ).removeClass( 'className');
// } else {
//   $( "#foo" ).addClass( 'className');
// }

