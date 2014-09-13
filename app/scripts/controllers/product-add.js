/**
 * Created by zhangwei on 14-9-5.
 */
'use strict';
angular.module('angularLetusgoApp')
  .controller('ProductAddCtrl', function ($scope, $location, productService, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.addproduct = {};

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.products = productService.getAllProductInfo();

    $scope.addProductInfo = function () {
      var id = +$scope.products[$scope.products.length - 1].barcode.substring(9);
      $scope.addproduct.barcode = $scope.products[$scope.products.length - 1].barcode.substring(0, 9) + (id + 1);
      $scope.products = productService.addProductInfo($scope.addproduct);
      $scope.addproduct = {};
      $location.path('/product');
    };

  });
