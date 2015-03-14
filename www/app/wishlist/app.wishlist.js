angular.module('BTW.wishlist', [])
	.controller('WishlistCtrl', function ($scope, $ionicModal) {

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

    });

