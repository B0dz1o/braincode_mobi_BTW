
angular.module('BTW', ['ionic', 'BTW.common', 'BTW.login', 'BTW.order', 'BTW.recommended', 'BTW.wishlist', 'BTW.wishlist.services'])

	.run(function ($ionicPlatform, ApplicationState) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});

		// initial data come here
		// WISHLIST
		ApplicationState.clear();
		ApplicationState.set(
			ApplicationState.const.WISHLIST, [{
                title: "Ciepła bluza z kapturem"
	        }, {title: "Raspberry PI 2"
	    }]);

		// Allegro
		ApplicationState.set(
			ApplicationState.const.USER, "112");
	})

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('tabs', {
				url: "/tabs",
				abstract: true,
				templateUrl: "templates/tabs.html",
			})
			.state('tabs.login', {
				url: "/login",
				views: {
					'tabs-login': {
						templateUrl: "app/login/login.html",
						controller: 'LoginCtrl'
					}
				}
			})
			.state('tabs.order', {
				url: "/order",
				views: {
					'tabs-order': {
						templateUrl: "app/order/order.html",
						controller: 'OrderCtrl'
					}
				},
                cache: false
			})
			.state('tabs.recommended', {
				url: "/recommended/:sellerId",
				views: {
					'tabs-recommended': {
						templateUrl: "app/recommended/recommended.html",
						controller: 'RecommendedCtrl'
					}
				}
			})
			.state('tabs.wishlist', {
				url: "/wishlist",
				views: {
					'tabs-wishlist': {
						templateUrl: "app/wishlist/wishlist.html",
						controller: 'WishlistCtrl'
					}
				}
			});
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tabs/login');
	})
;
