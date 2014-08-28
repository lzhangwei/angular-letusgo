'use strict';

angular.module('angularLetusgoApp')
    .controller('IndexController', function ($scope, localStorageService) {
        if(localStorageService.get('amounts') === undefined ){
            localStorageService.set('amounts', 0);
        }
        $scope.amounts = localStorageService.get('amounts');

        $scope.$on('to-parent-changeamounts', function() {
            $scope.amounts = localStorageService.get('amounts');
        });

        $scope.$on('to-parent-inmain', function() {
            $scope.activeMainbar = true;
            $scope.activeListbar = false;
            $scope.activeCartbar = false;
        });

        $scope.$on('to-parent-inlist', function() {
            $scope.amounts = localStorageService.get('amounts');
            $scope.activeMainbar = false;
            $scope.activeListbar = true;
            $scope.activeCartbar = false;
        });

        $scope.$on('to-parent-incart', function() {
            $scope.activeMainbar = false;
            $scope.activeListbar = false;
            $scope.activeCartbar = true;
        });

    });