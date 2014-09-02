/**
 * Created by zhangwei on 14-9-1.
 */
angular.module('angularLetusgoApp')
  .controller('ProductCtrl', function ($scope, productService,categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.addproduct = {};

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.products = productService.getAllProductInfo();

    $scope.updateProductInfo = function () {
      productService.updateProductInfo($scope.updateproduct);
      $scope.updateproduct = {};
    };

    $scope.removeProductInfo = function (productInfo) {
      $scope.products = productService.removeProductInfo(productInfo);
    };

    $scope.update = function (productInfo) {
      $scope.updateproduct = productInfo;
    };

    $scope.addProductInfo = function () {
      var id = +$scope.products[$scope.products.length - 1].barcode.substring(9);
      $scope.addproduct.barcode = $scope.products[$scope.products.length - 1].barcode.substring(0, 9) + (id + 1);
      $scope.products = productService.addProductInfo($scope.addproduct);
      $scope.addproduct = {};
    };

  });
