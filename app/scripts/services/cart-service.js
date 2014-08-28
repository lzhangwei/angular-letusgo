angular.module('angularLetusgoApp')
    .service('cartService', function (localStorageService) {

        this.categoryCartItem = function (cartItemList) {
            var cartItemGroup = _.map(_.groupBy(cartItemList, function (cartItem) {
                return cartItem.item.category;
            }));
            return cartItemGroup;
        };

        this.addCartItem = function (curitem) {

            var cartItemList = localStorageService.get('cartItems') || [];

            if (_.any(cartItemList, function (item) {
                if (item.item.barcode === curitem.barcode) {
                    return true;
                }
            })) {
                _.find(cartItemList, function (object) {
                    if (object.item.barcode === curitem.barcode) {
                        object.num++;
                    }
                });
            } else {
                var cartItem = {'item': curitem, 'num': 1};
                cartItemList.push(cartItem);
            }
            localStorageService.set('cartItems', cartItemList);
            localStorageService.set('amounts', +localStorageService.get('amounts') + 1);

            return cartItemList;
        };

        this.reduceCartItem = function (curitem) {

            var cartItemList = localStorageService.get('cartItems');

            var index = _.findIndex(cartItemList, {'item': curitem});
            cartItemList[index].num--;
            if (cartItemList[index].num > 0) {
                _.find(cartItemList, function (object) {
                    if (object.item.barcode === cartItemList[index].item.barcode) {
                        object.num = cartItemList[index].num;
                    }
                });
            } else {
                _.remove(cartItemList, cartItemList[index]);
            }
            localStorageService.set('cartItems', cartItemList);
            localStorageService.set('amounts', +localStorageService.get('amounts') - 1);

            return  cartItemList;
        };

        this.totalPrice = function (cartItemList) {

            var array = _.map(cartItemList, function (cartItem) {
                return cartItem.item.price * cartItem.num;
            });

            var sum = 0;
            _.forEach(array, function (item) {
                sum += item;
            })

            return sum;
        };
    });