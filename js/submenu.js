// add class submenu is-visible .js

jQuery(document).ready(function( $ ) {



	
	jQuery(".prime-hub a").click(function(){
			show_mobile_sub_menu();
	});	


    $(".has-sub").parent().mouseenter(function(){
       
		var window_width = jQuery( window ).width();
		if(window_width>1080){

		   $(".menu-list").addClass("is-triggered");
			 $("#sub_menu-dropdown").removeClass("not-visible");
			$("#sub_menu-dropdown").addClass("is-visible");
			megamenu_default_tab();
		}
    });  
	
	



	$(".nav_header_wrap").parent().mouseleave(function(){
		hide_nav_sub_menu();

	});
	
	$(".sub_menu-dropdown-wrap").parent().mouseleave(function(){
		hide_nav_sub_menu();
	});


	$("section").parent().mouseenter(function(){
		hide_nav_sub_menu();
	});		
	
    // for mobile

	
	jQuery("#sub_menu-dropdown").click(function() {

			jQuery("#sub_menu-dropdown").addClass('not-visible');
			jQuery("#sub_menu-dropdown").removeClass('is-visible');
	});
	
	
	jQuery("#nav .prime-hub .has-sub").click(function() {
			jQuery("#sub_menu-dropdown").removeClass('not-visible');
			jQuery("#sub_menu-dropdown").addClass('is-visible');
	});	


	
	//Burger 
	jQuery(".burger").click(function() {	
	
		jQuery("#sub_menu-dropdown").addClass('not-visible');
		jQuery("#sub_menu-dropdown").removeClass('is-visible');
	});
		


	
	
});



function show_mobile_sub_menu(){
		var window_width = jQuery( window ).width();
		if(window_width<=1080){	
				jQuery(".sub_menu-dropdown").show();
				jQuery(".sub_menu-dropdown").css('visibility', 'visible');
				jQuery(".sub_menu-dropdown").css('opacity', '1');
					
		}
}

function hide_nav_sub_menu(){
	

		var window_width = jQuery( window ).width();
		if(window_width<=1080){
			
		} else {
			console.log("is Not burger Visible");
			var $mm2 = jQuery('.sub_menu-dropdown');  
			var $NavHeight = jQuery('header.header').outerHeight(true); 
			var headerHeight =jQuery("header").outerHeight(true); 			
			var $MouseY =event.clientY;
			var $top= $mm2.position().top;
			var $Height_of_sub= jQuery(".sub_menu-dropdown").outerHeight(true); 
			var $bottom_of_sub = headerHeight  + $Height_of_sub;
			if($MouseY>$bottom_of_sub){
				jQuery("#sub_menu-dropdown").addClass("not-visible");
				jQuery("#sub_menu-dropdown").removeClass("is-visible");
			}
		}
	
}