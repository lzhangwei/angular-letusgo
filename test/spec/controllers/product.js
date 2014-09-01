/**
 * Created by zhangwei on 14-9-1.
 */
'use strict';

xdescribe('Controller: ProductCtrl', function () {

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
    expect($scope.$emit).toHaveBeenCalledWith('to-parent-product');
  });

  it('should load all product info list', function () {
    spyOn(productService, 'getAllProduct').andReturn(productList);
    createController();
    expect($scope.productList).toEqual(productList);
  });

  it('should add product info into product list', function () {
    spyOn(productService, 'addProductInfo');
    createController();
    var product = {'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'};
    $scope.addProductInfo(product);
    expect(productService.addProductInfo).toHaveBeenCalledWith(product);
    expect($scope.productList.length).toEqual(4);
  });

  it('should remove product info into product list', function () {
    spyOn(productService, 'removeProductInfo');
    createController();
    var product = {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    $scope.removeProductInfo(product);
    expect(productService.removeProductInfo).toHaveBeenCalledWith(product);
    expect($scope.productList.length).toEqual(2);
  });

  it('should update product info into product list', function () {
    spyOn(productService, 'updateProductInfo');
    createController();
    var product = {'barcode': 'ITEM000001', 'name': '果粒橙', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    $scope.updateProductInfo(product);
    expect(productService.updateProductInfo).toHaveBeenCalledWith(product);
    expect($scope.productList[1]).toEqual(product);
  });

});
