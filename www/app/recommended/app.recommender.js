angular.module('BTW.recommender', [])	
	.factory('BTWRecommender', function(){

	var RECOMMENDED_OFFERS = {
		"111" : ['5135869160', '5161390481', '5138931925']
	}

	return {
		recommendProducts : function (userWishList, sellerProducts) {
			return RECOMMENDED_OFFERS;
		}
	};
})
;