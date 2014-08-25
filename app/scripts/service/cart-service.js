angular.module('angularLetusgoApp')
    .service('cartService', function(){

        this.getCartItemList = function(){
            return Storage.getArrayItem('cartItems') || [];
        };

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
                Storage.changeArrayItem('cartItems',curCartItem);
            }else{
                var cartItem = {'item':curitem, 'num':1};
                cartItemList.push(cartItem);
                Storage.addArrayItem('cartItems',cartItem);
            }
            var t2 = +Storage.getItem('amounts') + 1;
            Storage.addItem('amounts',t2);
        };

        this.reduceCartItem = function(curitem, cartItemList) {
            var index = _.findIndex(cartItemList,{'item':curitem});
            cartItemList[index].num--;
            if(cartItemList[index].num > 0){
                Storage.changeArrayItem('cartItems',cartItemList[index]);
            } else {
                Storage.removeInArray('cartItems',cartItemList[index]);
                _.remove(cartItemList,cartItemList[index]);
            }
            var t2 = +Storage.getItem('amounts') - 1;
            Storage.addItem('amounts',t2);
        };
    });