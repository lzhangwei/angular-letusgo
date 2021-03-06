'use strict';

angular.module('angularLetusgoApp')
  .controller('IndexController', function ($scope, cartService) {

    function barActivity(main, list, cart, manage) {
      $scope.activeMainbar = main;
      $scope.activeListbar = list;
      $scope.activeCartbar = cart;
      $scope.activeManagebar = manage;
    }

    $scope.amounts = cartService.getAmount();

    $scope.$on('to-parent-changeamounts', function () {
      $scope.amounts = cartService.getAmount();
    });

    $scope.$on('to-parent-inmain', function () {
      barActivity(true, false, false, false);
    });

    $scope.$on('to-parent-inlist', function () {
      $scope.amounts = cartService.getAmount();
      barActivity(false, true, false, false);
    });

    $scope.$on('to-parent-incart', function () {
      barActivity(false, false, true, false);
    });

    $scope.$on('to-parent-manage', function () {
      barActivity(false, false, false, true);
    });

  });
