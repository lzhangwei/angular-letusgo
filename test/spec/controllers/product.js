/**
 * Created by zhangwei on 14-9-1.
 */
'use strict';

describe('Controller: ProductCtrl', function () {

  var $scope, productService, createController, productList;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      productService = $injector.get('productService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('ProductCtrl', {
          $scope: $scope,
          productService: productService
        });
      };
    });

    productList = [
      {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},
      {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},
      {'barcode': 'ITEM000002', 'name': '苹果', 'unit': '斤', 'price': 5.50, 'category': '水果'}
    ];

  });

  it('should emit to parent controller when come in product manage', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('to-parent-manage');
  });

  it('should load all product info list', function () {
    spyOn(productService, 'getAllProductInfo').andReturn(productList);
    createController();
    expect($scope.products).toEqual(productList);
  });

  it('should add product info into product list', function () {
    spyOn(productService, 'getAllProductInfo').andReturn(productList);
    var product = {'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'};
    productList.push(product);
    spyOn(productService, 'addProductInfo').andReturn(productList);
    createController();
    $scope.addProductInfo();
    expect(productService.addProductInfo).toHaveBeenCalled();
    expect($scope.products.length).toEqual(4);
  });

  it('should remove product info into product list', function () {
    spyOn(productService, 'getAllProductInfo').andReturn(productList);
    productList.splice(1, 1);
    spyOn(productService, 'removeProductInfo').andReturn(productList);
    createController();
    var product = {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    $scope.removeProductInfo(product);
    expect(productService.removeProductInfo).toHaveBeenCalledWith(product);
    expect($scope.products.length).toEqual(2);
  });

  it('should update product info into product list', function () {
    spyOn(productService, 'getAllProductInfo').andReturn(productList);
    productList[1] = {'barcode': 'ITEM000001', 'name': '果粒橙', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    spyOn(productService, 'updateProductInfo').andReturn(productList);
    createController();
    $scope.updateProductInfo();
    expect(productService.updateProductInfo).toHaveBeenCalled();
    expect($scope.products[1].name).toEqual('果粒橙');
  });

});
