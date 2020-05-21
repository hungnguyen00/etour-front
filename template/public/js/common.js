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

// sliderCheapFlight 
// ---------------------------------------
function sliderCheapFlight(name) {
  $("." + name).slick({   
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
  });
}

function sliderSupplier(name) {
  $("." + name).slick({   
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
  });
}


$(document).ready(function(){   
  fixHeader();
  sliderCheapFlight('cheap-flight-slider');
  sliderSupplier('supplier-slider');

  // switch tab
  $('.cheap-flight-tab-list a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.cheap-flight-slider').slick('setPosition');
  })
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