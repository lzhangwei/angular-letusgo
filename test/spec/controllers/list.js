'use strict';

describe('Controller: ListCtrl', function () {

  var $scope, itemService, cartService, createController;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      itemService = $injector.get('itemService');
      cartService = $injector.get('cartService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('ListCtrl', {
          $scope: $scope,
          itemService: itemService,
          cartService: cartService
        });
      };
    });

    createController();

  });

  it('should emit to parent controller when come in list', function () {
    spyOn($rootScope, '$emit');
    expect($rootScope.$emit).toHaveBeenCalledWith('to-parent-inlist');
  });

  it('should call loadAllItems in itemservice', function () {
    spyOn(itemService, 'loadAllItems');
//    $scope.items;
    expect(itemService.loadAllItems).toHaveBeenCalled(true);
  });

  it('should call addCartItem in cartService', function () {
    spyOn(cartService, 'addCartItem');
    var item = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    $scope.addCartItem(item);
    expect(cartService.addCartItem).toHaveBeenCalled(true);
  });

  it('should emit to parent controller when add cart item', function () {
    spyOn($rootScope, '$emit');
    var item = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    $scope.addCartItem(item);
    expect($rootScope.$emit).toHaveBeenCalledWith('to-parent-changeamounts');
  });

});
