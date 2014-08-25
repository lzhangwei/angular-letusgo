/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('ListCtrl', function ($scope ,loadService, cartService) {

        loadService.loadAllItems();

        $scope.$emit('to-parent-inlist');

        $scope.items = Storage.getArrayItem('items');
        $scope.addCartItem = function(item) {
            var cartItemList = cartService.getCartItemList();
            cartService.addCartItem(item, cartItemList);
            $scope.$emit('to-parent-changeamounts');
        }
    });