'use strict';

angular.module('angularLetusgoApp')
  .controller('ListCtrl', function ($scope, itemService, cartService) {

    $scope.$emit('to-parent-inlist');

    $scope.items = itemService.loadAllItems();

    $scope.addCartItem = function (item) {
      cartService.addCartItem(item);
      $scope.$emit('to-parent-changeamounts');
    };
  });
