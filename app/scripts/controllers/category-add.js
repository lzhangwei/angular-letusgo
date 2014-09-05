/**
 * Created by zhangwei on 14-9-5.
 */
'use strict';
angular.module('angularLetusgoApp')
  .controller('CategoryAddCtrl', function ($scope, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.addcategory = {};

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.addCategoryInfo = function () {
      $scope.addcategory.id = $scope.categorys[$scope.categorys.length - 1].id + 1;
      $scope.categorys = categoryService.addCategoryInfo($scope.addcategory);
      $scope.addcategory = {};
    };

  });
