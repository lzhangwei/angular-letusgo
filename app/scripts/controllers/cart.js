/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope) {

        var cart = new Cart();

        $scope.cartItemGroup = cart.categoryCartItem();

        $scope.addCartItemClick = function(cartItem) {
            cart.addCartItem(cartItem.item);
        };

        $scope.reduceCartItemClick = function(cartItem) {
            cart.reduceCartItem(cartItem.item);
        };
    });