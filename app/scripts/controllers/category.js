/**
 * Created by zhangwei on 14-9-1.
 */
'use strict';
angular.module('angularLetusgoApp')
  .controller('CategoryCtrl', function ($scope, $location, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.removeCategoryInfo = function (categoryInfo) {
      $scope.categorys = categoryService.removeCategoryInfo(categoryInfo);
    };

    $scope.updateClick = function (categoryInfo) {
      $location.path('/category-update');
      $location.search({'id':categoryInfo.id});
    };

    $scope.addCategoryClick = function () {
      $location.path('/category-add');
    };

  });
