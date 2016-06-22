(function(){

 //'use strict';

 angular.module('pn2k')


  .directive('wrapOwlcarousel', function () { 

  return { 

   restrict: 'E', 

   link: function (scope, element, attrs) { 

    var options = scope.$eval($(element).attr('data-options')); 

    $(element).owlCarousel(options); 
//items: 6, autoplay: true, autoplayTimeout: 3000
   } 

  }; 

 })
    .component('companyDetails',{

        templateUrl: 'pages/sub-items/companyDetails.html',
        controller: function(){   
        },
        bindings: {
        }  
    })
  .controller('HomeController',HomeController)
  .controller('AboutController',AboutController);
 
 function HomeController($timeout,$state,$rootScope,$scope){




  $timeout(function(){
   $scope.$digest();

   // Commom Plugins
   (function($) {

    'use strict';

    // Scroll to Top Button.
    if (typeof theme.PluginScrollToTop !== 'undefined') {
     theme.PluginScrollToTop.initialize();
    }

    // Parallax
    if (typeof theme.PluginParallax !== 'undefined') {
     theme.PluginParallax.initialize();
    }

    // Tooltips
    if ($.isFunction($.fn['tooltip'])) {
     $('[data-tooltip]').tooltip();
    }

   }).apply(this, [jQuery]);

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

   // Carousel
 /*  (function($) {

    'use strict';

    if ($.isFunction($.fn['themePluginCarousel'])) {

     $(function() {
      $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
       var $this = $(this),
           opts;

       var pluginOptions = $this.data('plugin-options');
       if (pluginOptions)
        opts = pluginOptions;
       
       
       $this.themePluginCarousel(opts);

     

      });
     });

    }

   }).apply(this, [jQuery]); */

   // Chart.Circular
   /*  (function($) {

            'use strict';

            if ($.isFunction($.fn['themePluginChartCircular'])) {

                $(function() {
                    $('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = $this.data('plugin-options');
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginChartCircular(opts);
                    });
                });

            }

        }).apply(this, [jQuery]); */

   // Counter
   /*  (function($) {

            'use strict';

            if ($.isFunction($.fn['themePluginCounter'])) {

                $(function() {
                    $('[data-plugin-counter]:not(.manual), .counters [data-to]').each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = $this.data('plugin-options');
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginCounter(opts);
                    });
                });

            }

        }).apply(this, [jQuery]); */

   // Flickr
   /* (function($) {

            'use strict';

            if ($.isFunction($.fn['themePluginFlickr'])) {

                $(function() {
                    $('[data-plugin-flickr]:not(.manual)').each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = $this.data('plugin-options');
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginFlickr(opts);
                    });
                });

            }

        }).apply(this, [jQuery]); */

   // Lightbox
   /* (function($) {

            'use strict';

            if ($.isFunction($.fn['themePluginLightbox'])) {

                $(function() {
                    $('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)').each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = $this.data('plugin-options');
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginLightbox(opts);
                    });
                });

            }

        }).apply(this, [jQuery]); */

   // Masonry
   /*   (function($) {

            'use strict';

            if ($.isFunction($.fn['themePluginMasonry'])) {

                $(function() {
                    $('[data-plugin-masonry]:not(.manual)').each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = $this.data('plugin-options');
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginMasonry(opts);
                    });
                });

            }

        }).apply(this, [jQuery]); */

   // Progress Bar
   /*   (function($) {

            'use strict';

            if ($.isFunction($.fn['themePluginProgressBar'])) {

                $(function() {
                    $('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]').each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = $this.data('plugin-options');
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginProgressBar(opts);
                    });
                });

            }

        }).apply(this, [jQuery]); */

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

   // Sort
   /*  (function($) {

        'use strict';

        if ($.isFunction($.fn['themePluginSort'])) {

          $(function() {
            $('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)').each(function() {
              var $this = $(this),
                  opts;

              var pluginOptions = $this.data('plugin-options');
              if (pluginOptions)
                opts = pluginOptions;

              $this.themePluginSort(opts);
            });
          });

        }

      }).apply(this, [jQuery]); */

   // Toggle
   /*  (function($) {

        'use strict';

        if ($.isFunction($.fn['themePluginToggle'])) {

          $(function() {
            $('[data-plugin-toggle]:not(.manual)').each(function() {
              var $this = $(this),
                  opts;

              var pluginOptions = $this.data('plugin-options');
              if (pluginOptions)
                opts = pluginOptions;

              $this.themePluginToggle(opts);
            });
          });

        }

      }).apply(this, [jQuery]); */

   // Tweets
   /*  (function($) {

        'use strict';

        if ($.isFunction($.fn['themePluginTweets'])) {

          $(function() {
            $('[data-plugin-tweets]:not(.manual)').each(function() {
              var $this = $(this),
                  opts;

              var pluginOptions = $this.data('plugin-options');
              if (pluginOptions)
                opts = pluginOptions;

              $this.themePluginTweets(opts);
            });
          });

        }

      }).apply(this, [jQuery]); */

   // Video Background
   /*   (function($) {

            'use strict';

            if ($.isFunction($.fn['themePluginVideoBackground'])) {

                $(function() {
                    $('[data-plugin-video-background]:not(.manual)').each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = $this.data('plugin-options');
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginVideoBackground(opts);
                    });
                });

            }

        }).apply(this, [jQuery]); */

   // Word Rotate
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

    // Sticky Menu
    if (typeof theme.StickyMenu !== 'undefined') {
     theme.StickyMenu.initialize();
    }

    // Nav Menu
    if (typeof theme.Nav !== 'undefined') {
     theme.Nav.initialize();
    }

    // Search
    if (typeof theme.Search !== 'undefined') {
     theme.Search.initialize();
    }

    // Newsletter
    if (typeof theme.Newsletter !== 'undefined') {
     theme.Newsletter.initialize();
    }

    // Account
    if (typeof theme.Account !== 'undefined') {
     theme.Account.initialize();
    }

   }).apply(this, [jQuery]);

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

  });

 }


 function AboutController($timeout,$state,$rootScope,$scope){

  $timeout(function(){

   $scope.$digest();

 // Word Rotate
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


  });



 }

})();