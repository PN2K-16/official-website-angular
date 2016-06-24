(function(){

 //'use strict';

 angular.module('pn2k')


  .directive('wrapOwlcarousel', function () { 

  return { 

   restrict: 'E', 

   link: function (scope, element, attrs) { 

    var options = scope.$eval($(element).attr('data-options')); 

    $(element).owlCarousel(options);  
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
  .component('contactInfo',{

  templateUrl: 'pages/sub-items/contact-info.html',
  controller: function(){   
  },
  bindings: {
  }  
 })
  .component('companyServices',{

  templateUrl: 'pages/sub-items/companyServices.html',
  controller: function(){   
  },
  bindings: {
   "itemclass" :'@'
  }  
 })
  .controller('HomeController',HomeController)
  .controller('AboutController',AboutController)
  .controller('ContactController',ContactController)
  .controller('PortfolioController',PortfolioController)
  .controller('PortfolioSingleController',PortfolioSingleController);

 function HomeController($timeout,$state,$rootScope,$scope){




  $timeout(function(){
   $scope.$digest();

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

 function PortfolioController($timeout,$state,$rootScope,$scope,Projects,$uibModal,$firebaseObject){

  var self = this;

  self.items = Projects.data;

  var opts = {"type":"inline", preloader: false};

  $scope.loadProject = function(){


  };


 }

 function ContactController($timeout,$state,$rootScope,$scope,Projects,$uibModal,$firebaseObject){

  $timeout(function(){

   $scope.$apply();


   (function($) {

    'use strict';



    $('#contactForm:not([data-type=advanced])').validate({
     submitHandler: function(form) {

      var $form = $(form),
          $messageSuccess = $('#contactSuccess'),
          $messageError = $('#contactError'),
          $submitButton = $(this.submitButton);

      $submitButton.button('loading');

      // Ajax Submit
      $.ajax({
       type: 'POST',
       url: $form.attr('action'),
       data: {
        name: $form.find('#name').val(),
        email: $form.find('#email').val(),
        subject: $form.find('#subject').val(),
        message: $form.find('#message').val()
       },
       dataType: 'json',
       complete: function(data) {

        if (typeof data.responseJSON === 'object') {
         if (data.responseJSON.response == 'success') {

          $messageSuccess.removeClass('hidden');
          $messageError.addClass('hidden');

          // Reset Form
          $form.find('.form-control')
           .val('')
           .blur()
           .parent()
           .removeClass('has-success')
           .removeClass('has-error')
           .find('label.error')
           .remove();

          if (($messageSuccess.offset().top - 80) < $(window).scrollTop()) {
           $('html, body').animate({
            scrollTop: $messageSuccess.offset().top - 80
           }, 300);
          }

          $submitButton.button('reset');

          return;

         }
        }

        $messageError.removeClass('hidden');
        $messageSuccess.addClass('hidden');

        if (($messageError.offset().top - 80) < $(window).scrollTop()) {
         $('html, body').animate({
          scrollTop: $messageError.offset().top - 80
         }, 300);
        }

        $form.find('.has-success')
         .removeClass('has-success');

        $submitButton.button('reset');

       }
      });
     }
    });


   }).apply(this, [jQuery]);

   /*var mapMarkers = [{
    address: "New York, NY 10017",
    html: "<strong>New York Office</strong><br>New York, NY 10017",
    icon: {
     image: "img/pin.png",
     iconsize: [26, 46],
     iconanchor: [12, 46]
    },
    popup: true
   }];*/

   var mapMarkers = [];

   // Map Initial Location
   var initLatitude = 7.9217131;
   var initLongitude = 79.7862614;

   // Map Extended Settings
   var mapSettings = {
    controls: {
     draggable: true,
     panControl: true,
     zoomControl: true,
     mapTypeControl: true,
     scaleControl: true,
     streetViewControl: true,
     overviewMapControl: true
    },
    scrollwheel: false,
    markers: mapMarkers,
    latitude: initLatitude,
    longitude: initLongitude,
    zoom: 14
   };

   var map = $("#googlemaps").gMap(mapSettings);

   // Map Center At
   var mapCenterAt = function(options, e) {
    e.preventDefault();
    $("#googlemaps").gMap("centerAt", options);
   }



   });





 }

 function PortfolioSingleController($timeout,$state,$rootScope,$scope,Projects,$uibModal,$firebaseObject,$stateParams){

  var self = this;




  self.items = Projects.data;
  self.item = Projects.data[$stateParams.id];

  self.itemIndex = $stateParams.id;

  self.arr1 = [];
  self.arr2 = [];
  self.arr3=  [];


  function init(){
   var items = [];

   angular.copy(Projects.data[$stateParams.id].features,items);


   $timeout(function(){
    while(items.length > 0){

     self.arr1.push(items.pop());
     self.arr2.push(items.pop());
     self.arr3.push(items.pop());

    } 

   });

  }

  self.init = function(){
   init();
  };

  init();





 }

})();