/**
 * Created by zhangwei on 14-8-31.
 */
'use strict';

xdescribe('Controller: CategoryCtrl', function () {

  var $scope, categoryService, createController, categoryList;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      categoryService = $injector.get('categoryService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('CategoryCtrl', {
          $scope: $scope,
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
    expect($scope.$emit).toHaveBeenCalledWith('to-parent-category');
  });

  it('should load all category info list', function () {
    spyOn(categoryService, 'loadAllCategoryInfo').andReturn(categoryList);
    createController();
    expect($scope.categoryList).toEqual(categoryList);
  });

  it('should add category info into category list', function () {
    spyOn(categoryService, 'addCategoryInfo');
    createController();
    var item = {id: 5, name: '文具'};
    $scope.addCategoryInfo(item);
    expect(categoryService.addCategoryInfo).toHaveBeenCalledWith(item);
    expect($scope.categoryList.length).toEqual(5);
  });

  it('should remove category info into category list', function () {
    spyOn(categoryService, 'removeCategoryInfo');
    createController();
    var item = {id: 3, name: '生活用品'};
    $scope.removeCategoryInfo(item);
    expect(categoryService.removeCategoryInfo).toHaveBeenCalledWith(item);
    expect($scope.categoryList.length).toEqual(3);
  });

  it('should update category info into category list', function () {
    spyOn(categoryService, 'updateCategoryInfo');
    createController();
    var item = {id: 3, name: '文具'};
    $scope.updateCategoryInfo(item);
    expect(categoryService.updateCategoryInfo).toHaveBeenCalledWith(item);
    expect($scope.categoryList[2].name).toEqual('文具');
  });

});
