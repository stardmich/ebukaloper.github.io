jQuery.noConflict();

// jQuery(document).ready(function(e) {

jQuery("body").click(function(){
   jQuery('#ebuka').removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      jQuery(this).removeClass();
    });
  });

  jQuery("body").click(function(){
     jQuery('.site-title').removeClass('animated rubberBand').addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        jQuery(this).removeClass('animated rubberBand');
      });
    });
    //
    // jQuery("#home, .header-wrap").hover(function(){
    //    jQuery('#ebukaloper').removeClass('animated rubberBand').addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       jQuery(this).removeClass('animated rubberBand');
    //     });
    //   });

  // });

// });

// setTimeout(function(){
//
//        $(".home-page .blast").removeClass('animated bounceIn');
//        $(".home-page .blast").css('opacity',1);
//
//        $(".home-page .blast").mouseenter(function (){
//
//            var el = $(this);
//
//            $(this).addClass('animated rubberBand');
//            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//
//                el.removeClass('animated rubberBand');
//
//            });
//
//        });
//
//
//    },3000);
