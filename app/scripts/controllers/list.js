/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('ListCtrl', function ($scope ,loadService, cartService, localStorageService) {

        $scope.$emit('to-parent-inlist');

        var items = loadService.loadAllItems();
        localStorageService.bind($scope, 'items', items);

        $scope.addCartItem = function(item) {
            var cartItemList = localStorageService.get('cartItems') || [];
            cartItemList = cartService.addCartItem(item, cartItemList);
            localStorageService.set('cartItems', cartItemList);
            localStorageService.set('amounts', +localStorageService.get('amounts')+1);
            $scope.$emit('to-parent-changeamounts');
        }
    });