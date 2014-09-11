'use strict';
(function (_) {
  angular.module('angularLetusgoApp')
    .service('categoryService', function (localStorageService, productService) {

      this.getAllCategoryInfo = function () {
        return localStorageService.get('categorys');
      };

      this.getCategoryInfoList = function (page, num) {
        var categoryInfoList = localStorageService.get('categorys');
        return categoryInfoList.slice((page - 1) * num,(page - 1) * num+num);
      };

      this.getCategoryInfoById = function (id) {
        var categorys = localStorageService.get('categorys');
        return _.find(categorys, {'id': id});
      };

      this.addCategoryInfo = function (categoryInfo) {
        var categoryList = localStorageService.get('categorys');
        categoryList.push(categoryInfo);
        localStorageService.set('categorys', categoryList);
        return categoryList;
      };

      this.removeCategoryInfo = function (categoryInfo) {
        var categoryList = localStorageService.get('categorys');
        if(isRemove(categoryInfo)){
          var num = 0;
          _.forEach(categoryList, function (item, index) {
            if (item.id === categoryInfo.id) {
              num = index;
            }
          });
          categoryList.splice(num, 1);
          localStorageService.set('categorys', categoryList);
        }else{
          
        }
        return categoryList;
      };

      var isRemove = function(categoryInfo) {
        var productList = productService.getAllProductInfo();
        var result = true;
        _.forEach(productList, function(item){
          if(result === true && item.category === categoryInfo.name){
            result = false;
          }
        });
        return result;
      };

      this.updateCategoryInfo = function (categoryInfo) {
        var categoryList = localStorageService.get('categorys');
        _.forEach(categoryList, function (item, index) {
          if (item.id === categoryInfo.id) {
            categoryList[index] = categoryInfo;
          }
        });
        localStorageService.set('categorys', categoryList);
        return categoryList;
      };
    });

})(window._);
