angular.module('BTW.wishlist', ['BTW.wishlist.services'])

	.controller('WishlistCtrl', function ($scope, WishlistService) {
		$scope.wishlist = WishlistService.list();
	});
