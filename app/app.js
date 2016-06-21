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

        });
    }

    angular.module('pn2k',['ui.router'])
        .config(config);

})();