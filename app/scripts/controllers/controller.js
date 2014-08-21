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
    });