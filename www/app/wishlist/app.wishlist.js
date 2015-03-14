angular.module('BTW.wishlist', [])
    .controller('WishlistCtrl', function($scope, $ionicModal, $timeout,
        $location) {

        $scope.onSwipeLeft = function($index) {
            $scope.wishItem[$index].left = true;
        }
        $scope.onSwipeRight = function($index) {
            $scope.wishItem[$index].left = false;
        }
        $scope.onRelease = function($index) {
            if($scope.wishItem[$index].left) {

                $scope.wishItem.splice($index, 1);
            }
        }



        if(JSON.parse(localStorage.getItem('wishList')) == null) {
            $scope.wishItem = [];
        } else {
            $scope.wishItem = JSON.parse(localStorage.getItem('wishList'));
        }

        // Create and load the Modal
        $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
            $scope.taskModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        // Called when the form is submitted
        $scope.addItem = function(task) {
            $scope.wishItem.push({
                title: task.title,
                suggested: task.suggested
            });
            if($scope.taskModal) {
                $scope.taskModal.hide();
            }
            task.title = "";

            localStorage.setItem('wishList', JSON.stringify($scope.wishItem));
        };

        // Open our new task modal
        $scope.newItemForm = function() {
            $scope.taskModal.show();
        };

        // Close the new task modal
        $scope.closeNewItem = function() {
            $scope.taskModal.hide();
        };

        $scope.addItem({
            title: "Spodnie Tactical M60 L",
            suggested: true
        });


        if(JSON.parse(localStorage.getItem('wishList')) == null) {
            $scope.wishItem = [];
        } else {
            $scope.wishItem = JSON.parse(localStorage.getItem('wishList'));
        }

        // Create and load the Modal
        $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
            $scope.taskModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        // Called when the form is submitted
        $scope.addItem = function(task) {
            $scope.wishItem.push({
                title: task.title
            });
            $scope.taskModal.hide();
            task.title = "";

            localStorage.setItem('wishList', JSON.stringify($scope.wishItem));
        };

        // Open our new task modal
        $scope.newItemForm = function() {
            $scope.taskModal.show();
        };

        // Close the new task modal
        $scope.closeNewItem = function() {
            $scope.taskModal.hide();
        };

        var createDelegate = function() {

            var delegate = new cordova.plugins.locationManager.Delegate();

            delegate.didDetermineStateForRegion = function(pluginResult) {
                console.log('didDetermineStateForRegion:\n' +
                    pluginResult);
            };

            delegate.didStartMonitoringForRegion = function(
                pluginResult) {
                console.log('didStartMonitoringForRegion:\n' +
                    pluginResult);
            };

            delegate.didRangeBeaconsInRegion = function(pluginResult) {
                console.log('didRangeBeaconsInRegion:\n' +
                    pluginResult);
                console.log(pluginResult);

                var beacons = pluginResult.beacons;
				console.log('przed if beacons');
                if(beacons) {
					console.log('wewnątrz if beacons');
                    beacons.forEach(function(beacon, index,
                        beaconList) {
                        if(beacon.minor == '100' && beacon.major == '100') {
							console.log('SUKCES');
                            $location.path('/tabs/recommended/111');
                        } else {
							console.log('ERROR' + beacon);
						}
                    });
                }

            };

            console.log('Delegate created!');

            return delegate;
        }

        var setBluetooth = function() {

            cordova.plugins.locationManager.isBluetoothEnabled()
                .then(function(isEnabled) {
                    console.log("isEnabled: " + isEnabled);
                    if(!isEnabled) {
                        cordova.plugins.locationManager.enableBluetooth();
                    }
                })
                .fail(console.error)
                .done();
        };

        $scope.beaconScan = function() {

            setBluetooth();
            var delegate = createDelegate();

            var uuid = '12345678-1234-1234-1234-123456789012';
            var identifier = 'beaconyAllegro';

            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
                identifier, uuid);

            cordova.plugins.locationManager.setDelegate(delegate);

            cordova.plugins.locationManager.requestAlwaysAuthorization();

            var stopRanging = function() {
                cordova.plugins.locationManager.stopRangingBeaconsInRegion(
                        beaconRegion)
                    .fail(console.error)
                    .done();
            };


            $timeout(stopRanging, 10000);

            cordova.plugins.locationManager.startRangingBeaconsInRegion(
                    beaconRegion)
                .fail(console.error)
                .done();

        };

    });
