'use strict';

describe('Service: cartService', function() {
    var service;
//    var storageService;
    var cartItemList;

    beforeEach(function() {

        module('angularLetusgoApp');


        inject(function(cartService) {
            service = cartService;
//            storageService = localStorageService;
        });

        cartItemList = [
            {item:{'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:1},
            {item:{'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'},num:3},
            {item:{'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'},num:2}
        ];

    });

    it('should have sum,categoryCartItem,addCartItem and reduceCartItem functions', function() {
        expect(angular.isFunction(service.totalPrice)).toBe(true);
        expect(angular.isFunction(service.categoryCartItem)).toBe(true);
        expect(angular.isFunction(service.addCartItem)).toBe(true);
        expect(angular.isFunction(service.reduceCartItem)).toBe(true);
    });

    it('should return the sum value', function() {

        var result = service.totalPrice(cartItemList);

        expect(result).toBe(42);
    });

    it('should category the cart item list', function() {
        var result = service.categoryCartItem(cartItemList);
        expect(result.length).toBe(2);
    });

    it('should add cart item into cart item list', function() {
        var item1 = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
        var item2 = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
        var newCartItemList = service.addCartItem(item1);
        expect(newCartItemList[0].num).toBe(1);
        newCartItemList = service.addCartItem(item2);
        expect(newCartItemList[0].num).toBe(2);
    });
});