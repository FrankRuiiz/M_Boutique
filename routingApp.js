/**
 * Created by FrankyR on 3/28/2016.
 */


// Declaration of the Angular App
var mboutiqueApp = angular.module('mboutiqueApp', ['ui.router', 'pascalprecht.translate'])

    .config(function ($translateProvider) {
        $translateProvider.preferredLanguage('en');

        $translateProvider.useStaticFilesLoader({
            prefix: 'languages/',
            suffix: '.json'
        });
    })


    .controller('translateController', function($translate, $scope){
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };
    })


    .config(function ($stateProvider, $urlRouterProvider) {
    //Default Route
    $urlRouterProvider.otherwise('/welcome');

    //Routing is set here
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
    });


