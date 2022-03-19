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
		/////r_open_mega_menu(this,1);
      });
	
	
    $('.menu-link.has-sub').mouseout(function(){     

		/////r_open_mega_menu(this,0);
      });	



    $('.sub_menu-dropdown-wrap .sub_menu-link').mouseenter(function(){     

	///	r_open_mega_menu(this,1);
    });
	
	$('#mega_menu_section_3').mouseout(function(){  
	///	r_open_mega_menu(this,0);
	});
	
    $('.sub_menu-dropdown-wrap .sub_menu-link').mouseout(function(){     

	///	r_open_mega_menu(this,0);
    });	
    
    $('.sub_menu-item_row').mouseout(function(){     

		///r_open_mega_menu(this,1);
    });		
		
		
		
    $('.sub_menu-item_row, .sub_menu-item_row_wrap, .sub_menu-item_row_wrap div, .sub_menu-item_row_wrap a').mouseenter(function(){     

	////	r_open_mega_menu(this,0);
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

		var elem_id =$(x).attr('class');

		var $mm2 = $('.sub_menu-dropdown');  
		var $mm3 = $('#mega_menu_section_3');  
		var $NavHeight = $('header.header').outerHeight(true); 
		var headerHeight =$("header").outerHeight(true); 
		//var mm2Height = $mm2.outerHeight(true); 
		var mm3Height = $mm3.outerHeight(true); 	// passing "true" will also include the top and bottom margin
		var $top= $mm2.position().top;
		var $bottom = headerHeight  + mm3Height;
		// left posi of the Prime Hub button
		var hub_btn = jQuery("ul li.prime-hub");
		var offset = hub_btn.offset();
		var buttonX=offset.left ;
		var $MouseX =event.clientX;	
		var W = hub_btn.width();
		var $MouseY =event.clientY;
		var buttonXW = buttonX + W;

		
	if($MouseY>($bottom + 30)){

	
	} else if(($MouseX<buttonX || $MouseX>buttonXW) && $MouseY<$NavHeight){	

		
		
	} else if ((elem_id.indexOf("has-sub") >= 0) && n==1 || elem_id.indexOf("prime-hub") >= 0){
				// top menu-link 
				////
				/*
			console.log("show MeGaMenU...3.");	
			jQuery(".sub_menu-dropdown").show();	// s sub menu 
			jQuery("#mega_menu_section_3").show();
			var vis_count =0;
			jQuery("#mega_menu_section_3 .sub_menu-item_row_wrap").each(function( index ) {
				if(jQuery(this).is(":visible")){
					vis_count++;
				}
			});
			if(vis_count==0){
				jQuery("#mega_menu_section_3 .sub_menu-item_row_wrap:nth-of-type(1)").show();
			}
			*/
		
		} else if (elem_id.indexOf("menu-link has-sub") >= 0 && n==0){
			/*
			if($('.sub_menu-dropdown').is(':visible')){
				if(($MouseY + 15)>$top && $MouseY<$bottom ){
					jQuery(".sub_menu-dropdown").show();	// show  sub menu 
					jQuery(".sub_menu-item_row").show(); // show  tabbed div 
					console.log("show MeGaMenU...4.");
				} else {
					//jQuery(".sub_menu-dropdown").hide();	// hide  sub menu 
				//	jQuery(".sub_menu-item_row").hide(); // hide  tabbed div 
					//console.log("Hide MeGaMenU...5.");
				//	megamenu_default_tab();
				//	jQuery(".menu-list .menu-item .has-sub").removeClass('transform_90deg');
				Hide_MegaMenu();
				}
			}
			*/
		} else  if (elem_id.indexOf("sub_menu-link") >= 0){
			// secondrary level  link 
			/*
			jQuery(".sub_menu-dropdown").show();	// show  sub menu 
			jQuery(".sub_menu-item_row").show(); // show  tabbed div 
			console.log("show MeGaMenU.. 6.");
			*/
		} else {
			if($('.sub_menu-item_row').is(':visible')){
				/*
				// third level menu
				if($MouseY>$bottom || ($MouseY + 15)<$top){
					// hide level 2 and 3 menu 
					//jQuery(".sub_menu-item_row").hide(); // hide tabbed div 
					if($(".sub_menu-dropdown").is(':visible')){
						//jQuery(".sub_menu-dropdown").hide();	// hide sub menu 
						//console.log("Hide MeGaMenU.. 7.");
						//megamenu_default_tab();
						//jQuery(".menu-list .menu-item .has-sub").removeClass('transform_90deg');
						Hide_MegaMenu();
					}
				} else {
					// show level 2 & 3 menus 
					jQuery(".sub_menu-dropdown").show();
					jQuery(".sub_menu-dropdown").css('visibility', 'visible');
					jQuery(".sub_menu-dropdown").css('opacity', '1');
					jQuery(".sub_menu-item_row").show(); 
					console.log("show MeGaMenU.. 8.");
					jQuery(".menu-list .menu-item .has-sub").addClass('transform_90deg');
					console.log('90deg');
				}
				*/
			}
		}	

		}
	






    
    // Show the first tab and hide the rest
	var BodyID = $("body").attr('id');
	

	


    // mouseenter function
    $('.sub_menu-item_wrapper').mouseenter(function(){          
        // Check for active
        $('.sub_menu-item_wrapper').removeClass('is-tabbed');
    //    $(this).addClass('is-tabbed');
        $('.sub_menu-item_row').show();
 
        // Display active tab
		console.log(subLink);
		var subLink = $(this).children(":first");
        let currentTab = $(subLink).attr('data-id');
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
jQuery('.menu-item:nth-of-type(2)').mouseenter(function(){          
			//console.log("Hide MeGaMenU....");
		//	jQuery(".sub_menu-dropdown").hide();	// show  sub menu 
		//	jQuery(".sub_menu-item_row").hide(); // show  tabbed div 
		//	jQuery(".menu-list .menu-item .has-sub").removeClass('transform_90deg');	
		Hide_MegaMenu();		
});








	function Hide_MegaMenu(){
		
		//Hide MeGaMenU
		setTimeout(Hide_MegaMenuMain, 1000);
		console.log("Hide MeGaMenU...2.  ");
	
	}
	
	function Hide_MegaMenuMain(){
			jQuery(".sub_menu-dropdown").hide();	// show  sub menu 
			jQuery(".sub_menu-item_row").hide(); // show  tabbed div 
			megamenu_default_tab();
			jQuery(".menu-list .menu-item .has-sub").removeClass('transform_90deg');					
		
	}
	
	function megamenu_default_tab(){
		jQuery('.sub_menu-item_row').hide();
		jQuery('.sub_menu-item_wrapper').removeClass('is-tabbed');
		jQuery('.is-tabbed + .sub_menu-item_row').hide();	
		jQuery('.sub_menu-item_row_wrap').hide();		
		jQuery('.sub_menu-item_row_wrap').hide();
		if (jQuery("body").hasClass('meet-the-network')) {
		//if(BodyID=="meet-the-network"){
			jQuery('.sub_menu-dropdown-wrap .sub_menu-item:nth-of-type(3) .sub_menu-item_wrapper').addClass('is-tabbed');
			jQuery('.sub_menu-item_row_wrap:nth-of-type(3)').show();
			console.log("meet the network");
		} else if (jQuery("body").hasClass('meet_the_stations') || jQuery("body").hasClass('station')) {
			jQuery('.sub_menu-dropdown-wrap .sub_menu-item:nth-of-type(4) .sub_menu-item_wrapper').addClass('is-tabbed');
			jQuery('.sub_menu-item_row_wrap:nth-of-type(4)').show();
		} else if (jQuery("body").hasClass('meet-the-adbuilder')) {
			jQuery('.sub_menu-dropdown-wrap .sub_menu-item:nth-of-type(5) .sub_menu-item_wrapper').addClass('is-tabbed');
			jQuery('.sub_menu-item_row_wrap:nth-of-type(5)').show();
		} else if (jQuery("body").hasClass('meet-the-markets')) {
			jQuery('.sub_menu-dropdown-wrap .sub_menu-item:nth-of-type(2) .sub_menu-item_wrapper').addClass('is-tabbed');
			jQuery('.sub_menu-item_row_wrap:nth-of-type(2)').show();			
			
		} else {
			jQuery('.sub_menu-dropdown-wrap .sub_menu-item:nth-of-type(1) .sub_menu-item_wrapper').addClass('is-tabbed');
			jQuery('.sub_menu-item_row_wrap:nth-of-type(1)').show();
		}
	}
   
    megamenu_default_tab();	