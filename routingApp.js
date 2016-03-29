/**
 * Created by FrankyR on 3/28/2016.
 */


// Declaration of the Angular App
var mboutiqueRoutApp = angular.module('mboutiqueRoutApp', ['ui.router']);

mboutiqueRoutApp.config(function($stateProvider, $urlRouterProvider) {
    //Default Route
    $urlRouterProvider.otherwise('/welcome');

    //This is where routing is set for the nav bar
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