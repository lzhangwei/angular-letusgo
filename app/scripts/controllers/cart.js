/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope) {

        $scope.$emit('to-parent-incart');

        var cart = new Cart();

        $scope.cartItemGroup = cart.categoryCartItem();

        $scope.total = sum(_.map(cart.cartItemList, function(cartItem){
            return cartItem.item.price * cartItem.num;
        }));

        $scope.addCartItemClick = function(cartItem) {
            cart.addCartItem(cartItem.item);
            $scope.$emit('to-parent-addamounts');
            $scope.cartItemGroup = cart.categoryCartItem();
            $scope.total = sum(_.map(cart.cartItemList, function(cartItem){
                return cartItem.item.price * cartItem.num;
            }));
        };

        $scope.reduceCartItemClick = function(cartItem) {
            cart.reduceCartItem(cartItem.item);
            $scope.$emit('to-parent-addamounts');
            $scope.cartItemGroup = cart.categoryCartItem();
            $scope.total = sum(_.map(cart.cartItemList, function(cartItem){
                return cartItem.item.price * cartItem.num;
            }));
        };

        $scope.isShow = function(){
            if(cart.cartItemList.length === 0){
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