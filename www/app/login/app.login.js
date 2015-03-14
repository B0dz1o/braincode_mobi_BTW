angular.module('BTW.login', [])
	.controller('LoginCtrl', function ($scope, $location) {

		$scope.login = function () {
			$location.path('/tabs/wishlist');
		}
	})
;
