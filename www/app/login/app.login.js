angular.module('BTW.login', [])
	.controller('LoginCtrl', function ($scope) {
		$scope.notify = function () {
			cordova.plugins.notification.local.schedule({
				id: 1,
				text: "Beacon in range",
				at: 'now',
				icon: 'file://img/clockwht.png',
				smallIcon: 'file://img/clockblk.png'
			});
		}
	});
