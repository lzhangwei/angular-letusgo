/**
 * Created by zhangwei on 14-8-20.
 */
'use strict';

angular.module('angularLetusgoApp')
    .controller('ListCtrl', function ($scope) {

        var cart = new Cart();

        $scope.items = Storage.getArrayItem('items');
        $scope.addCartItem = function(item) {
            cart.addCartItem(item);
            $scope.$emit('to-parent-addamounts');
        }
    });