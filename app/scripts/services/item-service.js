'use strict';
angular.module('angularLetusgoApp')
  .service('itemService', function (localStorageService) {

    function setLocalStorage(name, value) {
      var list = localStorageService.get(name);
      if (list === null) {
        localStorageService.set(name, value);
      }
    }

    this.loadAllItems = function () {

      var item1 = {'barcode': 'ITEM000000', 'name': '可口可乐', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
      var item2 = {'barcode': 'ITEM000001', 'name': '雪碧', 'unit': '瓶', 'price': 3.00, 'category': '饮料'};
      var item3 = {'barcode': 'ITEM000002', 'name': '苹果', 'unit': '斤', 'price': 5.50, 'category': '水果'};
      var item4 = {'barcode': 'ITEM000003', 'name': '荔枝', 'unit': '斤', 'price': 15.00, 'category': '水果'};
      var item5 = {'barcode': 'ITEM000004', 'name': '电池', 'unit': '个', 'price': 2.00, 'category': '生活用品'};
      var item6 = {'barcode': 'ITEM000005', 'name': '方便面', 'unit': '袋', 'price': 4.50, 'category': '食品'};
      var items = [item1, item2, item3, item4, item5, item6];

      setLocalStorage('items', items);

      var categoryList = [
        {id: 1, name: '饮料'},
        {id: 2, name: '水果'},
        {id: 3, name: '生活用品'},
        {id: 4, name: '食品'}
      ];

      setLocalStorage('categorys', categoryList);

      return localStorageService.get('items');
    };

  });

