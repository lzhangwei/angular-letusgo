'use strict';
angular.module('angularLetusgoApp')
  .controller('CategoryUpdateCtrl', function ($scope, $location, categoryService) {

    $scope.$emit('to-parent-manage');

    var id = $location.search().id;
    $scope.newcategory = categoryService.getCategoryInfoById(id);

    $scope.updateCategoryInfo = function () {
      categoryService.updateCategoryInfo($scope.newcategory);
      $scope.newcategory = {};
      $location.path('/category');
    };

  });
