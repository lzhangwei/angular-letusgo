/**
 * Created by zhangwei on 14-8-25.
 */
'use strict';
angular.module('angularLetusgoApp')
    .service('loadService', function () {

        this.loadAllItems = function(){

            Storage.removeItem('items');

            var item1 = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
            Storage.addArrayItem('items',item1);
            var item2 = {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
            Storage.addArrayItem('items',item2);
            var item3 = {'barcode': 'ITEM000002', 'name': '苹果', 'unit': '斤', 'price': 5.50, 'category': '水果'};
            Storage.addArrayItem('items',item3);
            var item4 = {'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'};
            Storage.addArrayItem('items',item4);
            var item5 = {'barcode': 'ITEM000004', 'name': '电池', 'unit': '个', 'price': 2.00, 'category': '生活用品'};
            Storage.addArrayItem('items',item5);
            var item6 = {'barcode': 'ITEM000005', 'name': '方便面', 'unit': '袋', 'price': 4.50, 'category': '食品'};
            Storage.addArrayItem('items',item6);
        };

        this.cleanStorage = function () {
            Storage.removeItem('cartItems');
            Storage.addItem('amounts',0);
        }

    });