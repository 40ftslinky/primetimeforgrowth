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