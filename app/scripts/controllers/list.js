/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('ListCtrl', function ($scope ,itemService, cartService, localStorageService) {

        $scope.$emit('to-parent-inlist');

        $scope.items = itemService.loadAllItems();

        $scope.addCartItem = function(item) {
            cartService.addCartItem(item);
            $scope.$emit('to-parent-changeamounts');
        }
    });