// function sliderWorks(name) {
//   $("." + name).slick({   
//       dots: false,
//       arrows: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//   });
// }


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
  // sliderWorks('slider_tab01');
  // sliderWorks('slider_tab02');
  // sliderWorks('slider_tab03');
  // sliderWorks('slider_tab04');

  // mv-slick 
  // ---------------------------------------
  $('.mv-slick').slick();
  // tab 
  // ---------------------------------------
  $(function() {

    // Tab on PC
    if ($(".nav-item").length > 0) {
      var selectedClass = "";
      $(".tabPC .content_inner").hide();
      $(".tabPC .content_inner:first-child").show().addClass("active");
      $(".nav-item").on('click', function(e){
        e.preventDefault();
        selectedClass = $(this).attr("data-rel");
        // Add class active
        $('.nav-item').removeClass("active");
        $('.content_inner').removeClass('active');
        $(this).addClass("active");
        $("." + selectedClass).addClass("active");
        
        $('.tabPC .content_inner:visible').fadeOut("200", function () {        
          $(".tabPC .content_inner." + selectedClass).fadeIn("200", function() {            
            $('.slider_' +selectedClass ).slick("setPosition", 0);
          });
        });
      });
    }

    // Tab on SP
    if ($(".tab_nav_select").length > 0) {
      var selectedClass = "";
      $(".tabSP .content_inner").hide();
      $(".tabSP .content_inner:first-child").show();
      $('select[name="nav_select"]').on('change', function(e) {
        e.preventDefault();
        selectedClass = $('option:selected').data('rel');
        $('.tabSP .content_inner:visible').fadeOut("200");
        $(".tabSP .content_inner." + selectedClass).fadeIn("200");      
      });
    }

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
  
});