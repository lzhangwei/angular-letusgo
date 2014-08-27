'use strict';

describe('Service: loadService', function() {
    var service;

    beforeEach(function() {

        module('angularLetusgoApp');

        inject(function(loadService) {
            service = loadService;
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