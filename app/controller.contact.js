(function(){
 
 'use strict';
 angular.module('pn2k')
 .controller('ContactController',ContactController);
 
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

 
})();