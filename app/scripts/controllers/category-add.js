'use strict';
angular.module('angularLetusgoApp')
  .controller('CategoryAddCtrl', function ($scope, $location, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.addcategory = {};

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.addCategoryInfo = function () {
      if ($scope.addcategory.name !== undefined) {
        $scope.tip='';
        $scope.addcategory.id = $scope.categorys[$scope.categorys.length - 1].id + 1;
        $scope.categorys = categoryService.addCategoryInfo($scope.addcategory);
        $location.path('/category');
      } else {
        $scope.tip='请输入类别!';
      }
    };

  });
