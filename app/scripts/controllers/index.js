'use strict';

angular.module('angularLetusgoApp')
  .controller('IndexController', function ($scope, cartService) {
    $scope.amounts = cartService.getAmount();

    $scope.$on('to-parent-changeamounts', function () {
      $scope.amounts = cartService.getAmount();
    });

    $scope.$on('to-parent-inmain', function () {
      $scope.activeMainbar = true;
      $scope.activeListbar = false;
      $scope.activeCartbar = false;
      $scope.activeManagebar = false;
    });

    $scope.$on('to-parent-inlist', function () {
      $scope.amounts = cartService.getAmount();
      $scope.activeMainbar = false;
      $scope.activeListbar = true;
      $scope.activeCartbar = false;
      $scope.activeManagebar = false;
    });

    $scope.$on('to-parent-incart', function () {
      $scope.activeMainbar = false;
      $scope.activeListbar = false;
      $scope.activeCartbar = true;
      $scope.activeManagebar = false;
    });

    $scope.$on('to-parent-manage', function () {
      $scope.activeMainbar = false;
      $scope.activeListbar = false;
      $scope.activeCartbar = false;
      $scope.activeManagebar = true;
    });

  });
