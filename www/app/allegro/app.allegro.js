angular.module('BTW.allegro', [])

.factory('AllegroService', function() {

	// Co mockujemy ?
	// klient z listą życzeń oraz swoją listą przedmiotów obserwowanych 
	// dostaje notyfikacje o pasujących przedmiotach sprzedawcy w okolicy
    // * obserwowane klienta             GET /v1/allegro/my/watched/active
    // * przedmioty z oferty sprzedawcy  GET /v1/allegro/users/{userId}/offers oferty użytkownika 
    // * dane o sprzedawcy               GET /v1/allegro/users/{userId}
    // * dokonanie płatności kup teraz   GET /v1/allegro/offers/{offerId}/buy
    //   produktów z listy
    // * 


	// allegro/offers/{offerId}/buy KUP TERAZ




	// allegro/users/{userId}/offers oferty użytkownika 


	

	// GET /v1/allegro/my/bought Pobranie listy kupionych ofert

	// GET /allegro/my/watched/active Metoda pozwala na pobranie listy ofert obserwowanych
	var myWatchedActive = {
		"count": 1,
		"offers": [
			{
				"views": 2,
				"category": 74130,
				"note": "",
				"quantities": {
					"my": 0,
					"available": 113,
					"type": 1
				},
				"seller": {
					"country": 1,
					"rating": 6376,
					"id": "4154627",
					"login": "Awax3"
				},
				"location": {
					"country": 1
				},
				"prices": {
					"bid": null,
					"buyNow": 14.99
				},
				"secondsLeft": 639184,
				"endingTime": 1359063000,
				"buyNow": true,
				"auction": false,
				"allegroStandard": false,
				"thumbnail": "http://archiwum.allegro.pl/img/resize?img=http%3A%2F%2F10.193.20.130%2FimagesNEW%2F1826927ad8c6711d30d9e573d84bf0cf79aaa690f95b622317520d1de055215c",
				"bids": {
					"count": 0
				},
				"id": "3522461796",
				"name": "Spodnie Tactical M60 L"
			}
		]
	} 

	return {
		
	};
})

;