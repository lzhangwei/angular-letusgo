'use strict';
angular.module('angularLetusgoApp')
  .filter('pageitems', function () {
    return function (input, start) {
      return input.slice(+start);
    };
  });
