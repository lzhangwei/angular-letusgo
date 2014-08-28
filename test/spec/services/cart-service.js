'use strict';

describe('Service: cartService', function() {
    var cartService, localStorageService, cartItemList;

    beforeEach(function () {
        module('angularLetusgoApp');
        inject(function ($injector) {
            cartService = $injector.get('cartService');
            localStorageService = $injector.get('localStorageService');
        });

        cartItemList = [
            {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1},
            {item:{'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:3},
            {item:{'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'},num:2}
        ];
    });

    it('should have sum,categoryCartItem,addCartItem and reduceCartItem functions', function() {
        expect(angular.isFunction(cartService.totalPrice)).toBe(true);
        expect(angular.isFunction(cartService.categoryCartItem)).toBe(true);
        expect(angular.isFunction(cartService.addCartItem)).toBe(true);
        expect(angular.isFunction(cartService.reduceCartItem)).toBe(true);
    });

    it('should return the sum value', function() {

        var result = cartService.totalPrice(cartItemList);

        expect(result).toBe(42);
    });

    it('should category the cart item list', function() {
        var result = cartService.categoryCartItem(cartItemList);
        expect(result.length).toBe(2);
    });

    it('should add cart item into cart item list', function() {
        var item1 = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
        var item2 = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
        var newCartItemList = cartService.addCartItem(item1);
        expect(newCartItemList[0].num).toBe(15);
        newCartItemList = cartService.addCartItem(item2);
        expect(newCartItemList[0].num).toBe(16);
    });

    it('should add cart item into cart item list', function() {

        spyOn(localStorageService,'get').andReturn(cartItemList);
        var item = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
        cartService.reduceCartItem(item);
        expect(localStorageService.get).toHaveBeenCalled();
    });
});