'use strict';

describe('Service: itemService', function() {
    var service;

    beforeEach(function() {

        module('angularLetusgoApp');

        inject(function(itemService) {
            service = itemService;
        });

    });

    it('should have a loadAllItems function', function() {

        expect(angular.isFunction(service.loadAllItems)).toBe(true);
    });

    it('should return items', function() {

        var result = service.loadAllItems();
        expect(result.length > 0).toBe(true);
    });

});