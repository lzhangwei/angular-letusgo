/**
 * Created by zhangwei on 14-9-5.
 */
'use strict';

describe('Controller: CategoryAddCtrl', function () {

  var $scope, categoryService, createController, categoryList;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      categoryService = $injector.get('categoryService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('CategoryAddCtrl', {
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

  it('should emit to parent controller when come in CategoryAddCtrl', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('to-parent-manage');
  });

  it('should add category info into category list', function () {
    spyOn(categoryService, 'getAllCategoryInfo').andReturn(categoryList);
    categoryList.push({id: 5, name: '文具'});
    spyOn(categoryService, 'addCategoryInfo').andReturn(categoryList);
    createController();
    $scope.addCategoryInfo();
    expect(categoryService.addCategoryInfo).toHaveBeenCalled();
    expect($scope.categorys.length).toEqual(5);
  });

});
