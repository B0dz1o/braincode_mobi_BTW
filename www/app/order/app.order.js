angular.module('BTW.order', [])
	.controller('OrderCtrl', function ($scope,ApplicationState) {
        $scope.cart = ApplicationState.get(ApplicationState.const.ORDER);

        $scope.onSwipeLeft = function($index) {
            $scope.cart[$index].left = true;
        }
        $scope.onSwipeRight = function($index) {
            $scope.cart[$index].left = false;
        }
        $scope.onRelease = function($index) {
            if($scope.cart[$index].left) {
                $scope.cart.splice($index, 1);
            }
        }


        $scope.totalPrice = function() {
            var total = 0;
            angular.forEach($scope.cart, function(item) {
                total += item.offer.prices.buyNow;
            })
            return total;
        }
    });
