/**
 * Created by zhangwei on 14-9-1.
 */
angular.module('angularLetusgoApp')
  .controller('ProductCtrl', function ($scope) {

    $scope.$emit('to-parent-manage');

  });
