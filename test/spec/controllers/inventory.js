'use strict';

describe('Controller: InventoryCtrl', function () {

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

  it('should call getCartItem in cartService', function () {
    spyOn(cartService, 'getCartItem');
    expect(cartService.getCartItem).toHaveBeenCalled(true);
  });

  it('should call totalPrice in cartService', function () {
    spyOn(cartService, 'totalPrice');
    expect(cartService.totalPrice).toHaveBeenCalled(true);
  });

  it('should call cleanCart in cartService when click pay button', function () {
    spyOn(cartService, 'cleanCart');
    $scope.okPayClick();
    expect(cartService.cleanCart).toHaveBeenCalled(true);
  });

  it('should emit to parent controller when click pay button', function () {
    spyOn($rootScope, '$emit');
    $scope.okPayClick();
    expect($rootScope.$emit).toHaveBeenCalledWith('to-parent-changeamounts');
  });
});
