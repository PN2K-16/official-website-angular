(function(){

 'use strict';

 angular.module('pn2k')

  .controller('HomeController',HomeController);
 
  

 function HomeController($timeout,$state,$rootScope,$scope){




  //$timeout(function(){
   //$scope.$digest();

   // Commom Plugins


   // Animate
   (function($) {

    'use strict';
    $('[data-plugin-animate], [data-appear-animation]').each(function(){

     $(this).stop();

    });

    if ($.isFunction($.fn['themePluginAnimate'])) {

     $(function() {
      $('[data-plugin-animate], [data-appear-animation]').each(function() {
       var $this = $(this),
           opts;

       var pluginOptions = $this.data('plugin-options');
       if (pluginOptions)
        opts = pluginOptions;

       $this.themePluginAnimate(opts);
      });
     });

    }

   }).apply(this, [jQuery]);  



   // Revolution Slider
   (function($) {

    'use strict';

    if ($.isFunction($.fn['themePluginRevolutionSlider'])) {

     $(function() {
      $('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function() {
       var $this = $(this),
           opts;

       var pluginOptions = $this.data('plugin-options');
       if (pluginOptions)
        opts = pluginOptions;

       $this.themePluginRevolutionSlider(opts);
       //console.log($this.themePluginRevolutionSlider);
      });
     });

    }

   }).apply(this, [jQuery]);


   (function($) {

    'use strict';

    if ($.isFunction($.fn['themePluginWordRotate'])) {

     $(function() {
      $('[data-plugin-word-rotate]:not(.manual), .word-rotate:not(.manual)').each(function() {
       var $this = $(this),
           opts;

       var pluginOptions = $this.data('plugin-options');
       if (pluginOptions)
        opts = pluginOptions;

       $this.themePluginWordRotate(opts);
      });
     });

    }

   }).apply(this, [jQuery]);

   // Commom Partials


   (function($) {

    'use strict';
    /*
	Circle Slider
	*/


    if ($.isFunction($.fn.flipshow)) {
     var circleContainer = $('#fcSlideshow');

     if (circleContainer.get(0)) {
      circleContainer.flipshow();

      setTimeout(function circleFlip() {

       if(circleContainer.data().flipshow){
        circleContainer.data().flipshow._navigate(circleContainer.find('div.fc-right span:first'), 'right');
        setTimeout(circleFlip, 3000);
       }
      }, 3000);
     }
    }

    /*
	Move Cloud
	*/
    if ($('.cloud').get(0)) {
     var moveCloud = function() {
      $('.cloud').animate({
       'top': '+=20px'
      }, 3000, 'linear', function() {
       $('.cloud').animate({
        'top': '-=20px'
       }, 3000, 'linear', function() {
        moveCloud();
       });
      });
     };

     moveCloud();
    }

    /*
	Nivo Slider
	*/
    if ($.isFunction($.fn.nivoSlider)) {
     $('#nivoSlider').nivoSlider({
      effect: 'random',
      slices: 15,
      boxCols: 8,
      boxRows: 4,
      animSpeed: 500,
      pauseTime: 3000,
      startSlide: 0,
      directionNav: true,
      controlNav: true,
      controlNavThumbs: false,
      pauseOnHover: true,
      manualAdvance: false,
      prevText: 'Prev',
      nextText: 'Next',
      randomStart: false
     });
    }

   }).apply(this, [jQuery]);

 // });

 }





})();