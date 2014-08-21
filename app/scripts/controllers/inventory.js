'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
    .controller('InventoryCtrl', function ($scope) {
        $scope.curdate = moment(new Date()).format("YYYY年MM月DD日 HH:mm:ss");
        var cart = new Cart();
        $scope.cartItemList = cart.getCartItemList();

        $scope.inventorytotal = sum(_.map($scope.cartItemList, function(cartItem){
            return cartItem.item.price * cartItem.num;
        }));

        $scope.okPayClick = function() {
            cleanStorage();
            $scope.$emit('to-parent-addamounts');
        };
    });

function sum(array) {
    var sum = 0;
    _.forEach(array, function(item){
        sum += item;
    })
    return sum;
}