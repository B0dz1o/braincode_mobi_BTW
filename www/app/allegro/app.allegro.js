angular.module('BTW.allegro', ['BTW.allegro.data'])

.factory('AllegroService', function($timeout, $q, AllegroMockData) {

	// Co mockujemy ?
	// klient z listą życzeń oraz swoją listą przedmiotów obserwowanych 
	// dostaje notyfikacje o pasujących przedmiotach sprzedawcy w okolicy
    // ! * obserwowane klienta             GET /v1/allegro/my/watched/active
    // ! * przedmioty z oferty sprzedawcy  GET /v1/allegro/users/{userId}/offers oferty użytkownika 
    // ! * dane o sprzedawcy               strona www
    // ! * dokonanie płatności kup teraz   GET /v1/allegro/offers/{offerId}/buy
    //     produktów z listy
    // * 

	return {
		buyNow: function (item) {
			var deferred = $q.defer();

			$timeout(function() {
				if (success) {
					deferred.resolve({
						"deal":"12345",
						"message":"7,99 zł - Gratulacje! Kupiłeś przedmiot poprzez Kup Teraz"
					});
				} else {
					deferred.reject( {
						"message":"Cannot bid item",
						"code":7603,
						"userMessage":"Niestety nie możesz złożyć oferty we wskazanej aukcji. Trwa hackathon."
					});
				}
			}, 1000);

			return deferred.promise;
		},

		getMyWatchedActiveOffers : function (uid) {
			return AllegroMockData.MY_WATCHED_ACTIVE;
		},

		getUser : function (uid) {
			return AllegroMockData.USERS[uid];
		},

		getUserOffers : function (uid) {
			return AllegroMockData.USER_OFFERS[uid];
		},

		getOfferPage : function (offerId) {
			return AllegroMockData.OFFER_PAGES[offerId]
		},
		getUserPage : function (uid) {
			return AllegroMockData.USER_PAGES[uid];
		}
	};
})

;