angular.module('angularLetusgoApp')
  .service('categoryService', function (localStorageService) {

    this.getAllCategoryInfo = function () {
      return localStorageService.get('categorys');
    };

    this.addCategoryInfo = function (categoryInfo) {
      var categoryList = localStorageService.get('categorys');
      categoryList.push(categoryInfo);
      localStorageService.set('categorys', categoryList);
      return categoryList;
    };

    this.removeCategoryInfo = function (categoryInfo) {
      var categoryList = localStorageService.get('categorys');
      _.forEach(categoryList, function (item, index) {
        if (item.id === categoryInfo.id) {
          categoryList.splice(index, 1);
        }
      });
      localStorageService.set('categorys', categoryList);
      return categoryList;
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
