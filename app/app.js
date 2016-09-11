(function () {

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

            }).state('404', {
                url: "/404",
                templateUrl: "pages/404.html",
                controller: ""
            });



        var config = {
            apiKey: "AIzaSyC-GXQrw8HTfOv2waZpQDqTmQBJO-NQPKo",
            authDomain: "pn2k-projects.firebaseapp.com",
            databaseURL: "https://pn2k-projects.firebaseio.com",
            storageBucket: "pn2k-projects.appspot.com",
        };

        firebase.initializeApp(config);
    }

    function run($rootScope, $firebaseObject, $state, $timeout) {

        $rootScope.$on('$stateChangeSuccess', function () {
            $('#announcement').modal('show');
            
        });

        (function ($) {

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

        (function ($) {

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



        $timeout(function () {
            // $state.go('home');   
            $rootScope.$on('$stateChangeError', function (event) {
                $state.go('404');
                console.log("error occured");
            });

        });

        $('.pull-down').each(function () {
            var $this = $(this);
            $this.css('margin-top', $this.parent().height() - $this.height())
        });

    }

    angular.module('pn2k', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'firebase'])
        .config(config)
        .run(run);

})();