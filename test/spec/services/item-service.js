'use strict';

describe('Service: itemService', function() {
    var itemService, localStorageService;

    beforeEach(function () {
        module('angularLetusgoApp');
        inject(function ($injector) {
            itemService = $injector.get('itemService');
            localStorageService = $injector.get('localStorageService');
        });
    });

    it('should have a loadAllItems function', function() {

        expect(angular.isFunction(itemService.loadAllItems)).toBe(true);
    });

    it('should return items', function() {

        spyOn(localStorageService, 'set');
        var result = itemService.loadAllItems();
        expect(localStorageService.set).toHaveBeenCalled();
        expect(result.length > 0).toBe(true);
    });

});