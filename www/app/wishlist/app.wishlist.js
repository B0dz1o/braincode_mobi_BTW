angular.module('BTW.wishlist', ['BTW.wishlist.services'])

	.controller('WishlistCtrl', function ($scope, WishlistService) {
		// WishlistService.add({id: 1, label: "moje 1"});
		// WishlistService.add({id: 2, label: "moje 2"});
		// WishlistService.add({id: 3, label: "moje 3"});

		// WishlistService.remove(2);
		// WishlistService.update({id: 3, label: "moje 3 updated"});

		$scope.list = WishlistService.list();
	});
