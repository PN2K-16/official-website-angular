(function(){

 'use strict';


 angular.module('pn2k')

  .directive('wrapOwlcarousel', function () { 

  return { 

   restrict: 'E', 

   link: function (scope, element, attrs) { 

    var options = scope.$eval($(element).attr('data-options')); 

    $(element).owlCarousel(options);  
   } 

  }; 

 });

})();