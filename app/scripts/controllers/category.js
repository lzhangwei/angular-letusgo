/**
 * Created by zhangwei on 14-9-1.
 */
angular.module('angularLetusgoApp')
  .controller('CategoryCtrl', function ($scope, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.addcategory = {};

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.updateCategoryInfo = function () {
      categoryService.updateCategoryInfo($scope.newcategory);
      $scope.newcategory = {};
    };

    $scope.removeCategoryInfo = function (categoryInfo) {
      $scope.categorys = categoryService.removeCategoryInfo(categoryInfo);
    };

    $scope.update = function (categoryInfo) {
      $scope.newcategory = categoryInfo;
    };

    $scope.addCategoryInfo = function() {
      $scope.addcategory.id = $scope.categorys[$scope.categorys.length-1].id + 1;
      categoryService.addCategoryInfo($scope.addcategory);
      $scope.addcategory = {};
      $scope.categorys = categoryService.getAllCategoryInfo();
    };

  });
