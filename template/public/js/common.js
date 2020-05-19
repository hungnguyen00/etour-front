// fixHeader 
// ---------------------------------------
function fixHeader() {
  $(window).scroll(function() {
    if($(window).scrollTop() <= 20) {
      $('.header').removeClass('scroll');
    } else {
      $('.header').addClass('scroll');
    }
  });
}

$(document).ready(function(){   
  fixHeader();

  // mv-slick 
  // ---------------------------------------
  $('.mv-slick').slick();

  // Menu sp open
  var navIcon = $('.nav_icon');
  var show_menu = $('.menu-nav');
  navIcon.click(function(){
    $(this).toggleClass('nav_icon_open');
    $('body').toggleClass('show_menu');
    //$('body').find('.section_menu').toggleClass('section_menu_show');
    show_menu.fadeToggle('400', function() {
    });
  });
		
  
});