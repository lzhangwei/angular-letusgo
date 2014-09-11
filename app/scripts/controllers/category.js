/**
 * Created by zhangwei on 14-9-1.
 */
'use strict';
angular.module('angularLetusgoApp')
  .controller('CategoryCtrl', function ($scope, $location, categoryService) {

    $scope.$emit('to-parent-manage');

    $scope.categorys = categoryService.getAllCategoryInfo();


    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;

    $scope.pageCount = function () {
      var maxPage = Math.ceil($scope.categorys.length / $scope.itemsPerPage);
      return maxPage;
    };

    $scope.range = function () {
      var pages = [];
      var i = 1;
      var maxPage = $scope.pageCount();
      while (i <= maxPage) {
        pages.push(i);
        i++;
      }
      return pages;
    };

    $scope.prevPage = function () {
      if ($scope.currentPage > 1) {
        $scope.currentPage--;
      }
    };

    $scope.prevPageDisabled = function () {
      return $scope.currentPage === 1 ? true : false;
    };

    $scope.nextPage = function () {
      if ($scope.currentPage < $scope.pageCount()) {
        $scope.currentPage++;
      }
    };

    $scope.nextPageDisabled = function () {
      return $scope.currentPage === $scope.pageCount() ? true : false;
    };

    $scope.setPage = function (n) {
      $scope.currentPage = n;
    };


    $scope.removeCategoryInfo = function (categoryInfo) {
      $scope.categorys = categoryService.removeCategoryInfo(categoryInfo);
    };

    $scope.updateClick = function (categoryInfo) {
      $location.path('/category-update');
      $location.search({'id': categoryInfo.id});
    };

    $scope.addCategoryClick = function () {
      $location.path('/category-add');
    };
  });
