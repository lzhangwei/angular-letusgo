'use strict';

describe('Controller: CategoryCtrl', function () {

  var $scope, $location, categoryService, createController, categoryList;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $location = $injector.get('$location');
      categoryService = $injector.get('categoryService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('CategoryCtrl', {
          $scope: $scope,
          $location: $location,
          categoryService: categoryService
        });
      };
    });

    categoryList = [
      {id: 1, name: '饮料'},
      {id: 2, name: '水果'},
      {id: 3, name: '生活用品'},
      {id: 4, name: '食品'}
    ];

  });

  it('should emit to parent controller when come in category manage', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('to-parent-manage');
  });

  it('should load all category info list', function () {
    spyOn(categoryService, 'getAllCategoryInfo').andReturn(categoryList);
    createController();
    expect($scope.categorys).toEqual(categoryList);
  });

  it('should remove category info into category list', function () {
    spyOn(categoryService, 'getAllCategoryInfo').andReturn(categoryList);
    categoryList.splice(2, 1);
    spyOn(categoryService, 'removeCategoryInfo').andReturn(categoryList);
    createController();
    var item = {id: 3, name: '生活用品'};
    $scope.removeCategoryInfo(item);
    expect(categoryService.removeCategoryInfo).toHaveBeenCalledWith(item);
    expect($scope.categorys.length).toEqual(3);
  });

  it('should come into category add when click add category', function () {
    createController();
    $scope.addCategoryClick();
    expect($location.path() === '/category-add').toBe(true);
  });

  it('should come into category update when click update category', function () {
    createController();
    var categoryInfo = {id: 1, name: '饮料'};
    $scope.updateClick(categoryInfo);
    expect($location.path() === '/category-update').toBe(true);
  });

  it('should return page count', function(){
    spyOn(categoryService, 'getAllCategoryInfo').andReturn(categoryList);
    createController();
    var pagecount = $scope.pageCount();
    expect(pagecount).toBe(1);
  });

  it('should return page range',function() {
    createController();
    spyOn($scope, 'pageCount').andReturn(2);
    var range = $scope.range();
    expect(range).toEqual([1,2]);
  });

  it('should change current page when click previous',function() {
    createController();

    $scope.currentPage = 2;
    $scope.prevPage();
    expect($scope.currentPage).toBe(1);

    $scope.currentPage = 1;
    $scope.prevPage();
    expect($scope.currentPage).toBe(1);
  });

  it('should return true when current page is 1',function() {
    createController();
    $scope.currentPage = 1;
    expect($scope.prevPageDisabled()).toBe(true);
  });

  it('should return true when current page is max',function() {
    createController();
    spyOn($scope, 'pageCount').andReturn(3);
    $scope.currentPage = 3;
    expect($scope.nextPageDisabled()).toBe(true);
  });

  it('should add page number when click next page',function() {
    createController();
    spyOn($scope, 'pageCount').andReturn(3);

    $scope.currentPage = 3;
    $scope.nextPage();
    expect($scope.currentPage).toBe(3);

    $scope.currentPage = 1;
    $scope.nextPage();
    expect($scope.currentPage).toBe(2);
  });

  it('should set page with parameter',function() {
    createController();
    $scope.currentPage = 2;
    $scope.setPage(4);
    expect($scope.currentPage).toBe(4);
  });


});
