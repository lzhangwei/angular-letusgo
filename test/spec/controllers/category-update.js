/**
 * Created by zhangwei on 14-9-5.
 */
'use strict';

describe('CategoryUpdateCtrl: CategoryCtrl', function () {

  var $scope, $location, categoryService, createController, categoryList;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      categoryService = $injector.get('categoryService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('CategoryUpdateCtrl', {
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

  it('should emit to parent controller when come in CategoryUpdateCtrl', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('to-parent-manage');
  });

  it('should update category info into category list', function () {
    spyOn(categoryService, 'getAllCategoryInfo').andReturn(categoryList);
    categoryList[2] = {id: 3, name: '文具'};
    spyOn(categoryService, 'updateCategoryInfo').andReturn(categoryList);
    createController();
    $scope.updateCategoryInfo();
    expect(categoryService.updateCategoryInfo).toHaveBeenCalled();
  });

});
