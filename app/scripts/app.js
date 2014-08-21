'use strict';

/**
 * @ngdoc overview
 * @name angularLetusgoApp
 * @description
 * # angularLetusgoApp
 *
 * Main module of the application.
 */
angular
    .module('angularLetusgoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/list', {
                templateUrl: 'views/list.html',
                controller: 'ListCtrl'
            })
            .when('/cart', {
                templateUrl: 'views/cart.html',
                controller: 'CartCtrl'
            })
            .when('/inventory', {
                templateUrl: 'views/inventory.html',
                controller: 'InventoryCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
