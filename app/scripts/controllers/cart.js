'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope, cartService, localStorageService) {

        $scope.$emit('to-parent-incart');

        var cartItemList = localStorageService.get('cartItems');

        $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);

        $scope.total = cartService.totalPrice(cartItemList);

        $scope.addCartItemClick = function(cartItem) {

            cartItemList = cartService.addCartItem(cartItem.item);

            $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
            $scope.total = cartService.totalPrice(cartItemList);

            $scope.$emit('to-parent-changeamounts');
        };

        $scope.reduceCartItemClick = function(cartItem) {

            cartItemList = cartService.reduceCartItem(cartItem.item);

            $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
            $scope.total = cartService.totalPrice(cartItemList);

            $scope.$emit('to-parent-changeamounts');
        };

        $scope.isShow = function(){
            cartItemList = localStorageService.get('cartItems');
            if(cartItemList.length === 0){
                return false;
            } else {
                return true;
            }
        };

    });