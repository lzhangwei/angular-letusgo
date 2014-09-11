/**
 * Created by zhangwei on 14-9-11.
 */
'use strict';

describe('Filter: pageitems', function () {

  var items;

  beforeEach(function () {
    module('angularLetusgoApp');
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  it('should filter the items', function () {
    inject(function(pageitemsFilter) {
      expect(pageitemsFilter(items, 5)).toEqual([6, 7, 8, 9]);
    });
  });

});
