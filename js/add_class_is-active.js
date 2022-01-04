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
	// end for mobile menu 
	


	


    $('.menu-link.has-sub, .menu-link, .menu-item, .logo_link').mouseenter(function(){     
		r_open_mega_menu(this,1);
      });
	
	
    $('.menu-link.has-sub').mouseout(function(){     

		r_open_mega_menu(this,0);
      });	



    $('.sub_menu-dropdown-wrap .sub_menu-link').mouseenter(function(){     

		r_open_mega_menu(this,1);
    });
	
    $('.sub_menu-dropdown-wrap .sub_menu-link').mouseout(function(){     

		r_open_mega_menu(this,0);
    });	
    
    $('.sub_menu-item_row').mouseout(function(){     

		r_open_mega_menu(this,1);
    });		
		
		
		
    $('.sub_menu-item_row, .sub_menu-item_row_wrap, .sub_menu-item_row_wrap div, .sub_menu-item_row_wrap a').mouseenter(function(){     

		r_open_mega_menu(this,0);
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

	



	function r_open_mega_menu(x,n){
		console.log(x);

		var elem_id =$(x).attr('class');
		console.log(elem_id);
		var $mm2 = $('.sub_menu-dropdown');  
		var $mm3 = $('#mega_menu_section_3');  

		var $mm2Height = $mm2.outerHeight(true); 
		var $mm3Height = $mm3.outerHeight(true); 	// passing "true" will also include the top and bottom margin
		var $top= $mm2.position().top;
		var $bottom = $top + $mm2Height + $mm3Height;
		//var $bottom2 = $top + $mm2Height;
		//var $MouseY =event.pageY;	// Y pos of user's mouse 
		var $MouseY =event.clientY;
		// top menu-link 
		if ((elem_id.indexOf("has-sub") >= 0) && n==1 || elem_id.indexOf("prime-hub") >= 0){
				// top menu-link 
			jQuery(".sub_menu-dropdown").show();	// s sub menu 
		
		} else if (elem_id.indexOf("menu-link has-sub") >= 0 && n==0){
			if($('.sub_menu-dropdown').is(':visible')){
				if(($MouseY + 15)>$top && $MouseY<$bottom ){
					jQuery(".sub_menu-dropdown").show();	// show  sub menu 
					jQuery(".sub_menu-item_row").show(); // show  tabbed div 
				} else {
					jQuery(".sub_menu-dropdown").hide();	// show  sub menu 
					jQuery(".sub_menu-item_row").hide(); // show  tabbed div 
					jQuery(".menu-list .menu-item .has-sub").removeClass('transform_90deg');
				}
			}
		} else  if (elem_id.indexOf("sub_menu-link") >= 0){
			// secondrary level  link 
			jQuery(".sub_menu-dropdown").show();	// show  sub menu 
			jQuery(".sub_menu-item_row").show(); // show  tabbed div 
		} else {
			if($('.sub_menu-item_row').is(':visible')){
				// third level menu
				if($MouseY>$bottom || ($MouseY + 15)<$top){
					// hide level 2 and 3 menu 
					jQuery(".sub_menu-item_row").hide(); // hide tabbed div 
					if($(".sub_menu-dropdown").is(':visible')){
						jQuery(".sub_menu-dropdown").hide();	// hide sub menu 
						jQuery(".menu-list .menu-item .has-sub").removeClass('transform_90deg');
					}
				} else {
					// show level 2 & 3 menus 
					jQuery(".sub_menu-dropdown").show();
					jQuery(".sub_menu-dropdown").css('visibility', 'visible');
					jQuery(".sub_menu-dropdown").css('opacity', '1');
					jQuery(".sub_menu-item_row").show(); 
					jQuery(".menu-list .menu-item .has-sub").addClass('transform_90deg');
					console.log('90deg');
				}
			}
		}	

			//
			//$(x).removeClass('is-rotated'); 
			//$('.sub_menu-dropdown').removeClass('is-visible');  			
			//	jQuery(".sub_menu-item_row").hide();
		}
	







    
    // Show the first tab and hide the rest
    $('.sub_menu-dropdown-wrap .sub_menu-item:first .sub_menu-link').addClass('is-tabbed');
    $('.sub_menu-item_row').hide();
    $('.is-tabbed + .sub_menu-item_row').hide();
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
	
	jQuery("#mega_menu_section_3").hide();
});

// if ($( "#foo" ).hasClass('className')) {
// 	$( "#foo" ).removeClass( 'className');
// } else {
//   $( "#foo" ).addClass( 'className');
// }
