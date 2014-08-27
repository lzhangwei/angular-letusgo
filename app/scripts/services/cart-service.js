angular.module('angularLetusgoApp')
    .service('cartService', function(){

        this.categoryCartItem = function(cartItemList) {
            var cartItemGroup = _.map(_.groupBy(cartItemList, function(cartItem) {
                return cartItem.item.category;
            }));
            return cartItemGroup;
        };

        this.addCartItem = function(curitem, cartItemList) {

            var curCartItem = _.find(cartItemList, {'item':curitem});

            if(curCartItem!==undefined){
                curCartItem.num++;
                _.find(cartItemList,function(object){
                    if(object.item.barcode === curCartItem.item.barcode){
                        object.num = curCartItem.num;
                    }
                });
            }else{
                var cartItem = {'item':curitem, 'num':1};
                cartItemList.push(cartItem);
            }
            return cartItemList;
        };

        this.reduceCartItem = function(curitem, cartItemList) {
            var index = _.findIndex(cartItemList,{'item':curitem});
            cartItemList[index].num--;
            if(cartItemList[index].num > 0){
                _.find(cartItemList,function(object){
                    if(object.item.barcode === cartItemList[index].item.barcode){
                        object.num = cartItemList[index].num;
                    }
                });
            } else {
                _.remove(cartItemList,cartItemList[index]);
            }

            return  cartItemList;
        };

        this.sum = function(array) {
            var sum = 0;
            _.forEach(array, function(item){
                sum += item;
            })
            return sum;
        };
    });