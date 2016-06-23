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

        }).state('contact', {
            url: "/contact-us",
            templateUrl: "pages/contact.html",
            controller: "ContactController as cc"

        });
    }

    function run($rootScope){

        $rootScope.tabclick = function ($event) { $event.preventDefault(); }
    }

    angular.module('pn2k',['ui.router','ui.bootstrap','ngAnimate'])
        .config(config)
        .run(run);

})();