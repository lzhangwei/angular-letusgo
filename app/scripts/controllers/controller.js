/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('IndexController', function ($scope) {
        $scope.amounts = +Storage.getItem('amounts') || 0;

        $scope.$on('to-parent-addamounts', function() {
            //$scope.amounts += 1;
            $scope.amounts = Storage.getItem('amounts');
        });

        $scope.$on('to-parent-inmain', function() {
            $scope.mainbar = 'active';
            $scope.listbar = '';
            $scope.cartbar = '';
        });

        $scope.$on('to-parent-inlist', function() {
            $scope.mainbar = '';
            $scope.listbar = 'active';
            $scope.cartbar = '';
        });

        $scope.$on('to-parent-incart', function() {
            $scope.mainbar = '';
            $scope.listbar = '';
            $scope.cartbar = 'active';
        });

    });