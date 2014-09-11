/**
 * Created by zhangwei on 14-9-6.
 */
'use strict';
angular.module('angularLetusgoApp')
  .filter('pageitems', function () {
    return function (input, start) {
      return input.slice(+start);
    };
  });
