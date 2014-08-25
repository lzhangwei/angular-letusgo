'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
    .controller('InventoryCtrl', function ($scope, cartService,loadService) {
        $scope.curdate = moment(new Date()).format("YYYY年MM月DD日 HH:mm:ss");
        $scope.cartItemList = cartService.getCartItemList();

        $scope.inventorytotal = sum(_.map($scope.cartItemList, function(cartItem){
            return cartItem.item.price * cartItem.num;
        }));

        $scope.okPayClick = function() {
            loadService.cleanStorage();
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