'use strict';

describe('Controller: CartCtrl', function () {

  var $scope, cartService, createController;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      cartService = $injector.get('cartService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('CartCtrl', {
          $scope: $scope,
          cartService: cartService
        });
      };
    });

    createController();

    var cartItems = [
      {item: {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'}, num: 1},
      {item: {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'}, num: 3},
      {item: {'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'}, num: 2}
    ];
    spyOn(cartService, 'getCartItem').andReturn(cartItems);

  });

  it('should emit to parent controller when come in cart', function () {
    spyOn($rootScope, '$emit');
    expect($rootScope.$emit).toHaveBeenCalledWith('to-parent-incart');
  });

  it('should call getCartItem in cartService', function () {
    expect(cartService.getCartItem).toHaveBeenCalled(true);
  });

  it('should call categoryCartItem in cartService', function () {
    spyOn(cartService, 'categoryCartItem');
    expect(cartService.categoryCartItem).toHaveBeenCalled(true);
  });

  it('should call totalPrice in cartService', function () {
    spyOn(cartService, 'totalPrice');
    expect(cartService.totalPrice).toHaveBeenCalled(true);
  });

  describe('when click add cart item', function () {

    it('should call addCartItem in cartService', function () {
      spyOn(cartService, 'addCartItem');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.addCartItemClick(cartItem);
      expect(cartService.addCartItem).toHaveBeenCalled(true);
    });

    it('should call categoryCartItem in cartService', function () {
      spyOn(cartService, 'categoryCartItem');
      spyOn(cartService, 'addCartItem');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.addCartItemClick(cartItem);
      expect(cartService.categoryCartItem).toHaveBeenCalled(true);
    });

    it('should call totalPrice in cartService', function () {
      spyOn(cartService, 'categoryCartItem');
      spyOn(cartService, 'addCartItem');
      spyOn(cartService, 'totalPrice');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.addCartItemClick(cartItem);
      expect(cartService.totalPrice).toHaveBeenCalled(true);
    });

    it('should emit to parent controller when add cart item', function () {
      spyOn($rootScope, '$emit');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.addCartItemClick(cartItem);
      expect($rootScope.$emit).toHaveBeenCalledWith('to-parent-changeamounts');
    });

  });

  describe('when click reduce cart item', function () {

    it('should call reduceCartItem in cartService', function () {
      spyOn(cartService, 'reduceCartItem');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.reduceCartItemClick(cartItem);
      expect(cartService.reduceCartItem).toHaveBeenCalled(true);
    });

    it('should call categoryCartItem in cartService', function () {
      spyOn(cartService, 'categoryCartItem');
      spyOn(cartService, 'addCartItem');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.reduceCartItemClick(cartItem);
      expect(cartService.categoryCartItem).toHaveBeenCalled(true);
    });

    it('should call categoryCartItem in cartService', function () {
      spyOn(cartService, 'categoryCartItem');
      spyOn(cartService, 'addCartItem');
      spyOn(cartService, 'totalPrice');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.reduceCartItemClick(cartItem);
      expect(cartService.totalPrice).toHaveBeenCalled(true);
    });

    it('should emit to parent controller when add cart item', function () {
      spyOn($rootScope, '$emit');
      var cartItem = {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1};
      $scope.reduceCartItemClick(cartItem);
      expect($rootScope.$emit).toHaveBeenCalledWith('to-parent-changeamounts');
    });

  });

  describe('which button display', function () {

    it('should return true when have cart items', function () {
      expect($scope.isShow()).toBe(true);
    });

    it('should return false when have cart items', function () {
      var cartItemList = [];
      spyOn(cartService, 'getCartItem').andReturn(cartItemList);
      expect($scope.isShow()).toBe(false);
    });

  });

});
