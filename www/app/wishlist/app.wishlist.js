angular.module('BTW.wishlist', ['BTW.wishlist.services'])

	.controller('WishlistCtrl', function ($scope, WishlistService) {
		$scope.list = WishlistService.list();
	});
