'use strict';

describe('Controller: MainCtrl', function () {

  var $scope, createController;

  beforeEach(function () {
    module('angularLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('MainCtrl', {
          $scope: $scope
        });
      };
    });
  });

  it('should emit to parent controller', function () {
    spyOn($rootScope, '$emit');
    createController();
    expect($rootScope.$emit).toHaveBeenCalledWith('to-parent-inmain');
  });

});
