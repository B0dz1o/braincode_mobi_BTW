angular.module('BTW.login', [])
	.controller('LoginCtrl', function ($scope, $location) {
		$scope.notify = function () {
			cordova.plugins.notification.local.schedule({
				id: 1,
				text: "Beacon in range",
				at: 'now',
				icon: 'file://img/clockwht.png',
				smallIcon: 'file://img/clockblk.png'
			});
		};

		$scope.triggerRecommendations = function (sellerid) {
			$location.path('/tabs/recommended/' + sellerid);
		};

		$scope.login = function () {
			$location.path('/tabs/wishlist');
		};
	})
;

