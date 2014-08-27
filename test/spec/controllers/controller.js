'use strict';

describe('Controller: IndexController', function () {

    // load the controller's module
    beforeEach(module('angularLetusgoApp'));

    var IndexController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        IndexController = $controller('IndexController', {
            $scope: scope
        });
    }));

    it('should attach amounts to the scope', function () {
        expect(scope.amounts !== undefined).toBe(true);
    });

});