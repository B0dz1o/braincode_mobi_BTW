angular.module('BTW.allegro.data', [])

.factory('AllegroMockData', function () {
	return {
		USERS:  {"111" : {
			"id": "111",
			"login": "BODZIO_PL",
			"country": 1,
			"rating": 804,
			"ratingIcon": 3,
			"company": true,
			"allegroStandard": true,
			"sellerRatings": {
				"count": 800,
				"averages": [
				{
					"title": "Zgodność przedmiotu z opisem",
					"rating": 5
				},
				{
					"title": "Kontakt ze Sprzedającym",
					"rating": 5
				},
				{
					"title": "Czas realizacji zamówienia",
					"rating": 4.9
				},
				{
					"title": "Koszt wysyłki",
					"rating": 4.8
				}
				]
			},
			"feedbacks": {
				"all": 1,
				"positive": {
					"lastWeek": 1,
					"lastMonth": 1,
					"all": 1,
					"asSeller": 1,
					"asBuyer": 0,
					"percent": 100
				},
				"neutral": {
					"lastWeek": 0,
					"lastMonth": 0,
					"all": 0,
					"asSeller": 0,
					"asBuyer": 0,
					"percent": 0
				},
				"negative": {
					"lastWeek": 0,
					"lastMonth": 0,
					"all": 0,
					"asSeller": 0,
					"asBuyer": 0,
					"percent": 0
				}
			},
			"saleRegulation": ""
		},
		"112" : {
			"id": "112",
			"login": "NightHawk999",
			"country": 1,
			"rating": 804,
			"ratingIcon": 3,
			"company": true,
			"allegroStandard": true,
			"sellerRatings": {
				"count": 800,
				"averages": [
				{
					"title": "Zgodność przedmiotu z opisem",
					"rating": 5
				},
				{
					"title": "Kontakt ze Sprzedającym",
					"rating": 5
				},
				{
					"title": "Czas realizacji zamówienia",
					"rating": 4.9
				},
				{
					"title": "Koszt wysyłki",
					"rating": 4.8
				}
				]
			},
			"feedbacks": {
				"all": 1,
				"positive": {
					"lastWeek": 1,
					"lastMonth": 1,
					"all": 1,
					"asSeller": 1,
					"asBuyer": 0,
					"percent": 100
				},
				"neutral": {
					"lastWeek": 0,
					"lastMonth": 0,
					"all": 0,
					"asSeller": 0,
					"asBuyer": 0,
					"percent": 0
				},
				"negative": {
					"lastWeek": 0,
					"lastMonth": 0,
					"all": 0,
					"asSeller": 0,
					"asBuyer": 0,
					"percent": 0
				}
			},
			"saleRegulation": ""
		}
	},

	USER_OFFERS: {
		"111" : {
			"count": 5,
			"offers": [
			{
				"id": "5135869160",
				"name": "Bluza Softshell Sport L",
				"freeShipping": false,
				"features": {
					"bold": false
				},
				"prices": {
					"bid": 1,
					"buyNow": 299.46
				},
				"secondsLeft": 110,
				"endingTime": 1361787951,
				"buyNow": true,
				"auction": true,
				"allegroStandard": false,
				"mainImage": "http://img15.allegroimg.pl/photos/oryginal/51/35/86/91/5135869160",
				"bids": {
					"count": 0
				}
			},
			{
				"id": "5161390481",
				"name": "Bluza z kapturem KHAKI XL",
				"freeShipping": false,
				"features": {
					"bold": false
				},
				"prices": {
					"bid": 1,
					"buyNow": 129.23
				},
				"secondsLeft": 110,
				"endingTime": 1361787951,
				"buyNow": true,
				"auction": true,
				"allegroStandard": false,
				"mainImage": "http://img18.allegroimg.pl/photos/oryginal/51/61/39/04/5161390481",
				"bids": {
					"count": 0
				}
			},
			{
				"id": "5138931925",
				"name": "Spodnie dresowe marki Dresy Teresy (używane) XL",
				"freeShipping": false,
				"features": {
					"bold": false
				},
				"prices": {
					"bid": 1,
					"buyNow": 30.00
				},
				"secondsLeft": 110,
				"endingTime": 1361787951,
				"buyNow": true,
				"auction": true,
				"allegroStandard": false,
				"mainImage": "http://img06.allegroimg.pl/photos/oryginal/51/38/93/19/5138931925",
				"bids": {
					"count": 0
				}
			},
			{
				"id": "5094317323",
				"name": "THE ROLLING STONES: BIG HITS",
				"freeShipping": false,
				"features": {
					"bold": false
				},
				"prices": {
					"bid": 1,
					"buyNow": 400.99
				},
				"secondsLeft": 110,
				"endingTime": 1361787951,
				"buyNow": true,
				"auction": true,
				"allegroStandard": false,
				"mainImage": "http://img01.allegroimg.pl/photos/oryginal/50/94/31/73/5094317323",
				"bids": {
					"count": 0
				}
			},
			{
				"id": "5125400325",
				"name": "Ładowarka USB Android NEXUS 5",
				"freeShipping": false,
				"features": {
					"bold": false
				},
				"prices": {
					"bid": 1,
					"buyNow": 25.46
				},
				"secondsLeft": 110,
				"endingTime": 1361787951,
				"buyNow": true,
				"auction": true,
				"allegroStandard": false,
				"mainImage": "http://img11.allegroimg.pl/photos/oryginal/51/25/40/03/5125400325",
				"bids": {
					"count": 0
				}
			}
			]
		},
		"112" : {
			"count": 0,
			"offers": []
		}
	},

	MY_WATCHED_ACTIVE: {
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
			"id": "5135492077",
			"name": "Spodnie Tactical M60 L"
		}
		]
	},

	OFFER_PAGES: {
		"5135492077" : "http://allegro.pl/blackhawk-spodnie-taktyczne-lightweight-tactical-i5135492077.html",
		"5125400325" : "http://allegro.pl/org-ladowarka-sieciowa-1-2a-lg-g3s-g2-mini-nexus-5-i5125400325.html",
		"5138931925" : "http://allegro.pl/everlast-spodnie-dresowe-od-s-do-xxl-tu-xl-i5138931925.html",
		"5094317323" : "http://allegro.pl/the-rolling-stones-big-hits-winyl-i5094317323.html",
		"5161390481" : "http://allegro.pl/hm-bluza-z-kapturem-khaki-roz-42-xl-nowa-i5161390481.html",
		"5135869160": "http://allegro.pl/swietna-kurtka-softshell-bluza-wodoodporna-just-xl-i5135869160.html"
	},

	USER_PAGES: {
		"111" : "http://allegro.pl/listing/user/listing.php?us_id=17601160",
		"112" : "http://allegro.pl/listing/user/listing.php?us_id=7768561"
	}
}
});