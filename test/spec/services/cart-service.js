'use strict';

describe('Service: cartService', function () {
  var cartService, localStorageService, cartItemList;

  beforeEach(function () {
    module('angularLetusgoApp');
    inject(function ($injector) {
      cartService = $injector.get('cartService');
      localStorageService = $injector.get('localStorageService');
    });

    cartItemList = [
      {item: {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'}, num: 1},
      {item: {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'}, num: 3},
      {item: {'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'}, num: 2}
    ];
  });

  it('should have some functions', function () {
    expect(angular.isFunction(cartService.getCartItem)).toBe(true);
    expect(angular.isFunction(cartService.getAmount)).toBe(true);
    expect(angular.isFunction(cartService.setAmount)).toBe(true);
    expect(angular.isFunction(cartService.totalPrice)).toBe(true);
    expect(angular.isFunction(cartService.categoryCartItem)).toBe(true);
    expect(angular.isFunction(cartService.addCartItem)).toBe(true);
    expect(angular.isFunction(cartService.reduceCartItem)).toBe(true);
    expect(angular.isFunction(cartService.cleanCart)).toBe(true);
  });

  it('should return the cartItemList', function () {
    spyOn(localStorageService, 'get').andReturn(cartItemList);
    var result = cartService.getCartItem();

    expect(result).toEqual(cartItemList);
  });

  it('should return the cartItemList', function () {
    spyOn(localStorageService, 'get').andReturn(6);
    var result = cartService.getAmount();

    expect(result).toBe(6);
  });

  it('should called the set function', function () {
    spyOn(localStorageService, 'set');
    cartService.setAmount(7);

    expect(localStorageService.set).toHaveBeenCalled();
  });

  it('should category the cart item list', function () {
    var result = cartService.categoryCartItem(cartItemList);
    expect(result.length).toBe(2);
  });

  it('called local storage service set and get function 2 times when add cart item', function () {
    spyOn(localStorageService, 'get').andReturn(cartItemList);
    spyOn(localStorageService, 'set');
    var item = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};

    cartService.addCartItem(item);

    expect(localStorageService.get.callCount).toEqual(2);
    expect(localStorageService.set.callCount).toEqual(2);
  });

  it('should add cart item into cart item list', function () {
    spyOn(localStorageService, 'get').andReturn(cartItemList);
    spyOn(localStorageService, 'set');

    var item1 = {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    var item2 = {'barcode': 'ITEM000005', 'name': '方便面', 'unit': '袋', 'price': 4.50, 'category': '食品'};

    var cartItemList1 = cartService.addCartItem(item1);
    expect(cartItemList1[1].num).toBe(4);

    var cartItemList2 = cartService.addCartItem(item2);
    expect(cartItemList2[3].num).toBe(1);
  });

  it('called local storage service set and get function 2 times when reduce cart item', function () {
    spyOn(localStorageService, 'get').andReturn(cartItemList);
    spyOn(localStorageService, 'set');
    var item = {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};

    cartService.reduceCartItem(item);

    expect(localStorageService.get.callCount).toEqual(2);
    expect(localStorageService.set.callCount).toEqual(2);
  });

  it('should reduce cart item from cart item list', function () {
    spyOn(localStorageService, 'get').andReturn(cartItemList);
    spyOn(localStorageService, 'set');

    var item1 = {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
    var item2 = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};

    var cartItemList1 = cartService.reduceCartItem(item1);
    expect(cartItemList1[1].num).toBe(2);

    var cartItemList2 = cartService.reduceCartItem(item2);
    expect(cartItemList2.length).toBe(2);
    expect(cartItemList2[0].item.barcode).toEqual('ITEM000001');
    expect(cartItemList2[1].item.barcode).toEqual('ITEM000001');
  });

  it('should return the total price', function () {

    var result = cartService.totalPrice(cartItemList);

    expect(result).toBe(42);
  });

  it('called local storage service set and get function 1 times when click pay ok button', function () {
    spyOn(localStorageService, 'get');
    spyOn(localStorageService, 'set');

    cartService.cleanCart();

    expect(localStorageService.get.callCount).toEqual(1);
    expect(localStorageService.set.callCount).toEqual(1);
  });

});
