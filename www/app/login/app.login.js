angular.module('BTW.login', [])
.controller('LoginCtrl', function ($scope, $location, $ionicModal, $timeout) {
	$scope.verification = {busy: false};

	$scope.triggerRecommendations = function (sellerid) {
		$location.path('/tabs/recommended/' + sellerid);
	};

	// Form data for the login modal
	$scope.loginData = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('app/login/login-modal.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
		$scope.loginData = {};
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		$scope.verification = {busy: true};
		console.log('Doing login', $scope.loginData);

	// Simulate a login delay. Remove this and replace with your login
	// code if using a login system
	$timeout(function() {
		$scope.verification = {busy: false};
		$scope.closeLogin();
		$location.path('/tabs/wishlist');
	}, (Math.floor(Math.random() * 3000) + 1000)/2 )
	};
})
;
