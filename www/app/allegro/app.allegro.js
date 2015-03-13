
angular.module('app.allegro', [])

.factory('AllegroService', function(){

	// allegro/offers/{offerId}/buy KUP TERAZ




	// allegro/users/{userId}/offers oferty użytkownika 


	var userOffers = {
		"count": 25,
	    "offers": [
	        {
	            "freeShipping": false,
	            "features": {
	                "bold": false
	            },
	            "prices": {
	                "bid": 1,
	                "buyNow": 12.46
	            },
	            "secondsLeft": 110,
	            "endingTime": 1361787951,
	            "buyNow": true,
	            "auction": true,
	            "allegroStandard": false,
	            "mainImage": null,
	            "bids": {
	                "count": 0
	            },
	            "id": "2889172243",
	            "name": "mobile mobius offer"
	        }
	    ]
	};

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
				"thumbnail": "http://img01.te2/photos/64x48/27/09/43/54/2709435482",
				"bids": {
					"count": 0
				},
				"id": "2709435482",
				"name": "OBUDOWA NOKIA N97 CZARNA DOTYK DIGITIZER KORPUS"
			}
		]
	} 

	return {
		
	};
})

;