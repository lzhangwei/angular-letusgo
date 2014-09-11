/**
 * Created by zhangwei on 14-9-1.
 */
'use strict';
angular.module('angularLetusgoApp')
  .controller('ProductCtrl', function ($scope, $location, productService, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.products = productService.getAllProductInfo();


    $scope.removeProductInfo = function (productInfo) {
      $scope.products = productService.removeProductInfo(productInfo);
    };

    $scope.update = function (productInfo) {
      $scope.updateproduct = productInfo;
    };

    $scope.updateProductClick = function (productInfo) {
      $location.path('/product-update');
      $location.search({'barcode':productInfo.barcode});
    };

    $scope.addProductClick = function () {
      $location.path('/product-add');
    };

  });
