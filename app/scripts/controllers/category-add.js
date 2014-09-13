/**
 * Created by zhangwei on 14-9-5.
 */
'use strict';
angular.module('angularLetusgoApp')
  .controller('CategoryAddCtrl', function ($scope, $location, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.addcategory = {};

    $scope.categorys = categoryService.getAllCategoryInfo();

    $scope.addCategoryInfo = function () {
      if($scope.addcategory.name !== undefined){
        $scope.addcategory.id = $scope.categorys[$scope.categorys.length - 1].id + 1;
        $scope.categorys = categoryService.addCategoryInfo($scope.addcategory);
        $scope.addcategory = {};
        $location.path('/category');
      }else {
        alert('请输入类别!');
      }
    };

  });
