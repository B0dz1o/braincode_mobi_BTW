angular.module('BTW.recommended', ['ionic', 'ionic.contrib.ui.tinderCards', 'BTW.recommender', 'BTW.allegro', 'BTW.common'])

    .factory('RecommenderService', function (AllegroService, BTWRecommender, ApplicationState) {
        return {

            getSellerInfo : function (uid) {
                return AllegroService.getUser(uid);
            },

            getSellerPageOffers: function (uid) {
                return AllegroService.getUserPage(uid);
            },

            getRecommendedProducts: function (sellerId) {

                // dane ziutka
                var sellerOffers = AllegroService.getUserOffers(sellerId).offers;
                console.log(sellerOffers);

                // wspaniały algorytm wybrał idiki
                var recommendedIDS = BTWRecommender
                    .recommendProducts(ApplicationState
                        .get(ApplicationState.const.WISHLIST), sellerOffers);

                console.log(recommendedIDS);

                // zgarnij dane do wyświetlenia
                var filtered = sellerOffers.filter(function (offer) {
                    // console.log(offer.id + ' - ' + recommendedIDS.indexOf(offer.id));
                    return recommendedIDS.indexOf(offer.id) != -1;
                });

                console.log(filtered);

                var recommendedProducts = filtered.map(function (offer) {
                    return {
                        offer : offer, 
                        offerWWWPage: AllegroService.getOfferPage(offer.id),
                    }
                });
                console.log(recommendedProducts);
                return recommendedProducts;
            }
        };
    })

	.controller('RecommendedCtrl', function ($scope, $http, $stateParams, RecommenderService ) {
        $scope.cart = [];
        $scope.cards = [];
        $scope.cardsLoaded = false;

        // kto spamuje ofertami
        $scope.sellerInfo = RecommenderService.getSellerInfo($stateParams.sellerId);
        $scope.sellerPage = RecommenderService.getSellerPageOffers($stateParams.sellerId);

        // co potencjalnie mnie interesuje
        $scope.recommendedSet = RecommenderService
            .getRecommendedProducts($stateParams.sellerId);


        console.log($scope.sellerInfo);
        console.log($scope.sellerPage);

        console.log($scope.recommendedSet);

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
