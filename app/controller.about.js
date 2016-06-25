(function(){

 'use strict';
 angular.module('pn2k')
  .controller('AboutController',AboutController);






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