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

  it('should call setAmount in cartService when amounts is undefined', function () {
    spyOn(cartService, 'getAmount').andReturn(undefined);
    spyOn(cartService, 'setAmount');
    expect(cartService.setAmount).toHaveBeenCalled(true);
  });

  it('should call getCartItem in cartService', function () {
    spyOn(cartService, 'getCartItem');
    expect(cartService.getCartItem).toHaveBeenCalled(true);
  });

  it('should listen for the to-parent-changeamounts broadcast and called getAmount', function () {
    spyOn(cartService, 'getAmount').andReturn(6);
    $scope.$broadcast('to-parent-changeamounts');
    expect(cartService.getAmount).toHaveBeenCalled(true);
    expect($scope.amounts).toBe(6);
  });

  it('should listen for the to-parent-inmain broadcast and set bar active', function () {
    $scope.$broadcast('to-parent-inmain');
    expect($scope.activeMainbar).toBe(true);
    expect($scope.activeListbar).toBe(false);
    expect($scope.activeCartbar).toBe(false);
  });

  it('should listen for the to-parent-inlist broadcast and set bar active', function () {
    $scope.$broadcast('to-parent-inlist');
    expect($scope.activeMainbar).toBe(false);
    expect($scope.activeListbar).toBe(true);
    expect($scope.activeCartbar).toBe(false);
  });

  it('should listen for the to-parent-incart broadcast and set bar active', function () {
    $scope.$broadcast('to-parent-incart');
    expect($scope.activeMainbar).toBe(false);
    expect($scope.activeListbar).toBe(false);
    expect($scope.activeCartbar).toBe(true);
  });

});
