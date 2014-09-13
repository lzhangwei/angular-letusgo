'use strict';
angular.module('angularLetusgoApp')
  .controller('ProductAddCtrl', function ($scope, $location, productService, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.addproduct = {};

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.products = productService.getAllProductInfo();

    $scope.addProductInfo = function () {
      var isEmpty = $scope.addproduct.name && $scope.addproduct.category && $scope.addproduct.price && $scope.addproduct.unit;
      if (isEmpty) {
        var id = +$scope.products[$scope.products.length - 1].barcode.substring(9);
        $scope.addproduct.barcode = $scope.products[$scope.products.length - 1].barcode.substring(0, 9) + (id + 1);
        $scope.products = productService.addProductInfo($scope.addproduct);
        $scope.addproduct = {};
        $location.path('/product');
      } else {
        alert('输入不能为空！');
      }

    };

  });
