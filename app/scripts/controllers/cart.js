'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope, cartService, localStorageService) {

        $scope.$emit('to-parent-incart');

        var cartItemList = localStorageService.get('cartItems');

        $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);

        $scope.total = sum(_.map(cartItemList, function(cartItem){
            return cartItem.item.price * cartItem.num;
        }));

        $scope.addCartItemClick = function(cartItem) {

            cartItemList = localStorageService.get('cartItems') || [];
            cartItemList = cartService.addCartItem(cartItem.item, cartItemList);
            localStorageService.set('cartItems', cartItemList);
            $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
            $scope.total = sum(_.map(cartItemList, function(cartItem){
                return cartItem.item.price * cartItem.num;
            }));

            localStorageService.set('amounts', +localStorageService.get('amounts') + 1);

            $scope.$emit('to-parent-changeamounts');
        };

        $scope.reduceCartItemClick = function(cartItem) {

            cartItemList = localStorageService.get('cartItems');
            cartItemList = cartService.reduceCartItem(cartItem.item, cartItemList);
            localStorageService.set('cartItems', cartItemList);
            $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
            $scope.total = sum(_.map(cartItemList, function(cartItem){
                return cartItem.item.price * cartItem.num;
            }));

            localStorageService.set('amounts', +localStorageService.get('amounts') - 1);

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

function sum(array) {
    var sum = 0;
    _.forEach(array, function(item){
        sum += item;
    })
    return sum;
}