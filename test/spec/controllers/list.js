'use strict';

describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLetusgoApp'));

  var ListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListCtrl = $controller('ListCtrl', {
      $scope: scope
    });
  }));

//    var mockService = {
//        notes: ['note1', 'note2'], //仅仅初始化两个项目
//        get: function() {
//            return this.notes;
//        },
//        put: function(content) {
//            this.notes.push(content);
//        }
//    };

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.items.length).toBe(6);
  });

//    it('should call cart service add cart item function if a add button is clicked on', function() {
//
//    });

});
