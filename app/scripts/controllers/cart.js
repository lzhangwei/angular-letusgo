'use strict';

angular.module('angularLetusgoApp')
  .controller('CartCtrl', function ($scope, cartService) {

    $scope.$emit('to-parent-incart');

    var cartItemList = cartService.getCartItem();

    $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);

    $scope.total = cartService.totalPrice(cartItemList);

    $scope.addCartItemClick = function (cartItem) {

      cartItemList = cartService.addCartItem(cartItem.item);

      $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
      $scope.total = cartService.totalPrice(cartItemList);

      $scope.$emit('to-parent-changeamounts');
    };

    $scope.reduceCartItemClick = function (cartItem) {

      cartItemList = cartService.reduceCartItem(cartItem.item);

      $scope.cartItemGroup = cartService.categoryCartItem(cartItemList);
      $scope.total = cartService.totalPrice(cartItemList);

      $scope.$emit('to-parent-changeamounts');
    };

    $scope.isShow = function () {
      cartItemList = cartService.getCartItem();
      return !(cartItemList===null || cartItemList.length === 0);
    };

  });
