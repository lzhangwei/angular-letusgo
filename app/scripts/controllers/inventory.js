'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
  .controller('InventoryCtrl', function ($scope, cartService) {

    $scope.curdate = moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss');//未测试
    $scope.cartItemList = cartService.getCartItem();

    $scope.inventorytotal = cartService.totalPrice($scope.cartItemList);

    $scope.okPayClick = function () {
      cartService.cleanCart();
      $scope.$emit('to-parent-changeamounts');
    };

  });
