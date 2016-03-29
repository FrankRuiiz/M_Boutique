/**
 * Created by FrankyR on 3/28/2016.
 */


// Declaration of the Angular App

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');

    $stateProvider

        // Welcome state and nested views
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'templates/welcome_template.html'
        })
        // Our Macarons
        .state('our_macarons', {
            url: '/our_macarons',
            templateUrl: 'templates/our_macarons_template.html'
        })
        // Gifts_Parties
        .state('gifts_parties', {
            url: '/gifts_parties',
            templateUrl: 'templates/gifts_parties_template.html'
        })
        // Contact Us
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact_template.html'
        });

});