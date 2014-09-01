/**
 * Created by zhangwei on 14-9-1.
 */
angular.module('angularLetusgoApp')
  .service('productService', function (localStorageService) {

    this.getAllProductInfo = function () {
      return localStorageService.get('items');
    };

    this.addProductInfo = function (productInfo) {
      var productList = localStorageService.get('items');
      productList.push(productInfo);
      localStorageService.set('items', productList);
      return productList;
    };

    this.removeProductInfo = function (productInfo) {
      var productList = localStorageService.get('items');
      var num = 0;
      _.forEach(productList, function (item, index) {
        if (item.barcode === productInfo.barcode) {
          num = index;
        }
      });
      productList.splice(num, 1);
      localStorageService.set('items', productList);
      return productList;
    };

    this.updateProductInfo = function (productInfo) {
      var productList = localStorageService.get('items');
      _.forEach(productList, function (item, index) {
        if (item.barcode === productInfo.barcode) {
          productList[index] = productInfo;
        }
      });
      localStorageService.set('items', productList);
      return productList;
    };

  });
