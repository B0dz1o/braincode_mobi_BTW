
angular.module('BTW', ['ionic', 'BTW.login', 'BTW.order', 'BTW.recommended',
        'BTW.wishlist'])

	.run(function ($ionicPlatform) {
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
	})

	.config(function (ApplicationState) {
		// initial data come here
		
		// WISHLIST
		var data = ApplicationState.get(ApplicationState.const.WISHLIST) || [];
		ApplicationState.set(ApplicationState.const.WISHLIST, data);

		// Allegro
		// TODO 

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
				}
			})
			.state('tabs.recommended', {
				url: "/recommended",
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
	});
