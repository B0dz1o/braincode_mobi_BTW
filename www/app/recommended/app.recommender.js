angular.module('BTW.recommender', [])

	// The Most Simple Recommender ever ;)	
	.factory('BTWRecommender', function(){

	var RECOMMENDED_OFFERS = 
		['5135869160', '5161390481', '5138931925'];

	return {
		recommendProducts : function (userWishList, sellerOffers) {
			return RECOMMENDED_OFFERS;
		}
	};
})
;