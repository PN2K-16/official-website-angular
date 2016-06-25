(function(){
 
 'use strict';
 angular.module('pn2k')
 
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
 });
 
})();
