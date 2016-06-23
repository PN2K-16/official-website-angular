(function(){

    'use strict';

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
            url: "/home",
            templateUrl: "pages/home.html",
            controller: "HomeController as hc"

        }).state('about', {
            url: "/about-us",
            templateUrl: "pages/about.html",
            controller: "AboutController as ac"

        }).state('portfolio', {
            url: "/portfolio",
            templateUrl: "pages/portfolio.html",
            controller: "PortfolioController as pc"

        }).state('portfolio-single', {
            url: "/portfolio/:id",
            templateUrl: "pages/portfolio-single.html",
            controller: "PortfolioSingleController as psc"

        }).state('contact', {
            url: "/contact-us",
            templateUrl: "pages/contact.html",
            controller: "ContactController as cc"

        });
        
        

        var config = {
            apiKey: "AIzaSyC-GXQrw8HTfOv2waZpQDqTmQBJO-NQPKo",
            authDomain: "pn2k-projects.firebaseapp.com",
            databaseURL: "https://pn2k-projects.firebaseio.com",
            storageBucket: "pn2k-projects.appspot.com",
        };
        
        firebase.initializeApp(config);
    }

    function run($rootScope,$firebaseObject){

        

    }

    angular.module('pn2k',['ui.router','ui.bootstrap','ngAnimate','firebase'])
        .config(config)
        .run(run);

})();