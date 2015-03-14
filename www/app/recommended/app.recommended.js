angular.module('BTW.recommended', ['ionic', 'ionic.contrib.ui.tinderCards', 'BTW.recommender', 'BTW.allegro', 'BTW.common'])

    .factory('RecommenderService', function (AllegroService, BTWRecommender) {
        return {
            getSellerInfo : function (uid) {
                return AllegroService.getUser(uid);
            },

            getRecommendedProducts: function () {

            }
        };
    })

	.controller('RecommendedCtrl', function ($scope, $http, $stateParams, RecommenderService, ApplicationState) {
        $scope.cart = [];
        $scope.cards = [];
        $scope.cardsLoaded = false;

        // kto spamuje ofertami
        $scope.sellerInfo = RecommenderService.getSellerInfo($stateParams.sellerId);

        // co potencjalnie mnie interesuje
        $scope.recommendedSet = RecommenderService
            .getRecommendedProducts(
                ApplicationState.get(ApplicationState.const.WISHLIST),
                $stateParams.sellerId
            );

        $scope.totalPrice = function() {
            var total = 0;
            angular.forEach($scope.cart, function(item) {
                total += item.price;
            })
            return total;
        }
        $scope.addCard = function(image) {
            var newCard;
            newCard = {
                'image': image,
                'price' : 10
            };
            $scope.cards.unshift(angular.extend({}, newCard));
        };

        $scope.addCards = function(count) {
            $http.get('http://api.randomuser.me/?results=' + count).then(function(users) {
                $scope.cardsLoaded = true;
                angular.forEach(users.data.results, function(card) {
                    $scope.addCard(card.user.picture.large);
                });
            });
        };

        $scope.addCards(3);

        $scope.cardLike = function(card) {
            $scope.cart.push(card);
            console.log("cardLike" + card.price);
            $scope.addCards(1);
        };

        $scope.cardDislike = function(card) {
            console.log("cardDislike");
            $scope.addCards(1);
        };

        $scope.removeCard = function($index) {
            $scope.cards.splice($index, 1);
        };

        $scope.fadeCard = function($index) {
            this.swipeCard.el.style.opacity = 0
        }

    });
