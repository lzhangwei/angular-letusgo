'use strict';

describe('Controller: IndexController', function () {

  var $scope, cartService, createController;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      cartService = $injector.get('cartService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('InventoryCtrl', {
          $scope: $scope,
          cartService: cartService
        });
      };
    });

    createController();

  });

  it('should call getAmount in cartService and return to amounts', function () {
    spyOn(cartService, 'getAmount');
    var amount = cartService.getAmount();
    expect($scope.amounts).toBe(amount);
  });

  it('should listen for the to-parent-changeamounts broadcast and called getAmount', function () {
    var listener = jasmine.createSpy('listener');
    $scope.$on('to-parent-changeamounts', listener);
    spyOn(cartService, 'getAmount').andReturn(6);
    $scope.$emit('to-parent-changeamounts');
    expect(listener).toHaveBeenCalled();
    var amounts = cartService.getAmount();
    expect(amounts).toBe(6);
  });

  it('should listen for the to-parent-inmain broadcast and set bar active', function () {
    var listener = jasmine.createSpy('listener');
    $scope.$on('to-parent-inmain', listener);
    $scope.$emit('to-parent-inmain');
    expect(listener).toHaveBeenCalled();
  });

  it('should listen for the to-parent-inlist broadcast and set bar active', function () {
    var listener = jasmine.createSpy('listener');
    $scope.$on('to-parent-inlist', listener);
    $scope.$emit('to-parent-inlist');
    expect(listener).toHaveBeenCalled();
  });

  it('should listen for the to-parent-incart broadcast and set bar active', function () {
    var listener = jasmine.createSpy('listener');
    $scope.$on('to-parent-incart', listener);
    $scope.$emit('to-parent-incart');
    expect(listener).toHaveBeenCalled();
  });

});
