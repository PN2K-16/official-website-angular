(function(){

 'use strict';
 angular.module('pn2k')

  .controller('PortfolioController',PortfolioController)
  .controller('PortfolioSingleController',PortfolioSingleController);


 function PortfolioController($timeout,$state,$rootScope,$scope,Projects,$uibModal,$firebaseObject){

  var self = this;

  self.items = Projects.data;

  var opts = {"type":"inline", preloader: false};

  $scope.loadProject = function(){


  };


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