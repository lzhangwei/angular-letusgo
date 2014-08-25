/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('IndexController', function ($scope) {
        $scope.amounts = +Storage.getItem('amounts') || 0;

        $scope.$on('to-parent-changeamounts', function() {
            $scope.amounts = Storage.getItem('amounts');
        });

        $scope.$on('to-parent-inmain', function() {
            $scope.activeMainbar = true;
            $scope.activeListbar = false;
            $scope.activeCartbar = false;
        });

        $scope.$on('to-parent-inlist', function() {
            $scope.amounts = Storage.getItem('amounts');
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