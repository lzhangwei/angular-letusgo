/**
 * Created by zhangwei on 14-8-29.
 */
'use strict';

describe('Service: CategoryService', function () {
  var localStorageService, CategoryService, categoryList;

  beforeEach(function () {
    module('angularLetusgoApp');
    inject(function ($injector) {
      CategoryService = $injector.get('CategoryService');
      localStorageService = $injector.get('localStorageService');
    });

    categoryList = [
      {id: 1, name: '饮料'},
      {id: 2, name: '水果'},
      {id: 3, name: '生活用品'},
      {id: 4, name: '食品'}
    ];
  });

  it('should set the categoryList into local storage', function () {
    spyOn(localStorageService, 'set');
    CategoryService.setAllCategoryInfo(categoryList);

    expect(localStorageService.set).toHaveBeenCalled();
  });

  it('should return the categoryList', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    var result = CategoryService.getAllCategoryInfo();

    expect(result).toEqual(categoryList);
  });

  it('should call local storage get function when get category info', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    CategoryService.getAllCategoryInfo();

    expect(localStorageService.get).toHaveBeenCalled();
  });

  it('should add category info into category list', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    var categoryInfo = {id: 5, name: '文具'};
    var result = CategoryService.addCategoryInfo(categoryInfo);
    expect(result.length).toBe(5);
    expect(result[3]).toEqual(categoryInfo);
  });

  it('should call local storage get and set function when add category info', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    spyOn(localStorageService, 'set');
    var categoryInfo = {id: 5, name: '文具'};
    CategoryService.addCategoryInfo(categoryInfo);
    expect(localStorageService.get.callCount).toEqual(1);
    expect(localStorageService.set.callCount).toEqual(1);
  });

  it('should remove category info into category list', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    var categoryInfo = {id: 4, name: '食品'};
    var result = CategoryService.removeCategoryInfo(categoryInfo);
    expect(result.length).toBe(3);
  });

  it('should call local storage get and set function when reduce category info', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    spyOn(localStorageService, 'set');
    var categoryInfo = {id: 4, name: '食品'};
    CategoryService.removeCategoryInfo(categoryInfo);
    expect(localStorageService.get.callCount).toEqual(1);
    expect(localStorageService.set.callCount).toEqual(1);
  });

  it('should update category info into category list', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    var categoryInfo = {id: 4, name: '文具'};
    var result = CategoryService.updateCategoryInfo(categoryInfo);
    expect(result[3]).toEqual(categoryInfo);
  });

  it('should call local storage get and set function when update category info', function () {
    spyOn(localStorageService, 'get').andReturn(categoryList);
    spyOn(localStorageService, 'set');
    var categoryInfo = {id: 4, name: '文具'};
    CategoryService.updateCategoryInfo(categoryInfo);
    expect(localStorageService.get.callCount).toEqual(1);
    expect(localStorageService.set.callCount).toEqual(1);
  });

});
