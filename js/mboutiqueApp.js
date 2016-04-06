/**
 * Created by FrankyR on 3/28/2016.
 */

// Declared Angular App
var mboutiqueApp = angular.module('mboutiqueApp', ['ui.router', 'pascalprecht.translate'])

    // App Configuration
    .config(function ($translateProvider, $provide, $stateProvider, $urlRouterProvider) {
        // Sets the default language to English
        $translateProvider.preferredLanguage('en');

        // Static File Loader, used to grab language library from the languages directory
        $translateProvider.useStaticFilesLoader({
            prefix: 'languages/',
            suffix: '.json'
        });

        //Sets the default rout to the welcom page
        $urlRouterProvider.otherwise('/welcome');

        //Rout settings for each link on the nav
        $stateProvider
        // Welcome state
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'templates/welcome_template.html'
            })
            // Our Macarons state
            .state('our_macarons', {
                url: '/our_macarons',
                templateUrl: 'templates/our_macarons_template.html'
            })
            // Gifts_Parties state
            .state('gifts_parties', {
                url: '/gifts_parties',
                templateUrl: 'templates/gifts_parties_template.html'
            })
            // Contact us state
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact_template.html'
            });

        // Sets the view when clicking on links to the top of the window
        $provide.decorator('$uiViewScroll', function () {
            return function (uiViewElement) {};
        });
    })

    // mboutiqueApp controller
    .controller('mboutiqueCtrl', function($translate, $scope){
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };
    });





