angular.module('BTW.wishlist', [])
	.controller('WishlistCtrl', function ($scope, $ionicModal) {

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
            if ($scope.taskModal) {
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

        $scope.addItem({title: "Spodnie Tactical M60 L", suggested: true});

    });

