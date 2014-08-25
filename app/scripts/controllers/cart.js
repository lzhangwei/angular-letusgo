'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope, cartService) {

        $scope.$emit('to-parent-incart');

        var cartItemList = cartService.getCartItemList();

        $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);

        $scope.total = sum(_.map(cartItemList, function(cartItem){
            return cartItem.item.price * cartItem.num;
        }));

        $scope.addCartItemClick = function(cartItem) {
            $scope.$emit('to-parent-changeamounts');
            var cartItemList = cartService.getCartItemList();
            cartService.addCartItem(cartItem.item, cartItemList);
            $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
            $scope.total = sum(_.map(cartItemList, function(cartItem){
                return cartItem.item.price * cartItem.num;
            }));
        };

        $scope.reduceCartItemClick = function(cartItem) {
            $scope.$emit('to-parent-changeamounts');
            var cartItemList = cartService.getCartItemList();
            cartService.reduceCartItem(cartItem.item, cartItemList);
            $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
            $scope.total = sum(_.map(cartItemList, function(cartItem){
                return cartItem.item.price * cartItem.num;
            }));
        };

        $scope.isShow = function(){
            var cartItemList = cartService.getCartItemList();
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